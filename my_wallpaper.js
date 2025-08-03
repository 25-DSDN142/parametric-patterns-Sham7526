//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;
// Line 26 BubbleSize Variable
// Line 41-42 Shark Postion Variable
// Line 45-47 & Line 51 Shark Color Variable
// Line 58 Rotate the Shark

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  //pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(12, 137, 199); //light honeydew green colour
}
noLoop();

function Bubbles(){
  for (var i=0; i<30; i++){ // repeat the loop a specific number of times to draw a specific amount of ellipses
    let bubblesize = random(5, 20);
    if (bubblesize <10){
      fill(52, 116, 235);
      noStroke()
    } else {
      fill(52, 189, 235);
      stroke(52, 153, 235);
    }
    ellipse(random(0, 200), random(0, 200), bubblesize);
  }
}

function my_symbol(Shark) { // do not rename this function. Treat this similarly to a Draw function

  let sharkx = random(0, 10);
  let sharky = random(-20, 40);

  let rvalue = random(0, 255);
  let gvalue = random(0, 255);
  let bvalue = random(0, 255);

  let tailx = sharkx + 170;
  let taily = sharky + 100;
  let Sharkcolor = color(rvalue, gvalue, bvalue) //light blue color for the shark
  let backgroundColor = color(12, 137, 199); //light blue color

  Bubbles();
  
    translate (100, -50);
    rotate(45);

  // Right Fin of the Shark
  noStroke();
  fill(Sharkcolor);
  triangle(sharkx + 95, sharky +140, sharkx +65, sharky +100, sharkx +60, sharky +125);
  stroke(0);
  // outline of the Right Fin
  line(sharkx + 95, sharky + 140, sharkx + 64, sharky + 100);
  line(sharkx + 95, sharky + 140, sharkx + 60, sharky + 125);

  // body of the Shark
  stroke(0);
  fill(Sharkcolor);
  ellipse(sharkx + 80, sharky + 100, 150, 60);

  // Top 1 Fin of the Shark
  noStroke();
  strokeWeight(1); //reset stroke weight
  fill(Sharkcolor);
  triangle(sharkx +30, sharky +80, sharkx +80, sharky +80, sharkx +80, sharky +50);
  stroke(0);
  line(sharkx +36, sharky +75.7, sharkx +79, sharky +51);
  line(sharkx +79, sharky +51, sharkx +80, sharky +70);

  // Top 2 Fin of the Shark
  noStroke();
  fill(Sharkcolor);
  triangle(sharkx +138, sharky +70, sharkx +128, sharky +76.5, sharkx +135, sharky +79);
  stroke(0);
  line(sharkx +138, sharky +70, sharkx +128, sharky +76.5);
  line(sharkx +138, sharky +70, sharkx +135, sharky +79);

  // Bottom 1 Fin of the Shark
  noStroke();
  fill(Sharkcolor);
  triangle(sharkx +118, sharky +123, sharkx +109, sharky +127, sharkx +125, sharky +135);
  stroke(0);
  line(sharkx +110, sharky +128, sharkx +124, sharky +135);
  line(sharkx +124, sharky +134, sharkx +120, sharky +126);


  // Bottom 2 Fin of the Shark
  noStroke();
  fill(Sharkcolor);
  triangle(sharkx +138, sharky +119, sharkx +132, sharky +122, sharkx +139, sharky +127);
  stroke(0);
  line(sharkx +132, sharky +122, sharkx +138, sharky +127);
  line(sharkx +138, sharky +127, sharkx +138, sharky +119);

  // Left Fin of the Shark
  noStroke();
  fill(Sharkcolor);
  triangle(sharkx +80, sharky +150, sharkx +40, sharky +125, sharkx +65, sharky +129);
  stroke(0);
  line(sharkx +79, sharky +150, sharkx +37, sharky +122);
  line(sharkx +79, sharky +150, sharkx +65, sharky +130);


  // Tail of the Shark
  stroke(0);
  fill(Sharkcolor);
  ellipse(tailx, taily, 50, 70);
  stroke(0);
  strokeWeight(2);
  ellipse(tailx + 10, taily, 28.5, 67); // Outline of Tail
  strokeWeight(1);
  noStroke();
  fill(backgroundColor);
  ellipse(tailx + 11, taily, 30, 70);
  noStroke();
  fill(Sharkcolor);
  square(tailx - 32, taily - 13, 26);

  // Eye of the Shark
  fill(255)
  stroke(0);
  strokeWeight(1);
  ellipse(sharkx + 35, sharky + 90, 10, 10);
  fill(0);
  ellipse(sharkx + 34, sharky + 90, 4, 4);

  // Mouth of the Shark
  noFill();
  stroke(0);
  arc(sharkx + 31, sharky + 10, 200, 201, 90, 103);

  // Teeth of the Shark
  fill(255);
  triangle(sharkx + 10, sharky + 108, sharkx + 12, sharky + 112, sharkx + 15, sharky + 109);
  triangle(sharkx + 15, sharky + 109, sharkx + 17, sharky + 113, sharkx + 20, sharky + 110);
  triangle(sharkx + 20, sharky + 110, sharkx + 22, sharky + 114, sharkx + 25, sharky + 111);
  triangle(sharkx + 25, sharky + 111, sharkx + 27, sharky + 115, sharkx + 30, sharky + 111);
  triangle(sharkx + 14.5, sharky + 111, sharkx + 12, sharky + 112, sharkx + 16, sharky + 115);

  //Gills of the Shark
  noFill();
  stroke(0);
  arc(sharkx -150, sharky + 104, 400, 100, 0, PI);
  arc(sharkx -140, sharky + 104, 390, 100, 0, PI);
  arc(sharkx -164, sharky + 103, 450, -110, 0, PI);
  arc(sharkx -154, sharky + 103, 440, -110, 0, PI);

  // nose of the Shark
  noStroke();
  fill(0);
  ellipse(sharkx + 15, sharky + 95, 2, 2);
  
}