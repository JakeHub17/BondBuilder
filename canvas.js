window.addEventListener('load' , ()=> {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  //resizing
  canvas.height = window.innerHeight -500;
  canvas.width = window.innerWidth -300;

  //painting

  let painting = false;

  function startPosition(e){
    painting = true;
    draw(e);
  }

  function finishedPosition(){
    painting = false;
    ctx.beginPath();
  }

  function draw(e){
    if(!painting) return;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;


    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x,y);
  }


  
  //event listeners to allow drawing when mouse is pressed down

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
});

