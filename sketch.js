const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg;
var slingShot;

function preload() {
  backgroundImg = loadImage("sprites/bg.png");
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
    engine = Engine.create();
    world = engine.world;

box1 = new Box(330,235,30,40)
box2 = new Box(360,235,30,40)
box3 = new Box(390,235,30,40)
box4 = new Box(420,235,30,40)
box5 = new Box(450,235,30,40)
box6 = new Box(360,195,30,40)
box7 = new Box(390,195,30,40)
box8 = new Box(420,195,30,40)
box9 = new Box(390,155,30,40)
slingshot = new SlingShot(Box.body,{x:200, y:50});

}

function draw() {
  /*background(255,255,255);  
  drawSprites();*/
  background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    slingshot.display();   
}

function mouseDragged(){
  Matter.Body.setPosition(Box.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}