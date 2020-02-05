const container = document.querySelector('#container');

function makeGrid(gridSize) {
    for (let i = 0; i < gridSize ** 2; i++) {
        const gridDiv = document.createElement('div');
        container.appendChild(gridDiv);
        gridDiv.classList.add('box');
    }
}

makeGrid(32);
function activateBoxes() {
    const boxes = Array.from(document.querySelectorAll('.box'));
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseenter', function() {
        boxes[i].classList.add('active');
        });
    }
}
activateBoxes();

const button = document.querySelector('.btn-clear');
button.addEventListener('click', newGrid);

function newGrid() {
    let userInput = prompt('how many boxes per side? Recommended: 12 - 128', 32);
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
      }
      makeGrid(userInput);
      activateBoxes();

      const boxes = Array.from(document.querySelectorAll('.box'));
      for (let i = 0; i < boxes.length; i++) {
          boxes[i].style.width = 768 / Number(userInput)  + 'px'; // container width divided by grid width
          boxes[i].style.height = 480 / Number(userInput) + 'px';
    }
    container.style.gridTemplateColumns = 'repeat(' + Number(userInput) + ', 1fr)';
    container.style.gridTemplateRows = 'repeat(' + Number(userInput) + ', 1fr)';
}