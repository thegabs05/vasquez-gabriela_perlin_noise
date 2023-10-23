let noiseTime = 0;
let noiseTam = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  //let verde = map(mouseX, 0, windowWidth, 0, 255);
  //stroke(255, verde, 0);
  //strokeWeight(4);
  //line(mouseX, 0, mouseX, windowHeight);
  //background(255);
  let posX = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY = map(noise(noiseTime + 1), 0, 1, 0, windowHeight);
  let tam = map(noise(noiseTam), 0, 1, 15, 75);

  noiseTime += 0.006;
  noiseTam += 0.01;

  let posX2 = map(noise(noiseTime), 0, 1, windowWidth, 0);
  let posY2 = map(noise(noiseTime + 1), 0, 1, 0, windowHeight);
  let tam2 = map(noise(noiseTam + 10), 0, 1, 15, 75);

  fill(0);
  //noStroke();
  stroke(255);
  strokeWeight(3);
  circle(posX, posY, tam);
  circle(posX2, posY2, tam2);
}
