
const axios = require('axios');
const alert = require('alert');
const setParameters = require('./setParameters');
const exportFunctions = require('./botFunctions');

const { getTickPrice, avg_Price } = exportFunctions;
const { asset, base, oscThreshold, fetchInterval } = setParameters;

const uphTickPriceOdd = [];
const uphTickPriceEven = [];
const uphAvgPriceOdd = [];
const uphAvgPriceEven = [];

var A = [];
var B = [];
let counter = 0;

const init = async () => {

    const tick = async () => {
        try {
            if (counter % 2 == 1 || counter == 1) {

                const arrOdd = [];

                // Getting tick prices of the assets from Uphold API
                for (i = 0; i < asset.length; i++) {
                    [arrOdd[i]] = await getTickPrice(asset[i], base);
                    uphTickPriceOdd[i] = arrOdd[i].data;
                }

                // Converting tick prices to average price
                for (i = 0; i < asset.length; i++) {
                    var { ask, bid, currency } = uphTickPriceOdd[i];
                    uphAvgPriceOdd[i] = avg_Price(ask, bid);
                }

                A = uphAvgPriceOdd;

            } else {
                const arrEven = [];

                // Getting tick prices of the assets from Uphold API
                for (i = 0; i < asset.length; i++) {
                    [arrEven[i]] = await getTickPrice(asset[i], base);
                    uphTickPriceEven[i] = arrEven[i].data;
                }

                // Converting tick prices to average price
                for (i = 0; i < asset.length; i++) {
                    var { ask, bid, currency } = uphTickPriceEven[i];
                    uphAvgPriceEven[i] = avg_Price(ask, bid);
                }

                B = uphAvgPriceEven;
            }

            // Displaying the prices
            for (let i = 0; i < asset.length; i++) {

                if (counter % 2 == 1 || counter == 1) {
                    console.log(`Price of ${asset[i]} @ ${counter}: ${uphAvgPriceOdd[i].toFixed(5)} ${base}`);
                    var delta = Math.abs(A[i] - B[i]);
                    var osc = delta * 100 / B[i];
                    if (osc >= oscThreshold) {
                        alert(`High volatility in ${asset[i]}/${base} pair @ ${counter}. Oscillation is ${osc.toFixed(3)}%`);
                    }
                } else {
                    console.log(`Price of ${asset[i]} @ ${counter}: ${uphAvgPriceEven[i].toFixed(5)} ${base}`);
                    var delta = Math.abs(B[i] - A[i]);
                    var osc = delta * 100 / A[i];
                    if (osc >= oscThreshold) {
                        alert(`High volatility in ${asset[i]}/${base} pair @ ${counter}. Oscillation is ${osc.toFixed(3)}%`);
                    }
                }
            }
            console.log('/*************************************************************/');
            console.log('');
            console.log('/*************************************************************/');

            counter = counter + 1;
        }
        catch (error) {
            console.log('Error: ' + error.message);
            console.log(`Please confirm your input data!`);
            process.abort();
            clearmyInterval();
        }
    }
    tick();

    const myInterval = setInterval(tick, fetchInterval);

    function clearmyInterval() {
        clearInterval(myInterval);
    }
}
init();