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
        log("gmtools.js: resetGMMacros: Error: " + err.message);
    }
}

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
            log("gmtools.js: groupInitiative: Error: " + err.message);
            sendChat("gmtools.js", "groupInitiative: Error: " + err.message);
        }
    });
}

/*
Groups of tokens with the same image are assumed to have the same Saving Throw modifiers
So we group them by their "imgsrc" value, then create a menu with a "ROLL" button for each group
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
        var uniqueImageSources = [...new Set(imageSources)];


        // For each unique image, collect the relevant tokens, display their names in the menu, and pass "Name-Id" pairs to the Button command
        uniqueImageSources.forEach((imgsrc) => {
            var tokenNamesString = "";
            var tokenPairs = "";
            var firstEntry = true;
            tokenObjects.forEach((tokenObj) => {
                if (tokenObj.imgsrc === imgsrc) {
                    if (firstEntry === true) {
                        tokenNamesString = tokenObj.name;
                        tokenPairs = tokenObj.name + ":" + tokenObj.id;
                        firstEntry = false;
                    } else {
                        tokenNamesString = tokenNamesString + ", " + tokenObj.name;
                        tokenPairs = tokenPairs + ", " + tokenObj.name + ":" + tokenObj.id;
                    }
                }
            });
            menu = menu + " {{" + tokenNamesString + "= [ROLL](!group_saves ?{Modifier?} " + tokenPairs + ")}}";
        });

        //Display menu
        sendChat("gmtools.js", menu);


    } catch (err) {
        log("gmtools.js: groupSavesMenu: Error: " + err.message);
        sendChat("gmtools.js", "groupSavesMenu: Error: " + err.message);
    }
}

function groupSavesRoll(tokenPairs, saveMod, saveType, saveDC) {
    try {
        sendChat("gmtools.js", "groupSavesRoll: Would roll Saving Throws with data: Save Type: " + saveType + ", DC: " + saveDC + ", Modifier: " + saveMod + ", Tokens: " + tokenPairs);

    } catch (err) {
        log("gmtools.js: groupSavesRoll: Error: " + err.message);
        sendChat("gmtools.js", "groupSavesRoll: Error: " + err.message);
    }
}

on('ready', function () {
    "use strict";

    // Global variables
    var saveType = 'None';
    var saveDC = '0';
    var selectedTokens;

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
            if ((msg.content.match(/^!group_saves/i)) && (typeof msg.selected != 'undefined') && (playerIsGM(msg.playerid))) {

                // Match msg to command type and parameters
                var menuRegexp = /^!group_saves\s(Fortitude|Reflex|Will)\s*([0-9]+)$/i;  // ex: !group_saves Fortitude 21
                var rollRegexp = /^!group_saves\s(\-*[0-9]+)\s*(.*)$/i;  // ex: !group_saves 7 Giant Ant, Giant Skeleton, Bear
                var matchesMenu = msg.content.match(menuRegexp);
                var matchesRoll = msg.content.match(rollRegexp);

                // 'Group-Saves' Macro with tokens selected -> Creates Menu in chat
                if (matchesMenu) {
                    selectedTokens = msg.selected;
                    saveType = matchesMenu[1];
                    saveDC = matchesMenu[2];

                    groupSavesMenu(selectedTokens, saveType, saveDC);
                }

                // 'Roll' Menu button for specific group
                else if (matchesRoll) {
                    var saveMod = matchesRoll[1];
                    var tokenPairs = matchesRoll[2];
                    groupSavesRoll(tokenPairs, saveMod, saveType, saveDC);
                }

            }


        } catch (err) {
            log("gmtools.js: Error: " + err.message);
            sendChat("gmtools.js", "Error: " + err.message);
        }
    });
});
