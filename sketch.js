const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var plinko

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

plinko = new Plinko(200,200)

}

function draw() {

  Engine.update(engine);

  background(0);
  
  plinko.display();



  
}