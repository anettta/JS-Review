// Write a function `bleepVowels` that accepts
// a string as an argument.
// The function should return a new string where
// all vowels are replaced with `*`s.
// Vowels are the letters a,e,i,o,u.

let bleepVowels = function (str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      newStr += "*";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
