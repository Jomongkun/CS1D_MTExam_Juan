// Declare a variable to hold the favorite number
let theFavNumber = 7; // You can change this to any number

// Ask the user to guess the number
let guess = Number(prompt("Guess my favorite number:"));

// Use a while loop to keep asking until they guess correctly
while (guess !== theFavNumber) {
    if (guess > theFavNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log("Too low! Try again.");
    }
    guess = Number(prompt("Guess my favorite number:"));
}

// If the user guesses correctly, log a success message
console.log("Correct! You guessed my favorite number.");
