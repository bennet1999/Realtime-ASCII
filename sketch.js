//const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
//const density = ' _.,-=+:;cba!?0123456789$W#@Ñ';
const density = ' .:-=+*#%@';
//const density = '@%#*+=-:. ';

let video;
let asciiDiv;



function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(300, 200);
  asciiDiv = createDiv();
  video.hide();
}

  function draw(){

  video.loadPixels();
  let asciiImage = '';
  for(let i=0; i<video.height;i++){
    let row = '';
    for(let j=0; j<video.width;j++){


      const pixelIndex = ( j + i * video.width) * 4;
      const r = video.pixels[pixelIndex + 0 ];      
      const g = video.pixels[pixelIndex + 1 ];      
      const b = video.pixels[pixelIndex + 2 ];

      const avg = (r + g + b)/3;
      //const level = int(avg/25);
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));

      //square(i*w, j*h, w);
      const c = density.charAt(charIndex);
      if (c == ' ') asciiImage += '&nbsp;'
      else asciiImage += c;
    }
    asciiImage += '<br/>';
    asciiDiv.html(asciiImage);
  }

}
