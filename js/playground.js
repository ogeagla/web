$(document).ready(function(){

    var canvas = document.getElementById('tutorial');
    if (canvas.getContext){
	var ctx = canvas.getContext('2d');
  	drawStuff();

  	
    } else {
	// canvas-unsupported code here
    }

});

function intervalTrigger() {
    return setInterval(inter, 100); 
}
function drawFace() {
	
	 var ctx = document.getElementById('tutorial').getContext('2d');
    var face = new Image();
    face.src = 'media/img/meface.JPG';


    ctx.drawImage(face, 0, 0, faceWidth, faceHeight);
}
function drawStuff() {

    
    //h = intervalTrigger();

    /*var dotSpace = 50;
    var nWidth = faceWidth/dotSpace;
    var nHeight = faceHeight/dotSpace;
    //2.6*50 and 5.5*50 ,250
    for(var i=0; i<nHeight; i++) {
	for(var j=0; j<nWidth; j++) {
	    
	    ctx.fillRect( j*dotSpace,i*dotSpace, 5, 5);

	}
    }*/
    
    
    //ctx.globalAlpha = 0.3;
    
    drawFace();
    h = eyesTrigger();

    

}
var colors = new Array();
colors[0] = '#5a554d';
colors[1] = '#5a4c36';
colors[2] = '#747474';
colors[3] = '#7E6969';
colors[4] = '#8E6262';
colors[5] = '#9C6161';
colors[6] = '#A85C5C';
colors[7] = '#FF0000';

updateCounts = 0;

var centerXLeft = 0.33;
var centerYLeft = 0.4183;
var centerXRight = 0.694;
var centerYRight = 0.421;
var radius = 2.5;

var faceWidth = 400;
var faceHeight = 600;
    
    
function eyesTrigger() {
	return setInterval(drawEyes, 200);
}
    
function drawEyes() {
	var ctx = document.getElementById('tutorial').getContext('2d');

	colorIndex = updateCounts%colors.length;
	if(colorIndex == 0) {
		ctx.globalAlpha = 1.;
		drawFace();
	}
	ctx.globalAlpha = 0.08;
	drawCircle(ctx, centerXLeft*faceWidth, centerYLeft*faceHeight, radius, colors[colorIndex], colors[colorIndex]);
   drawCircle(ctx, centerXRight*faceWidth, centerYRight*faceHeight, radius, colors[colorIndex],colors[colorIndex]);
   
   updateCounts = updateCounts + 1;
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

var x = 0;
var y = 0;
var t = 0;
var xOld = 0;
var yOld = 0;
var dt = 0.3;
var h = '';

function inter() {
    var ctx = document.getElementById('tutorial').getContext('2d');
    
    xOld = x;
    yOld = y;
    
    x = dt*t*50*Math.sin(t) + 10*t;
    y = dt*t*50*Math.cos(t) + 10*t;
    
    ctx.strokeStyle = 'rgba(0,153,255,0.4)';
    
    if(t != 0) {
	ctx.moveTo(xOld, yOld);
	ctx.lineTo(x, y);
	ctx.stroke();
    }
    t = t + dt;
    if(t > 4.0*Math.PI) {
	dt = -1.5*dt;
	
    }
    if(t < 0.0*Math.PI) {
	clearInterval(h);
    }
    console.log(t + " " + x + " " + y + " " + xOld + " " + yOld);
    
}
