var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,50,70);
}

function draw() 
{
  background("red");
  
  if(keyIsDown(RIGHT_ARROW)){
  box.position.x=box.position.x+5;
  background("cyan");
  }

  if(keyIsDown(LEFT_ARROW)){
  box.position.x=box.position.x-5;
  background("orange");
  }

  if(keyIsDown(UP_ARROW)){
    box.position.y=box.position.y-5;
    background("blue");
    }

    if(keyIsDown(DOWN_ARROW)){
      box.position.y=box.position.y+5;
      background("yellow");
      }

  drawSprites();
}




