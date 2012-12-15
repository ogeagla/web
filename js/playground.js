$(document).ready(function(){

    var canvas = document.getElementById('tutorial');
    if (canvas.getContext){
	var ctx = canvas.getContext('2d');
  	drawStuff();

  	
    } else {
	// canvas-unsupported code here
    }

});


function drawFace() {
	
	 var ctx = document.getElementById('tutorial').getContext('2d');
    var face = new Image();
    face.src = 'media/img/meface.JPG';


    ctx.drawImage(face, 0, 0, faceWidth, faceHeight);
}
function drawStuff() {


    
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


var centerXLeft = 0.33;
var centerYLeft = 0.4183;
var centerXRight = 0.694;
var centerYRight = 0.421;
var radius = 1.8;

var faceWidth = 200;
var faceHeight = 300;
var di = -1;
var colorIndex = 0;

var h = '';

function eyesTrigger() {
	return setInterval(drawEyes, 100);
}
    
function drawEyes() {
	
	var ctx = document.getElementById('tutorial').getContext('2d');

	
	if(colorIndex == 0) {
		ctx.globalAlpha = 1.;
		
		di = di*-1;
		
	}
	if(colorIndex == colors.length - 2){
		di = di*-1;
 	}	
 	ctx.globalAlpha = 0.22;
 	//console.log(colorIndex);
 	drawFace();
	drawCircle(ctx, centerXLeft*faceWidth, centerYLeft*faceHeight, radius, colors[colorIndex], colors[colorIndex]);
   drawCircle(ctx, centerXRight*faceWidth, centerYRight*faceHeight, radius, colors[colorIndex],colors[colorIndex]);
   
   colorIndex = colorIndex + di;
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


