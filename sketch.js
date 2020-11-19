
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ground, bin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ball = new Ball(100, 200, 25)
   ground = new Ground(400,690,800, 20)
  bin = new Bin( 650, 680 )
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  
  
  
  ground.display();
  bin.display();
  ball.display();
}
function keyPressed(){ 
	if (keyCode===RIGHT_ARROW){ 
		Body.applyForce(ball.body ,ball.body.position , {x:85, y: -85} ); 
} 
 if (keyCode===LEFT_ARROW){ 
	 Body.applyForce(ball.body ,ball.body.position , {x:-85, y: -85} ); 
	} 
}
