const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=  Matter.Bodies;
let box1,box2,ground,engine,world;



function setup(){
   createCanvas(600,400);
    engine= Engine.create();
    world= engine.world;
    

    ground= new Ground(300,380,600,20);
    box1= new Box(300,300,50,50);
    box2= new Box(325,220,50,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
}