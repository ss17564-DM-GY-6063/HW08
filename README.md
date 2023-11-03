# 0
### 1 How are you detecting the colors?
by iterating through all the pixels in the image and checking their RGB values.

### 2 What are you changing them to?
Replacing blue color with green color.
  - Replacing red color with a transparent color  to show the back picture.
  - Replacing yellow color with a DOM element color.

### 3 What happens if you run your sketch on images of different Mondrian paintings?
If the target colors in the new image are similar to the specified threshold, they will be replaced as well. If the target colors are significantly different, they may not be detected and replaced accurately. Adjusting the threshold value can help improve color detection for different images.

### a bug
It seems that there's something wrong with Chrome; I can't see the results of what I've done. I can view them using Safari browser. It works well right now (without any changes).



# 1
### What song or sound did you pick?
I chose a song played by piano, the tone and melody of the piano music will be clearer and easier to capture.

### How are you visualizing its samples?
I used vertical rectangles like piano keys to visualize the peak of this song,The color for the lines is obtained from the color picker.
In the `draw()` function, the amplitude level of the audio is obtained using `amplitude.getLevel()`, and it's mapped to the canvas height to determine the peak value.
And I use mouseclick to control the music play.
