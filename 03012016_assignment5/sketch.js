var r = new Rune({
  container: "#canvas",
  width: 750,
  height: 400,
  debug: false
});

r.rect(0,0,r.width,r.height)
	.fill(escape());

var x = 50;
var y = 100;

drawLetter("P", x, y);
drawLetter("I", x+150, y);
drawLetter("X", x+300, y);
drawLetter("E", x+400, y);
drawLetter("L", x+550, y);
r.draw();


function escape() { //how to make them all return to one random
	var x = Rune.random(180,300);
	return new Rune.Color('hsv',x*(180/6),75,50);
}

function drawLetter(letter, x, y) {
	var sizeX = 100
	var sizeY = 150;

		if (letter == "P") {
				r.rect(x,y,sizeX,sizeY)
				.fill(0)
				.stroke(false);
				r.rect(100,130,25,25)
					.fill(escape())
					.stroke(false);
				r.rect(100,200,50,50)
						.fill(escape())
						.stroke(false);

		}

		if (letter == "I") {
				r.rect(x,y,sizeX,sizeY)
		.fill(0)
					.stroke(false);
				r.rect(x,150,25,50)
						.fill(escape())
						.stroke(false);
				r.rect(x+75,150,25,50)
							.fill(escape())
							.stroke(false);
		}

		if (letter == "X") {
				// r.rect(x,y,25,25);
				// r.rect(x+125,y,25,25);
				r.rect(x+12.5,y+62,25,25)
					.rotate(45,x+25,y+75)
					.fill(0)
					.stroke(false);

		}

		if (letter == "E") {
				r.rect(x,y,sizeX,sizeY)
						.fill(0)
					.stroke(false);
				r.rect(500,125,50,25)
					.fill(escape())
					.stroke(false);
				r.rect(500,175,50,25)
					.fill(escape())
					.stroke(false);
}
	if (letter == "L") {
			r.rect(x,y,sizeX,sizeY)
			.fill(0)
				.stroke(false);
			r.rect(650,100,50,100)
				.fill(escape())
				.stroke(false);
}
}
