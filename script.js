let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");
let display = document.getElementById("display");
let clear = document.getElementById("clear");
let equals = document.getElementById("equals");
let displayValue;
let firstValue;
let secondValue;
let result = undefined;
let newNumber = false;
let operatorsClicked = false;
display.textContent = "0";
const limit = 11;


function valueUpdate() {
    displayValue = Number(display.textContent);
}

function displayUpdate(number) {
    if(newNumber === false) {
        if (display.textContent.length !== limit) {
            if (display.textContent === "0") display.textContent = number;
            else display.textContent += number;                
        }  
    }
    else {
        newNumber = false;
        display.textContent = number;
    }
}

function giveResult() {
    secondValue = displayValue;
    result = operate(firstValue, chosenOperator, secondValue);
    display.textContent = firstValue = result;
}

for (let i = 0; i < numbers.length; ++i) {
    numbers[i].addEventListener('click', function() {
    displayUpdate(numbers[i].textContent)
    valueUpdate();
    }) 
}


for (let j = 0; j < operators.length; ++j) {
    operators[j].addEventListener('click', function() {
        if (operatorsClicked === true) {
            giveResult();
        }
        chosenOperator = operators[j].id;
        if (result === undefined) firstValue = displayValue;
        newNumber = true;
        operatorsClicked = true;
    })
}

clear.addEventListener('click', function() {
    display.textContent = "0";
    firstValue = 0;
    secondValue = 0;
    result = undefined;
    operatorsClicked = false;
    newNumber = false;
    valueUpdate();
})

equals.addEventListener('click', function() {
    giveResult();
    operatersClicked = false;
})

function add(a,b) {
    return a + b;
}

function multiply(a,b) {
    return a * b;
}

function subtract(a,b) {
    return a - b;
}

function divide(a,b) {
    if(b === 0) {
        return alert("You can't divide by zero!");
    }
    return a / b;
}

function operate(a, operator, b) {
    switch(operator) {
        case '+': 
            return add(a,b);
        case '-': 
            return subtract(a,b);
        case '*': 
            return multiply(a,b);
        case '/': 
            return divide(a,b);
        default: break;
    }
}