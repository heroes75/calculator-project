const numberButtons = document.querySelectorAll('.number');
const buttonContainer = document.querySelector('#calcultor-container');
const display = document.querySelector('#display')
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
let numberFirst = 0;
let operand = '';
let numberSecond = 0;
const operate = (numberFirst, operand, numberSecond) => {
    switch (operand) {
        case '+':
            return add(numberFirst, numberSecond);
        case '-':
            return subtract(numberFirst, numberSecond);
        case '*':
            return multiply(numberFirst, numberSecond);
        case '/':
            return divide(numberFirst, numberSecond);
    }
}
//console.log(numberButtons);
buttonContainer.addEventListener('click', e => display.textContent += e.target.textContent)

