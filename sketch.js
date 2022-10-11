var wall1 = createSprite(200,120,200,3);
var wall2 = createSprite(200,260,200,3);
var wall3 = createSprite(100,140,3,40);
var wall4 = createSprite(300,140,3,40);
var wall5 = createSprite(100,240,3,40);
var wall6 = createSprite(300,240,3,40);
var wall7 = createSprite(75,160,50,3);
var wall8 = createSprite(75,220,50,3);
var wall9 = createSprite(325,160,50,3);
var wall10 = createSprite(325,220,50,3);
var wall11 = createSprite(50,190,3,60);
var wall12 = createSprite(350,190,3,60);

var ding = createSprite(70,190,15,15);
ding.shapeColor = ("green");

var dong1 = createSprite(130,140,10,10);
dong1.shapeColor = ("red");
dong1.velocityY = 6;

var dong2 = createSprite(200,140,10,10);
dong2.shapeColor = ("red");
dong2.velocityY = 6;

var dong3 = createSprite(160,245,10,10);
dong3.shapeColor = ("red");
dong3.velocityY = -6;

var dong4 = createSprite(240,245,10,10);
dong4.shapeColor = ("red");
dong4.velocityY = -6;

var count = 0;

playSound("sound123.mp3");

function draw() {
  background("white");
  
  text("Death:" + count,250,100);
  
  strokeWeight(0);
  fill("lightblue");
  rect(50,160,50,60);
  rect(300,160,50,60);
  
  dong1.bounceOff(wall1);
  dong1.bounceOff(wall2);
  dong2.bounceOff(wall1);
  dong2.bounceOff(wall2);
  dong3.bounceOff(wall1);
  dong3.bounceOff(wall2);
  dong4.bounceOff(wall1);
  dong4.bounceOff(wall2);
  
  if(keyDown("left")){
    ding.x = ding.x-5;
  }
  
   if(keyDown("right")){
    ding.x = ding.x+5;
  }
  
 
 if(ding.isTouching(wall11) || 
 ding.isTouching(wall12) || ding.isTouching(dong1)
 || ding.isTouching(dong2)
 || ding.isTouching(dong3)|| ding.isTouching(dong4)){
   ding.x = 70;
   ding.y = 190;
   count = count + 1;
 }
  
  
  drawSprites();
  
}

