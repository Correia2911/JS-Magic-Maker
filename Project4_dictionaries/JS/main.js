// JavaScript object (dictionary) with key-value pairs
const myDictionary = {
    fruit: "Apple",
    color: "Red",
    vehicle: "Car",
    city: "Southampton"
};

// Function to display the value of a specific key
function showCityValue() {
    document.getElementById("Dictionary").innerHTML = myDictionary["city"];
}

// JavaScript object (dictionary) with duplicate keys
const mytestDuplicateKeys = {
    fruit: "Apple",
    color: "Red",
    fruit: "Banana", // Duplicate key, "Banana" will overwrite "Apple"
    vehicle: "Car"
};

// Function to display the value of the "fruit" key
function showFruitValue() {
    document.getElementById("testDuplicateKeys").innerHTML = mytestDuplicateKeys["fruit"];
}

// JavaScript object (dictionary)
const myList = {
    fruit: "Apple",
    color: "Red",
    vehicle: "Car"
};

// Delete the "color" key-value pair
delete myList.color;

// Function to display the value of the "color" key
function showValue() {
    document.getElementById("Removevalue").innerHTML = myList.color || "Value deleted!";
}
