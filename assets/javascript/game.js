$(document).ready(function() {

// Locate the music file
var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/music/vegetables.mp3");
// Set the mood with a little music
$("#header").on("click", ".musicButton", function() {
      audioElement.play();
    }).on("click", ".pauseButton", function() {
        audioElement.pause();
});

//Sets score variable
var winsNum = 0;
var winsStreak = 0;
//Establishes word bank
var wordList = ["spinach", "tomato", "carrot", "aubergine", "asparagus", "cabbage", "corn","radish","radicchio","rhubarb","rutabaga","turnip","squash","zucchini","okra","kale","broccoli","cauliflower"];
//Establishes number of words in bank
var wordListLength = wordList.length;


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
  var guessesNum = 7;
  var guessesList = [];
  var solved
$("#blanks").text(((wordSpace).join("   ",wordSpace.length)));
$("#guesses").text("Guesses left: " + guessesNum)
$("#letters").text("Letters guessed: ")
$("#wins").text("Wins: " + winsNum);
$("#winstreak").text("Winstreak: " + winsStreak);
var resetWord = function() {
    //remove the (now-solved) letters from the wordspace
    wordSpace.length = 0;
    //setting a variable for the length of the old word
    //var wordLengthOld = wordLength

    //trying to empty the wordLetters array but as soon as it's empty the code freaks out
    //wordLetters.splice(0,wordLetters.length)

    
    //Generates a random number to correspond to words
    var wordNum = Math.floor(Math.random()* wordListLength);
    //Selects the word based on the random number
    var wordGuess = wordList[wordNum];
    //Establishes length of the word
    var wordLength = wordGuess.length;
    //Sets a blank array for the _s
    //var wordSpace = ["_"];
    //Splits the selected word into an array of its constituent elements
    var wordLettersNew = wordGuess.split("",wordLength);
    console.log(wordNum);
    console.log(wordGuess);
    console.log(wordLength);
    //Generates an array with a _ for every letter
    for (i=0; i<wordLength; i++) {
        wordSpace.push("_");
    };
    console.log(wordSpace);
    wordLetters.length = wordLettersNew.length;
    console.log(wordLetters);
    wordLetters = wordLettersNew;
    console.log(wordLetters);
    //moving this to separate function for scope
    //var guessesNum = 10;
    var guessesList = [];
    var solved = false;
    console.log(wordLetters)
    $("#blanks").text(((wordSpace).join("   ",wordSpace.length)));
    
    $("#letters").text("Letters guessed: ")
    $("#wins").text("Wins: " + winsNum);
}
function resetGuesses() {
        guessesNum = 7;
        return guessesNum;
        $("#guesses").text("Guesses left: " + guessesNum)
}
var guessesNum = resetGuesses()
console.log("Guesses reset: " + guessesNum);
function resetGuessesList() {
    guessesList.length = 0;
    return guessesList;
    //$("#letters").text("Guessed letters: " + guessesList);
}
var guessesList = resetGuessesList()


// var resetGuess = reset()
// console.log(solved);



    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
        // Determines which key was pressed.
        var userGuess = event.key;
    if (userGuess === "a"|| userGuess ===  "b" || userGuess === "c"|| userGuess ===  "d"|| userGuess ===  "e"|| userGuess ===  "f"|| userGuess ===  "g"|| userGuess ===  "h"|| userGuess ===  "i"|| userGuess ===  "j"|| userGuess ===  "k"|| userGuess ===  "l"|| userGuess ===  "m"|| userGuess ===  "n"|| userGuess ===  "o"|| userGuess ===  "p"|| userGuess ===  "q"|| userGuess ===  "r"|| userGuess ===  "s"|| userGuess ===  "t"|| userGuess ===  "u"|| userGuess ===  "v"|| userGuess ===  "w"|| userGuess ===  "x"|| userGuess ===  "y"|| userGuess ===  "z"){
        //Checks guess against array of letters
        if (wordLetters.indexOf(userGuess) === -1) {
            console.log("Doesn't match");
        //If it's not a match, checks to see if it's already been guessed
            if (guessesList.indexOf(userGuess) === -1) {
                guessesList.push(userGuess);
                guessesNum--;
                //If it hasn't been guessed yet, it deducts from score and adds to guesses array
                console.log("Guesses left: " + guessesNum);
                $("#guesses").text("Guesses left: " + guessesNum);
                $("#letters").text("Letters guessed: " + guessesList);
            }
                //If it has been guessed, nothing happens
            else {
                console.log("Already guessed");
                alert("Already guessed");
            }
        }
        else  {
            // lol scope issues here
            // for (i=0; i<wordLength; i++) {
            //     if (userGuess === wordLetters[i]) {
            //         wordSpace[i]=userGuess;
            //     }
            // }
        
            // Runs through string of answer letters to check if guess matches and inserts matching letter into blanks array
           
            wordLetters.forEach(checkLetters)
            function checkLetters(item, index) {
                if (userGuess === wordLetters[index]) {
                    wordSpace[index] = userGuess;
                    $("#blanks").text((wordSpace).join("   ",wordSpace.length));
                }
            }
            $("blanks").text((wordSpace).join("   ",wordSpace.length))
        }
        if (wordSpace.indexOf("_") === -1) {
            $("#blanks").text((wordSpace).join("   ",wordSpace.length));
            winsNum++;
            winsStreak++;
            console.log("Solved!");
            alert("Solved! You escaped the noose... for now.");
            $("#blanks").text((wordSpace).join("   ",wordSpace.length));
            $("#wins").text("Wins: " + winsNum);
            $("#winstreak").text("Winstreak: " + winsStreak);
            resetWord();
            resetGuesses();
            resetGuessesList();
            $("#guesses").text("Guesses left: " + guessesNum)
        }
        if (guessesNum === 0) {
            winsStreak = 0
            alert("Off to the gallows with you...")
            $("#winstreak").text("Winstreak: " + winsStreak);
            resetWord();
            resetGuesses();
            resetGuessesList();
        }
    } else {
        alert("We need to work on your alphabet")
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
    });




