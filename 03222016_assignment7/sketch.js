var r = new Rune({
  container: "#canvas",
  width: 400,
  height:500,
		debug: false
});
var picture = r.grid({
  x: 50,
  y: 50,
  width: 300,
  height: 400,
  columns: 1,
  rows: 2
});




var machine = r.group(0,0);

var w = r.width/2;
var h = r.height/2;

var head = r.circle(w,h-125,45,45,machine) //head
		.fill(false)
		.stroke('hsv', 80,75,25)
		.strokeWidth(8)


r.circle(w,h,25,25,machine)
		.strokeWidth(8)
			.stroke('hsv', 80,75,25)
		.fill(false);


var at = r.path(0,0,machine) //the a or o
		.moveTo(230,225)
		.lineTo(230,255)
		.curveTo(252,275,270,249)
		.strokeWidth(8)
		.fill(false)
				.stroke('hsv', 80,75,25)

			.closePath;

var roundIsh = r.path(w,h,machine)//open curve of @

for (var i = 0; i<2; i++) {
	for (var angle=0; angle<320; angle+=2) {
		var x = Math.cos(Rune.radians(angle)) * 70;
		var y = Math.sin(Rune.radians(angle)) * 70;
			if (y == 0){
				roundIsh.moveTo(x*i,y*i);
		}
				roundIsh.lineTo(x*i, y*i).rotate(43,w,h);
}
}

	roundIsh.fill(false) //styling and close the path
		.strokeWidth(8)
					.stroke('hsv', 80,75,25)



//machine.scale(2)

//var machineAgain = machine.copy().rotate(90, r.width/2, r.height/2);


r.draw();
