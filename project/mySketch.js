let f; 

function preload(){
  f = loadFont("ROMANTIC.TTF")
}

function setup() {
  createCanvas(400, 400);

  background(200);
  textFont(f)
  textSize(22)
  text("do you like cabbage? left arrow = yes, right arrow = no", 100,100)
}

function draw() {
 

  
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    fill("pink")
  }  
  if(keyCode === RIGHT_ARROW){
    fill("green")
  }  
  ellipse(random(0,400),random(0,400),10,10)  
}