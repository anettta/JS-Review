// Write a function `yourAverageFunction` that accepts an array of numbers as an argument.
// The function should return the average of all elements of the array.
// If the input array is empty, then the function should return null

let yourAverageFunction = function (arr) {
  if (arr.length === 0) return null;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

console.log(yourAverageFunction([5, 2, 7, 24])); // 9.5
console.log(yourAverageFunction([])); // null
