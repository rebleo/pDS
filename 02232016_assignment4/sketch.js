var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 750,
  debug: false
});

r.rect(0,0, r.width, r.height) //FRAME - change fill depending on design dummy
.fill(0);

var circleSize = Rune.random(10,75);
var frequency1 = Rune.random(10,100);
var circleSize2 = Rune.random(10,100);
//
// var h = Rune.random(0,360);
// var hue =  h * 360;

for (var i = 0; i < 6; i++){ //guitar hole or whatever
r.circle(r.width/2,r.height/2, circleSize2+i*Rune.random(1,20))
 .stroke('hsv', 210, 100, 100) //TENSE -  .stroke('hsv',30, 100, 100)
	.strokeWidth(2)
 .fill(false);
}

var hueStep = 180 / 6;
	for (var i=0; i<6; i++) {
			r.line(200 + (42*i),550, 200 + (42*i),Rune.random(50,200))
					.strokeWidth(3)
     .stroke('hsv', 270 + (i*hueStep), 100, 100) //i*10 turns whell 10 degrees
	}

var fretplace = Rune.random(525,600)
var fret = r.path(175,fretplace)
	.lineTo(250,0)
 .lineTo(250,50)
 .lineTo(0,50)
 .lineTo(0,0)
	.fill(false)
	.stroke('hsv',240, 100, 100) //	TENSE .stroke('hsv',60, 100, 100)
	.strokeWidth(2)
 .closePath();

for (var i = 0; i <= 4; i++){
r.circle(200+i*50, fretplace+25,5,5)
.fill('hsv',180, 100, 100) //TENSE - .fill('hsv',0, 100, 100)
.stroke(false)
}


r.draw();

// var sineWave = r.path(r.width/4, 200); //initializing a form
// for (var x=0; x<r.width-100; x+=10){ //drawing a number of said line/form
// 		var y = Math.sin(Rune.radians(x)) * 80;
// 		sineWave.lineTo(x, y);
// }
// sineWave.fill(false) //styling and close the path
// 		.stroke('hsv',100, 100, 100)
// 		.strokeWidth(3);
//
// randomInstrument = Rune.random(40,150);
// for (var x = 0; x < 10; x++) { //strings to the left
// 	r.line(0,0,(r.width/2)+ x*randomInstrument,r.height)
// 		.stroke('hsv',60, 100, 100) //terminal screen green
// 		.strokeWidth(1);
// }
//
//
// for (var x = 0; x < 10; x++) { //strings to the left
// 	r.line(r.width,0,(r.width/2)- x*randomInstrument,r.height)
// 		.stroke('hsv',60, 100, 100) //terminal screen green
// 		.strokeWidth(1);
// }
//
// for (var i = 0; i <Rune.random(0,50); i++){ //radio waves or wahtever
// r.circle(0,0,circleSize+i*frequency1,circleSize)
//  .stroke('hsv',60, 100, 100)
//  .fill(false);
// }
