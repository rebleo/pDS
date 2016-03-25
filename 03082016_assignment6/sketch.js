var r = new Rune({
  container: "#canvas",
  width: 400,
  height: 500,
		debug: false
});

// var words = [
// 	"rivers & mts.",
// 	"&",
//  "mts.",
// ];
//GRIDS - PAGE LAYOUT, let this guide yr design dummy

var margin = 10; //title grid

r.rect(0,0, r.width, r.height)
  .fill(0);
r.rect(10,10,r.width - 2*margin, r.height -2*margin)
	.fill(255);

var titleSpace = r.grid({
x: r.width-110,
y: r.height/2-100,

width: r.width-margin*2,
height: r.height/2 - 200,
columns:1,
rows:3,

});

for (var t =0; t < 1; t++)
{
var w = Rune.random(25,titleSpace.vars.modulewidth - 25);
var h = Rune.random(25,titleSpace.vars.moduleHeight - 25);
var randmCol = Math.ceil(Rune.random(titleSpace.vars.columns));
var randmRow = Math.ceil(Rune.random(titleSpace.vars.rows));
var title = r.text("rivers & mts.", w +100,h)
		.fontSize(26).fontFamily("bookman").fontWeight("regular").textAlign("center").fill(0).stroke(0)
		titleSpace.add(title,randmCol,randmRow);
}

//
//
// // var margin = 10; //RIVERS & MTS. grid
//
var space = r.grid({
x: margin,
y: 125,

width: r.width - 2 * margin,
height: r.height/2 - (2 * margin),
columns:2,
rows:2,
gutter:10,

});

//
function escape() { //how to make them all return to one random
	var x = Rune.random(180,300);
	return new Rune.Color('hsv',x*(180/6),75,50);
}

// RIVERS!
var gap = 10;
var x;
var Y = Rune.random(25,space.vars.moduleHeight - 25);
var curve = Rune.random(1,10);

for (var y	=	0; y < space.vars.moduleHeight; y+=gap){ //series of sine waves y value is amount of curve, as changes thru loop
  var sineWave = r.path(x, y).fill(false).strokeWidth(3).stroke(escape());
		var amp = y - 100;

		for (var i	=	0; i < space.vars.moduleWidth; i += curve){ // chaning x== value affects the points on the line - making more jagged parablola
				var y_wave = Math.sin(Rune.radians(i*10)) * (10 + amp*0.2);

			if ( i==0 ) {
				sineWave.moveTo(i,Y);
				}
				sineWave.lineTo(i, Y + y_wave)

				var randomCol = Math.ceil(Rune.random(space.vars.columns));
  		var randomRow = Math.ceil(Rune.random(space.vars.rows));
  		space.add(sineWave, randomCol, randomRow);
			}
}

var gap2 = 5;
var _Y = Rune.random(5,space.vars.moduleHeight - 5);

var space2 = r.grid({
x: margin,
y:  r.height/2 - 100,

width: r.width - 2 * margin,
height: r.height/2 - (2 * margin),
columns:1,
rows:2,

});
for (var y	=	0; y < space2.vars.moduleHeight; y+=gap2){ //series of sine waves y value is amount of curve, as changes thru loop
  var sineWave = r.path(x, y).fill(false).strokeWidth(1).stroke(0);
		var amp = y - 100;

		for (var i	=	0; i < space2.vars.moduleWidth; i += curve){ // chaning x== value affects the points on the line - making more jagged parablola
				var y_wave = Math.sin(Rune.radians(i*10)) * (10 + amp*0.2);

			if ( i==0 ) {
				sineWave.moveTo(i,_Y);
				}
				sineWave.lineTo(i, _Y + y_wave)

				var randomCol = Math.ceil(Rune.random(space2.vars.columns));
  		var randomRow = Math.ceil(Rune.random(space2.vars.rows));
  		space2.add(sineWave, randomCol, randomRow);
			}
}



r.draw();
