// const { itbit } = require("ccxt")
const expect = require('chai').expect;
const exportFunctions = require('../botFunctions');

const { getTickPrice, avg_Price } = exportFunctions;

describe('Get price and compute average', function () {
    const _asset = "BTC";
    const _base = "USD";
    const x = 4;
    const y = 6;
    let result;

    it('should get price from Uphold API', async function () {
        result = await getTickPrice(_asset, _base);
        expect(result).to.not.equal(null);
    })

    it('should compute average price', function () {
        result = avg_Price(x, y);
        expect(result).to.equal(5);
    });

});
