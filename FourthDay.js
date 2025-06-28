/*
Create a number guessing game from 0 to 10 inclusive (0, 1, 2... 10)
    -> Math.floor(Math.random() * (10 - 0 + 1)) + 0
*/
const minNumber = 0;
const maxNumber = 10;

let gameLoop = true; // Keep the game running
let playAgain = true;
let isInputValid = false;
let isFirstTimeUser = true;
let attemptsLeft = 2;

let generatedNumberForTesting;
let userChosenNumber;
let userPlayAgain;

// Start and keep the game running
generateRandomInteger(); // Generate a number before interacting with the user
gameLoopFunction();


// Functions for functionality below ---------------
function gameLoopFunction() {
    while (gameLoop) {
        console.log('Now I will collect the user’s answer');
        collectUserInput();

        console.log('I will now call the next function checkIfCorrect()!');
        checkIfCorrect(userChosenNumber);
    }
    askUserIfWantsToPlayAgain();
}

function askUserIfWantsToPlayAgain() {
    while (playAgain) {
        console.log('Checking if the user wants to play again');
        userPlayAgain = prompt('Would you like to play again? 1 - Yes or 2 - No');
        
        if (userPlayAgain.trim() === '1') {
            console.log('User decided to play again');
            alert('Alright! I’ll generate a new random number without telling you so we can play again!');
            
            generateRandomInteger();
            attemptsLeft = 2;
            gameLoop = true;
            console.log('Set gameLoop to TRUE and attemptsLeft to 2');
            gameLoopFunction();
        } else if (userPlayAgain.trim() === '2') {
            alert('Alright! Thanks for playing!');
            
            playAgain = false;
            console.log('playAgain set to false');
            console.log('The script ends here!');
        } else {
            alert('Please enter only 1 or 2');
        }
    }
}

function checkIfCorrect(userChosenNumber) {
    for (; attemptsLeft >= 0; attemptsLeft--) {
        console.log(`Inside FOR with ${attemptsLeft} attempts remaining`);
        
        if (generatedNumberForTesting == userChosenNumber) {
            alert(`Correct! Congratulations! The generated number was ${generatedNumberForTesting}`);
            
            gameLoop = false;
            attemptsLeft = 0;
            console.log('User won! gameLoop set to FALSE and attemptsLeft set to 0');
            gameLoopFunction();
        } else {
            console.log('User guessed wrong!');
            if (attemptsLeft > 0) {
                alert(`Wrong guess! You still have ${attemptsLeft} attempts!`);
                collectUserInput();
            } else {
                alert(`Wrong again! You’re out of attempts! The number was ${generatedNumberForTesting}`);

                gameLoop = false;
                console.log('User lost, going back to gameLoopFunction()');
                gameLoopFunction();
            }
        }
    }
}

function generateRandomInteger() {
    generatedNumberForTesting = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + 0;
    console.log(`Number generated for testing: ${generatedNumberForTesting}`);
}

function collectUserInput() {
    isInputValid = false;
    console.log('isInputValid set to FALSE');
    
    while (!isInputValid) {
        console.log('Collecting input from the user');
        
        if (!isFirstTimeUser) {
            userChosenNumber = prompt('Enter a number!').trim();
        } else {
            console.log('First time for the user!');
            console.log('I’ll show the first prompt that explains the expected input');
            userChosenNumber = prompt('Try to guess the number from 0 to 10 and I’ll tell you if you got it! e.g., 0, 1, 2... or 10').trim();
            isFirstTimeUser = false;
            console.log('isFirstTimeUser set to FALSE');
        }
        
        console.log('Checking if the input is valid');
        // Checks for invalid input types
        if (isNaN(userChosenNumber)) {
            alert('Please enter numbers only!');
        } else if (userChosenNumber > 10) {
            alert('Please enter a value from 0 to 10!');
        } else if (!userChosenNumber) {
            alert('You left the field blank!');
        } else {
            console.log(`User entered ${userChosenNumber}`);
            console.log('Valid input, continuing the script');
            alert(`You entered ${userChosenNumber}, let’s proceed to verification...`);
            isInputValid = true;
            console.log('isInputValid set to TRUE, exiting input validation loop');
        }
    }
}