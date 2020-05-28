
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var paper1;
var ground;
var dustbin1;
var dustbin2;
var dustbin3;


function setup() {
	createCanvas(1200, 650);
	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper();
	ground = new Ground(600,600,1200,20);
	dustbin1 = new Dustbin(800,580,200,20);
	dustbin2 = new Dustbin(690,512,10,150);
   dustbin3 = new Dustbin(910,512,10,150);
   
  
}


function draw() {
	background(0);
	Engine.update(engine);
	fill("white");
	text(mouseX +":"+mouseY);
    paper1.display();
    ground.display();
	dustbin2.display();
	dustbin1.display();
	dustbin3.display();
 // drawSprites();
 // keyPressed();
 
}

function keyPressed (){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-75});
	}
}

