function myMax(array) {
  var max = array[0];
  for (i = 1; i < array.length; i++) {
    (array[i] > max) && (max = array[i])
  }
  return max
}

function vowelCount(string) {
  var m = string.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

function reverse(string) {
  return string.split("").reverse().join("");
}

console.log(myMax([101,18,3,46,7,6,5,4,12,99,2,1]));
console.log(vowelCount("this is a string"));
console.log(reverse("this is a string"));