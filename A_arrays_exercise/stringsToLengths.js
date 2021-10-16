// Write a function `stringsToLength` that accepts
// an array of strings as an argument.
// The function should return a new array containing
// the lengths of the elements of the original array.

let stringsToLength = function (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    newArr.push(word.length);
  }
  return newArr;
};

console.log(stringsToLength(["belly", "echo", "irony", "pickled"]));
