	//array list, characters a-z
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//wins, losses and lives remaining - starting at 10
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuesses = [];

      var reset = function() {

  	  	totalGuesses = 10;
  	  	guessesLeft = 10;
  	  	userGuesses = [];

	  	}

	    // Determines which key was pressed by user
      document.onkeyup = function(event) {

      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      var choices = "abcdefghijklmnopqrstuvwxyz";

      userGuesses.push(userGuess);

      // Psychic computer choice or just a randomly selected index
      var computerGuess = options[Math.floor(Math.random() * options.length)];
      //console.log(computerGuess);

      // sanity checking 
      // console.log("------------1-------------");
      // console.log(~userGuess.indexOf(choices));
      // console.log("-------------------------");
      // console.log(computerGuess);
      // console.log("-------------------------");
      // console.log(userGuess);
      // console.log("-------------------------");
      // console.log(event.keyCode)

      if (userGuess === computerGuess) {
            wins++;
            alert("You win!  Feel good about yourself.");
            reset();
      }

      else if (userGuess !== computerGuess) {
            guessesLeft--;
      }

      if (event.keyCode < 65 || event.keyCode > 90) {
            alert("Please only use A-Z.  Resetting game");
            reset();
      }

      if (guessesLeft <= 0) {
            losses++;
            alert("You lose!  Feel bad about yourself.");
            reset();
      }

          var html = "<h3>Guess what letter I'm thinking!  A - Z</h3>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>lives remaining: " + guessesLeft + "</p>" +
          "<p>Guesses so far: "+ userGuesses.join(', ') + "</p>";

          //overwrites div target html with the above text
          document.querySelector("#game_stats").innerHTML = html;

};


