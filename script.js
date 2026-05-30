let firstNumber = "";
let secondNumber = "";
let operator = "";
let shouldResetDisplay = false;

function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function div(a, b) {
    if (b !== 0) return a / b;
    return "Error";
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+": return add(a, b);
        case "-": return sub(a, b);
        case "*": return multiply(a, b);
        case "/": return div(a, b);
        default: return null;
    }
}

const display = document.querySelector(".display-area");
const numbers = document.querySelectorAll(".number");

numbers.forEach((button) => {
    button.addEventListener("click", () => {
        // Block input after an error
        if (display.textContent === "Error") return;

        if (shouldResetDisplay) {
            display.textContent = button.dataset.value;
            shouldResetDisplay = false;
        } else {
            if (display.textContent === "0") {
                display.textContent = button.dataset.value;
            } else {
                display.textContent += button.dataset.value;
            }
        }
    });
});

// Single operator listener with chaining logic
const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.textContent === "Error") {
            // Reset on error before continuing
            display.textContent = "0";
            firstNumber = "";
            operator = "";
            shouldResetDisplay = false;
            return;
        }

        if (operator !== "" && !shouldResetDisplay) {
            secondNumber = display.textContent;
            const result = operate(operator, firstNumber, secondNumber);
            display.textContent = result;
            firstNumber = result;
        } else {
            firstNumber = display.textContent;
        }

        operator = button.dataset.value;
        shouldResetDisplay = true;
    });
});

const equal = document.querySelector(".equals");
equal.addEventListener("click", () => {
    if (operator === "" || display.textContent === "Error") return;

    secondNumber = display.textContent;
    const result = operate(operator, firstNumber, secondNumber);
    display.textContent = result;

    firstNumber = "";
    secondNumber = "";
    operator = "";
    shouldResetDisplay = true;
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    display.textContent = "0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    shouldResetDisplay = false;
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
    if (display.textContent === "Error") return;

    if (shouldResetDisplay) {
        display.textContent = "0";
        shouldResetDisplay = false;
    }

    if (!display.textContent.includes(".")) {
        display.textContent += ".";
    }
});

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", () => {
    if (display.textContent === "Error") {
        display.textContent = "0";
        return;
    }
    if (display.textContent.length === 1) {
        display.textContent = "0";
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") {
        document.querySelector(`.number[data-value="${e.key}"]`).click();
    } else if (e.key === "+") {
        document.querySelector('.operator[data-value="+"]').click();
    } else if (e.key === "-") {
        document.querySelector('.operator[data-value="-"]').click();
    } else if (e.key === "*") {
        document.querySelector('.operator[data-value="*"]').click();
    } else if (e.key === "/") {
        e.preventDefault(); // stops browser quick-find on Firefox
        document.querySelector('.operator[data-value="/"]').click();
    } else if (e.key === "Enter" || e.key === "=") {
        document.querySelector(".equals").click();
    } else if (e.key === "Backspace") {
        document.querySelector(".backspace").click();
    } else if (e.key === "Escape") {
        document.querySelector(".clear").click();
    } else if (e.key === ".") {
        document.querySelector(".decimal").click();
    }
});