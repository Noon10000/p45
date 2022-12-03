

function preload()
{
  froggyImage = loadImage("frog.gif")
  browntoadImage = loadImage("browntoad.jpeg")
  yellowtoadImage = loadImage("yellowtoad.png")
  greentoadImage = loadImage("greentoad.png")
}

function setup() {
  createCanvas(800,400);
  froggy = createSprite(60, 350, 50, 50);
  froggy.scale = .15
  froggy.addImage(froggyImage)
}

function draw() {
  background("black");  

  if(keyDown("RIGHT_ARROW"))
  {
    froggy.position.x += 3
  }
  if(keyDown("LEFT_ARROW"))
  {
    froggy.position.x -= 3
  }
  if(keyDown("UP_ARROW"))
  {
    froggy.position.y -= 3
  }
  if(keyDown("DOWN_ARROW"))
  {
    froggy.position.y += 3
  }

  enemy()

  drawSprites();
}
function enemy()
{
  if(frameCount % 60===0)
  {
  var toad = createSprite(600,80,50,50)
  //toad.scale = .5
  toad.y = Math.round(random(10,390));
  toad.velocity.x = -3
  switch(toad.y)
  {
    case 1: toad.addImage(browntoadImage); 
            break; 
    /*case 2: toad.addImage(yellowtoadImage);
            break;
    case 3: toad.addImage(greentoadImage);
            break;*/
    //default: break;
  }
  
  }

  
}