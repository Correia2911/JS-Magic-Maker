// Ternary Operators
function Ride_Function() {
    var Height = document.getElementById("demo").value; // Get the value from the input field
    if (Height === "") {
        document.getElementById("result").innerHTML = "Please enter your height."; // Handle empty input
    } else if (isNaN(Height)) {
        document.getElementById("result").innerHTML = "Please enter a valid number."; // Handle invalid input
    } else {
        var Can_ride = Height < 52 ? "You are too short" : "You are tall enough";
        document.getElementById("result").innerHTML = Can_ride + " to ride."; // Display the result
    }
}

// Nested Function
function outerFunction() {
    function nestedFunction() {
        return 10; // Nested function logic
    }
    const result = nestedFunction(); // Call the nested function
    document.getElementById("output").textContent = result; // Display result in the <p> element
}

outerFunction(); // Call the outer function
