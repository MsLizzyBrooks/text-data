let f; 

function preload(){
  f = loadFont("ROMANTIC.TTF")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  textFont(f)
  textSize(22)
  text("hello and welcome!", 100,100)

  
}