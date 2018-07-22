let intents = require('./fixtures/intents.json');
const IntentClassifier = require('../molir.js');
let recognitionEngine = new IntentClassifier(intents, 0.75);
var chai = require('chai');
var should = chai.should();

describe('Single Intent Classifier Unit Tests', function () {

    it('Should classify as "NEWS"', async function (done) {
        let intent = await recognitionEngine.classifyAndReturnSingleResult("Whats going on");
        intent.classified.should.equal(true);
        intent.intentName.should.equal("NEWS");
        done();
    });

    it('Should classify as "WEATHER"', async function (done) {
        let intent = await recognitionEngine.classifyAndReturnSingleResult("whats the weather today");

        intent.classified.should.equal(true);
        intent.intentName.should.equal("WEATHER");
        done();

    });

    it('Should classify as "GREETING"', async function (done) {
        let intent = await recognitionEngine.classifyAndReturnSingleResult("Hello there");

        intent.classified.should.equal(true);
        intent.intentName.should.equal("GREETING");
        done();
    });

});