# Roll20 GMTools
## Overview
GMTools.js is a script that can be loaded into Roll20 to automate various tasks that a GM must often perform when running a game of Pathfinder 2, as well as enrich the game with additional features.


## Features
Use the !reset command in chat to create all of the macros used by this script. This will also delete existing macros with the same names.

### Debug (Macro - Token Action)
Displays Id, Type, Subtype, Pageid, Controlledby, and Tint_color of the selected token. Only works if a single token is selected.

### Reset-Sfx (Macro)
Refreshes the active playlist of Death sound effects, allowing you to delete or add them during the game without needing to reload the script.

### Group-Initiative (Macro - Token Action)
Rolls Initiative for the selected token(s), displaying the results in chat and adding each token to the turn order. Assumes each token to have "Bar1_Value" set to it's Initiative modifier.

### Group-Saves (Macro - Token Action)
Rolls Saving Throws for the selected token(s). Tokens with the same image are assumed to have the same Saving Throw modifiers. On execution, the command first queries the GM for the Saving Throw type (Fortitude, Reflex, or Will) and the DC (ex: 17). Then a chat menu is displayed with a "ROLL" button for each Token Group. Pressing a ROLL button queries the GM for the Saving Throw modifier of that Token Group. Then, it rolls all of the saves for the group and displays them in a new table with custom HTML.

### Image-Cycle (Macro - Token Action)
After creating a Rollable Table in Roll20 with multiple images for a token, the Cycle button will increment the token's image by one table item each time (i.e. 1 -> 2 -> 3 -> 1)

### Sound Effect Macro Support
Sound effects uploaded and categorized with the title convention "Category: ..." can be randomly played using a macro with the command "!sfx [Category]". For example, You could have sound effects titled "Fireball: 1", "Fireball: 2", and "Fireball: 3". A macro with the command "!sfx fireball" would play one of those effects at random.

### Death Sound Effects
Treating Bar 3 as HP, any token that drops to 0 HP or lower will trigger a Death sound effect from the Roll20 Jukebox. In order for a Jukebox item to be used as a Death sound effect, it's title needs to begin with "Death:" (ex: "Death: Wilhelm Scream").

### HP Tinting
Treating Bar 3 as HP, any token that drops below 50% HP will be tinted on a gradient of yellow -> orange -> red until they hit 0.

### Conditions-Add (Macro - Token Action)
Add a condition ("Slowed", "Paralyzed", etc.) to one or more selected tokens. This puts an appropriate status marker on the token (requires import of custom status markers) and also stores the full status data in the token's GM notes. For conditions that require additional parameters such as Value (ex. Slowed "2") and/or Type (ex. Persistent "Fire"), a button is provided in the chat for the user to provide the parameters. An UNDO button is also provided to undo the addition of the condition by this macro.

### Conditions-Show (Macro - Token Action)
Display a table of all of the conditions affecting a single token. For each condition, a button is also provided to remove it. For Poisons, there are also buttons that allow you to increase or decrease the Stage of the poison.

### Poison-Add (Macro - Token Action)
Add a poison to one or more selected tokens. This puts an appropriate status marker on the token (requires import of custom status markers) and also stores the full status data in the token's GM notes. This includes a Stage number for the poison, which can be advanced or regressed with a button in the "Conditions-Show" display table.

### Exploration Activities (Macros for player and GM)
Players can use the command "!exploration" to change what Exploration Activity their character is performing. The GM can use the command "!exploration display" to show a summary of the party's exploration activities in the chat. Both of these can be macros.

### Tension Pool
The Tension Pool is a system-agnostic supplement for any tabletop rpg where you want your players to care more about the time they're wasting within a dungeon. The "Tension" macro displays the current Tension, with buttons for Reckless Behavior, Time Consumption, and Clear. To read more about how the Tension Pool works, you can go here: https://theangrygm.com/definitive-tension-pool/

### Hypotenuse Calculator
You can use the "Hypotenuse" macro to calculate the diagonal distance (hypotenuse) from one creature to another, given their relative difference in horizontal and vertical coordinates. This is useful for gauging how far away creatures are from each other during underwater or aerial combat.