//can use this for face distorition (load img as rgb matrix):
//http://beej.us/blog/data/html5s-canvas-2-pixel/

var colors = new Array();
colors[0] = '#5a554d';
colors[1] = '#5a4c36';
colors[2] = '#747474';
colors[3] = '#7E6969';
colors[4] = '#8E6262';
colors[5] = '#9C6161';
colors[6] = '#A85C5C';
colors[7] = '#FF0000';

var playgroundCanvas = '';//= document.getElementById('playgroundCanvas');
var ctx = '';


var canvasWidth = '';//playgroundCanvas.width;//600;
var canvasHeight = '';//playgroundCanvas.height;//800;

var leftEyeXRatio = 0.33;
var leftEyeYRatio = 0.4183;
var rightEyeXRatio = 0.694;
var rightEyeYRatio = 0.421;
var eyeRadius = 2.8;

var dColorIndex = -1;
var colorIndex = 0;

var eyesIntervalHandle = '';

var face = new Image();
face.src = 'media/img/meface.JPG';



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

    playgroundCanvas = document.getElementById('playgroundCanvas');
    canvasWidth = playgroundCanvas.width;//600;
		canvasHeight = playgroundCanvas.height;//800;

    if (playgroundCanvas.getContext){
		ctx = playgroundCanvas.getContext('2d');
  	drawStuff();

  	
    } else {
	// canvas-unsupported code here
    }

});


function drawFace() {
	
    ctx.drawImage(face, 0, 0, canvasWidth, canvasHeight);
}
function drawStuff() {

	    
    drawFace();
    eyesIntervalHandle = eyesTrigger();
 

}


function eyesTrigger() {
	return setInterval(drawEyes, 70);
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
 	drawFace();
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
    
    console.log("drawing ciclr");
}


