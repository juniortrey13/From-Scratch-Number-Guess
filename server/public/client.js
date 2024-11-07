// CLIENT SIDE JS: This file manages the frontend logic of the game, including collecting the players guesses, sending guesses to the server, updating feedback, and resseting the game once upton winning. //
console.log('hello world');

// Step 1: Initialize variables for the game
let guessCounter = 0; // Tracks the number of guesses made so far
let randomNumber = Math.floor(Math.random() * 25) + 1; // Generates a random number between 1 and 25

// Step 2: Attach functions to the button clicks without needing IDs (using inline onclicks in HTML)
function sendGuesses() { // Triggered when the "Submit Guesses" button is clicked
    guessCounter++; // Increase guess count each time guesses are submitted
    const guesses = [
        Number(document.getElementById('guess0in').value),
        Number(document.getElementById('guess1in').value),
        Number(document.getElementById('guess2in').value),
        Number(document.getElementById('guess3in').value)
    ];
    // Retrieve each player's guess from input fields and convert them to numbers for comparison

    let winners = []; // This will hold all winning players if multiple players guess correctly

    // Step 3: Check each guess against the random number and give feedback
    guesses.forEach((guess, index) => {
        const feedbackElement = document.getElementById(`feedback${index}`);
        // feedbackElement is the <span> under each player’s guess, where we display feedback
        if (guess === randomNumber) {
            feedbackElement.textContent = "Correct!"; // Show "Correct!" if the guess matches
            winners.push(`Player ${index + 1}`); // Add the winning player to the list of winners
        } else if (guess < randomNumber) {
            feedbackElement.textContent = "Too low"; // Indicate the guess was too low
        } else {
            feedbackElement.textContent = "Too high"; // Indicate the guess was too high
        }
    });

    // Step 4: Update the guess counter on the page
    document.getElementById('guessCount').textContent = guessCounter;

    // Step 5: If there are winners, display them and show the restart button
    if (winners.length > 0) {
        const winnersList = winners.join(', '); // Join all winners with commas
        document.getElementById('winner-display').innerHTML = `<h2>🎉 ${winnersList} Win(s)! 🎉</h2>`;
        document.querySelector('.restartButton').style.display = 'block'; // Show the restart button
    }
}

// Step 6: Reset function to start a new game round
function resetGame() {
    guessCounter = 0; // Reset guess counter
    randomNumber = Math.floor(Math.random() * 25) + 1; // Generate a new random target number

    // Clear each player's input field
    document.getElementById('guess0in').value = '';
    document.getElementById('guess1in').value = '';
    document.getElementById('guess2in').value = '';
    document.getElementById('guess3in').value = '';

    // Reset all feedback and UI elements for a fresh game start
    document.getElementById('guessCount').textContent = guessCounter; // Reset displayed guess count
    document.getElementById('winner-display').innerHTML = ''; // Clear any winner message
    document.querySelector('.restartButton').style.display = 'none'; // Hide restart button again

    // Clear all feedback messages under each input field
    document.querySelectorAll('.feedback').forEach(element => element.textContent = '');
}
