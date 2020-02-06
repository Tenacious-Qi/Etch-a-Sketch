const container = document.querySelector('#container');
const boxes = document.getElementsByClassName('box');

function makeGrid(gridSize) {
    for (let i = 0; i < gridSize ** 2; i++) {
        const gridDiv = document.createElement('div');
        container.appendChild(gridDiv);
        gridDiv.classList.add('box');
    }
}
// CREATE DEFAULT GRID SIZE //
makeGrid(32);

function activateBoxes() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseenter', function() {
        boxes[i].classList.add('active');
        boxes[i].style.backgroundColor = '#30336b';
        });
    }
}
activateBoxes();

// SLIDER GRID SIZE SELECTORS //
const slider = document.querySelector('#change-size');
let inputValue = document.querySelector('.input-value');

// THIS FUNCTION CHANGES GRID SIZE BASED ON RANGE INPUT VALUE //
function updateGridSize() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
      }
      makeGrid(this.value);
      activateBoxes();
     
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.width = 768 / this.value + 'px'; // container width divided by grid width
        boxes[i].style.height = 480 / this.value + 'px';
    }
    container.style.setProperty('grid-template-columns', 'repeat(' + this.value + ', 1fr)');
    container.style.setProperty('grid-template-rows', 'repeat(' + this.value + ', 1fr)');
    inputValue.textContent = `${this.value}`;
}

// EVENT LISTENERS FOR SLIDER RANGE //
slider.addEventListener('change', updateGridSize);
slider.addEventListener('mousemove', function() {
    inputValue.textContent = `${this.value}`;
    });


// BUTTON SELECTORS AND EVENT LISTENERS //
const buttonClear = document.querySelector('.btn-clear');
const buttonRandom = document.querySelector('.btn-random');
const buttonDefault = document.querySelector('.btn-default');
buttonClear.addEventListener('click', clear);
buttonRandom.addEventListener('click', randomColor);
buttonDefault.addEventListener('click', activateBoxes);

// FUNCTIONS TO RUN WHEN BUTTONS ARE CLICKED (buttonDefault runs activateBoxes) //
function clear() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor= '#dff9fb';
    }
}
function randomColor() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseenter', function() {
            const r = Math.floor(Math.random()*256);
            const g = Math.floor(Math.random()*256);
            const b = Math.floor(Math.random()*256);
            boxes[i].style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        });
    }
}

function shiftColor() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseenter', function(){

        });
    }
}

