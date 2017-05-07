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

buttons.addEventListener("click", function(event) {
  let button_click = event.target.innerText;
  });

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