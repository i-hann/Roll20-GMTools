# Roll20 GMTools
## Overview
GMTools.js is a script that can be loaded into Roll20 to create and execute various Macros that alleviate some of the busywork of GMing a typical D&D style tabletop game.

The script listens for chat messages that begin with the "!" prefix. These messages can be typed manually, but it's better to use Macro buttons to deliver the messages for you, especially for Token Actions that require tokens to be selected at the time of the message. 

Use the !reset command in chat to create all of the macros used by this script. This will also delete existing macros with the same names.


## Macros

### Group-Initiative (Token Action)
Rolls Initiative for the selected token(s), displaying the results in chat and adding each token to the turn order. Assumes each token to have "Bar1_Value" set to it's Initiative modifier.

### Group-Saves (Token Action) (WIP)
Rolls Saving Throws for the selected token(s). Tokens with the same image are assumed to have the same Saving Throw modifiers. On execution, the command first queries the GM for the Saving Throw type (Fortitude, Reflex, or Will) and the DC (ex: 17). Then a chat menu is displayed with a "ROLL" button for each Token Group. Pressing a ROLL button queries the GM for the Saving Throw modifier of that Token Group. Then, it... (TBD)
