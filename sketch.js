const Constraint = Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var rope1, rope2, rope3, rope4, rope5;
var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);

 engine = Engine.create();
 world = engine.world;

//Create the Bodies Here.
 roof = new Roof(200,100,300,10); 

 bobObj1 = new Bob(300, 300, 20); 
 bobObj2 = new Bob(350, 300, 20); 
 bobObj3 = new Bob(400, 300, 20);
 bobObj4 = new Bob(450, 300, 20); 
 bobObj5 = new Bob(500, 300, 20); 

 rope1 = new Rope(bobObj1.body, roof.body, -40, 0); 
 rope2 = new Rope(bobObj2.body, roof.body, -10, 0); 
 rope3 = new Rope(bobObj3.body, roof.body, 30, 0); 
 rope4 = new Rope(bobObj4.body, roof.body, 70, 0); 
 rope5 = new Rope(bobObj5.body, roof.body, 120, 0);


 Engine.run(engine);
  
}


function draw() {
  background(0);

  roof.display();

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function keyPressed(){
 Matter.Body.applyForce(bobObj1.body, bobObj1.body.position, {x:-45, y: -45});
}



