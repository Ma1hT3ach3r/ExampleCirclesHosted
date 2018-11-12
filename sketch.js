var img;  // Declare variable 'img'.

function setup() {
  createCanvas(720, 400);
  img = loadImage("Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png");  // Load the image
}

function draw() {
	 fill(mouseX,mouseY,100);
	ellipse(mouseX,mouseY, 100,100);
  // Displays the image at its actual size at point (0,0)
  image(img, mouseX, mouseY);
  // Displays the image at point (0, height/2) at half size
  image(img, 0, height/2, img.width/2, img.height/2);
	
	
}
