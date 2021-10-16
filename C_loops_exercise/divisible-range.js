// Write a function `divisibleRange(min, max, num)` that accepts three numbers as arguments.
// The function should print all numbers between `min` and `max` (exclusive) that are also divisible by num.

let divisibleRange = function (min, max, num) {
  for (let i = min; i < max; i++) {
    if (i > min && i < max && i % num === 0) {
      console.log(i);
    }
  }
};
divisibleRange(17, 40, 9);
divisibleRange(10, 24, 4);
