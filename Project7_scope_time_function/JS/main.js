// Global variable example
let globalVariable = "I am global!";

// Local scope example
function localScopeExample() {
    let localVariable = "I am local!";
    console.log(localVariable); // Logs the local variable
}
localScopeExample(); // Call the function

// Fixed buggy function
function buggyFunction() {
    let x = 5;
    let y = 10; // Define y before using it
    console.log(y); // Logs the value of y
}
buggyFunction(); // Call the function

// Function 
function showMessage() {
    const currentHour = new Date().getHours(); // Get the current hour
    let message;

    if (currentHour < 12) {
      message = "Good morning!";
    } else if (currentHour < 18) {
      message = "Good afternoon!";
    } else {
      message = "Good evening!";
    }
  
    // Update the content of the <p> element
    document.getElementById("timeMessage").textContent = message;
}
  