//Require molir module
const IntentClassifier = require('../molir.js');

//Load intents
let intents = [
    {
      "intentName":"WEATHER",
      "utterences":[
        "Weather",
        "Whats the weather like?",
        "Hows the weather looking?",
        "Whats the weather forecast"
      ],
      "keywords": [
        "Weather",
        "Forecast"
      ]
    },
    {
      "intentName":"NEWS",
      "utterences":[
        "News",
        "Todays news",
        "Whats the top story?",
        "Whats the top news",
        "Whats going on today",
        "Whats going on"
      ],
      "keywords": [
        "News",
        "Story"
      ]
    },
    {
      "intentName":"GREETING",
      "utterences":[
        "Hello",
        "Hey",
        "Howdy",
        "Hello how are you?"
      ],
      "keywords": [
        "Hello",
        "Hey",
        "Howdy"
      ]
    }
  ];

//Create classifier with intents and a minimum matching confidence score
let classifier = new IntentClassifier(intents, 0.75);

//Classify your input
classifier.classify("Whats todays news?")
.then((result)=>{
    console.log(result);
    /*
    { 
        classified: true,
        intentName: 'NEWS',
        confidence: 0.8888888888888888 
    }
    */
})