// Function that is called when the "Roll the Dice!" button is clicked
function playCraps() {
    // Generate two random numbers between 1 and 6 for the dice
    var die1 = rollDie(); // Roll the first die
    var die2 = rollDie(); // Roll the second die

    // Display the dice images on the webpage
    displayDice(die1, die2); // Call function to display the images of the dice

    // Calculate the sum of the two dice
    var sum = die1 + die2; 

    // Display the result based on the sum and dice values
    displayResult(die1, die2, sum); 
}

// Function that simulates rolling a die and returns a random number between 1 and 6, "random number" and "some math" Criteria
function rollDie() {
    // Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
    var randomNumber = Math.random(); // Generates a random number
    // Scale the random number up to between 1 and 6
    var scaledNumber = randomNumber * 6; 
    // Round down to the nearest whole number and add 1 to get a number between 1 and 6
    var dieNumber = Math.floor(scaledNumber) + 1; // For example, 0.237 * 6 = 1.422, floor to 1, add 1 to get 2
    // Return the die number
    return dieNumber; 
}

// Function that displays the dice images based on the numbers rolled
function displayDice(die1, die2) {
    // Get the dice container div by its id
    var diceContainer = document.getElementById("diceContainer"); // Access the div where dice images will be displayed
    // Clear any previous content in the dice container
    diceContainer.innerHTML = ""; // Clears previous images from the diceContainer

    // Create image elements for both dice
    var die1Image = document.createElement("img"); // Creates an img element for die1
    var die2Image = document.createElement("img"); 

    // Set the source attribute to the die image
    die1Image.src = "dice" + die1 + ".png"; 
    die2Image.src = "dice" + die2 + ".png"; 

    // Add CSS class for styling
    die1Image.classList.add("dice"); // Adds the "dice" class to die1Image for styling
    die2Image.classList.add("dice"); 

    // Append the images to the dice container div
    diceContainer.appendChild(die1Image); // Inserts die1Image into the diceContainer div
    diceContainer.appendChild(die2Image); 
}

// Function that takes die values and sum, and displays the result of the game
function displayResult(die1, die2, sum) {
    // Get the result div by its id
    var resultDiv = document.getElementById("result"); // This gets the div where the result will be displayed

    // Initialize a variable for the result message
    var resultMessage = ""; 

    // Check the game rules and determine the outcome
    if (sum === 7 || sum === 11) {
        // If the sum of the dice is 7 or 11, the player loses
        resultMessage = "You rolled a " + sum + ". CRAPS – you lose!"; 
    } else if (die1 === die2 && die1 % 2 === 0) {
        // If both dice are the same (doubles) and the die value is even
        resultMessage = "You rolled doubles of " + die1 + ". You won!"; 
    } else {
        // In all other cases, it's a push (no win or loss)
        resultMessage = "You rolled a " + die1 + " and a " + die2 + ". You pushed!"; 
    }

    // Display the result message in the result div
    resultDiv.innerHTML = resultMessage; 
}
