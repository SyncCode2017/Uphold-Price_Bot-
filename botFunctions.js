const axios = require('axios');

const getTickPrice = async (_asset, _base) => {
    const getPrice = await Promise.all([axios.get(`https://api.uphold.com/v0/ticker/${_asset}-${_base}`)]);
    if (getPrice == "") {
        console.log(`Uphold may not support ${_asset}-${_base} pair. Please confirm your input data!`);
        process.abort();
    }
    return getPrice;
}

function avg_Price(_ask, _bid) {
    let avg;
    avg = (_ask / 2) + (_bid / 2);
    return avg;
}
const exportFunctions = { getTickPrice, avg_Price };
module.exports = exportFunctions;
