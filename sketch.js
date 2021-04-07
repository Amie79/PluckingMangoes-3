
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var stoneobj;
var groundobj;
var launcherobj;
var boy,boyimg , treeobj;
var mango ,mango1,mango2,mango3,mango4,mango5, mango6, mango7;
var engine, world;
var launche_Force=100;

function preload()
{
	boyimg=loadImage("images/boy.png");
	//mangoimg=loadImage("images/mango.png");
  //treeimg=loadImage("images/tree.png");
}

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

    groundobj=new Ground(width/2,580,width,10); 
	stoneobj=new Stone(235,420,30);
  
	treeobj=new Tree(900,570);
	mango1=new Mango(980,110,35);
	mango2=new Mango(900,250,50);
	mango3=new Mango(860,180,35);
	mango4=new Mango(770,200,30);
	mango5=new Mango(950,200,35);
  mango6=new Mango(1050,200,40);
  mango7=new Mango(900,80,50);
	

	launcherobj=new Launcher(stoneobj.body,{x:235,y:420})
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
    Engine.run(engine);

	
}


function draw() {

  rectMode(CENTER);
  background("white");
  textSize(25);
  text("Press Space to get a second Chance to Play!",50 ,50);
  image(boyimg,200,340,200,300);
  groundobj.display();
  treeobj.display();
  launcherobj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stoneobj.display();
  detectCollision(stoneobj,mango1);
	detectCollision(stoneobj,mango2);
	detectCollision(stoneobj,mango3);
	detectCollision(stoneobj,mango4);
	detectCollision(stoneobj,mango5);
  detectCollision(stoneobj,mango6);
  detectCollision(stoneobj,mango7);
  
}

function mouseDragged(){

Matter.Body.setPosition(stoneobj.body,{x: mouseX,y: mouseY});

}

function mouseReleased(){
launcherobj.fly();
	
}

function keyPressed(){

	if(keyCode===32){
		Matter.Body.setPosition(stoneobj.body,{x: 235,y:420 });
		launcherobj.attach(stoneobj.body);
	}
}
function detectCollision(stoneobj,mango){
  
mangoBodyPosition=mango.body.position;
stoneBodyPosition=stoneobj.body.position;


var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=mango.r+stoneobj.radius){
	Matter.Body.setStatic(mango.body,false);
}

}
