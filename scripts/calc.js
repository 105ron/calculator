"use strict";
const buttons = document.getElementById("buttons-container");
const screen = document.getElementById("screen");
const operatorWord = {x:"multiply",
                      "-":"subtract",
                      "\u00F7":"divide",
                      "+":"add"
                    };
const operators = ["=", "-", "+", "x", "\u00F7"];
let buttonClick = "";
let displayString = "";
let calculatorString = "";
let justCalculated = false;

buttons.addEventListener("click", function(event) {
  buttonClick = event.target.innerText;
  updateString(buttonClick);
});

function updateDisplay() {
  //Display the string unless it is "", then display "0"
  screen.innerText = (displayString ? displayString : "0");
}

function resetStrings() {
  displayString = "";
  calculatorString = "";
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
  if (displayNumber > 99999999999) {
    displayString = "";
    screen.innerText = "err"
    alert("Number is too large for JSCalc");
  } else if (displayString.length > 12) {
    displayString = displayString.slice(0,12);
    calculatorString = displayString;
    if (buttonClick == "=") {
      justCalculated = true;
    }
    updateDisplay();
  } else {
    calculatorString = displayString;
    if (buttonClick == "=") {
      justCalculated = true;
    }
    updateDisplay();
  }
}

function updateString(click) {
  switch(click) {
    case "ac" :
      resetStrings();
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
      let stringOperators = calculatorString.match(/(?![.=])\D+/g); //the operators but not '.' or '='
      if (stringOperators) {
        calculate(calculatorString);
        calculatorString += click;
        break;
      } else {
        calculatorString += click;
        break;
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
      if (buttonClick.length > 1) {
        console.log('you clicked parent div');
        break;
      }
      if (displayString.length > 10) {
        alert("JSCalc can't display any more numbers on it's LCD display");
        break;
      }
      if (justCalculated == true) {
        if (operators.includes(calculatorString.slice(-1))) {
        } else {
          resetStrings();
        }
      }
      if (operators.includes(calculatorString.slice(-1))) {
        displayString ="";
      }
      updateStings();
      justCalculated = false;
      updateDisplay();
  }
}