// Write a function `totalProduct(array)` that accepts a 2D array of numbers.
// The function should return the total product of all numbers in the array.

let totalProduct = function (array) {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      product *= array[i][j];
    }
  }

  return product;
};

let array1 = [
  [3, 5, 2],
  [6, 2],
];

console.log(totalProduct(array1)); // 360
