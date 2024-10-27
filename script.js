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
const playOperator = (arr) => {
    arr.forEach(el => el.addEventListener('click', e => {
        if (numberFirst === undefined) {
            operand = e.target.textContent;
            numberFirst = +display.textContent;
            return
        } else if (numberFirst !== undefined && operand !== '') {
            numberSecond = +display.textContent;
            let numFOperNumsec = operate(numberFirst, operand, numberSecond);
            display.textContent = tooMuch(numFOperNumsec)
            numberFirst = tooMuch(numFOperNumsec);
            if (operand === '/' && numberSecond === 0) {
                display.textContent =  'LOOOOOL';
                numberFirst = undefined;
                numberSecond = undefined;
                operand = '';
                return
            }
            lool()
            operand = e.target.textContent;
            
        } else if (numberFirst !== undefined && operand === '') {
            operand = e.target.textContent;

        }
    }));    
}
const tooMuch = num => {
    if (num >= 10 ** (10 - 1) || num <= -(10 ** (10 - 1))) {
        return num.toExponential(5)
    }
    if(num.toString().includes('.') && !num.toString().includes('e')) {
        return parseFloat(num.toFixed(3))
    } else {
        return num
    }
}


const lool = () => {
    if (display.textContent === 'Infinity' || display.textContent === 'NaN' || numberFirst === Infinity) {
        numberFirst = undefined;
        numberSecond = undefined;
        operand = ''
    }
}

const displayOperations = () => {
    numberButtons.forEach(el => el.addEventListener('click', e => {
        if (numberFirst == +display.textContent || display.textContent === 'Infinity' || display.textContent === 'NaN' || display.textContent ===  'LOOOOOL') {
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
        } else {
            display.textContent = display.textContent.split('').toSpliced(0, 0, '-').join('');
        }
    });
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
            
            display.textContent = tooMuch(operate(numberFirst, operand, numberSecond));
            numberFirst = tooMuch(operate(numberFirst, operand, numberSecond));
            if (operand === '/' && numberSecond === 0) {
                display.textContent =  'LOOOOOL';
                numberFirst = undefined;
                numberSecond = undefined;
                operand = ''
            }
            operand = '';
            lool();
        }
    });
    supp.addEventListener('click', () => {
        if(numberFirst === +display.textContent) {
            display.textContent = '';
            numberFirst = undefined;
        } else {
            display.textContent = display.textContent.slice(0, display.textContent.length - 1)
        }
    })
}
displayOperations()
