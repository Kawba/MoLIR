let intents = require('./fixtures/intents.json');
const IntentClassifier = require('../molir.js');
let recognitionEngine = new IntentClassifier(intents, 0.75);
var chai = require('chai');
var should = chai.should();

describe('Single Intent Classifier Unit Tests', function() {

    it('Should classify as "NEWS"', function(done) {

        let intent = recognitionEngine.classifyAndReturnSingleIntent("Whats going on");
        intent.classified.should.equal(true);
        intent.intentName.should.equal("NEWS");
        done();
    });

    it('Should classify as "WEATHER"', function(done) {

        let intent = recognitionEngine.classifyAndReturnSingleIntent("whats the weather today");
        
        intent.classified.should.equal(true);
        intent.intentName.should.equal("WEATHER");
        done();
    });

    it('Should classify as "GREETING"', function(done) {

        let intent = recognitionEngine.classifyAndReturnSingleIntent("Hello there");
        
        intent.classified.should.equal(true);
        intent.intentName.should.equal("GREETING");
        done();
    });

});