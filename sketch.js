const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var object_options={
        isStatic:true
    }
    object= Bodies.rectangle(20,390,400,20,object_options);
    World.add(world,object);
    var ball_options ={ 
        restitution: 1.0 }
   ball= Bodies.circle(100,100,20,ball_options);
    World.add(world,ball);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("brown");
    rect(object.position.x,object.position.y,800,20);
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}
