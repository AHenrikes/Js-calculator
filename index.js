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
    parent.style.backgroundColor = '#263238';
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
    numberD.style.backgroundColor = '#000000';
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
    parent.append(bCtn);
}
buttonCtn();

function topLayerCtn() {
    const parentCtn = document.getElementById('buttonCtn');
    const tlCtn = document.createElement('div');
    tlCtn.id = 'topLayerID'
    tlCtn.style.display = 'grid';
    tlCtn.style.gridAutoFlow = 'column';
    tlCtn.style.placeItems = 'center';
    tlCtn.style.width = '100%';
    tlCtn.style.height = '100%';
    tlCtn.style.gridArea = '1 / 1 / 1 / 4'
    parentCtn.append(tlCtn);
}
topLayerCtn();

function numberCtn () {
    const parentCtn = document.getElementById('buttonCtn');
    const nmCtn = document.createElement('div');
    nmCtn.id = 'numberCtnID'
    nmCtn.style.display = 'grid';
    nmCtn.style.gridTemplateColumns = 'repeat(3, 1fr)';
    nmCtn.style.gridTemplateRows = 'repeat(3, 1fr)';
    nmCtn.style.placeItems = 'center';
    nmCtn.style.width = '100%';
    nmCtn.style.height = '100%';
    nmCtn.style.gridArea = '2 / 1 / 5 / 4';
    parentCtn.append(nmCtn);
}
numberCtn();

function rightSideCtn() {
    const parentCtn = document.getElementById('buttonCtn');
    const rSCtn = document.createElement('div');
    rSCtn.id = 'rightSID'
    rSCtn.style.display = 'grid';
    rSCtn.style.placeItems = 'center';
    rSCtn.style.width = '100%';
    rSCtn.style.height = '100%';
    rSCtn.style.gridArea = '1 / 4 / 5 / 5';
    parentCtn.append(rSCtn);
}
rightSideCtn();

function buttomCtn() {
    const parentCtn = document.getElementById('buttonCtn');
    const btCtn = document.createElement('div');
    btCtn.id = 'buttomCtnID';
    btCtn.style.display = 'grid';
    btCtn.style.placeItems = 'center';
    btCtn.style.gridAutoFlow = 'column';
    btCtn.style.width = '100%';
    btCtn.style.height = '100%';
    btCtn.style.gridArea = '5 / 1 / 5 / 5';
    parentCtn.append(btCtn);
}
buttomCtn();

function topBtns(){
    const topRow = ['AC', 'DEL', '%']
    const parentCtn = document.getElementById('topLayerID');
    for(let i = 0; i < 3; i++) {
        const btns = document.createElement('button');
        btns.style.color = 'white';
        btns.style.fontSize = '1.2em'
        btns.style.borderRadius = '3rem';
        btns.style.width = '3rem';
        btns.style.height = '3rem';
        btns.style.backgroundColor = 'grey';
        btns.style.borderColor = 'black';
        btns.innerText = topRow[i];
        btns.className = `t-${i + 1}`;
        parentCtn.append(btns);
    }

    const t1 = document.querySelector('.t-1');
    t1.setAttribute('data-clear', '');

    const t2 = document.querySelector('.t-2');
    t2.setAttribute('data-dlt', '');

    const t3 = document.querySelector('.t-3');
    t3.setAttribute('data-operator', '');
}
topBtns();

function numberBtns(){
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
    const parentCtn = document.getElementById('numberCtnID');
    for(let i = 0; i < 9; i++) {
        const btns = document.createElement('button');
        btns.style.color = 'white';
        btns.style.fontSize = '1.5em'
        btns.style.borderRadius = '3rem';
        btns.style.width = '3rem';
        btns.style.height = '3rem';
        btns.style.backgroundColor = 'black';
        btns.style.borderColor = 'black';
        btns.setAttribute('data-number', '');
        btns.className = `n-${i + 1}`;
        btns.textContent = numbers[i];
        parentCtn.appendChild(btns);
    }
}
numberBtns();

function rightSideBtns(){
    const assignments = ['÷', "*", "+", "-"];
    const parentCtn = document.getElementById('rightSID');
    for(let i = 0; i < 4; i++) {
        const btns = document.createElement('button');
        btns.style.color = 'white';
        btns.style.fontSize = '1.2em'
        btns.style.backgroundColor = 'white';
        btns.style.borderRadius = '3rem';
        btns.style.width = '3rem';
        btns.style.height = '3rem';
        btns.style.backgroundColor = 'orange';
        btns.setAttribute('data-operator','');
        btns.textContent = assignments[i];
        btns.className = `r-${i + 1}`;
        parentCtn.append(btns);
    }
}
rightSideBtns();

function buttomBtns(){
    const bottomRow = ['.', '0', '', '='];
    const parentCtn = document.getElementById('buttomCtnID');
    for(let i = 0; i < 4; i++) {
        const btns = document.createElement('button');
        btns.style.placeItems = 'center';
        btns.style.color = 'white';
        btns.style.fontSize = '1.2em'
        btns.style.borderRadius = '3rem';
        btns.style.text = 'center';
        btns.style.width = '3rem';
        btns.style.height = '3rem';
        btns.style.backgroundColor = 'orange';
        btns.style.borderColor = 'black';
        btns.innerText = bottomRow[i];
        btns.className = `b-${i + 1}`;
        parentCtn.append(btns);
    }
    const b1 = document.querySelector('.b-1');
    b1.setAttribute('data-number', '');

    const b2 = document.querySelector('.b-2');
    b2.setAttribute('data-number', '');
    b2.style.backgroundColor = 'black';

    const b3 = document.querySelector('.b-3');
    b3.style.backgroundColor = 'black';

    const b4 = document.querySelector('.b-4');
    b4.setAttribute('data-equals', '');
}
buttomBtns();

function displayContent() {
    const display = document.getElementById('currentOp')
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            display.innerText = button.textContent;
        });
    });
};
displayContent();

