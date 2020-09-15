var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var ground1,ground2,ground3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	var ball_options ={
        restitution:0.6
          
	}
	var ground_options ={
		isStatic: true
	}
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , ball_options);
	World.add(world, packageBody);
	
	ground1=Bodies.rectangle(400,650,240,65,ground_options);
	World.add(world, ground1);
	
	
	ground2=Bodies.rectangle(507,577.9,25,120,ground_options);
	World.add(world, ground2);

	ground3=Bodies.rectangle(292,577.9,25,120,ground_options);
	World.add(world, ground3);

	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  rect(ground1.position.x,ground1.position.y,240,25);
  
  rect(ground2.position.x,ground2.position.y,25,120);
  
  rect(ground3.position.x,ground3.position.y,25,120);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
    
  }
}



