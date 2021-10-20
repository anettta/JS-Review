// Write a function `removeVowels` that accepts a string
// as an argument. The function should return a version
// of the string where all vowels are removed.

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

console.log(removeVowels("jello")); // jll
