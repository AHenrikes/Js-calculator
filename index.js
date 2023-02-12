function body() {
    let body = document.getElementById('body');
    body.style.backgroundColor = 'black';
    body.style.display = 'grid';
    body.style.placeContent = 'center';
    body.style.height = '100vh';
    body.style.overflow = 'hidden';
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
    topDisplay.style.color = 'white';
    topDisplay.setAttribute('previousOp', '');
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
    mainDisplay.setAttribute('currentsOp', '');
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
}
createButtons();
