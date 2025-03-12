let display = document.getElementById("display");
let currentInput = "";

function appendToDisplay(value) {
    if (currentInput === "0" && value !== ".") {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = "0";
    display.textContent = currentInput;
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
    } catch (error) {
        display.textContent = "Error";
        currentInput = "";
    }
}
