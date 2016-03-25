var r = new Rune({
  container: "#canvas",
  width: 500,
  height: 400,
  debug: false
});


// var x = (Rune.random(25,50))
// var y1 = (Rune.random(-50,50))
// var y2 = (Rune.random(-50,50))

for (var i = 0; i < 1; i++) {
			var mY = (Rune.random((r.height/2) - 10,(r.height/2)))
			var wet1 = r.path(0,100)
  		.curveTo(0, 0, Rune.random(0,100), Rune.random(-50,50), 167,0)
				.curveTo(167, Rune.random(-50,50), Rune.random(250,300), Rune.random(-50,50), 334,0)
			 .curveTo(334, Rune.random(-50,50), Rune.random(350,400), Rune.random(-50,50), r.width,0)
				.fill(false)
				.stroke(0)
				.strokeWidth(1)
				.closePath;
}

			var wet2 = r.path(0,300)
  		.curveTo(0, 0, Rune.random(0,100), Rune.random(-50,50), 167,0)
				.curveTo(167, Rune.random(-50,50), Rune.random(250,300), Rune.random(-50,50), 334,0)
			 .curveTo(334, Rune.random(-50,50), Rune.random(350,400), Rune.random(-50,50), r.width,0)
				.fill(false)
				.stroke(0)
				.strokeWidth(1)
				.closePath;



var SHARP = r.group(0,0); //SHARP IS A GROUP
var blades = Rune.random(2,15);
var angle = 360 / blades;


for(var i = 0; i < blades; i++)
{
  var x = Math.cos(Rune.radians(i * angle));
  var y = Math.sin(Rune.radians(i * angle));

		var sharp = r.path(r.width/2,r.height/2 - 15,SHARP)
			.lineTo(5,r.height)
 		.lineTo(10, 0)
 		.fill(false)
 		.scale(.4)
   .stroke(0)
			.stroke(3)
   .rotate(i * angle, 0, 0, true)
			.closePath;
}



r.draw();
