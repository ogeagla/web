//can use this for image distorition (load img as rgb matrix):
//http://beej.us/blog/data/html5s-canvas-2-pixel/

var colors = new Array();
colors[0] = '#27221d';
colors[1] = '#3f3225';
colors[2] = '#523a22';
colors[3] = '#68411b';
colors[4] = '#ffff3d';
colors[5] = '#ffff3d';
colors[6] = '#ffff3d';
colors[7] = '#ffff3d';

var faceCanvas = '';//= document.getElementById('faceCanvas');
var ctx = '';
var imagePixels = '';

var canvasWidth = '';//faceCanvas.width;//600;
var canvasHeight = '';//faceCanvas.height;//800;

var leftEyeXRatio = 0.33;
var leftEyeYRatio = 0.4183;
var rightEyeXRatio = 0.694;
var rightEyeYRatio = 0.421;
var eyeRadius = '';//12.0;

var dColorIndex = -1;
var colorIndex = 0;

var eyesIntervalHandle = '';

var image = new Image();
image.src = 'media/img/meface.JPG';



/*
  var centerXLeft = 0.33;
  var centerYLeft = 0.4183;
  var centerXRight = 0.694;
  var centerYRight = 0.421;
  var radius = 1.6;

  var di = -1;
  var colorIndex = 0;

  var h = '';
*/

$(document).ready(function(){

    faceCanvas = document.getElementById('faceCanvas');

    canvasWidth = faceCanvas.width;//600;
    canvasHeight = faceCanvas.height;//800;
    eyeRadius = canvasHeight/50;

    if (faceCanvas.getContext){
	ctx = faceCanvas.getContext('2d');
  	drawStuff();


    } else {
	// canvas-unsupported code here
    }

});


function updateImage() {

    ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);

}
function updateImagePixels() {

    imagePixels = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

    //effectPurpleGreen2();
    //distort();

    ctx.putImageData(imagePixels, 0, 0);//, canvasWidth, canvasHeight);

}
function drawStuff() {


    updateImage();
    //updateImagePixels();
    eyesIntervalHandle = eyesTrigger();


}


function eyesTrigger() {
    // return setInterval(drawEyes, 100);
}

function drawEyes() {


    if(colorIndex == 0) {
	ctx.globalAlpha = 1.;

	dColorIndex = dColorIndex * -1.;

    }
    if(colorIndex == colors.length - 2){
	dColorIndex = dColorIndex*-1.;
    }
    ctx.globalAlpha = 0.52;
    //console.log(colorIndex);
    updateImage();
    updateImagePixels();

    drawCircle(ctx, leftEyeXRatio*canvasWidth, leftEyeYRatio*canvasHeight, eyeRadius, colors[colorIndex], colors[colorIndex]);
    drawCircle(ctx, rightEyeXRatio*canvasWidth, rightEyeYRatio*canvasHeight, eyeRadius, colors[colorIndex],colors[colorIndex]);



    colorIndex = colorIndex + dColorIndex;
}

function drawCircle(ctx, x, y, r, fillColor, strokeColor) {

    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fillStyle = fillColor;//green
    ctx.fill();
    ctx.lineWidth = 0;
    ctx.strokeStyle = strokeColor;//#003300
    ctx.stroke();

}


