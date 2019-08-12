var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",];

var guessedLetters = [];
var letterToGuess = null;
var guessesLeft = 9;
var wins = 0;
var losses = 0;

var updateGuessesLeft = function() {
  document.querySelector("#guessesLeft").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function() {
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

// Reset Function
var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

// Updates game
updateLetterToGuess();
updateGuessesLeft();

// Records user guesses and compares
document.onkeydown = function(event) {
  guessesLeft--;
  var letter = event.key.toLowerCase();
  guessedLetters.push(letter);
  updateGuessesLeft();
  updateGuessesSoFar();
  
  if (letter === letterToGuess) {
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    alert("You won!!!");
    reset();
  }

  if (guessesLeft === 0) {
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    alert("Oh no you Lost!");
    reset();
  }
};