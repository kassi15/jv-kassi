let Xcirculo1 = 25;
let Ycirculo1 = 25;
let Demerval = 50;

let Xcirculo2 = 475;
let Ycirculo2 = 25;
let Demervil2 = 50;



function setup() {
  createCanvas(500, 500);
}
function draw() {
  background("rgb(179,218,192)");
circle (Xcirculo1,Ycirculo1,Demerval);
fill("pink");
circle(Xcirculo2,Ycirculo2,Demervil2);
fill ("rgb(138,138,224)"); 
Xcirculo1+=1
}