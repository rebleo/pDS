var r = new Rune({
  container: "#canvas",
  width: 612,
  height: 792,
  debug: true
});

//background
r.rect(0, 0, 612, 792)
  .fill(255);


//cover frame
 // r.rect(50, 50, 500, 600)
 //  .fill(255)
 //  .stroke(0)
 //  .strokeWidth(1);

// r.rect(100, 100, 350, 350)
//   .nofill()
//   .stroke(255)
//   .strokeWidth(3);

// mars frame
  r.rect(150, 150, 300, 375)
    .fill(0)
    .stroke(255)
    .strokeWidth(1);


//earth



var y = (Rune.random(400,450));

//mars foreground
for (var i = 0; i < 55; i++){
var mX1 = (Rune.random(125,155))
var mX2 = (Rune.random(445,475))
var mY = (Rune.random(325,450))
  r.line(125, mY, 475, mY)
   .strokeWidth(1)
   .stroke(255);
 }

for (var i = 0; i < 2; i++){
var eX =(Rune.random(200,400))
var eY = (Rune.random(200,300))
    r.ellipse(eX,eY,35,35)
      .fill(255);

}



//
//
// mars mts
// r.line(20, r.height / 2, 580, r.height / 2)
//  .strokeWidth(3)
//  .stroke(0);
//
// r.triangle(10, 350, 20, 345, 20, 355)
//   .fill(0);
//
// r.triangle(590, 350, 580, 345, 580, 355)
//   .fill(0);



// //mars foreground
// r.line(20, r.height - 120, 580, r.height - 120)
//  .strokeWidth(3)
//  .stroke(0);
//
// r.triangle(10, r.height - 120, 20, r.height - 125, 20, r.height - 115)
//   .fill(0);
//
// r.triangle(590, r.height - 120, 580, r.height - 125, 580, r.height - 115)
//   .fill(0);
//
//
// //sprout
//   //steam
// r.line(425, 490, 425, r.height - 120)
//  .stroke(0)
//  .strokeWidth(2);
//
//  //lowerleaf
// r.triangle(410, 522, 425, 530, 412, 505)
//   .fill(0);
//   //middle leaf
// r.triangle(425, 510, 445, 465, 460, 485)
//   .fill(0);
//   //top leaf
// r.triangle(425, 505, 415, 480, 370, 470)
//   .fill(0);


r.draw();
