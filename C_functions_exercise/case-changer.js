// Write a function `caseChanger`that accepts a string and a boolean as arguments.
// The function should return the uppercase version of the string
// if the boolean is true. The function should return the lowercase
// version of the string if the boolean is false.

let caseChanger = function (str, bool) {
  if (bool) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};

console.log(caseChanger("Super", true)); // SUPER
console.log(caseChanger("Super", false)); // super
console.log(caseChanger("tAmBourine", true)); // TAMBOURINE
console.log(caseChanger("tAmBourine", false)); // tambourine
