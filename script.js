let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");
let display = document.getElementById("display");
let clr = document.getElementById("clear");
let equals = document.getElementById("equals");
let dlt = document.getElementById("delete");
let plusminus = document.getElementById("plusminus");
let period = document.getElementById("period");
let displayValue;
let firstValue;
let secondValue;
let result = undefined;
let newNumber = false;
let operatorsClicked = false;
let previousOperator = false;
let isDecimal = false;
let count = 9;
const limit = 11;
display.textContent = "0";
valueUpdate();

//taking the value from display

function valueUpdate() {
    displayValue = Number(display.textContent);
}

//clearing function

function clear() {
    display.textContent = "0";
    firstValue = 0;
    secondValue = 0;
    result = undefined;
    operatorsClicked = false;
    previousOperator = false;
    newNumber = false;
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

    while (result.toString().length > limit) {
        if (result % 1 != 0) {
            result = result.toPrecision(count);
            --count;
        }
        else {
            alert("ERROR! The number is too big!")
            clear();
        }
    }

    if (typeof result === "string") {
        result = Number(result);
    }

    count = 9;
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

//typing in the period

period.addEventListener('click', function() {
    valueUpdate();
    if((displayValue % 1 != 0) || display.textContent.substring(display.textContent.length-1, display.textContent.length) === ".") {
        return;
    }
    else {
        if(newNumber) {
            display.textContent = "0.";
            newNumber = false;
            result = undefined;
        }
        else display.textContent += ".";
        valueUpdate();
    }
})

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

//clear listener

clr.addEventListener('click', function() {
    clear();
    valueUpdate();
})

//equals function

equals.addEventListener('click', function() {
    giveResult();
    operatorsClicked = false;
    previousOperator = false;
    newNumber = true;
})

//delete function

dlt.addEventListener('click', function() {
    if(display.textContent === "0") {
        return;
    }
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    valueUpdate();
    firstValue = displayValue;
})

plusminus.addEventListener('click', function() {
    valueUpdate();
    displayValue *= -1
    display.textContent = displayValue;
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
        alert("You can't divide by zero!");
        clear();
        return;
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