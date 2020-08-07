const Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies,
Body = Matter.Body;

var Paper;
var engine, world;


function setup() {

  var canvas = createCanvas(1600, 400);

  engine = Engine.create();
  world = engine.world;

//For the ground 

  groundSprite=new Ground(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

//for the circle paper


  Paper = new paper(200, 200, 20, 20);
  //For the dustbin
  
  trash1 = new dustbin(860, 350, 200, 20);
  trash2 = new dustbin(780, 290, 20, 100);
  trash3 = new dustbin(940, 290, 20, 100);
 
 Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  
  background(0);
  fill(255);
  groundSprite.display(); 
  Paper.display();



  trash1.display();
  trash2.display();
  trash3.display();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    
   Matter.Body.applyForce(Paper.body, Paper.body.position, {x:15, y:-45});
   
   }
 }