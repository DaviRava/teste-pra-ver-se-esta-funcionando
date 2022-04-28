var quadrado
function setup() {
  createCanvas(1000, 1000);
  quadrado= createSprite(200,200,50,50)
  quadrado.shapeColor="green"
}

function draw() {
  background("black");
  drawSprites()
if (keyDown("s")) {
quadrado.y=quadrado.y+8
}
}




