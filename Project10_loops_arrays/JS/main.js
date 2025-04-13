// Array of vehicles
let vehicles = ["Car", "Bike", "Truck", "Bus", "Van", "Scooter", "Bicycle", "Train", "Boat", "Plane"];

// Function to display vehicle names in the console and HTML
function displayVehicles() {
    const arrayOutput = document.getElementById("arrayOutput");

    if (arrayOutput) {
        vehicles.forEach(vehicle => {
            console.log(vehicle); // Log each vehicle name in the console
            arrayOutput.innerHTML += vehicle + "<br>"; // Display each vehicle name in the HTML
        });
    } else {
        console.error("Element with id 'arrayOutput' not found in the DOM.");
    }
}

// Function to log vehicle names in the console and update HTML with a delay
function logVehiclesWithDelay() {
    const delayOutput = document.getElementById("delayOutput");

    if (delayOutput) {
        delayOutput.innerHTML = ""; // Clear previous content
        vehicles.forEach((vehicle, index) => {
            setTimeout(() => {
                console.log(vehicle); // Log each vehicle name with a delay
                delayOutput.innerHTML += vehicle + "<br>"; // Display each vehicle name in the HTML with a delay
            }, index * 1000); // Delay increases with each iteration
        });
    } else {
        console.error("Element with id 'delayOutput' not found in the DOM.");
    }
}

// Create an object using const
const musicalInstrument = {
    type: "Guitar",
    color: "Blue",
    cost: 900,
    brand: "Fender",
};

// Function to display an object's property
function constant_function() {
    const constantOutput = document.getElementById("Constant");

    if (constantOutput) {
        constantOutput.innerHTML = 
            `The ${musicalInstrument.color} ${musicalInstrument.brand}  ${musicalInstrument.type} costs $${musicalInstrument.cost}.`;
    } else {
        console.error("Element with id 'Constant' not found in the DOM.");
    }
}

// Call functions after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    displayVehicles();
    constant_function();
});

for (let i = 1; i <= 5; i++) {
    console.log(`This is loop iteration number: ${i}`);
}

function myFunction() {
    return Math.PI;
  }
  
  document.getElementById("demo").innerHTML = myFunction();

  let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName}, and I am ${this.age} years old.`;
    }
};

// Function to display the object's method output
function displayGreeting() {
    document.getElementById("ObjectOutput").innerHTML = person.greet();
}

