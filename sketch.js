const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Dustbin1, dustbin2, dustbin3;
var ground;
var paper;
var wood;

function preload()
{
	
}

function setup() {
	 var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,350,45);
	ground = new Ground(400,580,800,20);
	wood = new Wood(700,500,150,150);
	
	Engine.run(engine);
}


function draw() {
  
  background("cyan");

  Engine.update(engine);

  
 
   paper.display();
   ground.display();
   wood.display();
 
 
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-209});
	}
}


