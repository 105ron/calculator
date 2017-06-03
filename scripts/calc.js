"use strict";
const buttons = document.getElementById("buttons-container");
const screen = document.getElementById("screen");
const operatorWord = {x:"multiply",
                      "-":"subtract",
                      "\u00F7":"divide",
                      "+":"add"
                    };
const operators = ["=", "-", "+", "x", "\u00F7"]; //no longer required... replaced with regex
let buttonClick = "";
let displayString = "";
let calculatorString = ""

buttons.addEventListener("click", function(event) {
  buttonClick = event.target.innerText;
  updateString(buttonClick);
});

function updateDisplay() {
  //Display the string unless it is "", then display "0"
  screen.innerText = (displayString ? displayString : "0");
}

function updateStings() {
  displayString += click;
  calculatorString += click;
}

function calculate(equation) {
  //replace 'x' and divide sign with JS operators in the string
  equation = equation.replace(/\u00F7/i, '/');
  equation = equation.replace(/x/i, '*');
  let displayNumber = eval(equation); //the calculation
  displayString = displayNumber.toString();
  //Check number will fit on the display screen
  if (displayNumber > 999999999999) {
    displayString = "";
    screen.innerText = "err"
    alert("Number is too large for JSCalc");
  } else if (displayString.length > 12) {
    displayString = displayString.slice(0,12);
    calculatorString = displayString;
    updateDisplay();
  } else {
    calculatorString = displayString;
    updateDisplay();
  }
}

function updateString(click) {
  switch(click) {
    case "ac" :
      displayString = "";
      calculatorString = "";
      updateDisplay();
      break;
    case "ce" :
      displayString = displayString.slice(0, -1);
      updateDisplay();
      break;
    case "+" :
    case "-" :
    case "\u00F7" :
    case "x" :
      //ignore the operator button if the last character is already an operator
      if (operators.find(x => x == calculatorString.slice(-1))) {
        alert("You have already selected to " + operatorWord[calculatorString.slice(-1)] + " for this calculation");
        break;
      }
      displayString += click;
      calculatorString += click;
      let stringOperators = calculatorString.match(/(?![.=])\D+/g); //the operators but not '.' or '='
      console.log(stringOperators);
      if (stringOperators) {
        if (stringOperators.length > 1) {
          calculate(calculatorString);
          console.log('in here');
        } else {
          //after operator pressed clear the display
          displayString = "";
          updateDisplay();
          break;
        }
      }
    case "=" :
      calculate(calculatorString);
      break;
    case "." :
      if (displayString.includes(".")) {
        alert("You already have a decimal in this number");
        break;
      }
    default : //numbers and decimal points
      displayString += click;
      calculatorString += click;
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