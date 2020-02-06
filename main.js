const container = document.querySelector('#container');
function makeGrid(gridSize) {
    for (let i = 0; i < gridSize ** 2; i++) {
        const gridDiv = document.createElement('div');
        container.appendChild(gridDiv);
        gridDiv.classList.add('box');
    }
}

makeGrid(32);

const boxes = document.getElementsByClassName('box');
function activateBoxes() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseenter', function() {
        boxes[i].classList.add('active');
        });
    }
}
activateBoxes();

const changeSize = document.querySelector('#change-size');
const inputValue = document.querySelector('.input-value');
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
    inputValue.textContent = `${this.value}`
}
changeSize.addEventListener('change', updateGridSize);
changeSize.addEventListener('mousemove', function() {
    inputValue.textContent = `${this.value}`
});

const buttonClear = document.querySelector('.btn-clear');
buttonClear.addEventListener('click', clear);

function clear() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove('active')
    }
}
