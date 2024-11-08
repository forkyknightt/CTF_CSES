// Binary Search Guessing Game
let low = 0;
let high = 100000000000;
let secretNumber = Math.floor(Math.random() * (high - low + 1)) + low;  // Generate random number

document.getElementById('submitGuess').addEventListener('click', function() {
    let guess = parseInt(document.getElementById('guess').value);

    if (guess < low || guess > high) {
        document.getElementById('feedback').innerHTML = 'Please guess a number within the range!';
        return;
    }

    if (guess < secretNumber) {
        low = guess + 1;  // Update the low range
        document.getElementById('feedback').innerHTML = 'Too low! Try again.';
    } else if (guess > secretNumber) {
        high = guess - 1;  // Update the high range
        document.getElementById('feedback').innerHTML = 'Too high! Try again.';
    } else {
        // If the guess is correct, display the flag
        document.getElementById('feedback').innerHTML = `Correct! The secret number was ${secretNumber}.<br>Flag: flag{congratulations_you_found_the_number}`;
    }

    // Update the range
    document.getElementById('range').innerHTML = `Range: ${low} - ${high}`;
});
