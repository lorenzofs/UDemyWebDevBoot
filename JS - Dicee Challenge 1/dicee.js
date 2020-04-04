
// Found via Googling, doesn't work 

// var images = [
//     "images/dice1.png",
//     "images/dice2.png",
//     "images/dice3.png",
//     "images/dice4.png",
//     "images/dice5.png",
//     "images/dice6.png"];
//
// function randImg1() {
//     var size = images.length;
//     var x = Math.floor(size * Math.random());
//     document.querySelector('img1').src = images[x];
// }
//
// function randImg2() {
//     var size = images.length;
//     var x = Math.floor(size * Math.random());
//     document.querySelector('img2').src = images[x];
// }
//
// randImg1();
// randImg2();


// First Dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


// Second Dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSource2);


// Titles
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
