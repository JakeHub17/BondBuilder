window.addEventListener('load' , ()=> {
  const canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth - 300;
  canvas.height = window.innerHeight - 500;
  const ctx = canvas.getContext('2d');

// array to store points of each line

const lines = [];

//track mouse movements 

let isDrawing = false;
let currentLine = [];

canvas.addEventListener('mousedown', startLine);
canvas.addEventListener('mousemove', drawLine);
canvas.addEventListener('mouseup', endLine);

function startLine(e){
  isDrawing = true;
  currentLine = [ [event.offsetX, event.offsetY] ];
}
function drawLine(e){
  if(isDrawing){
    const newPoint = [event.offsetX, event.offsetY];
    currentLine.push(newPoint);
  

  ctx.beginPath();
  ctx.moveTo(currentLine[currentLine.length - 2][0], currentLine[currentLine.length - 2 ][1]);
  ctx.lineTo(newPoint[0], newPoint[1]);
  ctx.stroke();
}
}

function endLine(e){
  if (isDrawing) {
    isDrawing = false;
    lines.push(currentLine);
    currentLine = [];
  }
}


});