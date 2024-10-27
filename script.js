const numberButtons = document.querySelectorAll('.number');
const buttonContainer = document.querySelector('#calcultor-container');
const display = document.querySelector('#display');
const operator =  document.querySelectorAll('.operator');
const  plusOrMinus = document.querySelector('#plus-or-minus');
const  point = document.querySelector('#point');
const  egal = document.querySelector('#egal');
const  ac = document.querySelector('#ac');
const  supp = document.querySelector('#Supp');
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
const playOperator = (arr) => {
    arr.forEach(el => el.addEventListener('click', e => {
        if (numberFirst === undefined) {
            operand = e.target.textContent;
            numberFirst = +display.textContent;
            console.log('num1 (oper)' + numberFirst);
            return
        } else if (numberFirst !== undefined && operand !== '') { 
            /*if (numberFirst !== +display.textContent) {
                numberSecond = +display.textContent;
            }*/
            numberSecond = +display.textContent;
            console.log('num2 (oper) ' + numberSecond);
            console.log('num1 (oper) ' + numberFirst);
            let numFOperNumsec = operate(numberFirst, operand, numberSecond);
            display.textContent = tooMuch(numFOperNumsec)
            numberFirst = tooMuch(numFOperNumsec);
            operand = e.target.textContent
            console.log('operand suite (oper) ' + operand);
            console.log('resultat (oper): ' + numberFirst) 
        }else if (numberFirst !== undefined && operand === '') {
            operand = e.target.textContent;

        }

        console.log(operand);
        console.log(typeof numberFirst);
    }));    
}
const tooMuch = num => {
    if (num >= 10 ** (10 - 1) || num <= -(10 ** (10 - 1))) {
        display.textContent = num.toExponential(3)
    }
    if(num.includes('.') && !num.includes('e')) {
        display.textContent = parseFloat(num.toFixed(3))
    }
}

const displayOperations = () => {
    numberButtons.forEach(el => el.addEventListener('click', e => {
        //display.value = display.textContent
        //console.log(display.value)
        //display.addEventListener('change', () => isChanged = true);
        if (numberFirst === +display.textContent) {
            display.textContent = e.target.textContent;
        } else {
            display.textContent += e.target.textContent;
        }
        if (display.textContent.length >= 10) {
            display.textContent = display.textContent.slice(0, 11)
        }
    }));
    playOperator(operator);
    plusOrMinus.addEventListener('click', () => { 
        if (display.textContent.includes('-')) {
            display.textContent = display.textContent.split('').toSpliced(0, 1).join('');
            console.log(display.textContent.includes('-'));
        } else {
            display.textContent = display.textContent.split('').toSpliced(0, 0, '-').join('');
            console.log(display.textContent.includes('-'));
        }
    });
    //console.log('regard'.split('').toSpliced(1, 1, '-'))
    ac.addEventListener('click', () => {
        display.textContent = '';
        numberFirst = undefined;
        numberSecond = undefined;
    })
    point.addEventListener('click', () => {
        if (!display.textContent.includes('.') && display.textContent !== '') display.textContent += '.'
    });
    egal.addEventListener('click', () => {
        numberSecond = +display.textContent;
        if (numberFirst !== undefined && operand !== '' && numberSecond !== undefined) {
            display.textContent = operate(numberFirst, operand, numberSecond);
            console.log('num 1 (=): ' +  numberFirst);
            numberFirst = operate(numberFirst, operand, numberSecond);
            console.log('num 2 (=): ' +  numberSecond);
            console.log('resultat (=) ' +  numberFirst);
            operand = '';
        }
    });
    supp.addEventListener('click', () => {
        console.log(numberFirst === +display.textContent);
        console.log(display.textContent);
        if(numberFirst === +display.textContent) {
            display.textContent = '';
            numberFirst = undefined;
        } else {
            display.textContent = display.textContent.slice(0, display.textContent.length - 1)
        }
    })
}
displayOperations()
