var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var lines = [];
var isDrawing = false;
var rect = canvas.getBoundingClientRect(); // Get canvas position
var startPoint = {x: 0, y: 0};
var endPoint = {x: 0, y: 0};
var lineLength = 50; // Length of each line

// Set canvas size
canvas.width = 500;
canvas.height = 500;

// Add event listeners
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", drawLine);
canvas.addEventListener("mouseup", endDrawing);

// Start drawing
function startDrawing(event) {
  isDrawing = true;
  startPoint = {x: event.clientX - rect.left, y: event.clientY - rect.top}; // Adjust for canvas position
  endPoint = {x: event.clientX - rect.left, y: event.clientY - rect.top}; // Adjust for canvas position
}

// Draw line while mouse is moving
function drawLine(event) {
  if (isDrawing) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    endPoint = {x: event.clientX - rect.left, y: event.clientY - rect.top}; // Adjust for canvas position
    drawLines();
    drawCurrentLine();
  }
}

// End drawing and save line to array
function endDrawing(event) {
  isDrawing = false;
  endPoint = {x: event.clientX - rect.left, y: event.clientY - rect.top}; // Adjust for canvas position
  lines.push({start: startPoint, end: endPoint});
  drawLines();
}

// Draw all lines in array
function drawLines() {
  for (var i = 0; i < lines.length; i++) {
    var start = lines[i].start;
    var end = lines[i].end;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  }
}

// Draw current line being drawn
function drawCurrentLine() {
  ctx.beginPath();
  ctx.moveTo(startPoint.x, startPoint.y);
  ctx.lineTo(endPoint.x, endPoint.y);
  ctx.stroke();
}

console.log(lines);


