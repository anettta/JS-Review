// Write a function `lengthiestWord` that
// accepts a sentence string as an argument.
// The function should return the longest
// word of the sentence. If there is a tie,
// return the word that appears later in the sentence.

let lengthiestWord = function (sentence) {
  let longest = "";
  let arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === longest.length) {
      return arr[i];
    } else if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
};

console.log(lengthiestWord("I am pretty hungry")); // 'hungry'
console.log(lengthiestWord("down the rabbit hole")); // 'rabbit'
