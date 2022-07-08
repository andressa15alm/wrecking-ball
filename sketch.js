const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1;

function preload(){
  
}

function setup() {
  createCanvas(1080, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  box1 = new Box(900, 100, 70, 70);
  

  
}

function draw() {
  background('#e9e9e9');
  Engine.update(engine);
  ground.display();
  
  

  box1.display();
 


}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


