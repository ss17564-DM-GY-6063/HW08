let mImg;
let aImg;
let replacementColor;
let colorPicker;

function preload() {
  mImg = loadImage("./11.jpeg");
  aImg = loadImage("./22.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  mImg.resize(0,height); 
  aImg.resize(0,height); 
  noLoop();
  
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(450, 50);
}

function draw() {
  background(255); 
  image(aImg, 0, 0);
  image(mImg, 0, 0);

  mImg.loadPixels();
  replacementColor = color(116, 200, 166);  
  let transparentColor = color(0, 0, 0, 0); 
  // let domColor = colorPicker.color();  
  let threshold = 40; 
  let editColor = colorPicker.color();

  for (let i = 0; i < mImg.pixels.length; i += 4) {
    let pixelColor = color(mImg.pixels[i], mImg.pixels[i + 1], mImg.pixels[i + 2]);

    if (isSimilarColor(pixelColor, color(4, 68, 119), threshold)) {
      mImg.set(i / 4 % mImg.width, floor(i / 4 / mImg.width), replacementColor);
    } else if (isSimilarColor(pixelColor, color(222, 65, 40), threshold)) {
      mImg.set(i / 4 % mImg.width, floor(i / 4 / mImg.width), transparentColor); 
    } else if (isSimilarColor(pixelColor, color(246, 191, 75), threshold)) {
      mImg.set(i / 4 % mImg.width, floor(i / 4 / mImg.width), editColor);
    }
  }

  mImg.updatePixels();
}

function isSimilarColor(colorA, colorB, threshold) {
  let redDiff = abs(red(colorA) - red(colorB));
  let greenDiff = abs(green(colorA) - green(colorB));
  let blueDiff = abs(blue(colorA) - blue(colorB));

  return redDiff < threshold && greenDiff < threshold && blueDiff < threshold;
}
