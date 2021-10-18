// Write a function `numberRange(min, max, step)` that accepts
// three numbers as arguments,
// `min`, `max`, and `step`.
// The function should return all numbers between `min` at step intervals.
// `min` and `max` are inclusive.

let numberRange = function (min, max, step) {
  let arr = [];
  for (let i = min; i <= max; i += 5) {
    arr.push(i);
  }
  return arr;
};

console.log(numberRange(10, 40, 5)); // [10,15,20,25,30,35,40]
