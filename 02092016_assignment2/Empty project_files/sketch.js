var r = new Rune({
  container: "#canvas",
  width: 612,
  height: 792,
  debug: true
});

//background
r.rect(0, 0, 612, 792)
  .fill(255);


// //cover frame
//  r.rect(50, 50, 500, 600)
//   .fill(255)
//   .stroke(0)
//   .strokeWidth(1);

// r.rect(100, 100, 350, 350)
//   .nofill()
//   .stroke(255)
//   .strokeWidth(3);

//mars frame
  r.rect(150, 150, 300, 325)
    .fill(255)
    .stroke(2)
    .strokeWidth(Rune.random(1,4));


//earth



// var y = (Rune.random(400,450));

//mars foreground
for (var i = 0; i < 55; i++){
var y = (Rune.random(300,425))
  r.line(125, y , 475, y)
   .strokeWidth(1)
   .stroke(0);

  var e =(Rune.random(200,400))
   r.ellipse(e,y - 200,35,35)
     .fill(0);
 }







//mars mts
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
