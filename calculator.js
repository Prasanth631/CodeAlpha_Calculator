let display = document.getElementById('display');
let currentValue = '0';

function updateDisplay() {
    display.textContent = currentValue;
}

function appendToDisplay(value) {
    if (currentValue === '0' && value !== '.') {
        currentValue = value;
    } else {
        currentValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentValue = '0';
    updateDisplay();
}

function calculate() {
    try {
        currentValue = eval(currentValue).toString();
        updateDisplay();
    } catch (error) {
        currentValue = 'Error';
        updateDisplay();
    }
}