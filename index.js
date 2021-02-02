//create random number between 1 and 6
function getRandomD6Value()
{
  var randomNumber1;
  randomNumber1 = (Math.floor(Math.random() * 5)) + 1;
  return randomNumber1;
}

//create source string for dice image
function createDiceImagePathString(number)
{
  var sourceString = "images/dice" + number + ".png";
  return sourceString;
}

function setWinner(number1, number2)
{
  var winnerText;
  if(number1 > number2)
    winnerText = "Player 1 Wins!";
  else if(number1 < number2)
    winnerText = "Player 2 Wins!";
  else
    winnerText = "DRAW Roll again!";

  document.querySelector(".container h1").innerText = winnerText;
}

var player1DiceRoll;
var player2DiceRoll;

player1DiceRoll =  getRandomD6Value();
player2DiceRoll =  getRandomD6Value();

console.debug("P1D6: " + player1DiceRoll + " | P2D6: " + player2DiceRoll);

var player1DicePath = createDiceImagePathString(player1DiceRoll);
var player2DicePath = createDiceImagePathString(player2DiceRoll);

console.debug("P1Path: " + player1DicePath + " | P2Path: " + player2DicePath);

document.querySelector(".img1").setAttribute("src", player1DicePath);
document.querySelector(".img2").setAttribute("src", player2DicePath);

setWinner(player1DiceRoll, player2DiceRoll);
