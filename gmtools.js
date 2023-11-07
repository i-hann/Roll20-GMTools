

// Tension imgsrc
const tension_imgsrc = "https://s3.amazonaws.com/files.d20.io/images/354795605/aLymHd04vGUnZ-0FpMtC2Q/max.png?1692124399";

// Exploration Activities
const exploration_activities = [
    {
        "Name": "Avoid Notice",
        "Description": "Repeatedly roll Stealth to determine if enemies notice you. Use Stealth for Initiative in the next encounter."
    },
    {
        "Name": "Defend",
        "Description": "At the start of the next encounter, your shield is already raised (as 'Raise Shield' action)."
    },
    {
        "Name": "Follow the Expert",
        "Description": "Follow an ally who is at least Expert in a skill. Add your level as a bonus to your own checks with that skill, as well as a bonus based on your ally's proficiency (expert +2, master +3, legendary +4)."
    },
    {
        "Name": "Investigate",
        "Description": "Use Recall Knowledge to discover clues among the various things you see and engage with."
    },
    {
        "Name": "Repeat a Spell",
        "Description": "Repeatedly cast the same spell (2 actions or fewer)."
    },
    {
        "Name": "Scout",
        "Description": "At the start of the next encounter, your party gains +1 to initiative."
    },
    {
        "Name": "Search",
        "Description": "Repeatedly roll Perception to spot hidden doors, traps, and hazards."
    },
    {
        "Name": "Treat Wounds",
        "Description": "Use Medicine to treat creatures' wounds."
    }
];

// Conditions
const conditions = {
    "Rules": "Conditions of the same name and value don't stack - the duration becomes the longer of the two. Conditions with different values are considered different conditions. If you’re affected by a condition with a value multiple times, you apply only the highest value, although you might have to track both durations if one has a lower value but lasts longer.",
    "Blinded": {
        "Name": "Blinded",
        "Description": "Can't see. All terrain is difficult. Immune to visual effects. Overrides Dazzled.",
        "hasValue": false,
        "statusMarker": "6042735:blinded",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604554/EWJnTmiQ9BNoZ2YsFwpBNA/max.png?1690123452"
    },
    "Clumsy": {
        "Name": "Clumsy",
        "Description": "-[value] to DEX checks and DCs (AC, Reflex, Ranged attack rolls, skills, etc.)",
        "hasValue": true,
        "statusMarker": "6042737:clumsy",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604570/7uFzFVa5Vqf9CCB8D36pnw/max.png?1690123453"
    },
    "Concealed": {
        "Name": "Concealed",
        "Description": "Requires DC 5 flat check to be targeted with attack, spell, or other effect.",
        "hasValue": false,
        "statusMarker": "6042738:concealed",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604550/0PTYWEbfGHvjX2wz6c-bbQ/max.png?1690123452"
    },
    "Confused": {
        "Name": "Confused",
        "Description": "Flat-footed, can't benefit from flanking, can't Delay or Ready, can't use Reactions. All actions must be spent on Strikes or offensive Cantrips against a random target determined by the GM. If there are no targets, you target yourself, automatically hitting. Each time you take damage, you get a flat DC 11 check to overcome the confusion.",
        "hasValue": false,
        "statusMarker": "6042739:confused",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604551/3wiom1UFhhPskoYLZJqa_w/max.png?1690123452"
    },
    "Dazzled": {
        "Name": "Dazzled",
        "Description": "If vision is only precise sense, all creatures and objects are Concealed (DC 5 flat check to target).",
        "hasValue": false,
        "statusMarker": "6042741:dazzled",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604541/Rp5BeOQE8KJcNdBjV8UZSw/max.png?1690123452"
    },
    "Deafened": {
        "Name": "Deafened",
        "Description": "Can't hear. -2 Perception for Initiative. Actions with 'Auditory' trait require DC 5 flat check. Immune to auditory effects.",
        "hasValue": false,
        "statusMarker": "6042742:deafened",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604555/P5y1PY62Ysp1nrOT-q6l7g/max.png?1690123452"
    },
    "Doomed": {
        "Name": "Doomed",
        "Description": "Dying needed to die decreased by [value] (a creature with Doomed 2 would die at Dying 2 instead of Dying 4). Doomed value decreases by 1 with each rest.",
        "hasValue": true,
        "statusMarker": "6042743:doomed",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604548/NnBkvjbkvtY-X43HqD9vZg/max.png?1690123452"
    },
    "Drained": {
        "Name": "Drained",
        "Description": "-[value] to CON checks (such as Fortitude). Lose current and max HP equal to level times [value]. Doesn't count as taking damage. Drained value decreases by 1 with each rest.",
        "hasValue": true,
        "statusMarker": "6042744:drained",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604565/lf9rDCfLKV_5gyF1g8pKjw/max.png?1690123452"
    },
    "Encumbered": {
        "Name": "Encumbered",
        "Description": "Clumsy 1 (-1 to DEX checks and DCs such as AC, Reflex, Ranged attack rolls, skills, etc). 10-foot penalty to all Speeds. Can't reduce Speed below 5.",
        "hasValue": false,
        "statusMarker": "6042746:encumbered"
    },
    "Enfeebled": {
        "Name": "Enfeebled",
        "Description": "-[value] to STR checks and DCs (such as melee attacks, damage, Athletics).",
        "hasValue": true,
        "statusMarker": "6042747:enfeebled",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604536/aXhzaEiJp238Op8HTa4RsA/max.png?1690123452"
    },
    "Fascinated": {
        "Name": "Fascinated",
        "Description": "-2 Perception and skill checks. Can't use 'concentrate' actions unless they are related to the subject of the fascination. This condition ends if any creature uses hostile actions against you or any of your allies.",
        "hasValue": false,
        "statusMarker": "6042748:fascinated",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604526/UKa6FsMc-TJMdHn3phjHTQ/max.png?1690123452"
    },
    "Fatigued": {
        "Name": "Fatigued",
        "Description": "-1 to AC and saves. Can't use exploration activities while traveling. Recover with one rest.",
        "hasValue": false,
        "statusMarker": "6042750:fatigued",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604538/bmcqiyIX3xd7XC7fGhScsQ/max.png?1690123452"
    },
    "Fleeing": {
        "Name": "Fleeing",
        "Description": "All actions must be spent escaping the source (usually the caster) of the condition. Can't Delay or Ready.",
        "hasValue": false,
        "statusMarker": "6042755:fleeing",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604531/D5bTcPXKCggj7GvYQpDsBA/max.png?1690123452"
    },
    "Frightened": {
        "Name": "Frightened",
        "Description": "-[value] to all checks and DCs, including AC. Unless otherwise specified, Frightened value decreases by 1 at end of each of your turns.",
        "hasValue": true,
        "statusMarker": "6042757:frightened",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604543/dRAFXaQVqYQpuySkCTbyBQ/max.png?1690123452"
    },
    "Grabbed": {
        "Name": "Grabbed",
        "Description": "Flat-footed and immobilized (can't use actions with 'Move' trait). Actions with 'Manipulate' trait require DC 5 flat check.",
        "hasValue": false,
        "statusMarker": "6042760:grabbed",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604552/j8KIGD4c4ReemdeEyR5asw/max.png?1690123452"
    },
    "Immobilized": {
        "Name": "Immobilized",
        "Description": "Can't use actions with 'Move' trait. If something would force you to move, the force must succeed against the DC of the immobilizing source (spell DC or Athletics DC)",
        "hasValue": false,
        "statusMarker": "6042764:immobilised",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604528/BRCvjOhUvPc9_5ahC6416g/max.png?1690123452"
    },
    "Invisible": {
        "Name": "Invisible",
        "Description": "Creatures can't target you and have no idea what space you occupy. Creatures can use Seek action against your Stealth DC to identify what space you're in (allowing a DC 11 flat check to target you).",
        "hasValue": false,
        "statusMarker": "6042767:invisible",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604562/Xm2ph4b59MdUUx9G_hNM2Q/max.png?1690123452"
    },
    "Paralyzed": {
        "Name": "Paralyzed",
        "Description": "Flat-footed. Can't act except to Recall Knowledge or other actions that require only the use of your mind (as determined by GM).",
        "hasValue": false,
        "statusMarker": "6042769:paralysed",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604560/tCCEKGaPkJJpJP24KAlkeQ/max.png?1690123452"
    },
    "Persistent": {
        "Name": "Persistent",
        "Description": "Take [value] untyped damage at the end of each turn. Then, make DC 15 flat check to end the condition.",
        "hasValue": true,
        "statusMarker": "6174223:generic",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351611442/OLZdo4iiIKZzR8cDozoqdQ/max.png?1690126254"
    },
    "Persistent_Fire": {
        "Name": "Persistent_Fire",
        "Description": "Take [value] fire damage at the end of each turn. Then, make DC 15 flat check to end the condition.",
        "hasValue": true,
        "statusMarker": "6176572:fire",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351772322/xU49SGzDUrZmCuN-lfdv7Q/max.png?1690214231"
    },
    "Persistent_Cold": {
        "Name": "Persistent_Cold",
        "Description": "Take [value] cold damage at the end of each turn. Then, make DC 15 flat check to end the condition.",
        "hasValue": true,
        "statusMarker": "6174219:cold",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604923/QL7fcJL6vtUmWIu649jARQ/max.png?1690123630"
    },
    "Persistent_Acid": {
        "Name": "Persistent_Acid",
        "Description": "Take [value] acid damage at the end of each turn. Then, make DC 15 flat check to end the condition.",
        "hasValue": true,
        "statusMarker": "6174216:acid",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604918/WWHnjAEaTS1Cwb5x2bZAaQ/max.png?1690123630"
    },
    "Persistent_Electricity": {
        "Name": "Persistent_Electricity",
        "Description": "Take [value] electricity damage at the end of each turn. Then, make DC 15 flat check to end the condition.",
        "hasValue": true,
        "statusMarker": "6174220:electricity",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604920/z8YikuoUGBaOUtpBnxsw0A/max.png?1690123630"
    },
    "Persistent_Bleed": {
        "Name": "Persistent_Bleed",
        "Description": "Take [value] bleed damage at the end of each turn. Then, make DC 15 flat check to end the condition.",
        "hasValue": true,
        "statusMarker": "6174217:bleed",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604916/fwT7KzjClcnb8Fo36c3a0w/max.png?1690123630"
    },
    "Persistent_Sonic": {
        "Name": "Persistent_Sonic",
        "Description": "Take [value] sonic damage at the end of each turn. Then, make DC 15 flat check to end the condition.",
        "hasValue": true,
        "statusMarker": "6176571:sonic",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351772327/v0RJXlJnYv3FUnhfl4PdGg/max.png?1690214234"
    },
    "Persistent_Bludgeoning": {
        "Name": "Persistent_Bludgeoning",
        "Description": "Take [value] bludgeoning damage at the end of each turn. Then, make DC 15 flat check to end the condition.",
        "hasValue": true,
        "statusMarker": "6174218:bludgeoning",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604924/ri-f66Na072pfX7EGY0JEQ/max.png?1690123630"
    },
    "Persistent_Force": {
        "Name": "Persistent_Force",
        "Description": "Take [value] force damage at the end of each turn. Then, make DC 15 flat check to end the condition.",
        "hasValue": true,
        "statusMarker": "6176573:force",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351772317/TGtTIG0SIE4UVASQpJ2xHw/max.png?1690214229"
    },
    "Persistent_Mental": {
        "Name": "Persistent_Mental",
        "Description": "Take [value] mental damage at the end of each turn. Then, make DC 15 flat check to end the condition.",
        "hasValue": true,
        "statusMarker": "6179321:mental",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351790064/JlvAeG1uvYU4XbGsnijRcQ/max.png?1690223787"
    },
    "Persistent_Negative": {
        "Name": "Persistent_Negative",
        "Description": "Take [value] negative energy damage at the end of each turn. Then, make DC 15 flat check to end the condition.",
        "hasValue": true,
        "statusMarker": "6174225:negative",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604913/iKKC3-1dy9Lxzh4lpoRHpw/max.png?1690123630"
    },
    "Persistent_Piercing": {
        "Name": "Persistent_Piercing",
        "Description": "Take [value] piercing damage at the end of each turn. Then, make DC 15 flat check to end the condition.",
        "hasValue": true,
        "statusMarker": "6174226:piercing",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604927/Sh89z6W5ftrya0yhGKWynA/max.png?1690123630"
    },
    "Persistent_Poison": {
        "Name": "Persistent_Poison",
        "Description": "Take [value] poison damage at the end of each turn. Then, make DC 15 flat check to end the condition.",
        "hasValue": true,
        "statusMarker": "6174227:poison",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604915/es0_8jnun76jEvRGLgIodQ/max.png?1690123630"
    },
    "Persistent_Positive": {
        "Name": "Persistent_Positive",
        "Description": "Take [value] positive energy damage at the end of each turn. Then, make DC 15 flat check to end the condition.",
        "hasValue": true,
        "statusMarker": "6176570:positive",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351772329/tOqrr6aY2wfw1iK2UdJZaA/max.png?1690214235"
    },
    "Persistent_Slashing": {
        "Name": "Persistent_Slashing",
        "Description": "Take [value] slashing damage at the end of each turn. Then, make DC 15 flat check to end the condition.",
        "hasValue": true,
        "statusMarker": "6174229:slashing",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604917/FvypPESW7V-Ou0DNdnX5Ag/max.png?1690123630"
    },
    "Petrified": {
        "Name": "Petrified",
        "Description": "Can't act or sense anything. Has AC 9, Hardness 8.",
        "hasValue": false,
        "statusMarker": "6042771:petrified",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604567/b9HxvOAfHJw5Im28L3n2lw/max.png?1690123452"
    },
    "Prone": {
        "Name": "Prone",
        "Description": "Flat-footed and -2 to attack rolls. Only move actions available are Crawl and Stand. You can Take Cover while pron to gain greater cover (+4 AC) against ranged attacks",
        "hasValue": false,
        "statusMarker": "6042773:prone",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604524/o6w7AXMerLDb3Uq2Ebb0Cw/max.png?1690123452"
    },
    "Quickened": {
        "Name": "Quickened",
        "Description": "Gain 1 extra action at start of each turn.",
        "hasValue": false,
        "statusMarker": "6042776:quickened",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604563/G58j8ywGGMsCCoqSvAD_dQ/max.png?1690123452"
    },
    "Restrained": {
        "Name": "Restrainted",
        "Description": "Flat-footed and immobilized (can't use actions with 'Move' trait). Can't use 'Attack' or 'Manipulate' actions except to Escape or Force Open your bonds. Overrides Grabbed.",
        "hasValue": false,
        "statusMarker": "6042778:restrained",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604553/EsLplJb5XClMrzHOR_hw8g/max.png?1690123452"
    },
    "Sickened": {
        "Name": "Sickened",
        "Description": "-[value] to all checks and DCs, including AC. Can't willingly ingest anything (including elixirs and potions). Can spend 1 action retching to attempt a FORT save against the effect DC to reduce Sickened value by 1 (or 2 on a crit success).",
        "hasValue": true,
        "statusMarker": "6042781:sickened",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604564/1xjBP9MFSd6kOUtjfCl77g/max.png?1690123452"
    },
    "Slowed": {
        "Name": "Slowed",
        "Description": "Regain [value] fewer actions than normal at start of turn.",
        "hasValue": true,
        "statusMarker": "6042783:slowed",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604534/KmFhZcSJo9Y92BWOI_-zBA/max.png?1690123452"
    },
    "Stunned_Actions": {
        "Name": "Stunned_Actions",
        "Description": "Lose [value] actions, possibly over multiple turns. Overrides Slowed.",
        "hasValue": true,
        "statusMarker": "6042785:stunned",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604537/U2u49CbG18B0oZloYHH6Qg/max.png?1690123452"
    },
    "Stunned_Duration": {
        "Name": "Stunned_Duration",
        "Description": "Unable to take actions for the duration. Overrides Slowed.",
        "hasValue": false,
        "statusMarker": "6042785:stunned",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604537/U2u49CbG18B0oZloYHH6Qg/max.png?1690123452"
    },
    "Stupefied": {
        "Name": "Stupefied",
        "Description": "-[value] to all mental checks and DCs (Will saves, spell attack rolls, spell DCs, skills, etc). Casting a spell requires flat check against DC 5 + stupefied value.",
        "hasValue": true,
        "statusMarker": "6042787:stupefied",
        "imgsrc": "https://s3.amazonaws.com/files.d20.io/images/351604556/Eg4_gmTfNSMP53sLwdpjqg/max.png?1690123452"
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
                action: '!refresh sfx',
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
                action: '!conditions init ?{Condition?|Blinded,Blinded|Clumsy,Clumsy|Concealed,Concealed|Confused,Confused|Dazzled,Dazzled|Deafened,Deafened|Doomed,Doomed|Drained,Drained|Encumbered,Encumbered|Enfeebled,Enfeebled|Fascinated,Fascinated|Fatigued,Fatigued|Fleeing,Fleeing|Frightened,Frightened|Grabbed,Grabbed|Immobilized,Immobilized|Invisible,Invisible|Paralyzed,Paralyzed|Persistent,Persistent|Persistent Acid,Persistent_Acid|Persistent Bludgeoning,Persistent_Bludgeoning|Persistent Bleed,Persistent_Bleed|Persistent Cold,Persistent_Cold|Persistent Electricity,Persistent_Electricity|Persistent Fire,Persistent_Fire|Persistent Force,Persistent_Force|Persistent Mental,Persistent_Mental|Persistent Negative,Persistent_Negative|Persistent Piercing,Persistent_Piercing|Persistent Poison,Persistent_Poison|Persistent Positive,Persistent_Positive|Persistent Slashing,Persistent_Slashing|Persistent Sonic,Persistent_Sonic|Petrified,Petrified|Prone,Prone|Quickened,Quickened|Restrained,Restrained|Sickened,Sickened|Slowed,Slowed|Stunned (Actions),Stunned_Actions|Stunned (Duration),Stunned_Duration|Stupefied,Stupefied}',
                istokenaction: true
            },
            {
                name: "Conditions-Show",
                _playerid: gm_id,
                visibleto: gm_id,
                action: '!conditions show',
                istokenaction: true
            },
            {
                name: "Poison-Add",
                _playerid: gm_id,
                visibleto: gm_id,
                action: '!poison add ?{Poison Name?}',
                istokenaction: true
            },
            {
                name: "Exploration",
                _playerid: gm_id,
                visibleto: gm_id,
                action: '!exploration display',
                istokenaction: false
            },
            {
                name: "Tension",
                _playerid: gm_id,
                visibleto: gm_id,
                action: '!tension show',
                istokenaction: false
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
        const status_markers = await graphicObj.get('statusmarkers');
        const imgsrc = await graphicObj.get('imgsrc');
        sendChat("gmtools.js", `&{template:default}{{name=${name}}}{{id=${id}}}{{type=${type}}}{{subtype=${subtype}}}{{pageid=${pageid}}}{{controlledby=${controlledby}}}{{tint_color=${tint_color}}}{{status_markers=${status_markers}}}{{imgsrc=${imgsrc}}}`);

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
                        style: "padding:5px",
                        colspan: "1",
                        width: "20%",
                    },
                    {
                        string: "(15) + 7 = <b>22</b>",
                        style: "padding:5px",
                        colspan: "1"
                        width: "40%"
                    },
                    {
                        string: "Critical Success",
                        style: "color:green; padding:5px",
                        colspan: "1",
                        width: "40%"
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
                    if (typeof item.colspan == 'undefined') { item.colspan = "1"; }
                    rowString = rowString + `<td colspan="${item.colspan}" width="${item.width}" style="${item.style}">${item.string}</td>`;
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

// Function to populate the allSfx Playlist from the Roll20 Jukebox
async function loadAllSfxPlaylist() {
    return new Promise(async (resolve, reject) => {
        try {
            // Get all Sfx
            const allSfx = await findObjs({
                _type: "jukeboxtrack"
            });

            // Populate all sfx into array
            var allSfxPlaylist = [];
            const promises = allSfx.map(async (obj) => {
                allSfxPlaylist.push(obj);
            });
            await Promise.all(promises);

            // Resolve
            if (allSfxPlaylist.length > 0) {
                resolve(allSfxPlaylist);
            } else {
                reject("allSfxPlaylist resolved as empty.");
            }

        } catch (err) {
            log("gmtools.js: loadAllSfxPlaylist: Error: " + err.message);
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

// Function to play a random matching sfx
async function playRandomMatchingSfx(allSfxPlaylist, msg) {
    try {

        // Extract arg
        const argMatches = msg.match(/^!sfx\s*(.*?)\s*$/i);
        if (argMatches) {
            const arg = argMatches[1];

            // Convert arg to regex
            const rgx = new RegExp(`^.*?${arg}.*?:`, "i");

            // Create array of sfx that match the arg
            var matchingSfx = [];
            const promises = allSfxPlaylist.map(async (sfx) => {

                const sfxTitle = await sfx.get('title');

                if (rgx.test(sfxTitle)) {
                    matchingSfx.push(sfx);
                }

            });
            await Promise.all(promises);

            // Confirm there was a match
            if (matchingSfx.length > 0) {

                // Get random obj from playlist
                const randomIndex = await randomInteger(matchingSfx.length - 1);
                const jukeboxObj = matchingSfx[randomIndex];

                // Play it
                jukeboxObj.set("playing", false);
                jukeboxObj.set("softstop", false);
                jukeboxObj.set("playing", true);

            } else {
                log("gmtools.js: playRandomMatchingSfx: Could not find sfx matching '" + msg + "'.");
                sendChat("gmtools.js", "Could not find sfx matching '" + msg + "'.");
            }
        } else {
            log("gmtools.js: playRandomMatchingSfx: Error: argument did not match expected pattern of '!sfx <arg>'. Arg = '" + msg + "'.");
            sendChat("gmtools.js", "playRandomMatchingSfx: Error: argument did not match expected pattern of '!sfx <arg>'. Arg = '" + msg + "'.");
        }

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

// Function to change a token's tint when its HP (bar 3) has changed
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
                style: "padding:5px",
                width: "30%"
            });

            // Roll
            row.push({
                string: `(${result.roll}) + ${saveMod} = <b>${result.total}</b>`,
                style: "padding:5px",
                width: "50%"
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
                style: `color:${outcomeColor}; padding:5px`,
                width: "20%"
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
        if (conditionObj.hasValue === true) {
            addConditionArg = addConditionArg + " Value@?{" + conditionObj.Name + " Value?}";
            sendChat("gmtools.js", `/w gm Provide parameters for ${conditionObj.Name}: [ENTER](!conditions add ${addConditionArg})`);
        } else {
            addConditionArg = addConditionArg + ` Value@None`;
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
    !conditions add Name@Stunned(Duration) tokenIds@-NYn7O6o8eKzweLP1YBC@-NYin6YnQrDwvrx2h1GO Value@None
    !conditions add Name@Fatigued tokenIds@-NYn7O6o8eKzweLP1YBC@-NYin6YnQrDwvrx2h1GO Value@None

From button:
    !conditions add Name@Stunned(Actions) tokenIds@-NYn7O6o8eKzweLP1YBC@-NYin6YnQrDwvrx2h1GO Value@5
    !conditions add Name@Persistent tokenIds@-NYn7O6o8eKzweLP1YBC@-NYin6YnQrDwvrx2h1GO Value@9
*/
async function addCondition(arg) {
    try {
        // Parse argument string
        const regexp = /^!conditions\s*add\s*Name\@(.*?)\s*tokenIds\@(.*?)\s*Value\@(.*?)\s*$/i;
        const matches = arg.match(regexp);
        if (matches) {
            const conditionName = matches[1];
            const tokenIdsString = matches[2];
            const tokenIds = tokenIdsString.split('@');
            var value = matches[3];
            if (value === "None") { value = ''; }

            // Get condition obj
            const conditionObj = conditions[conditionName];

            // Build the top of the table
            var title = conditionObj.Name;
            if (title.match("_")) {
                // If Condition name is like "Stunned_Actions", reformat to "Stunned Actions"
                title = title.replace("_", " ");
            }
            var description = conditionObj.Description;
            if (value.match(/\S/i)) {
                title = title + ' ' + value
                description = description.replace(/\[value\]/i, value);
            }

            var imgString = '';
            if (typeof conditionObj.imgsrc != 'undefined') {
                imgString = `<img src="${conditionObj.imgsrc} height="25" width="25"> `;
            }

            var tableData = {
                style: "width:100%; border: 1px solid purple",
                headers: [
                    {
                        name: `${imgString}${title}`,
                        style: "background-color:purple; color:white; padding:8px; font-size:25px",
                        align: "center",
                        colspan: "1"
                    }
                ],
                columns: [],
                rows: []
            };

            var firstRow = [];
            firstRow.push({
                string: description,
                style: "padding:8px",
                width: "100%"
            });
            var secondRow = [];
            secondRow.push({
                string: "Recipients",
                style: "padding:8px; background-color:purple; color:white; font-size:20px; text-align:center",
                width: "100%"
            });

            tableData.rows.push(firstRow);
            tableData.rows.push(secondRow);

            // Loop through tokens
            await Promise.all(tokenIds.map(async (tokenId) => {
                // Get token properties
                const tokenObj = await getObj('graphic', tokenId);
                const tokenName = await tokenObj.get('name');
                const currentGmNotes = await tokenObj.get('gmnotes');  // ex:  [condition:Slowed value:1] [condition:Persistent Fire value:9]

                // Check if exact condition is already there
                const rgx = new RegExp(`\\[condition\\:${conditionObj.Name}\\svalue\\:${value}\\]`, "i");
                if (currentGmNotes.match(rgx)) {
                    // It's there - do nothing
                    log(`addCondition: ${tokenName} already has condition: ${conditionObj.Name} ${value}`);
                    sendChat("gmtools.js", `addCondition: ${tokenName} already has condition: ${conditionObj.Name} ${value}`);
                } else {
                    // It's not there - add it to gm notes
                    var newGmNotes = currentGmNotes + ` [condition:${conditionObj.Name} value:${value}]`;
                    await tokenObj.set('gmnotes', newGmNotes);

                    // And add status marker IF status marker is not already present
                    // For some reason, adding custom imported statusmarker uses convention "6042737:clumsy", but removing uses "clumsy::6042737"
                    // This seems like a bug. In case it gets fixed in the future, we will account for both conventions
                    const statusA = conditionObj.statusMarker;
                    const parts = statusA.split(":");
                    const statusB = parts[1] + "::" + parts[0];
                    const hasStatusA = await tokenObj.get(`status_${statusA}`);
                    const hasStatusB = await tokenObj.get(`status_${statusB}`);
                    if (! (hasStatusA || hasStatusB)) {
                        tokenObj.set(`status_${conditionObj.statusMarker}`, true);
                    }

                    // And add to the table
                    var row = [];
                    row.push({
                        string: tokenName,
                        style: "padding:5px; font-size:14px",
                        width: "100%"
                    });
                    tableData.rows.push(row);
                }
            }));

            // Build the table
            var table = await HTMLBuilder(tableData, false);

            // Add UNDO button to bottom of table
            var valueString = value;
            if (value === '') { valueString = 'None'; }
            const undoButton = `[UNDO](!conditions remove Name@${conditionObj.Name} tokenIds@${tokenIdsString} Value@${valueString})`;
            table = table + `<tr><td style="padding:10px; background-color:purple; color:white" font-size:18px" align="center">${undoButton}</td></tr></table>`

            // Display
            sendChat("gmtools.js", table);

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

/* Function to take string argument from a button and remove a poison
Ex arg:  !conditions remove Name@Stunned(Duration) tokenIds@-NYn7O6o8eKzweLP1YBC@-NYin6YnQrDwvrx2h1GO Value@None

*/
async function removeCondition(arg) {
    try {
        // Parse argument string
        const regexp = /^!conditions\s*remove\s*Name\@(.*?)\s*tokenIds\@(.*?)\s*Value\@(.*?)\s*$/i;
        const matches = arg.match(regexp);
        if (matches) {
            const conditionName = matches[1];
            const tokenIdsString = matches[2];
            const tokenIds = tokenIdsString.split('@');
            var value = matches[3];
            if (value === "None") { value = ''; }

            // Get condition obj
            const conditionObj = conditions[conditionName];

            // Loop through tokens
            _.each(tokenIds, async (tokenId) => {
                // Get token properties
                const tokenObj = await getObj('graphic', tokenId);
                const tokenName = await tokenObj.get('name');
                const currentGmNotes = await tokenObj.get('gmnotes');  // ex:  [condition:Slowed value:1] [condition:Persistent Fire value:9]

                // Remove from gmnotes
                const rgx = new RegExp(`\\[condition\\:${conditionObj.Name}\\svalue\\:${value}\\]`, "i");
                var newGmNotes = currentGmNotes.replace(rgx, "");
                await tokenObj.set('gmnotes', newGmNotes);


                // Remove status marker if no other conditions with the same status marker are present in gmnotes
                // For some reason, adding custom imported statusmarker uses convention "6042737:clumsy", but removing uses "clumsy::6042737"
                // This seems like a bug. In case it gets fixed in the future, we will account for both conventions
                const r = new RegExp(`${conditionObj.Name}`, "i");
                if (!newGmNotes.match(r)) {
                    const statusA = conditionObj.statusMarker;
                    const parts = statusA.split(":");
                    const statusB = parts[1] + "::" + parts[0];
                    tokenObj.set(`status_${statusA}`, false);
                    tokenObj.set(`status_${statusB}`, false);
                }

                // Log the removal
                var conditionString = conditionObj.Name;
                conditionString.replace("_", " ");
                if (value.match(/\S/i)) {
                    conditionString = conditionString + " " + value;
                }
                log(`gmtools.js: removeCondition: Removed ${conditionString} from ${tokenName}`);
                sendChat("gmtools.js", `Removed ${conditionString} from ${tokenName}`);

            });
        }
        

    } catch (err) {
        log("removeCondition: Error: " + err.message);
        sendChat("gmtools.js", "removeCondition: Error: " + err.message);
    }
}

/* Function to take a selected token and display all of its active conditions in the chat
Conditions are taken from the token's gmnotes which look like this:
      [condition:Blinded value:] [condition:Persistent_Positive value:3] [condition:Persistent_Slashing value:8] [condition:Persistent_Fire value:10]
A button is provided next to each condition to remove it with this command:
      !conditions remove Name@Stunned(Duration) tokenIds@-NYn7O6o8eKzweLP1YBC Value@None
*/
async function showConditions(selectedToken) {
    try {
        // Get token attributes
        const tokenObj = await getObj('graphic', selectedToken._id);
        const tokenName = await tokenObj.get('name');
        const gmNotes = await tokenObj.get('gmnotes');

        // Parse conditions from gm notes into conditionsArray (an array of condition objects) and poisonsArray (an array of poison objects)
        const breakpoint = /\].*?\[/
        var gmNotesArray = await gmNotes.split(breakpoint);
        var conditionsArray = [];
        var poisonsArray = [];

        await Promise.all(gmNotesArray.map(async (conditionString) => {

            conditionString = conditionString.replace("[", "");
            conditionString = conditionString.replace("]", "");

            // conditionString ex: condition:Blinded value:
            //                     condition:Persistent_Positive value:3
            //                     condition:Persistent_Slashing value:8
            //                     condition:Persistent_Fire value:10
            //                     poison:Giant Centipede Venom stage:1

            const nameRgx = /condition\:(.*?)\s+/i;
            const nameMatches = conditionString.match(nameRgx);
            const valueRgx = /value\:([0-9]*)/i;
            const valueMatches = conditionString.match(valueRgx);

            const poisonRgx = /poison\:(.*?)\s*stage\:([0-9]*)/i;
            const poisonMatches = conditionString.match(poisonRgx);

            var conditionValue = 'None';
            if (valueMatches) {
                conditionValue = valueMatches[1];
            }

            if (nameMatches) {
                var conditionObj = conditions[nameMatches[1]];
                if (typeof conditionObj != 'undefined') {
                    conditionObj.currentValue = conditionValue;
                    conditionsArray.push(conditionObj);
                } else {
                    log(`gmtools.js: showConditions: ERROR: Unexpected condition name: '${nameMatches[1]}' in gmnotes for token: '${tokenName}'`);
                }
            } else if (poisonMatches) {
                var poisonObj = {
                    "Name": poisonMatches[1],
                    "Stage": poisonMatches[2]
                };
                poisonsArray.push(poisonObj);
            }
        }));

        // Create table starting with conditionsArray
        var tableData = {
            style: "width:100%; border: 1px solid purple",
            headers: [
                {
                    name: `${tokenName} Conditions`,
                    style: "background-color:purple; color:white; padding:8px; font-size:25px",
                    align: "center",
                    colspan: "2"
                }
            ],
            columns: [],
            rows: []
        };

        await Promise.all(conditionsArray.map(async (conditionObj) => {
            /* Example conditionObj:
             {
             "Name": "Confused",
             "Description": "Flat-footed, can't benefit from flanking, can't Delay or Ready, can't use Reactions. All actions must be spent on Strikes or offensive Cantrips against a random target determined by the GM. If there are no targets, you target yourself, automatically hitting. Each time you take damage, you get a flat DC 11 check to overcome the confusion.",
             "hasValue": false,
             "statusMarker": "6042739:confused",
             "currentValue": "None",
             "imgsrc": "https://....."
             }
            */

            // First Row: Left side is condition name, right side is remove button
            var firstRow = [];
            var conditionNameString = (conditionObj.Name).replace("_", " ");
            if (conditionObj.currentValue != 'None') {
                conditionNameString = conditionNameString + " " + conditionObj.currentValue;
            }
            var imgString = '';
            if (typeof conditionObj.imgsrc != 'undefined') {
                imgString = `<img src="${conditionObj.imgsrc}" width="18" height="18"> `;
            }

            const removeButton = `[REMOVE](!conditions remove Name@${conditionObj.Name} tokenIds@${selectedToken._id} value@${conditionObj.currentValue})`

            firstRow.push({
                "string": `${imgString}<b>${conditionNameString}</b>`,
                "style": "padding:5px; text-align: left",
                "colspan": "1",
                "width": "85%"
            });

            firstRow.push({
                "string": removeButton,
                "style": "padding:5px; text-align: right; font-size:10px",
                "colspan": "1",
                "width": "15%"
            });

            // Second Row: Description
            var secondRow = [];
            var desc = conditionObj.Description;
            if (desc.match(/\[value\]/i)) {
                desc = desc.replace(/\[value\]/i, conditionObj.currentValue);
            }
            secondRow.push({
                "string": desc,
                "style": "padding:5px; text-align: left; border-bottom: 1px solid purple",
                "colspan": "2",
                "width": "100%"
            });

            (tableData.rows).push(firstRow);
            (tableData.rows).push(secondRow);
        }));


        // Then add poisons to the table
        await Promise.all(poisonsArray.map(async (poisonObj) => {
            /* Example poison obj:
               {
                   "Name": "Giant Centipede Venom"
                   "Stage": "2"
               }
            */

            // First Row: Left side is poison name, right side is remove button
            var firstRow = [];
            var imgString = `<img src="${conditions["Persistent_Poison"].imgsrc}" width="18" height="18"> `;
            const removeButton = `[REMOVE](!poison remove Name@${poisonObj.Name} tokenIds@${selectedToken._id})`;

            firstRow.push({
                "string": `${imgString}<b>${poisonObj.Name}</b>`,
                "style": "padding:5px; text-align: left",
                "colspan": "1",
                "width": "85%"
            });

            firstRow.push({
                "string": removeButton,
                "style": "padding:5px; text-align: right; font-size:10px",
                "colspan": "1",
                "width": "15%"
            });

            // Second Row:   [-2] [-1] Stage # [+1] [+2]
            var secondRow = [];
            var stage = poisonObj.Stage;
            const plusOneButton = `[+1](!poison advance Name@${poisonObj.Name} Stage@${poisonObj.Stage} Value@1 tokenIds@${selectedToken._id})`;
            const plusTwoButton = `[+2](!poison advance Name@${poisonObj.Name} Stage@${poisonObj.Stage} Value@2 tokenIds@${selectedToken._id})`;
            const minusOneButton = `[-1](!poison regress Name@${poisonObj.Name} Stage@${poisonObj.Stage} Value@1 tokenIds@${selectedToken._id})`;
            const minusTwoButton = `[-2](!poison regress Name@${poisonObj.Name} Stage@${poisonObj.Stage} Value@2 tokenIds@${selectedToken._id})`;



            var stageString = `${minusTwoButton}   ${minusOneButton}   <b>Stage ${stage}</b>   ${plusOneButton}   ${plusTwoButton}`;

            secondRow.push({
                "string": stageString,
                "style": "padding:5px; text-align: left; border-bottom: 1px solid purple",
                "colspan": "1",
                "width": "100%"
            });

            (tableData.rows).push(firstRow);
            (tableData.rows).push(secondRow);

        }));

        const table = await HTMLBuilder(tableData, true);

        sendChat("gmtools.js", table);

    } catch (err) {
        log("showConditions: Error: " + err.message);
        sendChat("gmtools.js", "showConditions: Error: " + err.message);
    }
}

/* Function to add a poison to a token
This is a lot simpler than Conditions because we don't have to do much validation, and don't need additional queries
We're just adding [poison:name stage:1] to the gmnotes, and showCondition will do the rest
*/
async function addPoison(selectedTokens, msg) {
    try {
        // Parse argument from string
        const regex = /^\!poison\sadd\s(.*)$/i;
        const matches = msg.match(regex);
        if (!matches) {
            sendChat("gmtools.js", "addPoison: Error: Message does not match expected pattern.");
            log("gmtools.js: addPoison: Error: Message does not match expected pattern.");
            return;
        } else {
            var poisonName = matches[1];

            // Loop through tokens
            await Promise.all(selectedTokens.map(async (selectedToken) => {
                // Get token properties
                const tokenId = selectedToken._id;
                const tokenObj = await getObj('graphic', tokenId);
                const tokenName = await tokenObj.get('name');
                const currentGmNotes = await tokenObj.get('gmnotes');  // ex:  [condition:Slowed value:1] [poison:Arsenic stage:1]

                // Check if poison is already there
                const rgx = new RegExp(`\\[poison\\:${poisonName}`, "i");
                if (currentGmNotes.match(rgx)) {
                    // It's already there - do nothing
                    sendChat("gmtools.js", `${tokenName} is already afflicted with ${poisonName}.`)

                } else {
                    // It's not there - add new poison to the gm notes
                    var newGmNotes = currentGmNotes + ` [poison:${poisonName} stage:1]`;
                    await tokenObj.set('gmnotes', newGmNotes);

                    // And add status marker IF status marker is not already present
                    // For some reason, adding custom imported statusmarker uses convention "6042737:clumsy", but removing uses "clumsy::6042737"
                    // This seems like a bug. In case it gets fixed in the future, we will account for both conventions
                    const statusA = conditions["Persistent_Poison"].statusMarker;
                    const parts = statusA.split(":");
                    const statusB = parts[1] + "::" + parts[0];
                    const hasStatusA = await tokenObj.get(`status_${statusA}`);
                    const hasStatusB = await tokenObj.get(`status_${statusB}`);
                    if (!(hasStatusA || hasStatusB)) {
                        tokenObj.set(`status_${conditions["Persistent_Poison"].statusMarker}`, true);
                    }

                    // And announce that we have added the poison
                    sendChat("gmtools.js", `'${poisonName}' applied to ${tokenName}.`)
                }
            }));
        }
    } catch (err) {
        log("addPoison: Error: " + err.message);
        sendChat("gmtools.js", "addPoison: Error: " + err.message);
    }
}

/* Function to take string argument from a button and remove a poison
Ex arg:  !poison remove Name@Giant Centipede Venom tokenIds@-NYn7O6o8eKzweLP1YBC@-NYin6YnQrDwvrx2h1GO

*/
async function removePoison(arg) {
    try {
        // Parse argument string
        const regexp = /^!poison\s*remove\s*Name\@(.*?)\s*tokenIds\@(.*?)\s*$/i;
        const matches = arg.match(regexp);
        if (matches) {
            const poisonName = matches[1];
            const tokenIdsString = matches[2];
            const tokenIds = tokenIdsString.split('@');

            // Loop through tokens
            _.each(tokenIds, async (tokenId) => {
                // Get token properties
                const tokenObj = await getObj('graphic', tokenId);
                const tokenName = await tokenObj.get('name');
                const currentGmNotes = await tokenObj.get('gmnotes');  // ex:  [condition:Slowed value:1] [poison:Giant Centipede Venom stage:2]

                // Remove from gmnotes
                const rgx = new RegExp(`\\[poison\\:${poisonName}\\sstage\\:[0-9]*\\]`, "i");
                var newGmNotes = currentGmNotes.replace(rgx, "");
                await tokenObj.set('gmnotes', newGmNotes);


                // Remove status marker if no other poisons are afflicting the token
                // For some reason, adding custom imported statusmarker uses convention "6042737:clumsy", but removing uses "clumsy::6042737"
                // This seems like a bug. In case it gets fixed in the future, we will account for both conventions
                const r = new RegExp(`poison`, "i");
                if (!newGmNotes.match(r)) {
                    const statusA = conditions["Persistent_Poison"].statusMarker;
                    const parts = statusA.split(":");
                    const statusB = parts[1] + "::" + parts[0];
                    tokenObj.set(`status_${statusA}`, false);
                    tokenObj.set(`status_${statusB}`, false);
                }

                // Log the removal
                log(`gmtools.js: removePoison: Removed ${poisonName} from ${tokenName}`);
                sendChat("gmtools.js", `Removed '${poisonName}' from ${tokenName}`);

            });
        }


    } catch (err) {
        log("removeCondition: Error: " + err.message);
        sendChat("gmtools.js", "removeCondition: Error: " + err.message);
    }
}

async function advancePoison(arg) {
    try {
        // Parse argument string
        const regexp = /^!poison\s*advance\s*Name\@(.*?)\s*Stage@([0-9]*?)\s*Value@([0-9])\s*tokenIds\@(.*?)\s*$/i;
        const matches = arg.match(regexp);
        if (matches) {
            // Map arg data
            const poisonName = matches[1];
            const oldStage = matches[2];
            const addValue = matches[3];
            const tokenIdsString = matches[4];

            const tokenIds = tokenIdsString.split('@');

            // Calc new stage
            var oldStageNumber = await parseInt(oldStage);
            var addNumber = await parseInt(addValue);
            var newStage = oldStageNumber + addNumber;

            // Loop through tokens
            _.each(tokenIds, async (tokenId) => {
                // Get token properties
                const tokenObj = await getObj('graphic', tokenId);
                const tokenName = await tokenObj.get('name');
                const currentGmNotes = await tokenObj.get('gmnotes');  // ex:  [condition:Slowed value:1] [poison:Giant Centipede Venom stage:2]

                // Create new data
                const newPoison = `[poison:${poisonName} stage:${newStage}]`

                // Replace old poison data with new poison data
                const rgx = new RegExp(`\\[poison\\:${poisonName}\\sstage\\:${oldStage}\\]`, "i");
                var newGmNotes = currentGmNotes.replace(rgx, newPoison);
                await tokenObj.set('gmnotes', newGmNotes);

                // Log the advance
                log(`gmtools.js: advancePoison: Advanced ${poisonName} on ${tokenName} to Stage ${newStage}`);
                sendChat("gmtools.js", `Advanced ${tokenName}'s '${poisonName}' to Stage ${newStage}`);

            });

        }

    } catch (err) {
        log("advancePoison: Error: " + err.message);
        sendChat("gmtools.js", "advancePoison: Error: " + err.message);
    }
}

async function regressPoison(arg) {
    try {
        // Parse argument string
        const regexp = /^!poison\s*regress\s*Name\@(.*?)\s*Stage@([0-9]*?)\s*Value@([0-9])\s*tokenIds\@(.*?)\s*$/i;
        const matches = arg.match(regexp);
        if (matches) {
            // Map arg data
            const poisonName = matches[1];
            const oldStage = matches[2];
            const subtractValue = matches[3];
            const tokenIdsString = matches[4];

            const tokenIds = tokenIdsString.split('@');

            // Calc new stage
            var oldStageNumber = await parseInt(oldStage);
            var subtractNumber = await parseInt(subtractValue);
            var newStage = oldStageNumber - subtractNumber;

            // Loop through tokens
            _.each(tokenIds, async (tokenId) => {
                // Get token properties
                const tokenObj = await getObj('graphic', tokenId);
                const tokenName = await tokenObj.get('name');
                const currentGmNotes = await tokenObj.get('gmnotes');  // ex:  [condition:Slowed value:1] [poison:Giant Centipede Venom stage:2]
                
                if (newStage <= 0) {
                    // If new stage is <= 0, the poison should actually be removed.
                    const removeArg = `!poison remove Name@${poisonName} tokenIds@${tokenId}`;
                    sendChat("gmtools.js", `${tokenName}'s ${poisonName} regressed to Stage 0 or lower. Removing the poison.`);
                    removePoison(removeArg);
                } else {
                    // Else decrease stage #
                    // Create new data
                    const newPoison = `[poison:${poisonName} stage:${newStage}]`

                    // Replace old poison data with new poison data
                    const rgx = new RegExp(`\\[poison\\:${poisonName}\\sstage\\:${oldStage}\\]`, "i");
                    var newGmNotes = currentGmNotes.replace(rgx, newPoison);
                    await tokenObj.set('gmnotes', newGmNotes);

                    // Log the regress
                    log(`gmtools.js: regressPoison: Regressed ${poisonName} on ${tokenName} to Stage ${newStage}`);
                    sendChat("gmtools.js", `Regressed ${tokenName}'s '${poisonName}' to Stage ${newStage}`);
                }



            });

        }

    } catch (err) {
        log("advancePoison: Error: " + err.message);
        sendChat("gmtools.js", "advancePoison: Error: " + err.message);
    }
}

/* Function to display the Exploration Activity options to a player
Buttons in the table allow the player to choose which Activity they want their character to assume
      [CHOOSE](!exploration choose <playerId> <speakingas> <activityName>)
*/
async function ExplorationShowChoices(playerId) {
    try {
        // First we need to verify the player is using "Speaking As" which matches a character in the journal
        const playerObj = await getObj('player', playerId);
        const speakingAs = await playerObj.get('speakingas');
        const playerName = await playerObj.get('_displayname');
        const regex = /^character\|(.*)$/i;
        const characterMatches = speakingAs.match(regex);
        if (characterMatches) {
            // Player is speaking as a character

            // Build Exploration Table data
            const tableData = {
                style: "width:100%; border: 1px solid purple",
                headers: [
                    {
                        name: `Exploration Activities`,
                        style: "background-color:purple; color:white; padding:8px; font-size:25px",
                        align: "center",
                        colspan: "2"
                    }
                ],
                columns: [],
                rows: []
            }

            
            await Promise.all(exploration_activities.map(async (activity) => {
                var firstRow = [];
                var chooseButton = `[CHOOSE](!exploration choose ${speakingAs} ${activity.Name})`;
                firstRow.push({
                    "string": `<b>${activity.Name}</b>`,
                    "style": "padding:5px; text-align: left",
                    "colspan": "1",
                    "width": "85%"
                });
                firstRow.push({
                    "string": chooseButton,
                    "style": "padding:5px; text-align: right; font-size:10px",
                    "colspan": "1",
                    "width": "15%"
                });

                var secondRow = [];
                secondRow.push({
                    "string": activity.Description,
                    "style": "padding:5px; text-align: left; border-bottom: 1px solid purple",
                    "colspan": "2",
                    "width": "100%"
                });

                tableData.rows.push(firstRow);
                tableData.rows.push(secondRow);
            }));

            // Create Table
            const table = await HTMLBuilder(tableData);

            // Display Exploration Table to player
            sendChat("gmtools.js", `/w ${playerName} ${table}`);
            
        } else {
            // Player is not speaking as a character
            sendChat("gmtools.js", `/w ${playerName} To use the Exploration Activities menu, you must set your "As:" value (below this window) to your character.`);
        }
    } catch (err) {
        log("ExplorationShowChoices: Error: " + err.message);
        sendChat("gmtools.js", "ExplorationShowChoices: Error: " + err.message);
    }
}

/* Function to take a player's choice of Exploration Activity and store it as data in the 'Exploration' Handout
   The handout gets locked when changes are being applied, to prevent multiple players from editing at the same time.
*/
async function ExplorationChoose(arg, retryCount) {
    try {
        // Parse the argument
        // arg ex: !exploration choose speakingAs activityName
        const regex = /^!exploration\schoose\s(.*?)\s(.*?)$/i;
        const matches = arg.match(regex);
        if (matches) {
            const speakingAs = (matches[1]).replace(/character\|/i, "");
            const characterObj = await getObj('character', speakingAs);
            const characterName = await characterObj.get('name');
            const activityName = matches[2];

            // Find Handout obj
            const handoutObjs = await findObjs({
                _type: 'handout',
                name: 'Exploration'
            });
            if ((typeof handoutObjs != 'undefined') && (handoutObjs.length == 1)) {
                // Unique 'Exploration' handout found
                const handout = handoutObjs[0];
                handout.get('gmnotes', (gmnotes) => {

                    // If it's locked, retry 100ms later (Stop trying after 20 attempts)
                    if (gmnotes.match(/^LOCKED/)) {
                        if (retryCount < 10) {
                            retryCount++;
                            setTimeout(() => {
                                ExplorationChoose(arg, retryCount);
                            }, 100);
                        } else {
                            log("gmtools.js: ExplorationChoose: Giving up after retry counter reached " + retryCount);
                            sendChat("gmtools.js", `ExplorationChoose: Giving up after retry counter reached ${retryCount}`);
                        }

                    } else {
                        // If it's not locked, lock it and proceed
                        var lockedGmNotes = "LOCKED" + gmnotes;
                        handout.set('gmnotes', lockedGmNotes);

                        const r = new RegExp(`\\[${speakingAs}:(.*?)\\]`);
                        const matches = gmnotes.match(r);
                        if (matches) {
                            // Replace old role with new one
                            gmnotes = gmnotes.replace(matches[0], `[${speakingAs}:${activityName}]`);
                        } else {
                            // Or add role
                            gmnotes = gmnotes + `[${speakingAs}:${activityName}]`;
                        }

                        // Set new gmnotes
                        handout.set('gmnotes', gmnotes);

                        // Log to chat
                        sendChat(characterName, `/desc changed their Exploration Activity to ${activityName}.`);
                    }


                });

            } else {
                // Unique 'Exploration' handout not found
                log("ExplorationChoose: Error: Failed to find a singular Exploration handout (check for absence or duplicates)");
                sendChat("gmtools.js", "ExplorationChoose: Error: Failed to find a singular Exploration handout (check for absence or duplicates)");
            }
        } else {
            log("ExplorationChoose: Unexpected argument: " + arg);
            sendChat("gmtools.js", "ExplorationChoose: Unexpected argument: " + arg);
        }

    } catch (err) {
        log("ExplorationChoose: Error: " + err.message);
        sendChat("gmtools.js", "ExplorationChoose: Error: " + err.message);
    }
}

// Function to display the data from the Exploration handout as a table
async function ExplorationDisplay() {
    try {
        // Get handout data
        const handoutObjs = await findObjs({
            _type: 'handout',
            name: 'Exploration'
        });
        if ((typeof handoutObjs != 'undefined') && (handoutObjs.length == 1)) {
            const handout = handoutObjs[0];
            handout.get('gmnotes', async (gmnotes) => {

                // Parse gmnotes into an array of id:activity pairs
                gmnotes = gmnotes.replace(/\]\s*\[/g, "@");
                gmnotes = gmnotes.replace("[", "");
                gmnotes = gmnotes.replace("]", "");
                var idActivityPairs = gmnotes.split("@");

                // Convert id:activity pairs to name:activity pairs
                var characterActivityPairs = [];
                await Promise.all(idActivityPairs.map(async (pair) => {
                    const split = pair.split(":");
                    const id = split[0];
                    const activity = split[1];
                    const characterObj = await getObj('character', id);
                    const characterName = await characterObj.get('name');
                    characterActivityPairs.push(`${characterName}:${activity}`);
                }));
                
                // Map exploration activities to character names
                // ex:  { Scout: [ 'Bob', 'Joe' ], Defend: [ 'Jim' ], Investigate: [ 'John' ] }
                var activityToCharactersMap = {};
                _.each(characterActivityPairs, (str) => {
                    const [id, activity] = str.split(":");
                    if (!activityToCharactersMap[activity]) {
                        activityToCharactersMap[activity] = [];
                    }
                    activityToCharactersMap[activity].push(id);
                });

                // Build final array of objects to be used for table
                var tableActivities = [];
                _.each(exploration_activities, (activity) => {
                    const { Name, Description } = activity;
                    if (activityToCharactersMap[Name]) {
                        tableActivities.push({
                            Name,
                            Description,
                            Characters: activityToCharactersMap[Name]
                        });
                    }
                });

                /* Example tableActivities:
                 * [
                        {
                        "Name":"Investigate",
                        "Description":"Use Recall Knowledge to discover clues among the various things you see and engage with.",
                        "Characters":["Cawlo"]
                        },
                        {
                        "Name":"Search",
                        "Description":"Repeatedly roll Perception to spot hidden doors, traps, and hazards.",
                        "Characters":["Marshu","Richard"]
                        }
                    ]
                */

                // Build table
                const tableData = {
                    style: "width:100%; border: 1px solid purple",
                    headers: [
                        {
                            name: `Exploration Activities`,
                            style: "background-color:purple; color:white; padding:8px; font-size:25px",
                            align: "center",
                            colspan: "1"
                        }
                    ],
                    columns: [],
                    rows: []
                }
                await Promise.all(tableActivities.map(async (activity) => {
                    var nameString = '';
                    _.each(activity.Characters, (name) => {
                        if (nameString == '') {
                            nameString = name;
                        } else {
                            nameString = nameString + `, ${name}`;
                        }
                    })
                    var firstRow = [];
                    firstRow.push({
                        "string": `<b>${activity.Name}</b>`,
                        "style": "padding:5px; text-align: left; background-color: purple; color:white",
                        "colspan": "1",
                        "width": "100%"
                    });
                    var secondRow = [];
                    secondRow.push({
                        "string": `<b>${nameString}</b>`,
                        "style": "padding:5px; text-align: left",
                        "colspan": "1",
                        "width": "100%"
                    });

                    var thirdRow = [];
                    thirdRow.push({
                        "string": activity.Description,
                        "style": "padding:5px; text-align: left; border-bottom: 1px solid purple",
                        "colspan": "1",
                        "width": "100%"
                    });

                    tableData.rows.push(firstRow);
                    tableData.rows.push(secondRow);
                    tableData.rows.push(thirdRow);
                }));

                // Create Table
                const table = await HTMLBuilder(tableData);

                // Display it
                sendChat("gmtools.js", table);

            });

        } else {
            // Unique 'Exploration' handout not found
            log("ExplorationDisplay: Error: Failed to find a singular Exploration handout (check for absence or duplicates)");
            sendChat("gmtools.js", "ExplorationDisplay: Error: Failed to find a singular Exploration handout (check for absence or duplicates)");
        }
    } catch (err) {
        log("ExplorationDisplay: Error: " + err.message);
        sendChat("gmtools.js", "ExplorationDisplay: Error: " + err.message);
    }
}

async function tensionShow() {
    try {
        // Find Handout obj
        const handoutObjs = await findObjs({
            _type: 'handout',
            name: 'Tension'
        });
        if ((typeof handoutObjs != 'undefined') && (handoutObjs.length == 1)) {
            // Unique 'Tension' handout found
            const handout = handoutObjs[0];
            handout.get('gmnotes', async (gmnotes) => {

                const regex = /([0-5])/i;
                const matches = gmnotes.match(regex);
                if (matches) {
                    var currentTension = parseInt(matches[1]);

                    // Build display table
                    var tableData = {
                        style: "width:100%; border: 1px solid black",
                        headers: [
                            {
                                name: `TENSION: ${currentTension}`,
                                style: "background-color:black; color:white; padding:8px; font-size:30px",
                                align: "center",
                                colspan: "3"
                            }
                        ],
                        columns: [],
                        rows: []
                    };

                    const skullEmoji = `<img src=${tension_imgsrc} height="25" width="25"> `

                    var emojiString = '';
                    for (var i = 0; i < currentTension; i++) {
                        emojiString = emojiString + ' ' + skullEmoji;
                    }

                    var firstRow = [];
                    firstRow.push({
                        "string": emojiString,
                        "style": "padding:5px; text-align: center; border-bottom: 1px solid black; font-size:20px",
                        "colspan": "3",
                        "width": "100%"
                    });
                    (tableData.rows).push(firstRow);

                    var secondRow = [];
                    secondRow.push({
                        "string": `[RECKLESS BEHAVIOR](!tension roll ${currentTension})`,
                        "style": "padding:5px; text-align: center; border-bottom: 1px solid black; font-size:14px",
                        "colspan": "1",
                        "width": "33%"
                    });

                    secondRow.push({
                        "string": `[TIME CONSUMPTION](!tension add ${currentTension} ?{Increase Tension})`,
                        "style": "padding:5px; text-align: center; border-bottom: 1px solid black; font-size:14px",
                        "colspan": "1",
                        "width": "33%"
                    });

                    secondRow.push({
                        "string": "[CLEAR](!tension clear)",
                        "style": "padding:5px; text-align: center; border-bottom: 1px solid black; font-size:14px",
                        "colspan": "1",
                        "width": "33%"
                    });

                    (tableData.rows).push(secondRow);



                    const table = await HTMLBuilder(tableData, true);

                    sendChat("gmtools.js", table);


                } else {
                    log("tensionShow: Error: Tension handout contains characters outside of '0 - 5'.");
                    sendChat("gmtools.js", "tensionShow: Error: Tension handout contains characters outside of '0 - 5'.");
                }
            });

        } else {
            // Unique 'Tension' handout not found
            log("tensionShow: Error: Failed to find a singular Tension handout (check for absence or duplicates)");
            sendChat("gmtools.js", "tensionShow: Error: Failed to find a singular Tension handout (check for absence or duplicates)");
        }

    } catch (err) {
        log("tensionShow: Error: " + err.message);
        sendChat("gmtools.js", "tensionShow: Error: " + err.message);
    }
}

async function tensionRoll(currentTension) {
    try {
        // For each point of tension, roll a d6. If any land on 1, something bad happens.
        var results = [];
        var somethingBadHappens = false;
        for (let i = 0; i < currentTension; i++) {
            var roll = randomInteger(6);
            if (roll == 1) {
                somethingBadHappens = true;
            }
            results.push(roll);
        }
        var resultString = '';
        var firstResult = true;
        for (let i = 0; i < results.length; i++) {
            if (firstResult) {
                resultString = resultString + `${results[i]}`;
                firstResult = false;
            } else {
                resultString = resultString + `, ${results[i]}`;
            }
        }

        sendChat("Tension", "/desc results: " + resultString);

        if (somethingBadHappens) {
            sendChat("SOMETHING", "/desc BAD HAPPENS...");
        }
        

    } catch (err) {
        log("gmtools.js: tensionRoll: Error: " + err.message);
        sendChat("gmtools.js", "tensionRoll: Error: " + err.message);
    }
}

async function tensionAdd(currentTension, addAmount) {
    try {
        // Convert to int
        const currentInt = parseInt(currentTension);
        const addInt = parseInt(addAmount);
        if ((typeof addInt != 'undefined') && (typeof currentInt != 'undefined')) {
            var newTension = currentInt + addInt;
            if (newTension >= 6) {
                sendChat("Tension", "/desc hit 6!");
                tensionRoll(6);
                tensionClear();
            } else {
                // Find Handout obj
                const handoutObjs = await findObjs({
                    _type: 'handout',
                    name: 'Tension'
                });
                const handout = handoutObjs[0];
                // Set new tension
                sendChat("Tension", "/desc increased to " + newTension + "!");
                handout.set("gmnotes", newTension);
            }
        }
    } catch (err) {
        log("tensionAdd: Error: " + err.message);
        sendChat("gmtools.js", "tensionAdd: Error: " + err.message);
    }
}

async function tensionClear() {
    try {
        // Find Handout obj
        const handoutObjs = await findObjs({
            _type: 'handout',
            name: 'Tension'
        });
        if ((typeof handoutObjs != 'undefined') && (handoutObjs.length == 1)) {
            // Unique 'Tension' handout found
            const handout = handoutObjs[0];
            handout.set('gmnotes', '0');
            sendChat("Tension", "/desc cleared to 0.");
        }

    } catch (err) {
        log("tensionClear: Error: " + err.message);
        sendChat("gmtools.js", "tensionClear: Error: " + err.message);
    }
}


on('ready', async function () {
    "use strict";

    // 25 HP Tint colors which each correspond to a 2% window from 1% HP to 50% HP (ex: 1-2%, 3-4%, etc.)
    // red -> orange -> yellow
    const hpTints = [
        "#ff0202", "#ff2500", "#ff3700", "#ff4500", "#ff5100",
        "#ff5c00", "#ff6700", "#ff7100", "#ff7a00", "#ff8300",
        "#ff8c00", "#ff9500", "#ff9e00", "#ffa600", "#ffae00",
        "#ffb600", "#ffbe00", "#ffc600", "#ffce00", "#ffd600", 
        "#ffde00", "#ffe500", "#ffed00", "#fff500", "#fffc00"
    ]

    // Load sfx playlists
    var deathSfxPlaylist = await loadDeathSfxPlaylist().catch((err) => {
        log("gmtools.js: Failed to load DeathSfxPlaylist.");
    });
    var allSfxPlaylist = await loadAllSfxPlaylist().catch((err) => {
        log("gmtools.js: Failed to load allSfxPlaylist.")
    })

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

            // Refresh Sfx Playlists (GM Only)
            if ((msg.content.match(/^!refresh sfx$/i)) && (playerIsGM(msg.playerid))) {
                deathSfxPlaylist = await loadDeathSfxPlaylist();
                allSfxPlaylist = await loadAllSfxPlaylist();
            }

            // Play Matching Sfx
            if ((msg.content.match(/!sfx\s*\S+/i))) {
                playRandomMatchingSfx(allSfxPlaylist, msg.content);
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

            // Add Condition (GM Only, called internally or with button)
            if ((msg.content.match(/^!conditions\sadd/i)) && (playerIsGM(msg.playerid))) {
                addCondition(msg.content);
            }

            // Remove Condition (GM Only, called with button)
            if ((msg.content.match(/^!conditions\sremove/i)) && (playerIsGM(msg.playerid))) {
                removeCondition(msg.content);
            }

            // Show Conditions (GM Only, called with macro, single token only)
            if ((msg.content.match(/^!conditions\sshow/i)) && (playerIsGM(msg.playerid))) {
                if ((msg.selected).length === 1) {
                    showConditions(msg.selected[0]);
                } else {
                    log("gmtools.js: Show Conditions only works for a single token.");
                    sendChat("gmtools.js", "Show Conditions only works for a single token.");
                }
            }

            // Add Poison (GM Only, called with macro)
            if ((msg.content.match(/^!poison\sadd/i)) && (typeof msg.selected != 'undefined') && (playerIsGM(msg.playerid))) {
                addPoison(msg.selected, msg.content);
            }

            // Remove Poison (GM Only, called with button)
            if ((msg.content.match(/^!poison\sremove/i)) && (playerIsGM(msg.playerid))) {
                removePoison(msg.content);
            }

            // Advance Poison (GM Only, called with button)
            if ((msg.content.match(/^!poison\sadvance/i)) && (playerIsGM(msg.playerid))) {
                advancePoison(msg.content);
            }

            // Regress Poison (GM Only, called with button)
            if ((msg.content.match(/^!poison\sregress/i)) && (playerIsGM(msg.playerid))) {
                regressPoison(msg.content);
            }

            // Show Exploration Activity Menu (Player-accessible, called with macro)
            if ((msg.content.match(/^!exploration\s*$/i))) {
                ExplorationShowChoices(msg.playerid);
            }

            // Player chooses an Exploration Activity (called by button)
            if ((msg.content.match(/^!exploration choose/i))) {
                ExplorationChoose(msg.content, 0);
            }

            // Display Exploration Activity (GM Only, called with macro)
            if ((msg.content.match(/^!exploration display/i)) && (playerIsGM(msg.playerid))) {
                ExplorationDisplay();
            }

            // Show Tension Pool (GM Only, called with macro)
            if ((msg.content.match(/^!tension show/i)) && (playerIsGM(msg.playerid))) {
                tensionShow();
            }

            // Tension - Reckless Behavior Button
            if ((msg.content.match(/^!tension roll [1-6]/i)) && (playerIsGM(msg.playerid))) {
                var tensionRollRegex = /([1-6])/;
                var tensionRollMatches = msg.content.match(tensionRollRegex);
                if (tensionRollMatches) {
                    tensionRoll(tensionRollMatches[1]);
                }
            }

            // Tension - Time Consumption Button
            if ((msg.content.match(/^!tension add/i)) && (playerIsGM(msg.playerid))) {
                var addRegex = /([0-5])\s([0-9]*)/;
                var addMatches = msg.content.match(addRegex);
                if (addMatches) {
                    tensionAdd(addMatches[1], addMatches[2]);
                }
            }

            // Tension - Clear Button
            if ((msg.content.match(/^!tension clear/i)) && (playerIsGM(msg.playerid))) {
                tensionClear();
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
