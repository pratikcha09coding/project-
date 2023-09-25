
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground(width/2,670,width,20)
  groundLeft=new Ground(1100,600,20,120)
  groundRight=new Ground(1350,600,20,120)
  ball=Bodies.circle(260,100,20,{restitution:0.3,density:1.2})
  World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20)
  ground.display()
  groundLeft.display()
  groundRight.display()
  drawSprites();
 
}
function keyPressed(){
	if (keyCode==UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


