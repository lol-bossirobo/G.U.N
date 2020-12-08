var fix;
var move;
var O1;
var O2;

function setup() {
  createCanvas(800,800);
  fix = createSprite(375,350,50,50);
  fix.shapeColor = "blue"
  move = createSprite(500,350,70,50);
  move.shapeColor = "blue"
  fix.debug = false;
  move.debug = false;
  fix.setVelocity(4, 5);
  move.setVelocity(5, 4);
}

function draw() {
  background(255,255,255);  
  visible();
  console.log (move.x, move.y)

  if (mousePressedOver(move)) {
    move.x = World.mouseX;
    move.y = World.mouseY;
  }

  if (isTouching(move, fix)) {
    move.shapeColor = "red"
    fix.shapeColor = "red"
  
    if (move.x >= 765) {
      move.velocityX = -3
  }
  if (fix.x <= 25) {
    fix.velocityX = 3
  }
  
  if (move.x <= 35) {
    move.velocityX = 3
  }
  if (fix.x >= 775) {
  fix.velocityX = -3
  }
  
  if (move.y >= 765) {
    move.velocityY = -3
  }
  if (fix.y <= 25) {
  fix.velocityY = 3
  }
  
  if (move.y <= 35) {
    move.velocityY = 3
  }
  if (fix.y >= 775) {
  fix.velocityY = -3
  }
  } else {
    move.shapeColor = "blue"
    fix.shapeColor = "blue"
  }

  if (move.x >= 765) {
    move.velocityX = -3
}
if (fix.x <= 25) {
  fix.velocityX = 3
}

if (move.x <= 35) {
  move.velocityX = 3
}
if (fix.x >= 775) {
fix.velocityX = -3
}

if (move.y >= 765) {
  move.velocityY = -3
}
if (fix.y <= 25) {
fix.velocityY = 3
}

if (move.y <= 35) {
  move.velocityY = 3
}
if (fix.y >= 775) {
fix.velocityY = -3
}

  drawSprites();
}



function visible() {

  if(fix.shapeColor === "white" || move.shapeColor === "white") {
    return true;
  }
}
