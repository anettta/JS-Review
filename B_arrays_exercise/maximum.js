// Write a function `maximum` that accepts an array of numbers
// as an argument.
// The function should return the largest number of the array.
// If the array is empty, then the function
// should return null.

let maximum = function (arr) {
  if (arr.length === 0) return null;

  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
};

console.log(maximum([5, 6, 3, 7])); // 7
