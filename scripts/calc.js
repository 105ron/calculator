"use strict";

const buttons = document.getElementById("buttons-container");
/*buttons.onmousedown = function() {
  console.log('button pressed');
  //return true;
}
var myFunction = function() {
  console.log('poo');
  return true;
}*/
let buttonClick = "";
let displayString = "";
let screen = document.getElementById("screen")
buttons.addEventListener("click", function(event) {
  buttonClick = event.target.innerText;
  updateString(buttonClick);
});

function updateDisplay() {
  //Display the string unless it is "", then display "0"
  screen.innerText = (displayString ? displayString : "0");
}

function updateString(click) {
  switch(click) {
    case "ac" :
      displayString = ""
      updateDisplay();
      break;
    case "ce" :
      displayString = displayString.slice(0, -1);
      updateDisplay();
      break;
    default :
      displayString += click;
      updateDisplay();
  }
}

var add = function(firstNumber, secondNumber) {
  return (firstNumber + secondNumber)
}

var subtract = function(firstNumber, secondNumber) {
  return (firstNumber - secondNumber)
}

var multiply = function(firstNumber, secondNumber) {
  return (firstNumber * secondNumber)
}

var divide = function(firstNumber, secondNumber) {
  return (firstNumber / secondNumber)
}

console.log(divide(3,4));