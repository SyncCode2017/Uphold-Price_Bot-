//*********************************************************//
            Uphold Bot
//*********************************************************//

This bot monitors several pairs prices on Uphold API and alerts you when the price
oscillation is above a stipulated threshold. It can handle all valid pairs entered by 
the user at the same time. 

The bot is developed using Node.js 16.15.0 (latest) version and npm packages, which
are axios and alert.
In order to run the bot, ensure you have node.js installed on your system.

//******************************/
    Files in this Folder
//******************************/
- bot.js : main for the code.
- botFunctions.js : it contains the functions for the bot.js to run.
- setParameters.js : this is where the input parameters are set.
- bot.test.js : this is the test file for all the bot functions.

//******************************/
    Setting Up the Environment
//******************************/
Kindly install the two necessary npm packages to deploy the bot. 
-   To install axios, run "npm install axios" on the terminal.
-   To install alert, run "npm i alert" on the terminal.
Running the test file(bot.test.js) requires mocha and chai packages. Kindly run
"npm install mocha chai --save-dev" on the terminal.

//******************************/
    Deploying the Bot
//******************************/
You can set the input parameters in the setParameters.js file. Note that the bot handles 
many asset at a time but it can only quote their prices in the same base currency. So, 
only one base currency can be entered at a time.
Deploy the bot by running "node bot.js" on the terminal.

//******************************/
    Testing the Bot
//******************************/
You can run the test file by running "npm test" on the terminal.