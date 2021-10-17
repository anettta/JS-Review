// Write a function `makeAcronym` that accepts a sentence string as an argument.
// The function should return a string containing the first character of each word in the sentence.

let makeAcronym = function (str) {
  let newStr = "";
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    newStr += arr[i][0];
  }
  return newStr;
};

console.log(makeAcronym("New York"));
console.log(makeAcronym("Laugh out loud"));
