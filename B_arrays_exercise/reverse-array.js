// Write a function `reverseArray` that accepts an array as an argument.
// The function should return an array containing the elements of the original array
// in reverse order.

let reverseArray = function (arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

console.log(reverseArray(["zero", "one", "two", "three"]));
