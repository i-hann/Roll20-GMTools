// Conditions
const conditions = {
    "Rules": "Conditions of the same name and value don't stack - the duration becomes the longer of the two. Conditions with different values are considered different conditions. If you’re affected by a condition with a value multiple times, you apply only the highest value, although you might have to track both durations if one has a lower value but lasts longer.",
    "Blinded": {
        "Name": "Blinded",
        "Description": "Can't see. All terrain is difficult. Immune to visual effects. Overrides Dazzled.",
        "hasValue": false,
        "hasType": false,
        "statusMarker": "6042735:blinded"
    },
    "Clumsy": {
        "Name": "Clumsy",
        "Description": "-[value] to DEX checks and DCs (AC, Reflex, Ranged attack rolls, skills, etc.)",
        "hasValue": true,
        "hasType": false,
        "statusMarker": "6042737:clumsy"
    },
    "Concealed": {
        "Name": "Concealed",
        "Description": "Requires DC 5 flat check to be targeted with attack, spell, or other effect.",
        "hasValue": false,
        "hasType": false,
        "statusMarker": "6042738:concealed"
    },
    "Confused": {
        "Name": "Confused",
        "Description": "Flat-footed, can't benefit from flanking, can't Delay or Ready, can't use Reactions. All actions must be spent on Strikes or offensive Cantrips against a random target determined by the GM. If there are no targets, you target yourself, automatically hitting. Each time you take damage, you get a flat DC 11 check to overcome the confusion.",
        "hasValue": false,
        "hasType": false,
        "statusMarker": "6042739:confused"
    },
    "Dazzled": {
        "Name": "Dazzled",
        "Description": "If vision is only precise sense, all creatures and objects are Concealed (DC 5 flat check to target).",
        "hasValue": false,
        "hasType": false,
        "statusMarker": "6042741:dazzled"
    },
    "Deafened": {
        "Name": "Deafened",
        "Description": "Can't hear. -2 Perception for Initiative. Actions with 'Auditory' trait require DC 5 flat check. Immune to auditory effects.",
        "hasValue": false,
        "hasType": false,
        "statusMarker": "6042742:deafened"
    },
    "Doomed": {
        "Name": "Doomed",
        "Description": "Dying needed to die decreased by [value] (a creature with Doomed 2 would die at Dying 2 instead of Dying 4). Doomed value decreases by 1 with each rest.",
        "hasValue": true,
        "hasType": false,
        "statusMarker": "6042743:doomed"
    },
    "Drained": {
        "Name": "Drained",
        "Description": "-[value] to CON checks (such as Fortitude). Lose current and max HP equal to level times [value]. Doesn't count as taking damage. Drained value decreases by 1 with each rest.",
        "hasValue": true,
        "hasType": false,
        "statusMarker": "6042744:drained"
    },
    "Encumbered": {
        "Name": "Encumbered",
        "Description": "Clumsy 1 (-1 to DEX checks and DCs such as AC, Reflex, Ranged attack rolls, skills, etc). 10-foot penalty to all Speeds. Can't reduce Speed below 5.",
        "hasValue": false,
        "hasType": false,
        "statusMarker": "6042746:encumbered"
    },
    "Enfeebled": {
        "Name": "Enfeebled",
        "Description": "-[value] to STR checks and DCs (such as melee attacks, damage, Athletics).",
        "hasValue": true,
        "hasType": false,
        "statusMarker": "6042747:enfeebled"
    },
    "Fascinated": {
        "Name": "Fascinated",
        "Description": "-2 Perception and skill checks. Can't use 'concentrate' actions unless they are related to the subject of the fascination. This condition ends if any creature uses hostile actions against you or any of your allies.",
        "hasValue": false,
        "hasType": false,
        "statusMarker": "6042748:fascinated"
    },
    "Fatigued": {
        "Name": "Fatigued",
        "Description": "-1 to AC and saves. Can't use exploration activities while traveling. Recover with one rest.",
        "hasValue": false,
        "hasType": false,
        "statusMarker": "6042750:fatigued"
    },
    "Fleeing": {
        "Name": "Fleeing",
        "Description": "All actions must be spent escaping the source (usually the caster) of the condition. Can't Delay or Ready.",
        "hasValue": false,
        "hasType": false,
        "statusMarker": "6042755:fleeing"
    },
    "Frightened": {
        "Name": "Frightened",
        "Description": "-[value] to all checks and DCs. Unless otherwise specified, Frightened value decreases by 1 at end of each of your turns.",
        "hasValue": true,
        "hasType": false,
        "statusMarker": "6042757:frightened"
    },
    "Grabbed": {
        "Name": "Grabbed",
        "Description": "Flat-footed and immobilized (can't use actions with 'Move' trait). Actions with 'Manipulate' trait require DC 5 flat check.",
        "hasValue": false,
        "hasType": false,
        "statusMarker": "6042760:grabbed"
    },
    "Immobilized": {
        "Name": "Immobilized",
        "Description": "Can't use actions with 'Move' trait. If something would force you to move, the force must succeed against the DC of the immobilizing source (spell DC or Athletics DC)",
        "hasValue": false,
        "hasType": false,
        "statusMarker": "6042764:immobilised"
    },
    "Invisible": {
        "Name": "Invisible",
        "Description": "Creatures can't target you and have no idea what space you occupy. Creatures can use Seek action against your Stealth DC to identify what space you're in (allowing a DC 11 flat check to target you).",
        "hasValue": false,
        "hasType": false,
        "statusMarker": "6042767:invisible"
    },
    "Paralyzed": {
        "Name": "Paralyzed",
        "Description": "Flat-footed. Can't act except to Recall Knowledge or other actions that require only the use of your mind (as determined by GM).",
        "hasValue": false,
        "hasType": false,
        "statusMarker": "6042769:paralysed"
    },
    "Persistent": {
        "Name": "Persistent",
        "Description": "Take [value] [type] damage at the end of each turn. Then, make DC 15 flat check to end the condition.",
        "hasValue": true,
        "hasType": true,
        "statusMarker": "yellow"
    },
    "Petrified": {
        "Name": "Petrified",
        "Description": "Can't act or sense anything. Has AC 9, Hardness 8.",
        "hasValue": false,
        "hasType": false,
        "statusMarker": "6042771:petrified"
    },
    "Prone": {
        "Name": "Prone",
        "Description": "Flat-footed and -2 to attack rolls. Only move actions available are Crawl and Stand. You can Take Cover while pron to gain greater cover (+4 AC) against ranged attacks",
        "hasValue": false,
        "hasType": false,
        "statusMarker": "6042773:prone"
    },
    "Quickened": {
        "Name": "Quickened",
        "Description": "Gain 1 extra action at start of each turn.",
        "hasValue": false,
        "hasType": false,
        "statusMarker": "6042776:quickened"
    },
    "Restrained": {
        "Name": "Restrainted",
        "Description": "Flat-footed and immobilized (can't use actions with 'Move' trait). Can't use 'Attack' or 'Manipulate' actions except to Escape or Force Open your bonds. Overrides Grabbed.",
        "hasValue": false,
        "statusMarker": "6042778:restrained"
    },
    "Sickened": {
        "Name": "Sickened",
        "Description": "-[value] to all checks and DCs. Can't willingly ingest anything (including elixirs and potions). Can spend 1 action retching to attempt a FORT save against the effect DC to reduce Sickened value by 1 (or 2 on a crit success).",
        "hasValue": true,
        "hasType": false,
        "statusMarker": "6042781:sickened"
    },
    "Slowed": {
        "Name": "Slowed",
        "Description": "Regain [value] fewer actions than normal at start of turn.",
        "hasValue": true,
        "hasType": false,
        "statusMarker": "6042783:slowed"
    },
    "Stunned_Actions": {
        "Name": "Stunned_Actions",
        "Description": "Lose [value] actions, possibly over multiple turns. Overrides Slowed.",
        "hasValue": true,
        "hasType": false,
        "statusMarker": "6042785:stunned"
    },
    "Stunned_Duration": {
        "Name": "Stunned_Duration",
        "Description": "Unable to take actions for the duration. Overrides Slowed.",
        "hasValue": false,
        "hasType": false,
        "statusMarker": "6042785:stunned"
    },
    "Stupefied": {
        "Name": "Stupefied",
        "Description": "-[value] to all mental checks and DCs (Will saves, spell attack rolls, spell DCs, skills, etc). Casting a spell requires flat check against DC 5 + stupefied value.",
        "hasValue": true,
        "hasType": false,
        "statusMarker": "6042787:stupefied"
    }
}


// Function to reset GM macros used by this script to their correct values
async function resetGMMacros(gm_id) {
    try {
        sendChat("gmtools.js", "Restoring GM Macros to Default");

        // Define GM Macros
        const gm_macros = [
            {
                name: "Debug",
                _playerid: gm_id,
                visibleto: gm_id,
                action: '!debug',
                istokenaction: true
            },
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
            },
            {
                name: "Refresh-Sfx",
                _playerid: gm_id,
                visibleto: gm_id,
                action: '!refresh deathsfx',
                istokenaction: false
            },
            {
                name: "Image-Cycle",
                _playerid: gm_id,
                visibleto: gm_id,
                action: '!cycle token',
                istokenaction: true
            },
            {
                name: "Conditions-Add",
                _playerid: gm_id,
                visibleto: gm_id,
                action: '!conditions init ?{Condition?|Blinded,Blinded|Clumsy,Clumsy|Concealed,Concealed|Confused,Confused|Dazzled,Dazzled|Deafened,Deafened|Doomed,Doomed|Drained,Drained|Encumbered,Encumbered|Enfeebled,Enfeebled|Fascinated,Fascinated|Fatigued,Fatigued|Fleeing,Fleeing|Frightened,Frightened|Grabbed,Grabbed|Immobilized,Immobilized|Invisible,Invisible|Paralyzed,Paralyzed|Persistent,Persistent|Petrified,Petrified|Prone,Prone|Quickened,Quickened|Restrained,Restrained|Sickened,Sickened|Slowed,Slowed|Stunned (Actions),Stunned_Actions|Stunned (Duration),Stunned_Duration|Stupefied,Stupefied}',
                istokenaction: true
            },
            {
                name: "Conditions-Show",
                _playerid: gm_id,
                visibleto: gm_id,
                action: '!conditions show',
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
        log("gmtools.js: resetGMMacros: Error: " + err.message);
    }
}

// Function to display attributes of a 'Graphic' object
async function debugGraphic(selectedObj) {
    try {
        const id = selectedObj._id;
        const graphicObj = await getObj('graphic', id);
        const name = await graphicObj.get('name');
        const type = await graphicObj.get('_type');
        const subtype = await graphicObj.get('_subtype');
        const pageid = await graphicObj.get('_pageid');
        const controlledby = await graphicObj.get('controlledby');
        const tint_color = await graphicObj.get('tint_color');
        sendChat("gmtools.js", `&{template:default}{{name=${name}}}{{id=${id}}}{{type=${type}}}{{subtype=${subtype}}}{{pageid=${pageid}}}{{controlledby=${controlledby}}}{{tint_color=${tint_color}}}`);

    } catch (err) {
        sendChat("gmtools.js", "gmtools.js: debugGraphic: Error: " + err.message);
        log("gmtools.js: debugGraphic: Error: " + err.message);
    }
}

// Function to handle !debug command
async function handleDebug(selectedObj) {
    try {
        if (selectedObj._type === 'graphic') {
            debugGraphic(selectedObj);
        }

    } catch (err) {
        sendChat("gmtools.js", "gmtools.js: handleDebug: Error: " + err.message);
        log("gmtools.js: handleDebug: Error: " + err.message);
    }
}

// Function to cycle one or more selected rollable table tokens
function cycleToken(selectedTokens) {
    try {
        _.each(selectedTokens, async (selectedToken) => {
            const tokenObj = await getObj('graphic', selectedToken._id);
            const sides = await tokenObj.get('sides');
            const sidesArray = sides.split("|");  // [0]Side1  [1]Side2
            const lastSideIndex = sidesArray.length - 1;  // 1

            // Only 1 side means not a rollable token
            if (lastSideIndex == 0) { return; }

            // Find next side and imgsrc in cycle
            const currentSideIndex = await tokenObj.get('currentSide'); // 0
            var nextSideIndex;
            if (currentSideIndex < lastSideIndex) {
                nextSideIndex = currentSideIndex + 1;
            } else {
                nextSideIndex = 0;
            }
            var nextImgSrc = sidesArray[nextSideIndex];
            
            // Clean up imgsrc so it can be passed back to Roll20
            var cleanNextImgSrc = await decodeURIComponent(nextImgSrc);
            cleanNextImgSrc = await cleanNextImgSrc.replace(/\/[a-z]*\.png/i, "\/thumb.png");

            await tokenObj.set({
                currentSide: nextSideIndex,
                imgsrc: cleanNextImgSrc
            });
        });

    } catch (err) {
        sendChat("gmtools.js", "gmtools.js: flipToken: Error: " + err.message);
        log("gmtools.js: flipToken: Error: " + err.message);
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

// Function to construct an HTML table from a tableData object (used internally by this script)
// includeFooter is optional in case the calling function wants to add more rows at the bottom
async function HTMLBuilder(tableData, includeFooter) {
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
                    }
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

            // Build Columns Row (Optional)
            if (tableData.columns) {
                var columnString = '';
                tableData.columns.forEach((column) => {
                    columnString = columnString + `<th width="${column.width}" align="${column.align}" style="${column.style}">${column.name}</th>`;
                });
                table = table + `<tr>${columnString}</tr></thead>`;
            }


            // Build Rows
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
            log("HTMLBuilder: Error: " + err.message);
            sendChat("gmtools.js", "HTMLBuilder: Error: " + err.message);
            reject(err.message);
        }
    });
}

// Function to populate the DeathSfx Playlist from the Roll20 Jukebox
async function loadDeathSfxPlaylist() {
    return new Promise(async (resolve, reject) => {
        try {
            // Get all Sfx
            const allSfx = await findObjs({
                _type: "jukeboxtrack"
            });

            // Populate "Death:... " sfx into array
            var deathSfxPlaylist = [];
            const promises = allSfx.map(async (obj) => {
                const title = await obj.get("title");
                if (/^Death:.*/i.test(title)) { deathSfxPlaylist.push(obj); }
            });
            await Promise.all(promises);

            // Resolve
            if (deathSfxPlaylist.length > 0) {
                resolve(deathSfxPlaylist);
            } else {
                reject("DeathSfxPlaylist resolved as empty.");
            }

        } catch (err) {
            log("gmtools.js: loadDeathSfx: Error: " + err.message);
            reject(err.message);
        }
    })
}

// Function to play a random Death Sfx
async function playRandomDeathSfx(deathSfxPlaylist) {
    try {
        // Get random obj from playlist
        const randomIndex = await randomInteger(deathSfxPlaylist.length - 1);
        const jukeboxObj = deathSfxPlaylist[randomIndex];

        // Play it
        jukeboxObj.set("playing", false);
        jukeboxObj.set("softstop", false);
        jukeboxObj.set("playing", true);

    } catch (err) {
        log("gmtools.js: Error in playDeathSfx: " + err.message);
        sendChat("gmtools.js", "Error in playDeathSfx: " + err.message);
    }
}

// Function to verify if a change to a token has died, then play DeathSfx and mark the token as dead
async function handleDeath(token, deathSfxPlaylist) {
    try {

        // Get Token Object
        const id = await token.get('_id');
        const tokenObj = await getObj('graphic', id);

        // Validate that Current and Max HP are populated
        const bar3_max = await tokenObj.get("bar3_max");
        const bar3_value = await tokenObj.get("bar3_value");
        if ((!(/^\-*[0-9]+$/i.test(bar3_max))) || (!(/^\-*[0-9]+$/i.test(bar3_value)))) { return; }

        // Is Token supposed to be dead?
        const hp_value = Number(bar3_value);
        var gm_notes = await tokenObj.get("gmnotes");

        if (hp_value <= 0) {
            // Yes - Token is supposed to be dead
            // Have we marked it as dead already?
            if (/\[status:dead\]/i.test(gm_notes)) {
                // Yes - do nothing
                return;
            } else {
                // No - Mark as dead and play sfx
                tokenObj.set("gmnotes", gm_notes + "[status:dead]");
                tokenObj.set("status_dead", true);
                playRandomDeathSfx(deathSfxPlaylist);
            }
        } else {
            // No it's not supposed to be dead
            // Was it previously dead?
            if (/\[status:dead\]/i.test(gm_notes)) {
                // Yes - remove status
                gm_notes = gm_notes.replace("[status:dead]", "");
                tokenObj.set("gmnotes", gm_notes);
                tokenObj.set("status_dead", false);
            } else {
                // No it wasn't previously dead - do nothing
                return;
            }
        }
    } catch (err) {
        log("gmtools.js: Error in handleDeathSfx: " + err.message);
        sendChat("gmtools.js", "Error in handleDeathSfx: " + err.message);
    }
}

async function handleHpTint(token, hpTints) {
    try {
        // Get Token Object
        const id = await token.get('_id');
        const tokenObj = await getObj('graphic', id);

        // Validate that Current and Max HP are populated
        const bar3_max = await tokenObj.get("bar3_max");
        const bar3_value = await tokenObj.get("bar3_value");
        if ((!(/^\-*[0-9]+$/i.test(bar3_max))) || (!(/^\-*[0-9]+$/i.test(bar3_value)))) { return; }

        // Calc HP % rounded up
        var percentage = (bar3_value / bar3_max) * 100;
        var percentageRounded = Math.ceil(percentage);
        if ((percentageRounded >= 50) || (percentageRounded <= 0)) {
            // 50%+, or dead - Remove tint
            tokenObj.set("tint_color", "transparent");
        } else {
            // 1% - 49% - Add tint
            var hexIndex = Math.floor(percentageRounded / 2);
            tokenObj.set("tint_color", hpTints[hexIndex]);
        }


    } catch (err) {
        log("gmtools.js: Error in handleHpTint: " + err.message);
        sendChat("gmtools.js", "Error in handleHpTint: " + err.message);
    }

}

// Function to roll initiative for a group of selected tokens and add them to the turn order
function groupInitiative(selected_tokens) {
    _.each(selected_tokens, async (token) => {
        try {
            // Get token object
            var tokenObj = await getObj('graphic', token._id);

            // Get Bar1 value
            var bar1 = await tokenObj.get('bar1_value');

            // Validate Bar1
            if (!(/^\-*[0-9]+$/i.test(bar1))) { return; }

            // Save as Initiative Modifier
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
            menu = menu + " {{" + tokenNamesString + "= [ROLL](!group_saves ?{" + save_type + "?} " + save_type + ":" + save_dc + " " + tokenPairs + ")}}";
        });

        //Display menu
        sendChat("gmtools.js", menu);


    } catch (err) {
        log("groupSavesMenu: Error: " + err.message);
        sendChat("gmtools.js", "groupSavesMenu: Error: " + err.message);
    }
}

// Function to display the saving throw results for a group of tokens, and tag each token based on the result
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
                    style: "background-color:purple; color:white; padding:8px; font-size:25px",
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

        // Build open-ended table
        var table = await HTMLBuilder(tableData, false);

        //Tag the tokens
        var taggedTokenIdsString = '';
        var firstEntry = true;
        const promises = groupResults.map(async (result) => {
            if (firstEntry === true) {
                taggedTokenIdsString = result.id;
                firstEntry = false;
            }
            else {
                taggedTokenIdsString = taggedTokenIdsString + "," + result.id;
            }
            var status_marker = "";
            var count = "";
            var tokenObj = await getObj('graphic', result.id);
            switch (result.outcome) {
                case "Critical Success":
                    status_marker = "status_green";
                    count = "2";
                    break;
                case "Success":
                    status_marker = "status_green";
                    count = "1";
                    break;
                case "Failure":
                    status_marker = "status_red";
                    count = "1";
                    break;
                case "Critical Failure":
                    status_marker = "status_red";
                    count = "2";
                    break;
            }
            tokenObj.set(status_marker, count);
        });
        await Promise.all(promises);

        // Add "Remove Tags" button to bottom of the table
        table = table + `<tr><td colspan="3" style="padding:10px; font-size:20px" align="center">[Remove Tags](!group_saves remove ${taggedTokenIdsString})</td></tr>` +
            '</table>';

        // Display to chat
        sendChat("gmtools.js", table);

    } catch (err) {
        log("displayGroupSaveResult: Error: " + err.message);
        sendChat("gmtools.js", "displayGroupSaveResult: Error: " + err.message);
    }


}

// Function to roll saving throws for a group from the Group Saves menu
async function groupSavesRoll(tokenPairs, saveMod, saveType, saveDC) {
    try {
        log("groupSavesRoll starting vs " + saveType + " " + saveDC + " for group: " + tokenPairs.slice(0, 20) + " ...");

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

            // Populate results
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

        //Display results
        displayGroupSaveResult(groupResults, saveMod, saveType, saveDC);


    } catch (err) {
        log("groupSavesRoll: Error: " + err.message);
        sendChat("gmtools.js", "groupSavesRoll: Error: " + err.message);
    }
}

// Function to remove Red and Green status markers
async function groupSavesRemoveTags(tokenIdsString) {
    // tokenIdsString is a comma separated list of ids
    try {
        var tokenIds = tokenIdsString.split(",");
        tokenIds.forEach(async (tokenId) => {
            var tokenObj = await getObj('graphic', tokenId);
            tokenObj.set("status_red", false);
            tokenObj.set("status_green", false);
        });
    } catch (err) {
        log("groupSavesRemoveTags: Error: " + err.message);
        sendChat("gmtools.js", "groupSavesRemoveTags: Error: " + err.message);
    }
}


// Function to begin the process of adding a condition to one or more selected tokens
// !conditions add <Condition>
async function initAddCondition(selectedTokens, msg) {
    try {

        // Parse argument from string
        const regex = /^\!conditions\sinit\s(.*)$/i;
        const matches = msg.match(regex);
        if (!matches) {
            sendChat("gmtools.js", "addCondition: Error: Message does not match expected pattern.");
            log("gmtools.js: addCondition: Error: Message does not match expected pattern.");
            return;
        }
        const conditionArg = matches[1].replace(" ", "");

        // Match to condition

        const conditionObj = conditions[conditionArg];
        if (!conditionObj) {
            sendChat("gmtools.js", "addCondition: Error: Could not find matching Condition for: " + conditionArg);
            log("gmtools.js: addCondition: Error: Could not find matching Condition for: " + conditionArg);
            return;
        }

        // Save selected token ids as a @-separated string
        var tokenIds = '';
        await Promise.all(selectedTokens.map(async (token) => {
            var id = token._id;
            if (tokenIds == '') {
                tokenIds = id;
            } else {
                tokenIds = tokenIds + "@" + id;
            }
        }));

        // Some conditions need additional parameters
        // Normalize parameters into a string, then provide Button to pass in additional parameters where needed
        // Then we only need one "addCondition" function which can take either
        var addConditionArg = "Name@" + conditionObj.Name + " tokenIds@" + tokenIds;
        if ((conditionObj.hasValue === true) || (conditionObj.hasType === true)) {
            if (conditionObj.hasType === true) {
                addConditionArg = addConditionArg + " Type@?{" + conditionObj.Name + " Type?}";
            } else {
                addConditionArg = addConditionArg + " Type@None";
            }
            if (conditionObj.hasValue === true) {
                addConditionArg = addConditionArg + " Value@?{" + conditionObj.Name + " Value?}";
            } else {
                addConditionArg = addConditionArg + " Value@None";
            }
            //sendChat("gmtools.js", "&{template:default} {{name=" + conditionObj.Name + " Parameters}} {{Enter= [HERE](!conditions add " + addConditionArg + ")}}");
            sendChat("gmtools.js", `Provide parameters for ${conditionObj.Name}: [ENTER](!conditions add ${addConditionArg})`);
        } else {
            addConditionArg = addConditionArg + ` Type@None Value@None`;
            addCondition("!conditions add " + addConditionArg);
        }

    } catch (err) {
        log("initAddCondition: Error: " + err.message);
        sendChat("gmtools.js", "initAddCondition: Error: " + err.message);
    }
}

/* Function to take string argument from button or from initAddCondition(), and add condition to each token
Example args:  

From initAddCondition:  
    !conditions add Name@Stunned(Duration) tokenIds@-NYn7O6o8eKzweLP1YBC:-NYin6YnQrDwvrx2h1GO Type@None Value@None
    !conditions add Name@Fatigued tokenIds@-NYn7O6o8eKzweLP1YBC@-NYin6YnQrDwvrx2h1GO Type@None Value@None

From button:
    !conditions add Name@Stunned(Actions) tokenIds@-NYn7O6o8eKzweLP1YBC@-NYin6YnQrDwvrx2h1GO Type@None Value@5
    !conditions add Name@Persistent tokenIds@-NYn7O6o8eKzweLP1YBC@-NYin6YnQrDwvrx2h1GO Type@Fire Value@9
*/
async function addCondition(arg) {
    try {
        // Parse argument string
        const regexp = /^!conditions\s*add\s*Name\@(.*?)\s*tokenIds\@(.*?)\s*Type\@(.*?)\s*Value\@(.*?)\s*$/i;
        const matches = arg.match(regexp);
        if (matches) {
            const conditionName = matches[1];
            const tokenIds = matches[2].split('@');
            var type = matches[3];
            if (type === "None") { type = ''; }
            var value = matches[4];
            if (value === "None") { value = ''; }

            // Get condition obj
            const conditionObj = conditions[conditionName];

            _.each(tokenIds, async (tokenId) => {
                // Get token properties
                const tokenObj = await getObj('graphic', tokenId);
                const tokenName = await tokenObj.get('name');
                const currentGmNotes = await tokenObj.get('gmnotes');  // ex:  [condition:Slowed type: value:1] [condition:Persistent type:Fire value:9]

                // Check if condition is already there
                const rgx = new RegExp(`\\[condition\\:${conditionObj.Name}\\stype\\:${type}\\svalue\\:${value}\\]`, "i");
                if (currentGmNotes.match(rgx)) {
                    // It's there - do nothing
                    log(`addCondition: ${tokenName} already has condition: ${conditionObj.Name} ${type} ${value}`);
                    sendChat("gmtools.js", `addCondition: ${tokenName} already has condition: ${conditionObj.Name} ${type} ${value}`);
                    return;
                } else {
                    // It's not there - add it to gm notes
                    var newGmNotes = currentGmNotes + ` [condition:${conditionObj.Name} type:${type} value:${value}]`;
                    await tokenObj.set('gmnotes', newGmNotes);

                    // And add status marker. Only "Persistent" gets a number
                    if (conditionObj.Name == 'Persistent') {
                        await tokenObj.set(`status_${conditionObj.statusMarker}`, value);
                    } else {
                        await tokenObj.set(`status_${conditionObj.statusMarker}`, true);
                    }

                    // And log it
                    sendChat("gmtools.js", `Added to ${tokenName}: ${conditionObj.Name} ${type} ${value}`);
                }
            });
        }
        else {
            log("addCondition: Error: Unexpected parameter string: " + arg);
            sendChat("gmtools.js", "addCondition: Error: Unexpected parameter string: " + arg);
        }
    } catch (err) {
        log("addCondition: Error: " + err.message);
        sendChat("gmtools.js", "addCondition: Error: " + err.message);
    }
}

async function showConditions(selectedToken) {
    try {

        // TBD

    } catch (err) {
        log("showConditions: Error: " + err.message);
        sendChat("gmtools.js", "showConditions: Error: " + err.message);
    }
}


on('ready', async function () {
    "use strict";

    // 25 HP Tint colors which each corresponds to a 2% window (ex: 1-2%, 3-4%, etc.)
    // red -> orange -> yellow
    const hpTints = [
        "#850101", "#8d1201", "#951f00", "#9d2900", "#a53400",
        "#ac3d00", "#b34700", "#ba5100", "#c15a00", "#c76400", 
        "#cd6d00", "#d37700", "#d98100", "#de8b00", "#e39500", 
        "#e79f00", "#ecaa00", "#efb400", "#f3be00", "#f6c900",  
        "#f9d400", "#fbde00", "#fde900", "#fef400", "#ffff04"
    ]

    // Load DeathSfx Playlist
    var deathSfxPlaylist = await loadDeathSfxPlaylist().catch((err) => {
        log("gmtools.js: Failed to load DeathSfxPlaylist.");
    });

    // Ready Msg
    log("gmtools.js: Ready!");

    // Chat Event Listener
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

            // Debug (GM Only)
            if ((msg.content.match(/^!debug/i)) && (typeof msg.selected != 'undefined') && ((msg.selected).length === 1) && (playerIsGM(msg.playerid))) {
                handleDebug(msg.selected[0]);
            }

            // Refresh Death Sfx Playlist (GM Only)
            if ((msg.content.match(/^!refresh deathsfx$/i)) && (playerIsGM(msg.playerid))) {
                deathSfxPlaylist = await loadDeathSfxPlaylist();
            }

            // Group Initiative (GM Only)
            if ((msg.content.match(/^!group_initiative/i)) && (typeof msg.selected != 'undefined') && (playerIsGM(msg.playerid))) {
                groupInitiative(msg.selected);
            }


            // Group Saving Throws (GM Only)
            if ((msg.content.match(/^!group_saves/i)) && (playerIsGM(msg.playerid))) {

                // Match msg to command type and parameters
                var menuRegexp = /^!group_saves\s(Fortitude|Reflex|Will)\s*([0-9]+)$/i;  // ex: !group_saves Fortitude 21
                var rollRegexp = /^!group_saves\s(\-*[0-9]+)\s*(Fortitude|Reflex|Will)\:([0-9]+)\s*(.*)$/i;  // ex: !group_saves 7 Fortitude:21 Giant Ant:-NYZRX_VYs0snPtuZmm1
                var removeTagsRegexp = /^!group_saves\sremove\s(.*)$/i; // ex: !group_saves remove -NYZRX_VYs0snPtuZmm1
                var matchesMenu = msg.content.match(menuRegexp);
                var matchesRoll = msg.content.match(rollRegexp);
                var matchesRemoveTags = msg.content.match(removeTagsRegexp);

                // 'Group-Saves' Macro with tokens selected -> Create Menu in chat
                if ((matchesMenu) && (typeof msg.selected !== 'undefined')) {
                    var saveType = matchesMenu[1];
                    var saveDC = matchesMenu[2];
                    groupSavesMenu(msg.selected, saveType, saveDC);
                }

                // Menu 'ROLL' button is pressed for a group
                // ex: !group_saves 7 Fortitude:21 Giant Ant:-NYZRX_VYs0snPtuZmm1
                else if (matchesRoll) {
                    var saveMod = matchesRoll[1];  // 7
                    var saveType = matchesRoll[2]; // Fortitude
                    var saveDC = matchesRoll[3]; // 21
                    var tokenPairs = matchesRoll[4]; // Giant Ant:-NYZRX_VYs0snPtuZmm1
                    groupSavesRoll(tokenPairs, saveMod, saveType, saveDC);
                }

                // Menu "Remove Tags" button is pressed for a group
                else if (matchesRemoveTags) {
                    var tokenIds = matchesRemoveTags[1];
                    groupSavesRemoveTags(tokenIds);
                }

            }

            // Cycle Token (GM Only)
            if ((msg.content.match(/^!cycle token/i)) && (typeof msg.selected != 'undefined') && (playerIsGM(msg.playerid))) {
                cycleToken(msg.selected);
            }

            // Initialize Add Condition (GM Only, called with macro)
            if ((msg.content.match(/^!conditions\sinit/i)) && (typeof msg.selected != 'undefined') && (playerIsGM(msg.playerid))) {
                initAddCondition(msg.selected, msg.content);
            }

            // Add Condition (GM Only, called internally)
            if ((msg.content.match(/^!conditions\sadd/i)) && (playerIsGM(msg.playerid))) {
                addCondition(msg.content);
            }

            // Show Conditions (GM Only, called with macro, single token)
            if ((msg.content.match(/^!conditions\sshow/i)) && (playerIsGM(msg.playerid))) {
                if ((msg.selected).length === 1) {
                    showConditions(msg.selected);
                } else {
                    log("gmtools.js: Show Conditions only works for a single token.");
                    sendChat("gmtools.js", "Show Conditions only works for a single token.");
                }
                
            }

        } catch (err) {
            log("Error: " + err.message);
            sendChat("gmtools.js", "Error: " + err.message);
        }
    });

    // HP Event Listener
    on('change:graphic:bar3_value', (obj) => {
        try {

            // Death
            handleDeath(obj, deathSfxPlaylist);

            // HP Tint
            handleHpTint(obj, hpTints);

        } catch (err) {
            log("gmtools.js: Error in main: HP Event Listener: " + err.message);
            sendChat("gmtools.js", "Error in main: HP Event Listener: " + err.message)
        }

    });


});
