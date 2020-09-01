const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ground, paper, dustbin;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(150, 500, 70);
	dustbin = new Dustbin(800, 595, 100, 20);
	ground = new Ground(width/2, height - 20, width, 40);
    launcher = new Launcher(paper.body, {x:150, y:500});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  launcher.display();
  paper.display();
  ground.display();
  dustbin.display();
  
  //drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY});
}
function mouseReleased(){
    launcher.fly();
}

/*function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(paper.body, paper.body.position, {x:50, y:-200})
	}
}*/

