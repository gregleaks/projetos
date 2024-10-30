function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#'

    for (let i=0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color;
}

const palette = document.getElementById('pallete');
const pixelArt = document.getElementById('pixel-art');
const gridSizeInput = document.getElementById('grid-size');

let selectedColor = '#000000'
let gridSize = 5;


function createPalette() {
    palette.innerHTML = ''

    for(let i=0; i < 4; i++){
        const color = getRandomColor();
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color'
        colorDiv.style.backgroundColor = color;
        colorDiv.onclick = () => {
            selectedColor = color
        }
    }
}

function createGrid(size){
    pixelArt.innerHTML = ''
    pixelArt.style.gridTemplateColumns = `repeat(${size}, 50px)`
    pixelArt.style.gridTemplateRows = `repeat(${size}, 50px)`

    for(let i=0; i < size * size; i++){
        const pixel = document.createElement('div')
        pixel.className = 'pixel'
        pixel.onclick = () => {
            pixel.style.backgroundColor = selectedColor;

        }
        pixelArt.appendChild(pixel)
    }
}

function clearPixel() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel.style.backgroundColor = '')
}

function regenerateColors(){
    createPalette();
}

function generateGrid(){
    const size = parseInt(gridSizeInput.value) || 5;
    gridSize = size;
    createGrid(gridSize);
}

document.getElementById('clear').onclick = clearPixel;
document.getElementById('generate').onclick = generateGrid;
document.getElementById('regenarete-colors').onclick = regenerateColors;

gridSizeInput.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        generateGrid();
    }
})

createPalette()
createGrid(gridSize);