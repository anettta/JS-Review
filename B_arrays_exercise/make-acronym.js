// Write a function `makeAcronym` that accepts a sentence string as an argument.
// The function should return a string containing the first character of each word in the sentence.

let makeAcronym = function (str) {
  let newStr = "";
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    newStr += word[0];
  }
  return newStr.toUpperCase();
};

console.log(makeAcronym("New York"));
console.log(makeAcronym("laugh out loud"));
