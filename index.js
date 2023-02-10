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
    const parent = document.getElementById('parent');
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
};
parentCtn();

function calcDisplay() {
    const parent = document.getElementById('parent');
    const numberD = document.createElement('div');
    numberD.id = 'calcDisplayID';
    numberD.style.backgroundColor = '#000000';
    numberD.style.border= '10px solid #000000';
    numberD.style.borderRadius = '.5rem';
    parent.append(numberD);
}
calcDisplay();

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
    // tlCtn.style.backgroundColor = 'orange';
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
    // nmCtn.style.backgroundColor = 'white';
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
    rSCtn.style.gridArea = '1 / 4 / 6 / 5';
    // rSCtn.style.backgroundColor = 'orange';
    parentCtn.append(rSCtn);
}
rightSideCtn();

function buttomCtn() {
    const parentCtn = document.getElementById('buttonCtn');
    const btCtn = document.createElement('div');
    btCtn.id = 'buttomCtnID'
    btCtn.style.display = 'grid';
    btCtn.style.placeItems = 'center';
    btCtn.style.gridAutoFlow = 'column';
    btCtn.style.width = '100%';
    btCtn.style.height = '100%';
    btCtn.style.gridArea = '5 / 1 / 5 / 4';
    // btCtn.style.backgroundColor = 'orange';
    parentCtn.append(btCtn);
}
buttomCtn();

function topBtns(){
    const parentCtn = document.getElementById('topLayerID');
    for(let i = 0; i < 3; i++) {
        const btns = document.createElement('button');
        btns.style.backgroundColor = 'white';
        btns.style.borderRadius = '3rem';
        btns.style.width = '3rem';
        btns.style.height = '3rem';
        btns.style.backgroundColor = 'grey';
        btns.style.borderColor = 'black';
        btns.className = `t-${i + 1}`;
        parentCtn.append(btns);
    }
}
topBtns();

function numberBtns(){
    const parentCtn = document.getElementById('numberCtnID');
    for(let i = 0; i < 9; i++) {
        const btns = document.createElement('button');
        btns.style.backgroundColor = 'white';
        btns.style.borderRadius = '3rem';
        btns.style.width = '3rem';
        btns.style.height = '3rem';
        btns.style.backgroundColor = 'black';
        btns.style.borderColor = 'black';
        btns.className = `n-${i + 1}`;
        parentCtn.append(btns);
    }
}
numberBtns();

function rightSideBtns(){
    const parentCtn = document.getElementById('rightSID');
    for(let i = 0; i < 5; i++) {
        const btns = document.createElement('button');
        btns.style.backgroundColor = 'white';
        btns.style.borderRadius = '3rem';
        btns.style.width = '3rem';
        btns.style.height = '3rem';
        btns.style.backgroundColor = 'orange';
        btns.style.borderColor = 'orange';
        btns.className = `r-${i + 1}`;
        parentCtn.append(btns);
    }
}
rightSideBtns();

function buttomBtns(){
    const parentCtn = document.getElementById('buttomCtnID');
    for(let i = 0; i < 3; i++) {
        const btns = document.createElement('button');
        btns.style.backgroundColor = 'white';
        btns.style.borderRadius = '3rem';
        btns.style.text = 'center';
        btns.style.width = '3rem';
        btns.style.height = '3rem';
        btns.style.backgroundColor = 'orange';
        btns.style.borderColor = 'orange';
        btns.className = `b-${i + 1}`;
        parentCtn.append(btns);
    }
}
buttomBtns();