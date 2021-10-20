// Write a function `shortenLongWords` that accepts a sentence string as an argument.
// The function should return the same sentence where words longer than 4 characters have their vowels removed.

let removeVowels = function (str) {
  let noVowels = "";
  let vowels = "aoeiu";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      noVowels += str[i];
    }
  }
  return noVowels;
};

let shortenLongWords = function (str) {
  let newSentence = str.split(" ");
  let newArr = [];
  for (let i = 0; i < newSentence.length; i++) {
    let word = newSentence[i];

    if (word.length > 4) {
      let newWord = removeVowels(word);
      newArr.push(newWord);
    } else {
      newArr.push(word);
    }
  }

  return newArr.join(" ");
};

console.log(shortenLongWords("they are very noble people")); // 'they are very nbl ppl'
