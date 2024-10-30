const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let drawing = false;
let brushColor = document.getElementById('color').value;
let brushSize = document.getElementById('size').value;

document.getElementById('color').addEventListener('input', (e) => {
    brushColor = e.target.value;
});
document.getElementById('size').addEventListener('input', (e) => {
    brushSize = e.target.value;
    ctx.lineWidth = brushSize
});

canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
});

canvas.addEventListener('mousemove', (e) => {
    if(drawing){
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke()
    }
})
canvas.addEventListener('mouseup', (e) => {
    drawing = false;
})
canvas.addEventListener('mouseout', (e) => {
    drawing = false;
})
document.getElementById('clear', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.heigth)
});

document.getElementById('save').addEventListener('click', () => {
    const link =  document.createElement('a');
    link.download = 'desenhoBonitao.png';
    link.href = canvas.toDataURL();
    link.click();
});

ctx.lineWidth = brushSize;
