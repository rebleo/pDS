var r = new Rune({ // big circle over triangle
  container: "#canvas",
  width: 225,
  height: 280,
  debug: true
});

var myGroup = r.group(10,10);
var x;

var window = r.rect(0, 0, 197, 257, myGroup)
               .fill(0)
               .stroke(0);

var cone = r.triangle(68, 100, 90, 210, 112, 100, myGroup)
             .fill(255)
             .stroke(0);

var cream = r.ellipse(90, 63, 58, 58, myGroup)
             .fill(255)
             .stroke(0);

var coneTop = 110;



r.line(85, coneTop, 85, coneTop)
   .stroke(255)
r.line(95, coneTop, 95, coneTop)
   .stroke(255)



r.draw();
