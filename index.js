function body() {
    let body = document.getElementById('body');
    body.style.backgroundColor = 'black';
    body.style.display = 'grid';
    body.style.placeContent = 'center';
    body.style.height = '100vh';
};
body();

function parentCtn() {
    const body = document.getElementById('body')
    const parent = document.createElement('div');
    parent.id = 'parent';
    parent.style.backgroundColor = '#E2E8F0';
    parent.style.display = 'grid';
    parent.style.gap = '2rem';
    parent.style.height = '30rem';
    parent.style.width = '20rem';
    parent.style.borderRadius = '.5rem';
    parent.style.padding = '1rem 1rem';
    parent.style.gridTemplateRows = '8rem auto';
    parent.style.boxShadow= '2px 2px 10px #90A4AE';
    parent.style.border= '1px solid #212121';
    body.append(parent);
};
parentCtn();

function calcDisplay() {
    const parent = document.getElementById('parent');
    const numberD = document.createElement('div');
    numberD.id = 'calcDisplayID';
    numberD.style.backgroundColor = '#0F172A';
    numberD.style.border= '10px solid #000000';
    numberD.style.borderRadius = '.5rem';
    numberD.style.color = 'white';
    numberD.style.fontSize = '3em';
    numberD.style.overflow = 'auto';
    parent.append(numberD);
}
calcDisplay();

function previousOp(){
    const parent = document.getElementById('calcDisplayID');
    const topDisplay = document.createElement('div');
    topDisplay.id = 'previousOp';
    topDisplay.style.display = 'grid';
    topDisplay.style.placeItems = 'end'
    topDisplay.style.height = '35%';
    topDisplay.style.color = 'gray';
    topDisplay.style.fontSize = '.7em';
    parent.append(topDisplay);
};
previousOp();

function currentOp(){
    const parent = document.getElementById('calcDisplayID');
    const mainDisplay = document.createElement('div');
    mainDisplay.id = 'currentOp';
    mainDisplay.style.display = 'grid';
    mainDisplay.style.placeItems = 'end'
    mainDisplay.style.height = '65%';
    mainDisplay.style.color = 'white';
    parent.append(mainDisplay);
};
currentOp();

function buttonCtn() {
    const parent = document.getElementById('parent');
    const bCtn = document.createElement('div');
    bCtn.id = 'buttonCtn'
    bCtn.style.display = 'grid';
    bCtn.style.gridTemplateRows = 'repeat(5, 1fr)';
    bCtn.style.gridTemplateColumns = 'repeat(4, 1fr)';
    bCtn.style.backgroundColor = '#212121';
    parent.append(bCtn);
}
buttonCtn();

function createButtons() {
    const numberCtn = document.getElementById('buttonCtn');
    const buttons = ['','C', 'DEL', '÷', '7', '8', '9', '*', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '='];
    
    for (let i = 0; i < buttons.length; i++) {
      const button = document.createElement('button');
      button.textContent = buttons[i];
      button.style.backgroundColor = 'white';
      button.style.fontSize = '2em';
      button.style.width = '100%';
      button.style.height = '100%';
      button.className = `b-${i + 1}`;
      numberCtn.appendChild(button);
    }
    
    const equal = document.querySelector('.b-19');
    equal.style.gridArea = '5 / 3 / 6 / 5';
    
    const github = document.querySelector('.b-1');
    github.addEventListener('click', function() {
        window.location ='https://github.com/HenrikesA';
    })
}
createButtons();


// FUNCTIONALITY  
class Calculator {
    constructor(previousD, currentD){
        this.previousD = previousD
        this.currentD = currentD
        this.clear()
    }
    
    clear() {
        this.currentOp = ''
        this.previousOp = ''
        this.operation = undefined
    }

    delete() {
        this.currentOp = this.currentOp.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number == '.' && this.currentOp.includes('.')) return
        this.currentOp = this.currentOp.toString() + number.toString()
    }

    chooseOperation(operation){
        if(this.currentOp === '') return
        if(this.previousOp !== '') {
            this.compute()
        }

        this.operation = operation
        this.previousOp = this.currentOp
        this.currentOp = ''
    }

    compute(){
        let computation

        const prev = parseFloat(this.previousOp)
        const current = parseFloat(this.currentOp)
        if(isNaN(prev) || isNaN(current)) return

        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default: return
        }

        this.currentOp = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if(isNaN(integerDigits)){
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay(){
        this.currentD.innerText =
            this.getDisplayNumber(this.currentOp)
        if(this.operation != null) {
            this.previousD.innerText =
            `${this.getDisplayNumber(this.previousOp)} ${this.operation}`
        } else {
            this.previousD.innerText = ''
        }
    }
}

const numbers = document.querySelectorAll('.b-5, .b-6, .b-7, .b-9, .b-10, .b-11, .b-13, .b-14, .b-15, .b-17, .b-18')
const operators = document.querySelectorAll('.b-4, .b-8, .b-12, .b-16')
const equal = document.querySelector('.b-19')
const dlt = document.querySelector('.b-3')
const clear = document.querySelector('.b-2')

const previousD = document.getElementById('previousOp')
const currentD = document.getElementById('currentOp')

const calculator = new Calculator(previousD, currentD)

numbers.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equal.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay()
});

dlt.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay()
});

clear.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay()
});
// these nice line of code examples are from dev simplyfied