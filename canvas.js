window.addEventListener('load' , ()=> {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  //resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  //painting

  let painting = false;

  function startPosition(){
    painting = true;
  }

  function finishedPosition(){
    painting = false;
  }

  function draw(e){
    if(!painting) return;
    ctx.lineWidth = 1;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }
  
  //event listeners to allow drawing when mouse is pressed down

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
});

