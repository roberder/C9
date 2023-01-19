var box;

function setup() {
  createCanvas(800,700);
  box = createSprite(500,500,30,30);
}

function draw() 
{
  background("yellow");
  if (keyIsDown(RIGHT_ARROW)){
box.x = box.x + 5;
  }

  if (keyIsDown(LEFT_ARROW)){
box.x = box.x - 5;
  }

  if (keyIsDown(UP_ARROW)){
    box.y = box.y - 5;
  }

  if (keyIsDown(DOWN_ARROW)){
    box.y = box.y + 5;
  }

  drawSprites();
}




