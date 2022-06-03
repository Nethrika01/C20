
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball,rock;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var rock_options = {
    restitution: 0.71,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,500,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  rock = Bodies.circle(200,10,35,rock_options);
  World.add(world,rock);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);

  ellipse(rock.position.x,rock.position.y,35);
  fill("violet")
  rect(ground.position.x,ground.position.y,500,20);
  
}

