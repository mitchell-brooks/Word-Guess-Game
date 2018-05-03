//Sets score variable
var winsNum = 0;
//Establishes word bank
var wordList = ["blue", "green", "red", "orange"];
//Establishes number of words in bank
var wordListLength = wordList.length;
var solved = true;

if (solved = true) {
    //Generates a random number to correspond to words
    var wordNum = Math.floor(Math.random()* wordListLength);
    //Selects the word based on the random number
    var wordGuess = wordList[wordNum];
    //Establishes length of the word
    var wordLength = wordGuess.length;
    //Sets a blank array for the _s
    var wordSpace = [];
    //Splits the selected word into an array of its constituent elements
    var wordLetters = wordGuess.split("",wordLength);
    console.log(wordList);
    console.log(wordListLength);
    console.log(wordNum);
    console.log(wordGuess);
    console.log(wordLength);
    console.log(wordLetters);
    //Generates an array with a _ for every letter
    for (i=0; i<wordLength; i++) {
        wordSpace.push("_");
    }
    var guessesNum = 10;
    var guessesList = [];
    var solved = false;
}

console.log(solved)



    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
        // Determines which key was pressed.
        var userGuess = event.key;
        //Checks guess against array of letters
        if (wordLetters.indexOf(userGuess) === -1) {
            console.log("Doesn't match");
        //If it's not a match, checks to see if it's already been guessed
            if (guessesList.indexOf(userGuess) === -1) {
                guessesList.push(userGuess);
                guessesNum--;
                //If it hasn't been guessed yet, it deducts from score and adds to guesses array
                console.log("Guesses left: " + guessesNum);
            }
                //If it has been guessed, nothing happens
            else {
                console.log("Already guessed");
            }
        }
        else  {
        // Runs through string of answer letters to check if guess matches and inserts letter into blanks array
            for (i=0; i<wordLength; i++) {
                if (userGuess === wordLetters[i]) {
                    wordSpace[i]=userGuess;
                }
            }
        }
        if (wordSpace.indexOf("_") === -1) {
            winsNum++;
            console.log("Solved! Wins: " + winsNum);
            var solved = true;
            
        }


    // if (solved = true) {
    //     var wordNum2 = Math.floor(Math.random * wordListLength)
    //     var wordGuess2 = wordList[wordNum2]
    //     var wordLength2 = wordGuess2.length
    //     var wordLetters2 = wordGuess2.split("",wordLength2)
    //     var wordSpace2 = []
    //     for (i=0; i<wordLength2; i++) {
    //         wordSpace2.push("_");
    //     }
    //     var guessList2 = []

    // }
    console.log(wordSpace)


    }





