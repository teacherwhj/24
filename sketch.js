const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var box1,box2,ground,pig1,log1;
function setup() {
  createCanvas(1200,400);
  myengine = Engine.create();
  myworld = myengine.world;
  
  box1 = new Box(700,350,50,50);
  box2 = new Box(900,350,50,50);
  ground = new Ground(600,390,1200,20);
  pig1 = new Pig(800,350);
  log1 = new Log(800,340,250,PI/2);
  
}

function draw() {
  background("black");  
 // rectMode(CENTER);
  Engine.update(myengine);
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  //console.log(box2.body.angle);
}