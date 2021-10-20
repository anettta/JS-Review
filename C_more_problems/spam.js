// Write a function `spam` that accepts a 2D array as an argument.
// The array contains pairs as elements.
// The first element of every pair is a number
// and the second element is a word.
// The function should return a string containing the words
// repeated the specified number of times.

let spam = function (array) {
  let str = "";
  for (let i = 0; i < array.length; i++) {
    let word = array[i][0];
    let number = array[i][1];
    for (let i = 0; i < number; i++) {
      str = str + " " + word;
    }
  }
  return str;
};

let array1 = [
  ["hi", 3],
  ["bye", 2],
];
console.log(spam(array1)); // hi hi hi bye bye
