function guessNumber(guess) {
  if (guess != 25) {
    return 'not it';
  }
  return 'you got it';
}

function strictGuessNumber(guess) {
  if (guess !== 25) {
    return 'not it';
  }
  return 'you got it';
}

