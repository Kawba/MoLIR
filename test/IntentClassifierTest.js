let intents = require('./fixtures/intents.json');
const IntentClassifier = require('../molir.js');
let recognitionEngine = new IntentClassifier(intents);
var chai = require('chai');
var should = chai.should();

describe('Intent Classifier Unit Tests', function() {

    it('Should classify as "NEWS"', function(done) {

        let classifiedTopics = recognitionEngine.classify("Whats going on");

        let sorted = classifiedTopics.sort((a,b)=>{
            return b.confidence - a.confidence
        });
        sorted[0].topic.should.equal("NEWS");
        done();
    });

    it('Should classify as "WEATHER"', function(done) {

        let classifiedTopics = recognitionEngine.classify("whats the weather today");

        let sorted = classifiedTopics.sort((a,b)=>{
            return b.confidence - a.confidence
        });
        sorted[0].topic.should.equal("WEATHER");
        done();
    });

    it('Should classify as "GREETING"', function(done) {

        let classifiedTopics = recognitionEngine.classify("Hello there");

        let sorted = classifiedTopics.sort((a,b)=>{
            return b.confidence - a.confidence
        });
        sorted[0].topic.should.equal("GREETING");
        done();
    });

});