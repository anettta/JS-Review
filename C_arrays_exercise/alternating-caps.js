// Write a function `alternatingCaps` that accepts a sentence string as an argument.
// The function should return the sentence where words alternate between lowercase and uppercase.

let alternatingCaps = function (sentence) {
  let sentenceInArray = sentence.split(" ");
  let newArr = [];
  for (let i = 0; i < sentenceInArray.length; i++) {
    if (i % 2 !== 0) {
      newArr.push(sentenceInArray[i].toUpperCase());
    } else {
      newArr.push(sentenceInArray[i].toLowerCase());
    }
  }
  return newArr.join(" ");
};

console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
