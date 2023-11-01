let song;
let amplitude;
let index = 0;
let pickerStroke;

function preload() {
  song = loadSound("./piano.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
	
	amplitude = new p5.Amplitude();
	song.loop();

  pickerStroke = createColorPicker(255);
  pickerStroke.position(10, height / 2 - 20);
}

function draw() {
  let level = amplitude.getLevel();
  	let peak = map(level, 0, 1, 0, height);
		
    let strokeColor = pickerStroke.color()
		stroke(strokeColor);
		line(index, 0, index, peak);
		
		if (index < width)
			index += 2;
		else
			index = 0;
}

function mouseClicked() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}

