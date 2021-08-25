let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");
let display = document.getElementById("display");
let clear = document.getElementById("clear");
let displayValue;
display.textContent = "0";
const limit = 11;

clear.addEventListener('click', function() {
    display.textContent = "0";
    displayUpdate();
})

function displayUpdate() {
    displayValue = Number(display.textContent);
}

for (let i = 0; i < numbers.length; ++i) {
    numbers[i].addEventListener('click', function() {
        if (display.textContent.length !== limit) {
            if (display.textContent === "0") {
                display.textContent = numbers[i].textContent;
            }
            else {
                display.textContent += numbers[i].textContent;
            }
        }
    displayUpdate();
    }) 
}

for (let j = 0; j < operators.length; ++j) {
    operators[j].addEventListener('click', function() {
        chosenOperator = operators[j].id;
    })
}

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