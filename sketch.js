
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball1;
function preload()
{
	
}

function setup() {
	createCanvas(5500, 1100);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	var ball_option={
		isStatic:false,
		resitution:0.3,
		fiction:0
		ball1 = new Ball(150,80,20)
	}
groundObj=new ground(width/2,670,width,20);
leftSide=new ground(1100,600,20,120);

}




function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();
  drawSprites();
 
}



