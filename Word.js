var stuffFromLetter = require("./Letter.js")


//constructor Word

function Word(chosenWord){
    this.arrWord = []
    this.correctCount = 0
    this.LetterMaker = function(){
        //console.log(chosenWord.length)
        for(i=0;i<chosenWord.length;i++){
            var NewLetter = new stuffFromLetter(chosenWord.substr(i,1))
            this.arrWord.push(NewLetter)
            //console.log(this.arrWord[i].uCharacter)
            
        }
       
    }
    //returns the guesed word so far
    this.StrWord = function(){
        if(this.arrWord.length > 0){
            var strWord = ""
            for(i=0;i<this.arrWord.length;i++){
                strWord += this.arrWord[i].GuessMe()
            }
            strWord.trim()
            return strWord
        }
        
    }
    //guesses a letter
    this.GuessLetter = function(guessedLetter){
        if(this.arrWord.length > 0){
            var numCorrect = 0
            var numWrong = 0
            for(i=0;i<this.arrWord.length;i++){
                this.arrWord[i].CheckLetter(guessedLetter)
                if(this.arrWord[i].guessed === true){
                    numCorrect +=1
                }
            }
            return numCorrect
        }
    }
}

module.exports = Word

// var myWord = new Word("notshitty")
// myWord.LetterMaker()
// console.log(myWord.StrWord())

// myWord.GuessLetter("t")

// console.log(myWord.StrWord())

// myWord.GuessLetter("n")

// console.log(myWord.StrWord())


