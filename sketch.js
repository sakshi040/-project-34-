const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var monster;
var supperhero;
var backgroundImage

function preload() {
//preload the images here
backgroundImage=loadImage("GamingBackground.png")
}

function setup() {
  // create sprites here
  var canvas = createCanvas(1400,650);
  engine = Engine.create();
  world = engine.world;

ground=new Ground(400,600,700,20)
hero=new Hero(100,3,100,100)
fly=new Fly(hero.body,{x:100,y:600})
monster=new Monster(700,200,100,100) 

    block1=new Box(280,350,30,40)
    block2=new Box(310,350,30,40)
    block3=new Box(340,350,30,40)
    block4=new Box(370,350,30,40)
    block5=new Box(400,350,30,40)
    block6=new Box(430,350,30,40)
    block7=new Box(460,350,30,40)
    block8=new Box(490,350,30,40)
    block9=new Box(310,315,30,40)
    block10=new Box(340,315,30,40)
    block11=new Box(370,315,30,40)
    block12=new Box(400,315,30,40)
    block13=new Box(430,315,30,40)
    block14=new Box(460,315,30,40)

}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

ground.display();
hero.display();
fly.display();
monster.display();
block1.display(); 
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}