// constructor function
function Letter(uCharacter){
 this.uCharacter = uCharacter
 this.guessed = false
 this.GuessMe = function(){
     if(this.guessed === true){
         return this.uCharacter
     }
     else{
         return "_"
     }
 }
 this.CheckLetter = function(guessLetter){
    if(this.uCharacter === guessLetter){
        this.guessed = true
    }
 }
}

module.exports = Letter

// var aLetter = new Letter("a")

// var myGuessLetter = "a"

// console.log(aLetter.GuessMe())

// aLetter.CheckLetter(myGuessLetter)

// console.log(aLetter.GuessMe())

// myGuessLetter = "b"

// aLetter.CheckLetter(myGuessLetter)

// console.log(aLetter.GuessMe())


