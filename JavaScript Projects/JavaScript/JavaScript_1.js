// Function to evaluate a choice and display the result
function evaluateChoice(choice) {
    let output;
    switch (choice) {
        case "apple":
            output = "You chose apple! A healthy choice.";
            break;
        case "pizza":
            output = "You chose pizza! Delicious and cheesy.";
            break;
        case "carrot":
            output = "You chose carrot! Packed with vitamins.";
            break;
        default:
            output = "Unknown choice. Please select a valid option.";
    }
    document.getElementById("switchOutput").innerHTML = output;
}

// Call the function with a test value
evaluateChoice("pizza");

// Function to change the text of elements with the class "myClass"
function changeText() {
    const elements = document.getElementsByClassName("myClass");
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "The text has been changed!";
    }
}

// Function to draw on the canvas
function stroke() {
    const c = document.getElementById("myCanvas1");
    if (c) {
        const ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(20, 20);
        ctx.lineTo(20, 100);
        ctx.lineTo(70, 100);
        ctx.lineTo(20, 80);
        ctx.lineTo(150, 10);
        ctx.lineTo(300, 100); // Adjusted to fit within canvas bounds
        ctx.lineTo(50, 50);
        ctx.lineTo(70, 150); // Adjusted to fit within canvas bounds
        ctx.strokeStyle = "red";
        ctx.stroke();
    } else {
        console.error("Canvas element with id 'myCanvas' not found.");
    }
}

// Call the stroke function after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", stroke);