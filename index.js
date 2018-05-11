var prompt = require('prompt')
var userName = ""
var userEmail = ""
 
  //
  // Start the prompt
  //
  prompt.start()
 
  //
  // Get two properties from the user: username and email
  //
  prompt.get(['username', 'email'], function (err, result) {
    //
    // Log the results.
    //
    userName = result.username
    userEmail = result.email
    console.log('Hi ' + result.username + "!")
    console.log('Your email is ' + result.email)
    playTheGame(userName)
  })



  var stuffFromWord = require("./Word.js")



  function HangManGame(playerName){
      this.win = false
      this.reset = false
      this.trys = [0]
      this.missed = 0
      this.maxTrys = 7
      this.numberWins = 0
      this.numberLosses = 0
      this.playerName = playerName
      this.arrWordBank = ["porsche","bugatti","ferrari","mercedes","chrystler","chevrolet","alfaromeo"]
      this.currentWord = ""
      this.correctLetters = 0
    }

  var inquirer = require('inquirer')

  function playTheGame(playerName){
      inquirer.prompt([
          {
            type: 'list',
            message: 'Play a new game?',
            choices: ['YES','NO'],
            name: 'startGame'
          }
      ])
      .then(function(response1){
          if(response1.startGame === 'YES'){
              var myGame = new HangManGame(playerName)
              myGame.currentWord = myGame.arrWordBank[Math.floor(Math.random() * 7)]
              console.log(myGame.playerName + " is playing hangman!")
              console.log("secret word is:" + myGame.currentWord)
              var myWord = new stuffFromWord(myGame.currentWord)
              myWord.LetterMaker()
              console.log(myWord.StrWord())
              console.log("You get " + myGame.maxTrys + " trys!")
              guessLetters(myWord, myGame)
            }
          else{
              console.log("KTHXBYE!")
          }
         
      })
  }

  function guessLetters(myWord, myGame){
    inquirer.prompt([
        {
          type: 'input',
          message: 'Pick a letter!',
          name: 'letterPicked'
        }
      ])
      .then(function(response2) {
        var guessAMundo = 0
        var myCorrectGuesses = myWord.GuessLetter(response2.letterPicked)
        // myGame.trys = myGame.trys + myWord.
        // console.log("wrong guesses: " , myGame.trys)
        console.log("my correct guesses: ", myCorrectGuesses)
        myGame.trys.push(myCorrectGuesses)
        var theWordToGuess = myWord.StrWord()
        //console.log(theWordToGuess)
        //console.log("trys:",myGame.trys)

        if(myGame.trys[myGame.trys.length-1]===myGame.trys[myGame.trys.length-2]){
                    myGame.missed +=1
                    console.log("Wrong Guess!")
                    console.log("missed count:",myGame.missed)
                }
        if(theWordToGuess.length === myCorrectGuesses){
            console.log("you won! congrats!")
            playTheGame(myGame.playerName)

        }
        else{

            if(myGame.missed<7){
                guessLetters(myWord, myGame)
            }
            else if(myGame.missed===7){
                console.log("Game Over!")
                myGame.numberLosses+=1
                playTheGame(myGame.playerName)
            }      
        }
        
        // console.log(myGame.trys.last)
 
       
       
 
      })
  }