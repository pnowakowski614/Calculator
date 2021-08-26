let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");
let display = document.getElementById("display");
let clear = document.getElementById("clear");
let equals = document.getElementById("equals");
let dlt = document.getElementById("delete");
let displayValue;
let firstValue;
let secondValue;
let result = undefined;
let newNumber = false;
let operatorsClicked = false;
let previousOperator = false;
const limit = 11;
display.textContent = "0";

//taking the value from display

function valueUpdate() {
    displayValue = Number(display.textContent);
}

//updating the display

function displayUpdate(number) {
    if(newNumber === false) {
        if (display.textContent.length !== limit) {
            if (display.textContent === "0") display.textContent = number;
            else display.textContent += number;                
        }  
    }
    else {
        newNumber = false;
        result = undefined;
        display.textContent = number;
    }
}

//function giving the result

function giveResult() {
    secondValue = displayValue;
    result = operate(firstValue, chosenOperator, secondValue);
    display.textContent = firstValue = result;
}

//typing in the numbers

for (let i = 0; i < numbers.length; ++i) {
    numbers[i].addEventListener('click', function() {
    previousOperator = false;
    displayUpdate(numbers[i].textContent)
    valueUpdate();
    }) 
}

//choosing an operator

for (let j = 0; j < operators.length; ++j) {
    operators[j].addEventListener('click', function() {
        if (previousOperator) {
            chosenOperator = operators[j].id;
            return;
        }
        if (operatorsClicked) {
            giveResult();
        }
        chosenOperator = operators[j].id;
        if (result === undefined) firstValue = displayValue;
        newNumber = true;
        operatorsClicked = true;
        previousOperator = true;
    })
}

//clear function

clear.addEventListener('click', function() {
    display.textContent = "0";
    firstValue = 0;
    secondValue = 0;
    result = undefined;
    operatorsClicked = false;
    previousOperator = false;
    newNumber = false;
    valueUpdate();
})

//equals function

equals.addEventListener('click', function() {
    giveResult();
    operatorsClicked = false;
    previousOperator = false;
    newNumber = true;
})

dlt.addEventListener('click', function() {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    valueUpdate();
    firstValue = displayValue;
})

//math functions

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

function power(a,b) {
    return a ** b; 
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
        case '^':
            return power(a,b);
        default: break;
    }
}