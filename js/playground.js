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

function drawStuff() {
	var ctx = document.getElementById('tutorial').getContext('2d');
	var face = new Image();
	face.src = 'media/img/meface.JPG';

	
	ctx.drawImage(face, 0, 0, 100, 100);

  h = intervalTrigger();

}

var x = 0;
var y = 0;
var t = 0;
var xOld = 0;
var yOld = 0;
var dt = 0.1;
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
	if(t < -1.0*Math.PI) {
		clearInterval(h);
	}
	console.log(t + " " + x + " " + y + " " + xOld + " " + yOld);
	
}
