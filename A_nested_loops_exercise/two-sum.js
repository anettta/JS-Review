// Write a function `twoSum(numbers, target)` that accepts an array of numbers
// and a target number as an argument.
// The function should return a boolean indicating whether or not there exists a pair
// of distinct elements in the array that sum to the target.

let twoSum = function (numbers, target) {
  let pointer1 = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    let pointer2 = numbers[i];
    if (pointer1 + pointer2 === target) {
      return true;
    }
    if (pointer2 === numbers[numbers.length - 1]) {
      pointer1 = pointer2;
      pointer2++;
    }
  }
  return false;
};

console.log(twoSum([2, 3, 5, 9], 7)); // true
console.log(twoSum([2, 3, 5, 9], 4)); // false
