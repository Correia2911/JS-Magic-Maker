window.onload = function() {
    // Define a variable of your choice
    let myVariable = 42; // You can change this to a string, boolean, etc.

    // Use document.getElementById() to display the data type
    document.getElementById("dataType").innerHTML = "The data type of myVariable is: " + typeof myVariable;

    // Example of type coercion
    let numberValue = 10;          // A number
    let stringValue = "5";         // A string

    // Use type coercion in an operation
    let coercedResult = numberValue + stringValue; // This will coerce the number to a string

    // Display the result using document.getElementById()
    document.getElementById("typeCoercionResult").innerHTML = "The result of 10 + '5' is: " + coercedResult;

    // Use the typeof operator to display the resulting data type
    document.getElementById("typeCoercionResult").innerHTML += "<br>The data type of the result is: " + typeof coercedResult;

    // Example of NaN
    let nanResult = 0 / 0; 
    document.getElementById("nanExample").innerHTML = "NaN example: " + nanResult;

    // Use isNaN() to display true
    let notANumber = "This is a string";
    document.getElementById("isNaNTrue").innerHTML = "isNaN() example (true): " + isNaN(notANumber);

    // Use isNaN() to display false
    let validNumber = 42; 
    document.getElementById("isNaNFalse").innerHTML = "isNaN() example (false): " + isNaN(validNumber);

    // Display Infinity and -Infinity
    document.getElementById("positiveInfinity").innerHTML = "Positive Infinity: " + Infinity;
    document.getElementById("negativeInfinity").innerHTML = "Negative Infinity: " + -Infinity;
    
    // Boolean comparison to display true
    document.getElementById("trueResult").innerHTML = 10 > 2; // True: 10 is greater than 2

    // Boolean comparison to display false
    document.getElementById("falseResult").innerHTML = 5 < 3; // False: 5 is not less than 3

    // Create a container for additional results
    let resultsContainer = document.getElementById("resultsContainer");

    // Example of == and === operators
    resultsContainer.innerHTML += "Using ==: " + (5 == "5") + "<br>"; // Returns true (value matches, type does not matter)
    resultsContainer.innerHTML += "Using ===: " + (5 === 5) + "<br>"; // Returns true (value matches and type matches)

    // Examples of > and < operators
    resultsContainer.innerHTML += "5 > 3: " + (5 > 3) + "<br>"; // Returns true
    resultsContainer.innerHTML += "2 < 1: " + (2 < 1) + "<br>"; // Returns false

    // Examples of && and || operators
    resultsContainer.innerHTML += "true && false: " + (true && false) + "<br>"; // Returns false
    resultsContainer.innerHTML += "true || false: " + (true || false) + "<br>"; // Returns true

    // Example of ! operator
    resultsContainer.innerHTML += "!true: " + (!true) + "<br>"; // Returns false

    // Return true: Matching data type and value
    resultsContainer.innerHTML += "Return true: " + (42 === 42) + "<br>";

    // Return false: Different data type and different value
    resultsContainer.innerHTML += "Return false: " + (42 === "43") + "<br>";

    // Return false: Different data type but same value
    resultsContainer.innerHTML += "Return false: " + (42 === "42") + "<br>";

    // Return false: Same data type but different value
    resultsContainer.innerHTML += "Return false: " + (42 === 43) + "<br>";
};

