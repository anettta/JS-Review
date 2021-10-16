// Write a function `stayPositive` that accepts
// an array of numbers as an argument.
// The function should return an array
// containing only the positive numbers.

let stayPositive = function (arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(stayPositive([10, -4, 3, 6]));
