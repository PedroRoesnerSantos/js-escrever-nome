function setup() {
    createCanvas(600, 600);
    background("rgb(214,214,214)");
  }
  
  function draw() {
    
    
    stroke("black");
    fill("white");
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 15, 25);
    }
  }