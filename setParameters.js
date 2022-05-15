
//********************************************/
/////////////****INPUT*************////////////
//*******************************************/
// Please specify all the parameters here
const asset = ["BTC", "ETH", "EUR"];            // Add assets
const base = ["USD"];                           // Only one base currency at a time
const oscThreshold = 0.01;                      // % of price oscillation threshold
const fetchInterval = 5 * 1000;                 // milliseconds 

//*******************************************/ // 


// exporting input parameters to the index.js file
const setParameters = { asset, base, oscThreshold, fetchInterval };

module.exports = setParameters;