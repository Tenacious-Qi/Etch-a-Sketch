const container = document.querySelector('#container');

function makeGrid(gridSize) {
    for (let i = 0; i < gridSize ** 2; i++) {
        const gridDiv = document.createElement('div');
        container.appendChild(gridDiv);
        gridDiv.classList.add('box');
    }
}
// CREATE DEFAULT GRID SIZE //
makeGrid(16);

const boxes = document.getElementsByClassName('box');
function activateBoxes() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseenter', function() {
        boxes[i].classList.add('active');
        boxes[i].style.backgroundColor = '#2d3436';
        });
    }
}
activateBoxes();

// SLIDER GRID SIZE SELECTORS //
const slider = document.querySelector('#change-size');
let inputValue = document.querySelector('.input-value');

// SLIDER RANGE EVENT LISTENERS //
slider.addEventListener('change', updateGridSize);
slider.addEventListener('mousemove', function() {
    inputValue.textContent = `${this.value}`;
});

// THIS FUNCTION CHANGES GRID SIZE BASED ON RANGE INPUT VALUE //
function updateGridSize() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
      }
    makeGrid(this.value);
    activateBoxes();
    container.style.setProperty('grid-template-columns', 'repeat(' + this.value + ', 1fr)');
    container.style.setProperty('grid-template-rows', 'repeat(' + this.value + ', 1fr)');
    inputValue.textContent = `${this.value}`;
}

// BUTTON SELECTORS AND EVENT LISTENERS //
const inputCustom = document.querySelector('#custom-color');
const buttonDefault = document.querySelector('.btn-default');
const buttonRandom = document.querySelector('.btn-random');
const buttonClear = document.querySelector('.btn-clear');
const buttonFade = document.querySelector('.btn-fade');
inputCustom.addEventListener('click', useCustomColor);
buttonClear.addEventListener('click', clear);
buttonRandom.addEventListener('click', useRandomColor);
buttonDefault.addEventListener('click', useDefaultColor);
buttonFade.addEventListener('click', useFadeColor);

// FUNCTIONS TO RUN WHEN BUTTONS ARE CLICKED //
function clear() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor= '#dfe6e9';
    }
}

function useRandomColor() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseenter', function() {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            boxes[i].style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        });
    }
}

function useDefaultColor() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseenter', function() {
            boxes[i].style.backgroundColor = '#2d3436';
        });
    }
}

function useFadeColor() {
    let red = 45;
    let green = 52;
    let blue = 54;
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseenter', function(){
            // fade to light gray base color 
            if ((red >= 45) && (red < 223)) red++
            if ((green >= 52) && (green < 230)) green++
            if ((blue >= 54) && (blue < 233)) blue++
            boxes[i].style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        });
    }
}

function useCustomColor() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseenter', function(){
            boxes[i].style.backgroundColor = inputCustom.value;
        });
    }
}

