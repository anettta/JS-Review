// Write a function `wordCount(sentence, targetWords)` that accepts a sentence string
// and an array of `targetWords`. The function
// should return a count of the number of words
// of the sentence that are in `targetWords`

let wordCount = function (sentence, targetWords) {
  let count = 0;
  let senArr = sentence.split(" ");

  for (let i = 0; i < senArr.length; i++) {
    if (targetWords.includes(senArr[i])) {
      count++;
    }
  }
  return count;
};

console.log(wordCount("open the window please", ["please", "open", "sorry"])); // 2
