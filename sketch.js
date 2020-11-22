const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;



function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    bob = new bobs(400,300);

    bob2 = new bobs(440,300);

    bob3 = new bobs(480,300);

    bob4 = new bobs(350,300);

    bob5 = new bobs(250,240);

    Hanger = new hanger(385,100);
    
    Hanger2 = new hanger(405,100);

    Hanger3 = new hanger(425,100);

    Hanger4 = new hanger(445,100);

    Hanger5 = new hanger(465,100);
    

    chain = new Chain(bob.body,Hanger3.body);
    chain2 = new Chain(bob2.body,Hanger4.body);
    chain3 = new Chain(bob3.body,Hanger5.body);
    chain4 = new Chain(bob4.body,Hanger2.body);
    chain5 = new Chain(bob5.body,Hanger.body);

    
   
}

function draw(){
   
  

    background(300,300,0);
    Engine.update(engine);
    strokeWeight(4);

    chain.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();

    bob4.display();
    
    bob5.display();

    bob.display();

    bob2.display();

    bob3.display();

    

    Hanger.display();
    Hanger2.display();
    Hanger3.display();
    Hanger4.display(); 
    Hanger5.display();
}

function mouseDragged(){
  
        Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});
    }
