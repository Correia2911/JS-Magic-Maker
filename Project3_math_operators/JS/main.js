// Function to display the sum of two numbers
function displaySum() {
    // Example addition operation
    let sum = 5 + 3;
    // Update the innerHTML of the element with id "additionResult"
    document.getElementById("additionResult").innerHTML = "The sum is: " + sum;
}

// Function to calculate and display multiplication and division results
function calculateAndDisplay() {
    // Example multiplication and division operations
    let product = 5 * 3;
    let division = 15 / 3;
    // Log the results to the console
    console.log("The product is: " + product);
    console.log("The division result is: " + division);
    // Update the innerHTML of the elements with ids "multiplicationResult" and "multipleOperationsResult"
    document.getElementById("multiplicationResult").innerHTML = "The product is: " + product;
    document.getElementById("multipleOperationsResult").innerHTML = "The division result is: " + division;
}

// Using the modulus operator
let dividend = 29; // Example: Dividend
let divisor = 6;   // Example: Divisor
let remainder = dividend % divisor; // Calculate the remainder
// Display the result
document.getElementById("Math").innerHTML = `The remainder of ${dividend} divided by ${divisor} is: ${remainder}`;

// Using the increment and decrement operators
// Initialize a variable
let number = 10;

// Function to increment and decrement a number
function incrementAndDecrement(number) {
    // Increment and decrement operations
    let incremented = number + 1;
    let decremented = number - 1;
    // Log the results to the console
    console.log("Incremented value: " + incremented);
    console.log("Decremented value: " + decremented);
    // Update the innerHTML of the element with id "incrementDecrementResult"
    document.getElementById("incrementDecrementResult").innerHTML = "Incremented value: " + incremented + ", Decremented value: " + decremented;
}

function generateRandomNumber() {
    // Generate a random number between 0 and 1
    let randomNumber = Math.random();

    // Scale it up to a range (e.g., 0 to 100)
    let scaledNumber = randomNumber * 100;

    // Display the results
    document.getElementById("Random").innerHTML = `
        Random Number (0 to 1): ${randomNumber}<br>
        Random Number (0 to 100): ${Math.floor(scaledNumber)}
    `;
}

function useMathMethods() {
    // Example using Math.sqrt() to calculate the square root of 64
    let squareRoot = Math.sqrt(64);

    // Example using Math.max() to find the largest number
    let maxNumber = Math.max(10, 20, 30, 40, 50);

    // Display the results in the HTML
    document.getElementById("MathMethod").innerHTML = `
        The square root of 64 is: ${squareRoot}<br>
        The largest number among 10, 20, 30, 40, 50 is: ${maxNumber}
    `;
}

