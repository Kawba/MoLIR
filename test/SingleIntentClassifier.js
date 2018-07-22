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

    it('Should fail to classify - no minimum confidence', async function(done){
        let erroredIntentClassifier = new IntentClassifier(intents);
        try {
            let output = await erroredIntentClassifier.classifyAndReturnSingleResult("Hello");
        } catch(e) {
            console.log(e);
            done();
        }
    })

    it('Should fail to classify - no intents', async function(done){
        let erroredIntentClassifier = new IntentClassifier(undefined, 0.75);
        try {
            let output = await erroredIntentClassifier.classifyAndReturnSingleResult("Hello");
        } catch(e) {
            console.log(e);
            done();
        }
    })

});