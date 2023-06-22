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
                action: '!group_saves',
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

function groupSaves(msg) {
    try {

        // TBD

    } catch (err) {
        log("gmtools.js: groupSaves: Error: " + err.message);
        sendChat("gmtools.js", "groupSaves: Error: " + err.message);
    }
}

on('ready', function () {
    "use strict";

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
                groupInitiative(msg.selected);
            }


            // Group Saving Throws (GM Only)
            if ((msg.content.match(/^!group_saves/i)) && (typeof msg.selected != 'undefined') && (playerIsGM(msg.playerid))) {
                groupSaves(msg);
            }


        } catch (err) {
            log("gmtools.js: Error: " + err.message);
            sendChat("gmtools.js", "Error: " + err.message);
        }
    });
});
