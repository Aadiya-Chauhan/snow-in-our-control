const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg, s1; 

function preload() {
  bg = loadImage("snow1.png");
}

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  
}

function draw() {
  background(bg);  

  Engine.update(engine);

  drawSprites();
}

function createSnow() {
  if(keyCode === "space") {
  s1 = new Snow(random(50, 750), -10);
  }
}