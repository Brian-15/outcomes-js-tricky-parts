function guessingGame() {
  const randNum = Math.floor(Math.random() * 100);
  let numGuesses = 0, hasWon = false;;
  return function(guess) {
    if (hasWon) return "The game is over, you already won!";
    numGuesses++;
    if (guess < randNum) {
      return `${guess} is too low!`;
    } else if (guess > randNum) {
      return `${guess} is too high!`;
    } else {
      hasWon = true;
      return `You win! You found ${guess} in ${numGuesses} guesses.`;
    }
  };
}

module.exports = { guessingGame };
