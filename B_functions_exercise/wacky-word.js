// Write a function `wackyWord` that accepts two strings as arguments.
// The function should return a new string containing the first three characters of
// the first string concatenated with the last two characters of the second string.

// You can assume that the first argument has a length of at least three and the second
// argument has a length of the second string.

let wackyWord = function (str1, str2) {
  let firstPart = str1.slice(0, 3);
  let secondPart = str2.slice(str2.length - 2);
  return firstPart + secondPart;
};

console.log(wackyWord("very", "kindly")); //verly
console.log(wackyWord("forever", "sick")); // forck
console.log(wackyWord("cellar", "door")); // celor
console.log(wackyWord("bagel", "sweep")); // bagep
