var inc = 0.01;
var start = 0;

let xoof = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(170, 25, 236);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;

  for (var x = 0; x < windowWidth; x++) {
    stroke(255, random(150, 200, 120), 255, 85);
    strokeWeight(random(10, 15));
    var y = noise(xoff) * windowHeight;
    vertex(x, y);

    xoff += inc;
  }

  xoof = xoof + 0.01;
  let n = noise(xoof) * windowWidth;
  //fill(0);
  circle(n, 100, 12);

  endShape();
  start += inc;
  //noloop();
}
