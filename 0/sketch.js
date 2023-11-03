p5.disableFriendlyErrors = true;
let mImg;
let aImg;
let colorPicker;
let editcolor;
let oriColor;

function preload() {
  mImg = loadImage("./11.jpeg");
  aImg = loadImage("./22.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  mImg.resize(0, height);
  aImg.resize(0, height);

  colorPicker = createColorPicker("#ed225d");
  colorPicker.position(450, 50);
  oriColor = color(246, 191, 75);
  // colorPicker.input(changeColor);
  // noLoop();
}

function draw() {
  background(255);
  image(aImg, 0, 0);
  image(mImg, 0, 0);

  mImg.loadPixels();
  let threshold = 40;

  let editColor = colorPicker.color();

  for (let i = 0; i < mImg.pixels.length; i += 4) {
    let pixelColor = color(
      mImg.pixels[i],
      mImg.pixels[i + 1],
      mImg.pixels[i + 2],
      mImg.pixels[i + 3]
    );

    if (isSimilarColor(pixelColor, color(4, 68, 119), threshold)) {
      mImg.pixels[i + 0] = 116;
      mImg.pixels[i + 1] = 200;
      mImg.pixels[i + 2] = 166;
    } else if (isSimilarColor(pixelColor, color(222, 65, 40), threshold)) {
      mImg.pixels[i + 0] = 0;
      mImg.pixels[i + 1] = 0;
      mImg.pixels[i + 2] = 0;
      mImg.pixels[i + 3] = 0;
    } else if (isSimilarColor(pixelColor, oriColor, threshold)) {
      mImg.pixels[i + 0] = red(editColor);
      mImg.pixels[i + 1] = green(editColor);
      mImg.pixels[i + 2] = blue(editColor);
    }
  }

  oriColor = colorPicker.color();
  mImg.updatePixels();
}

// function changeColor() {
//   oriColor = colorPicker.color();
//   redraw();
// }

function isSimilarColor(colorA, colorB, threshold) {
  let redDiff = abs(red(colorA) - red(colorB));
  let greenDiff = abs(green(colorA) - green(colorB));
  let blueDiff = abs(blue(colorA) - blue(colorB));

  return redDiff < threshold && greenDiff < threshold && blueDiff < threshold;
}
