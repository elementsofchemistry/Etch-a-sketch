const container = document.getElementById('container');
const button = document.getElementById('newGridBtn');


const containerSize = 480;

function createGrid(gridSize) {
    container.innerHTML = '';
    const totalSquares = gridSize * gridSize;
    const squareSize = containerSize / gridSize;


for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener('mouseover', () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });

    container.appendChild(square);
}
}

button.addEventListener('click', () => {
    let input = prompt('Enter number of squares per side (1-100):');
    let gridSize = parseInt(input);

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert('Please enter a number between 1 and 100.');
    } else {createGrid(gridSize);
    }
    });

    createGrid(16);
