const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var backgroundImg
var score=0;
function preload(){
  polygon_img=loadImage("polygon.png");
  changeBG();
}
function setup() {
  createCanvas(1200,580);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  //backgroundImage
  //to change background according to time
  //if(backgroundImg)
  background("black"); 
 
  Engine.update(engine);
  // write the mouseX and mouseY position
  textSize(8);
  text(mouseX + ',' + mouseY, 10, 15);
  // give the color to text and size
  textSize(20);
  fill("yellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  // give text and text size
  textSize(10);
  text("press the 'SPACE BAR KEY' to get the chance again",800,500);
  // give the border,bordercolor, color and size to text respectively.
  strokeWeight(2);
  stroke("green")
  fill("lightgreen");
  textSize(35)
  text("Score:"+score,width-200,50)
  //display the ground
  ground.display();
  // display the stands which are base of the blocks
  stand1.display();
  stand2.display();
  // fill colors to the blocks
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  // give the display to blocks and the score to the blocks
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  fill("pink");
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  fill("turquoise");
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  fill("grey");
  block16.display();
  block16.score();
  fill("skyblue");
  blocks1.display();
  blocks1.score();
  blocks2.display();
  blocks2.score();
  blocks3.display();
  blocks3.score();
  blocks4.display();
  blocks4.score();
  blocks5.display();
  blocks5.score();
  fill("turquoise");
  blocks6.display();
  blocks6.score();
  blocks7.display();
  blocks7.score();
  blocks8.display();
  blocks8.score();
  fill("pink")
  blocks9.display();
  blocks9.score();
  fill("gold");
  imageMode(CENTER);
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.ball);
  }
  
}
//async function changeBG(){
  //var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  //var responseJSON = await response.json();

  //var datetime = responseJSON.datetime;
  //var hour = datetime.slice(11, 13);
  //console.log(hour);

  ///if (hour >= 6 && hour <= 18) {
    //bg = "C32 project day.jpg";
  //} else {
    //bg = "C32 project eve.jpg";
  //}

  //backgroundImg = loadImage(bg);
 // console.log(backgroundImg);
//}


