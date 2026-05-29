let firstNumber = "";
let secondNumber = "";
let operator = "";
let shouldResetDisplay = false;

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;  
}

function multiply(a,b){
    return a*b;
}

function div(a,b){
    if (b!==0){
        return a/b;
    }else{
        return "undefined";
    }
}

function operate(operator,a,b){
    a=Number(a);
    b=Number(b);

    switch(operator) {
        case "+":
            return add(a,b);
        
        case "-":
            return sub(a,b);

        case "*":
            return multiply(a,b);

        case "/":
            return div(a,b);

        default:
            return null;
    }
}

const display=document.querySelector(".display-area");
const numbers =document.querySelectorAll(".number");

numbers.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(shouldResetDisplay){
            display.textContent=button.dataset.value;
            shouldResetDisplay=false;
        }else{
            if (display.textContent ==="0"){
                display.textContent=button.dataset.value;
            }else{
                display.textContent+=button.dataset.value;
            };
        };
    });
});

const operators=document.querySelectorAll(".operator");
operators.forEach((button)=>{
    button.addEventListener("click",()=>{
        firstNumber= display.textContent;
        operator=button.dataset.value;
        shouldResetDisplay=true;
    })
})

const equal=document.querySelector(".equals");
equal.addEventListener("click",()=>{
    secondNumber=display.textContent;
    const result = operate(operator, firstNumber, secondNumber);

    display.textContent = result;

    firstNumber = "";
    secondNumber = "";
    operator = "";
    shouldResetDisplay = true;
})

operators.forEach((button) => {
    button.addEventListener("click", () => {

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

    if (display.textContent.length === 1) {
        display.textContent = "0";
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }

});

