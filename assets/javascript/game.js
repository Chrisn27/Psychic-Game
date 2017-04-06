//array list, characters a-z
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//wins, losses and lives remaining - starting at 10
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuesses = [];
var psychic = [];


      window.onload = function() {
            startGame();
      }

      // reset guesses, clear guessed letters and call a new letter
      var reset = function() {

  	  	totalGuesses = 10;
  	  	guessesLeft = 10;
  	  	userGuesses = [];
            psychic = [];
            startGame();

	}

      // start game, select letter
      function startGame () {
            // Psychic computer choice or just a randomly selected index
            var computerGuess = options[Math.floor(Math.random() * options.length)];
            psychic.push(computerGuess);
            //console.log(psychic)
      }



	// Determines which key was pressed by user
      document.onkeyup = function(event) {

      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

      // pushes userGuess to the userGuesses array
      userGuesses.push(userGuess);

      // sanity checking 
      // console.log("------------1-------------");
      // console.log(~userGuess.indexOf(choices));
      // console.log("-------------------------");
      // console.log(computerGuess);
      // console.log("-------------------------");
      // console.log(userGuess);
      // console.log("-------------------------");
      // console.log(event.keyCode)

      // win condition
      if (userGuess === psychic[0]) {
            wins++;
            alert("You win!  You are super gifted.");
            reset();
      }

      // lose a guess if you're not a psychic
      else if (userGuess !== psychic[0]) {
            guessesLeft--;
      }

      // resets game if you try to pick anything outside of the english alphabet
      if (event.keyCode < 65 || event.keyCode > 90) {
            alert("Please only use A-Z.  Resetting game");
            reset();
      }

      // conditions for losing.
      if (guessesLeft <= 0) {
            losses++;
            alert("You lose!  You are not gifted..");
            reset();
      }

                  //overwrites div target html with the above text
      var html =  "<h3>Guess what letter I'm thinking!  A - Z</h3>" +
                  "<p>wins: " + wins + "</p>" +
                  "<p>losses: " + losses + "</p>" +
                  "<p>lives remaining: " + guessesLeft + "</p>" +
                  "<p>Guesses so far: "+ userGuesses.join(', ') + "</p>";

                  document.querySelector("#game_stats").innerHTML = html;

};


