// Example: combineStrings()
function combineStrings() {
    const str1 = "Hello";
    const str2 = "World";
    document.getElementById("output").textContent = str1 + " " + str2;
}

combineStrings(); // Call the function

// Example: concatStrings()
function concatStrings() {
    const str1 = "JavaScript";
    const str2 = "is awesome!";
    document.getElementById("concatResult").textContent = str1.concat(" ", str2);
}

// Example: sliceString()
function sliceString() {
    const str = "JavaScript is fun!";
    document.getElementById("sliceResult").textContent = str.slice(0, 10);
}

// Example: toStringExample()
function toStringExample() {
    const num = 123;
    document.getElementById("toStringResult").textContent = num.toString();
}

// Example: toPrecisionExample()
function toPrecisionExample() {
    const num = 123.456789;
    document.getElementById("toPrecisionResult").textContent = num.toPrecision(5);
}
