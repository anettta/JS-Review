// Write a function `minToMax(min, max)` that accepts two numbers as arguments.
// The function should print all numbers from min to max inclusive.
// The function doesn't need to return any value.
// It should just print to the terminal.

let minToMax = function (min, max) {
  for (let i = min; i <= max; i++) {
    console.log(i);
  }
};
minToMax(20, 25);
