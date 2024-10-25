const numberButtons = document.querySelectorAll('.number');
const buttonContainer = document.querySelector('#calcultor-container');
const display = document.querySelector('#display');
const operator =  document.querySelectorAll('.operator');
const  plusOrMinus = document.querySelector('#plus-or-minus');
const  point = document.querySelector('#point');
const  egal = document.querySelector('#egal');
const  ac = document.querySelector('#ac');
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
let numberFirst = undefined;
let operand = '';
let numberSecond = undefined;
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
//buttonContainer.addEventListener('click', e => display.textContent += e.target.textContent)
//numberButtons.forEach(el => el.addEventListener('click', e => 
//    display.textContent += e.target.textContent));
const displayOperations = () => {
    numberButtons.forEach(el => el.addEventListener('click', e => {
        if (numberFirst === +display.textContent) {
            display.textContent = e.target.textContent;
        } else {
            display.textContent += e.target.textContent;
        }
    }));
    operator.forEach(el => el.addEventListener('click', e => {
        if (numberFirst === undefined) {
            operand = e.target.textContent;
            numberFirst = +display.textContent;
            console.log('op1 ' + numberFirst);
        } else if (numberFirst !== undefined ) { 
            if (numberFirst !== +display.textContent) {
                numberSecond = +display.textContent;
            }
            console.log('op1 ' + numberSecond);
            display.textContent = operate(numberFirst, operand, numberSecond);
            operand = e.target.textContent
            numberFirst = operate(numberFirst, operand, numberSecond);
        }

        console.log(operand);
        console.log(typeof numberFirst);
    }));
    plusOrMinus.addEventListener('click', () => { 
        if (display.textContent.includes('-')) {
            display.textContent = display.textContent.split('').toSpliced(0, 1).join('');
        } else {
            display.textContent = display.textContent.split('').toSpliced(0, 0, '-').join('');
        }
    });
    //console.log('regard'.split('').toSpliced(1, 1, '-'))
    ac.addEventListener('click', () => {
        display.textContent = '';

    })
    point.addEventListener('click', () => {
        if (!display.textContent.includes('.') && display.textContent !== '') display.textContent += '.'
    });
    egal.addEventListener('click', () => {
        numberSecond === display.textContent
        if (numberFirst !== undefined && operand !== '' && numberSecond === undefined) {
            display.textContent = operate(numberFirst, operand, numberFirst);
            numberFirst = operate(numberFirst, operand, numberFirst);
        } else if (numberFirst !== undefined && operand !== '' && numberSecond !== undefined) {
            display.textContent = operate(numberFirst, operand, numberSecond);
            numberFirst = operate(numberFirst, operand, numberFirst);
        }
    })
}
displayOperations()
