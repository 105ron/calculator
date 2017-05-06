document.getElementById("spy-on-me").onmousedown = function () {
    console.log("User moused down");
    return true; // Not needed, as long as you don't return false
};

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