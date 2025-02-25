// Declare variable for the horizontal position of the circle
let x = 315;
let y = 25;
let img;
let step = 5;
let diagonalMovement = false;

function preload() {
  img = loadImage('Kurzlogo.png');
}

function setup() {
  // Create the canvas
  let canvas = createCanvas(720, 400);
  canvas.parent('canvas-container');
  // Set the color mode to hue-saturation-brightness (HSB)
  colorMode(HSB);

  // Set the text size
  textSize(20);

  // No animation to start
  noLoop();

  // Event Listener für die Eingabefelder
  // document.getElementById('xInput').addEventListener('')
}

function draw() {
  // Clear the background
  background(0);

  // Show logo, with hue determined by frameCount
  image(img, x, y / 2, 50, 50);

  if (diagonalMovement) {
    x += step;
    y += step;
  } else{
  // Increase the x variable by 5
  y += 5;
  }

  // Reset the circle position after it moves off the right side
  if (y > height + 400 || x > width + 400) {
    y = -50;
    x = -50;
  }

  describe('logo moving ' + (diagonalMovement ? 'diagonally' : 'vertically'));
}

function mousePressed() {
  // Start/stop the animation loop
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}

function keyPressed() {
  // Draw one frame
  redraw();
}

function updateValues() {
  x = parseInt(document.getElementById('xInput').value) || x;
  y = parseInt(document.getElementById('yInput').value) || y;
  redraw(); // Zeichne das Bild neu mit den aktualisierten Werten 
}

function toggleMovement() {
  diagonalMovement = !diagonalMovement;
  redraw();
}