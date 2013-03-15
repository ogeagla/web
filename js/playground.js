//can use this for image distorition (load img as rgb matrix):
//http://beej.us/blog/data/html5s-canvas-2-pixel/

var colors = new Array();
colors[0] = '#27221d';
colors[1] = '#3f3225';
colors[2] = '#523a22';
colors[3] = '#68411b';
colors[4] = '#945211';
colors[5] = '#b8600a';
colors[6] = '#db6e04';
colors[7] = '#f37901';

var playgroundCanvas = '';//= document.getElementById('playgroundCanvas');
var ctx = '';
var imagePixels = '';

var canvasWidth = '';//playgroundCanvas.width;//600;
var canvasHeight = '';//playgroundCanvas.height;//800;

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

    /*playgroundCanvas = document.getElementById('playgroundCanvas');
    
    canvasWidth = playgroundCanvas.width;//600;
    canvasHeight = playgroundCanvas.height;//800;
    eyeRadius = canvasHeight/50;

    if (playgroundCanvas.getContext){
	ctx = playgroundCanvas.getContext('2d');
  	drawStuff();

  	
    } else {
	// canvas-unsupported code here
    }*/

});



function effectPurpleGreen() {
    
    for (y = 0; y < canvasHeight; y++) {
	
	for(x = 0; x < canvasWidth; x++) {
	    var p = (4*y*canvasWidth) + 4*x;
	    var r = imagePixels.data[p];
	    var g = imagePixels.data[p + 1];
	    var b = imagePixels.data[p + 2];
	    var a = imagePixels.data[p + 3];
	    
	    dr =  (x+y)%(255-r);
	    dg = (y-x)%(255-b);
	    
	    imagePixels.data[p] = r + 1.0 ^(y%2) * dr;
	    imagePixels.data[p + 1] = g + dg;
	}
	
    }
    
}
function effectPurpleGreen2() {
    
    for (y = 0; y < canvasHeight; y++) {
	
	for(x = 0; x < canvasWidth; x++) {
	    var p = (4*y*canvasWidth) + 4*x;
	    var r = imagePixels.data[p];
	    var g = imagePixels.data[p + 1];
	    var b = imagePixels.data[p + 2];
	    var a = imagePixels.data[p + 3];
	    
	    dr =  (x+y)%(255-r);
	    dg = (y-x)%(255-b);
	    db = (dr * dg) % (255-g);
	    da = (dr + dg + db) % (255-a);
	    
	    imagePixels.data[p] = r + 1.0 ^(y%2) * dr;
	    imagePixels.data[p + 1] = g + dg;
	    imagePixels.data[p + 2] = b + db;
	    imagePixels.data[p + 3] = a + da;
 	}
	
    }
    
}

function distort() {
    var newData = new Array();
    var dataCount = 0;
    
    for (y = 0; y < canvasHeight; y++) {
	
	for(x = 0; x < canvasWidth; x++) {
	    
	    if((y>canvasHeight/3.) && (y<2.*canvasHeight/3.) && (x>canvasWidth/3.) && (x<2.*canvasWidth/3.)) {
		var p = (4*y*canvasWidth) + 4*x;
		var r = imagePixels.data[p];
		var g = imagePixels.data[p + 1];
		var b = imagePixels.data[p + 2];
		var a = imagePixels.data[p + 3];
		
		imagePixels.data[p] = 0;
		
		//var newX = x-
		    //dataCount = dataCount + 4;
		
		
	    }
 	}
	
    }
    for (y = 0; y < canvasHeight; y++) {
	
	for(x = 0; x < canvasWidth; x++) {
	    
	    if((y>canvasHeight/3.) && (y<2.*canvasHeight/3.) && (x>canvasWidth/3.) && (x<2.*canvasWidth/3.)) {
		var p = (4*y*canvasWidth) + 4*x;
		var r = imagePixels.data[p];
		var g = imagePixels.data[p + 1];
		var b = imagePixels.data[p + 2];
		var a = imagePixels.data[p + 3];
		
		imagePixels.data[p] = 0;
		
		
		
	    }
 	}
	
    }
    
}

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
    return setInterval(drawEyes, 100);
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


