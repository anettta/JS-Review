// Write a function `raisePower(base, exponent)` that accepts two numbers, `base` and `exponent`.
// The function should return `base` raised to the `exponent` power.
//
// For example, raisePower(2,5) should return  32 because 2 * 2 * 2 * 2 * 2 = 32

let raisePower = function (base, exponent) {
  let power = 1;
  for (let i = 1; i <= exponent; i++) {
    power *= base;
  }
  return power;
};

console.log(raisePower(2, 5)); // 32
console.log(raisePower(4, 3)); // 64
