// Write a function `divisors` that accepts a number as an argument.
// The function should return an array containing
// all positive numbers that can divide into the argument.

let divisors = function (num) {
  let newArr = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      newArr.push(i);
    }
  }
  return newArr;
};
// 0,1,2,3....15

console.log(divisors(15)); // [1,3,5,15]
console.log(divisors(7)); // [1,7]
