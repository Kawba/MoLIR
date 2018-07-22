let intents = require('./fixtures/intents.json');
const IntentClassifier = require('../molir.js');
let recognitionEngine = new IntentClassifier(intents, 0.75);
var chai = require('chai');
var should = chai.should();

describe('Intent Classifier Unit Tests', function() {

    it('Should classify as "NEWS"', function(done) {
        let classifiedintentNames = recognitionEngine.classifyAndReturnRankedIntents("Whats going on");
        classifiedintentNames[0].intentName.should.equal("NEWS");
        done();
    });

    it('Should classify as "WEATHER"', function(done) {
        let classifiedintentNames = recognitionEngine.classifyAndReturnRankedIntents("whats the weather today");
        classifiedintentNames[0].intentName.should.equal("WEATHER");
        done();
    });

    it('Should classify as "GREETING"', function(done) {
        let classifiedintentNames = recognitionEngine.classifyAndReturnRankedIntents("Hello there");
        classifiedintentNames[0].intentName.should.equal("GREETING");
        done();
    });

});