// Select the calculator screen and keys
const calculatorScreen = document.querySelector('.calculator-screen');
const keys = document.querySelector('.calculator-keys');

// Variables to store the current state
let currentInput = '0';
let previousInput = '';
let operator = '';

// Update the screen
function updateScreen(value) {
    calculatorScreen.value = value;
}

// Handle button clicks
keys.addEventListener('click', function (event) {
    const { target } = event;
    const { value } = target;

    if (!target.matches('button')) return;

    if (target.classList.contains('operator')) {
        handleOperator(value);
        updateScreen(currentInput);
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(value);
        updateScreen(currentInput);
        return;
    }

    if (target.classList.contains('all-clear')) {
        clearAll();
        return;
    }

    inputNumber(value);
    updateScreen(currentInput);
});

// Handle number input
function inputNumber(number) {
    if (currentInput === '0' || operator === '=') {
        currentInput = number;
    } else {
        currentInput += number;
    }
}

// Handle decimal input
function inputDecimal(dot) {
    if (!currentInput.includes(dot)) {
        currentInput += dot;
    }
}

// Handle operator input
function handleOperator(nextOperator) {
    if (operator && currentInput === '') return;

    if (previousInput === '') {
        previousInput = currentInput;
    } else if (operator) {
        const result = calculate(previousInput, currentInput, operator);
        currentInput = result;
        previousInput = result;
    }

    operator = nextOperator;

    // If the `=` button is clicked, reset the operator and previous input
    if (nextOperator === '=') {
        operator = '';
        previousInput = '';
    } else {
        currentInput = '';
    }
}

// Perform calculation
function calculate(first, second, operator) {
    first = parseFloat(first);
    second = parseFloat(second);

    if (operator === '+') return first + second;
    if (operator === '-') return first - second;
    if (operator === '*') return first * second;
    if (operator === '/') {
        if (second === 0) {
            alert("Error: Division by zero is not allowed.");
            return first; // Return the first number to avoid breaking the calculator
        }
        return first / second;
    }

    return second;
}

// Clear all inputs
function clearAll() {
    currentInput = '0';
    previousInput = '';
    operator = '';
    updateScreen(currentInput);
}
