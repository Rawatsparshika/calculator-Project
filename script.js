const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));

let currentInput = '';
let operator = '';
let firstNumber = '';

buttons.map(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value;

        if (value === 'C') {
            currentInput = '';
            operator = '';
            firstNumber = '';
            display.textContent = '0';
        } else if (value === '=') {
            if (firstNumber && operator && currentInput) {
                display.textContent = eval(`${firstNumber} ${operator} ${currentInput}`);
                firstNumber = display.textContent;
                currentInput = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                firstNumber = currentInput;
                currentInput = '';
                operator = value;
                display.textContent = operator;
            } else if (operator) {
                operator = value;
                display.textContent = operator;
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
