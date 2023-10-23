let noiseTime = 0;
let noiseTam = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //let verde = map(mouseX, 0, windowWidth, 0, 255);
  //stroke(255, verde, 0);
  //strokeWeight(4);
  //line(mouseX, 0, mouseX, windowHeight);
  //background(255);
  let posX = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY = map(noise(noiseTime + 1), 0, 1, 0, windowHeight);

  let tam = map(noise(noiseTam + 10), 0, 1, 5, 50);

  noiseTime += 0.006;
  noiseTam += 0.1;

  fill(255);
  //noStroke();
  stroke(0, 50);
  strokeWeight(4);
  circle(posX, posY, tam);
}
