const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const gridDiv = document.createElement('div');
    container.appendChild(gridDiv);
    gridDiv.classList.add('box');
}

let boxes = Array.from(document.querySelectorAll('.box'));
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseenter', function() {
        boxes[i].classList.add('active');
    });
}
