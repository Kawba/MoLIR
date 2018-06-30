//Constructor to load intents
function IntentClassifier(intents) {
    this.intents = intents;
}

//Function to classify input based on loaded intents
IntentClassifier.prototype.classify = function(input) {

    let lowerCase = input.toLowerCase();
    let totalScore = 0;

    //loop through all loaded intents
    this.intents.forEach((intent)=> {
        intent.score = 0;
        intent.utterences.forEach((utterence)=>{

            let words = utterence.toLowerCase().split(" ");
            let utterenceMatch = 0;
            let ppw = 100 / words.length;


            //how many words in input match intent samples
            words.forEach((word)=>{
                if(lowerCase.includes(word)){
                    utterenceMatch = utterenceMatch + ppw;
                }
            });

            if(intent.score < utterenceMatch){
                intent.score = utterenceMatch
            }

        });

        //each intent keyword in the input multiplies the intent score by 2
        intent.keywords.forEach((keyword)=>{
            if(input.includes(keyword.toLowerCase())){
                intent.score = intent.score * 2
            }
        });

        //add intent score to totalscore
        totalScore = totalScore + intent.score;
    });


    //work out confident by deviding each intents score by the total
    this.intents.forEach((intent)=> {
        intent.confidence = intent.score/totalScore
    });

    //sent back the classified intents
    return this.intents;
};


//export module
module.exports = IntentClassifier;


