// Write a function `bleepVowels` that accepts
// a string as an argument.
// The function should return a new string where
// all vowels are replaced with `*`s.
// Vowels are the letters a,e,i,o,u.

let bleepVowels = function (str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) > -1) {
      // index // if true it exists
      newStr += "*";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
