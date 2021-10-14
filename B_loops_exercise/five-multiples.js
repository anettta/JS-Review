// Write a function named `fiveMultiplesOf` that accepts a number as an argument.
// The function should print out the first five multiples of the given number.
// The function doesn't need to return any value.
// It should just print to the terminal.

let fiveMultiplesOf = function (num) {
  // 7 * 1
  // 7 * 2
  // 7 * 3
  // 7 * 4
  // 7 * 5
  for (let i = 1; i <= 5; i++) {
    console.log(num * i);
  }
};

fiveMultiplesOf(3);
