const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg, rand
var snow 
var Snow1 



function preload(){
  bg = loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  if(bg)
  background(bg); 
  Engine.update(engine);
  fall()
  for(rand = 0; rand<snow.length; rand++){
    snow[rand].display()
  }
  for(s = 0; s<snow.length; s++){
    Snow1.display()
  }
  drawSprites();
}

function fall(){
  if(frameCount%5===0){
    snow.push(new Snowfall(random(0,800),0,50,50))
  }
}


