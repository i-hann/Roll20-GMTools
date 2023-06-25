// Function to reset GM macros used by this script to their correct values
async function resetGMMacros(gm_id) {
    try {
        sendChat("gmtools.js", "Restoring GM Macros to Default");

        // Define GM Macros
        const gm_macros = [
            {
                name: "Group-Initiative",
                _playerid: gm_id,
                visibleto: gm_id,
                action: '!group_initiative',
                istokenaction: true
            },
            {
                name: "Group-Saves",
                _playerid: gm_id,
                visibleto: gm_id,
                action: '!group_saves ?{Type?|Fortitude,Fortitude|Reflex,Reflex|Will,Will} ?{DC?}',
                istokenaction: true
            }
        ];

        // Find existing macros
        var old_macros = await findObjs({
            _type: 'macro',
            _playerid: gm_id
        });

        // Delete macros that are conflicting
        _.each(old_macros, async (old_macro) => {
            var old_macro_name = await old_macro.get('name', (name) => { return name });
            _.each(gm_macros, async (gm_macro) => {
                if (old_macro_name == gm_macro.name) {
                    old_macro.remove();
                }
            });
        });

        // Create new macros
        _.each(gm_macros, (gm_macro) => { createObj("macro", gm_macro); });


    } catch (err) {
        sendChat("gmtools.js", "gmtools.js: resetGMMacros: Error: " + err.message);
    }
}

// Function to roll a D20 against a modifier and return the Pathfinder 2 result (Crit Success, Success, Failure, Crit Failure)
async function rollAgainstDC(DC, modifier) {
    return new Promise(async (resolve, reject) => {
        log("rollAgainstDC starting for modifier " + modifier + " vs DC " + DC);
        try {
            // Verify numbers
            if (typeof modifier !== 'number') {
                modifier = Number(modifier);
            }
            if (typeof DC !== 'number') {
                DC = Number(DC);
            }

            if ((typeof modifier === 'undefined') || (typeof DC === 'undefined')) {
                sendChat("gmtools.js", `rollAgainstDC Error: 'Modifier' ${modifier} or 'DC' ${DC} is not a number`);
                log(`rollAgainstDC Error: 'Modifier' ${modifier} or 'DC' ${DC} is not a number`);
                reject(`rollAgainstDC Error: 'Modifier' ${modifier} or 'DC' ${DC} is not a number`);
            }

            // Roll
            var d20 = randomInteger(20);
            var total = d20 + modifier;

            // Set outcome adjustment based on natural 1 or 20
            var outcomeAdjustment = 0;
            if (d20 === 20) { outcomeAdjustment = 1 }
            else if (d20 === 1) { outcomeAdjustment = -1 }

            // Determine outcome numeric with adjustment for nat 1 or nat 20
            var outcome_numeric;
            const critSuccess = (DC + 10);
            const critFail = (DC - 10);
            if (total >= critSuccess) { outcome_numeric = 4 + outcomeAdjustment }
            else if (total >= DC) { outcome_numeric = 3 + outcomeAdjustment }
            else if (total <= critFail) { outcome_numeric = 1 + outcomeAdjustment }
            else { outcome_numeric = 2 + outcomeAdjustment }

            // Convert outcome numeric to string
            const outcomeStringLookup = {
                [outcome_numeric >= 4]: "Critical Success",
                [outcome_numeric === 3]: "Success",
                [outcome_numeric <= 1]: "Critical Failure",
                default: "Failure"
            }
            const outcome_string = outcomeStringLookup[true] || outcomeStringLookup.default;

            // Result obj
            var resultObj = {
                roll: d20,
                total: total,
                outcome_string: outcome_string,
                outcome_numeric: outcome_numeric
            };

            log("rollAgainstDC: Result: (" + d20 + ") + " + modifier + " = " + total);
            resolve(resultObj);

        } catch (err) {
            log("rollAgainstDC: Error: " + err.message);
            sendChat("gmtools.js", "rollAgainstDC: Error: " + err.message);
            reject(err.message);
        }
    })
}

// Function to construct an HTML table
// includeFooter is optional in case the calling function wants to add more rows at the bottom
async function buildHTMLTable(tableData, includeFooter) {
    /* Example tableData obj:
     
     {
        style: "width:100%; border: 1px solid purple",
        headers: [
            {
                name: "vs. Fortitude 21",
                style: "background-color:purple; color:white; padding:5px; font-size:25px",
                align: "center",
                colspan: "3"
            }, ...
        ],
        columns: [
            {
                name: "Name",
                width: "20%",
                align: "center",
                style: "padding:5px"
            }, 
            {
                name: "Roll",
                width: "40%",
                align: "center",
                style: "padding:5px"
            }, ...
        ], ...
        rows: [
                [
                    {
                        string: "Giant Ant",
                        style: "padding:5px"
                    },
                    {
                        string: "(15) + 7 = <b>22</b>",
                        style: "padding:5px"
                    },
                    {
                        string: "Critical Success",
                        style: "color:green; padding:5px"
                    },
                ]
            ], ...

     }
    

    */
    return new Promise((resolve, reject) => {
        try {
            // Build Headers
            var table = '<table style="' + tableData.style + '"><thead>';
            tableData.headers.forEach((header) => {
                table = table +
                    '<tr>' +
                    `<td colspan="${header.colspan}" align="${header.align}" style="${header.style}">${header.name}</td>` + 
                    '</tr>';
            });

            // Build Columns Row
            var columnString = '';
            tableData.columns.forEach((column) => {
                columnString = columnString + `<th width="${column.width}" align="${column.align}" style="${column.style}">${column.name}</th>`;
            });
            table = table + `<tr>${columnString}</tr></thead>`;

            // Build Body Rows
            tableData.rows.forEach((row) => {
                var rowString = '<tr>';
                row.forEach((item) => {
                    rowString = rowString + `<td style="${item.style}">${item.string}</td>`;
                });
                rowString = rowString + '</tr>';
                table = table + rowString;
            });

            if (includeFooter === true) {
                table = table + '</table>';
            }

            resolve(table);

        } catch (err) {
            log("buildHTMLTable: Error: " + err.message);
            sendChat("gmtools.js", "buildHTMLTable: Error: " + err.message);
            reject(err.message);
        }
    });
}

// Function to roll initiative for a group of selected tokens and add them to the turn order
function groupInitiative(selected_tokens) {
    _.each(selected_tokens, async (token) => {
        try {
            // Get token object
            var tokenObj = await getObj('graphic', token._id);

            // Get initiative modifier
            var bar1 = await tokenObj.get('bar1_value');
            var initMod = Number(bar1);

            // Get character name
            var name = await tokenObj.get('name');

            // Roll initiative and display the result
            var d20 = randomInteger(20);
            var result = d20 + initMod;
            var displayMessage = "&{template:default}{{name=" + name + "}}{{Initiative=(" + d20 + ") + " + initMod + " = **" + result + "**}}";
            sendChat("gmtools.js", displayMessage);

            // Get the turn order
            var turnorder;
            if (Campaign().get("turnorder") == "") {
                turnorder = [];
            } else {
                turnorder = JSON.parse(Campaign().get("turnorder"));
            }

            //Add to turn order
            turnorder.push({
                id: token._id,
                pr: result,
                custom: "",
                _pageid: Campaign().get("playerpageid")
            });
            Campaign().set("turnorder", JSON.stringify(turnorder));
        } catch (err) {
            log("groupInitiative: Error: " + err.message);
            sendChat("gmtools.js", "groupInitiative: Error: " + err.message);
        }
    });
}

/*
Function to display a chat menu for rolling Saving Throws for selected tokens
Groups of tokens with the same image are assumed to have the same Saving Throw modifiers so we group them by their "imgsrc" value
*/
async function groupSavesMenu(selected_tokens, save_type, save_dc) {
    try {

        // Menu Header
        var menu = "&{template:default} {{name=Group Saving Throws}} {{DC=" + save_type + " " + save_dc + "}}";

        // Store unique 'imgsrc' values into array, and token {name, imgsrc, id} objects into another array
        var tokenObjects = [];
        var imageSources = [];
        await Promise.all(selected_tokens.map(async (selected_token) => {
            var tokenId = selected_token._id;
            var tokenObj = await getObj('graphic', tokenId);
            var tokenImgsrc = await tokenObj.get('imgsrc');
            var tokenName = await tokenObj.get('name');
            tokenObjects.push({
                name: tokenName,
                imgsrc: tokenImgsrc,
                id: tokenId
            });
            imageSources.push(tokenImgsrc);
        }));

        /*
        Complication:
        Token from journal: https://s3.amazonaws.com/files.d20.io/images/341096532/9BQ8ip9BGHw7HQSxe35sUA/med.png?1683662315
        Copy:               https://files.d20.io/images/341096532/9BQ8ip9BGHw7HQSxe35sUA/thumb.png?168366231555
        Copy of Copy:       https://files.d20.io/images/341096532/9BQ8ip9BGHw7HQSxe35sUA/thumb.png?1683662315555
        
        We have to trim these down in order to match them together
        We will trim them down to "images/../../" which appears to be identical if their image is the same
        */
        const imgsrc_regexp = /(images\/.*\/.*\/)/;

        const formattedImageSources = _.map(imageSources, (imgsrc) => {
            const srcmatches = imgsrc.match(imgsrc_regexp);
            return srcmatches[1];
        });
        const uniqueImageSources = [...new Set(formattedImageSources)];

        // For each unique image, collect the relevant tokens, display their names in the menu, and pass "Name-Id" pairs to the Button command
        uniqueImageSources.forEach((imgsrc) => {
            var tokenNamesString = "";
            var tokenPairs = "";
            var firstEntry = true;
            tokenObjects.forEach((tokenObj) => {
                const token_srcmatches = tokenObj.imgsrc.match(imgsrc_regexp);
                const tokenImgsrc = token_srcmatches[1];
                if (tokenImgsrc === imgsrc) {
                    if (firstEntry === true) {
                        tokenNamesString = tokenObj.name;
                        tokenPairs = tokenObj.name + ":" + tokenObj.id;
                        firstEntry = false;
                        log("groupSavesMenu: Pushing to menu token " + tokenObj.name + " with imgsrc " + tokenImgsrc);
                    } else {
                        tokenNamesString = tokenNamesString + ", " + tokenObj.name;
                        tokenPairs = tokenPairs + ", " + tokenObj.name + ":" + tokenObj.id;
                        log("groupSavesMenu: Pushing to menu token " + tokenObj.name + " with imgsrc " + tokenImgsrc);
                    }
                }
            });
            menu = menu + " {{" + tokenNamesString + "= [ROLL](!group_saves ?{" + save_type + "?} " + tokenPairs + ")}}";
        });

        //Display menu
        sendChat("gmtools.js", menu);


    } catch (err) {
        log("groupSavesMenu: Error: " + err.message);
        sendChat("gmtools.js", "groupSavesMenu: Error: " + err.message);
    }
}

// Function to display the saving throw results for a group of tokens
async function displayGroupSaveResult(groupResults, saveMod, saveType, saveDC) {
    /* groupResults array item:
      {
        id: tokenPair.id,
        name: tokenPair.name,
        roll: resultObj.roll,
        total: resultObj.total,
        outcome: resultObj.outcome_string
      }
    */

    try {

        log("displayGroupSaveResult: Starting for groupResults of length " + groupResults.length);

        // Table data
        var tableData = {
            style: "width:100%; border: 1px solid purple",
            headers: [
                {
                    name: `vs. ${saveType} ${saveDC}`,
                    style: "background-color:purple; color:white; padding:5px; font-size:25px",
                    align: "center",
                    colspan: "3"
                }
            ],
            columns: [
                {
                    name: "Name",
                    width: "30%",
                    align: "center",
                    style: "padding:5px"
                },
                {
                    name: "Roll",
                    width: "50%",
                    align: "center",
                    style: "padding:5px"
                },
                {
                    name: "Outcome",
                    width: "20%",
                    align: "center",
                    style: "padding:5px"
                }
            ],
            rows: []
        };

        // Build rows
        groupResults.forEach((result) => {
            var row = [];
            // Ex:  Giant Ant    (17) + 4 = **21**     Success
            // Name
            row.push({
                string: result.name,
                style: "padding:5px"
            });

            // Roll
            row.push({
                string: `(${result.roll}) + ${saveMod} = <b>${result.total}</b>`,
                style: "padding:5px"
            });

            // Outcome
            var outcomeString = result.outcome;
            var outcomeColor = "black";
            if ((result.outcome === "Critical Success") || (result.outcome === "Success")) { outcomeColor = "green" }
            if ((result.outcome === "Critical Failure") || (result.outcome === "Failure")) { outcomeColor = "red" }
            if ((result.outcome === "Critical Failure") || (result.outcome === "Critical Success")) {
                outcomeString = `<b>${outcomeString}</b>`;
            }
            row.push({
                string: outcomeString,
                style: `color:${outcomeColor}; padding:5px`
            });

            // Push to tableData
            tableData.rows.push(row);
        });

        // Build Table
        var table = await buildHTMLTable(tableData, true);

        // Display to chat
        sendChat("gmtools.js", table);

    } catch (err) {
        log("displayGroupSaveResult: Error: " + err.message);
        sendChat("gmtools.js", "displayGroupSaveResult: Error: " + err.message);
    }


}

async function groupSavesRoll(tokenPairs, saveMod, saveType, saveDC) {
    try {
        log("groupSavesRoll starting vs " + saveType + " " + saveDC + " for group: " + tokenPairs.slice(0, 20) + " ...");
        /* Goal: For each token, roll saving throw against DC. 
         * Determine outcome and mark with status marker
               Critical Success - Green 2
               Success - Green
               Failure - Red
               Critical Failure - Red 2
         * Display outcome in chat
         * Provide button to remove the icon
        */

        // Parse the token pairs
        var tokenPairArray = await tokenPairs.split(',').map(pair => {
            var [name, id] = pair.trim().split(':');
            return { name, id };
        });

        // Array to hold results for the group
        var groupResults = [];

        const promises = tokenPairArray.map(async (tokenPair) => {
            // Roll Save
            var resultObj = await rollAgainstDC(saveDC, saveMod);
            /* ex:
                {
                     roll: 20,
                     total: 27,
                     outcome_string: 'Critical Success',
                     outcome_numeric: 4
                }
            */

            groupResults.push({
                id: tokenPair.id,
                name: tokenPair.name,
                roll: resultObj.roll,
                total: resultObj.total,
                outcome: resultObj.outcome_string
            });

            log("groupSavesRoll: Pushing to groupResults for " + tokenPair.name);
        });

        await Promise.all(promises);
        displayGroupSaveResult(groupResults, saveMod, saveType, saveDC);


    } catch (err) {
        log("groupSavesRoll: Error: " + err.message);
        sendChat("gmtools.js", "groupSavesRoll: Error: " + err.message);
    }
}

on('ready', function () {
    "use strict";

    // Global variables
    var saveType = 'None';
    var saveDC = '0';

    log("gmtools.js: Ready!");

    on('chat:message', async function (msg) {
        try {
            // Ignore non-API messages
            if (msg.type != 'api') {
                return;
            }

            // Reset GM Macros (GM Only)
            if ((msg.content.match(/^!reset/i)) && (playerIsGM(msg.playerid))) {
                resetGMMacros(msg.playerid);
            }

            // Group Initiative (GM Only)
            if ((msg.content.match(/^!group_initiative/i)) && (typeof msg.selected != 'undefined') && (playerIsGM(msg.playerid))) {
                selectedTokens = msg.selected;
                groupInitiative(selectedTokens);
            }


            // Group Saving Throws (GM Only)
            if ((msg.content.match(/^!group_saves/i)) && (playerIsGM(msg.playerid))) {

                // Match msg to command type and parameters
                var menuRegexp = /^!group_saves\s(Fortitude|Reflex|Will)\s*([0-9]+)$/i;  // ex: !group_saves Fortitude 21
                var rollRegexp = /^!group_saves\s(\-*[0-9]+)\s*(.*)$/i;  // ex: !group_saves 7 Giant Ant:-NYZRX_VYs0snPtuZmm1
                var matchesMenu = msg.content.match(menuRegexp);
                var matchesRoll = msg.content.match(rollRegexp);

                // 'Group-Saves' Macro with tokens selected -> Create Menu in chat
                if ((matchesMenu) && (typeof msg.selected !== 'undefined')) {
                    saveType = matchesMenu[1];
                    saveDC = matchesMenu[2];

                    groupSavesMenu(msg.selected, saveType, saveDC);
                }

                // Menu 'ROLL' button is pressed for a group
                else if (matchesRoll) {
                    var saveMod = matchesRoll[1];
                    var tokenPairs = matchesRoll[2];
                    groupSavesRoll(tokenPairs, saveMod, saveType, saveDC);
                }

            }


        } catch (err) {
            log("Error: " + err.message);
            sendChat("gmtools.js", "Error: " + err.message);
        }
    });
});
