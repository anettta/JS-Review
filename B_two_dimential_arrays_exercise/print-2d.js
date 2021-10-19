// Write a function `print2d` that accepts a two-dimential array as an argument.
// The function should print all inner elements of the array.

let print2d = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
};

let array1 = [
  ["a", "b", "c", "d"],
  ["e", "f"],
  ["g", "h", "i"],
];

print2d(array1);
