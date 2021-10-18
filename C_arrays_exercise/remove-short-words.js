// Write a function `removeShortWords` that accepts a sentence
// as an argument. The function should return a new sentence
// where all of the words shorter than 4 characters are removed.

let removeShortWords = function (str) {
  let sentence = str.split(" ");
  let newSentence = [];

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].length >= 4) {
      newSentence.push(sentence[i]);
    }
  }
  return newSentence.join(" ");
};

console.log(removeShortWords("knock on the door will you")); // 'knock door will'
