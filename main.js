const container = document.querySelector('#container');


function makeGrid(gridSize) {
    for (let i = 0; i < gridSize ** 2; i++) {
        const gridDiv = document.createElement('div');
        container.appendChild(gridDiv);
        gridDiv.classList.add('box');
    }
}

makeGrid(32);

let boxes = Array.from(document.querySelectorAll('.box'));
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseenter', function() {
        boxes[i].classList.add('active');
    });
}

const button = document.querySelector('.btn-clear');
button.addEventListener('click', newGrid);

function newGrid() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove('active');
    }
}

