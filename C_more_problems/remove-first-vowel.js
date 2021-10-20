// Write a function `removeFirstVowel` that accepts a string as an argument.
// The function should return the string with it's first vowel removed.

let removeFirstVowel = function (str) {
  let noFirstVowel = "";
  let vowels = "aeoiu";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowels = str[i];
      noFirstVowel = str.slice(str[i], str[i + 1]);
    }
  }
  return noFirstVowel;
};

console.log(removeFirstVowel("volcano")); // 'vlcano'
