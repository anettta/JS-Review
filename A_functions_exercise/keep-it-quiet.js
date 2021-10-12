// Write a function `keepItQuiet` that accepts a string as an argument.
// The function should return the lowercase version of the string with 3 periods added to the end of it.

let keepItQuiet = function (str) {
  return str.toLowerCase() + "...";
};

console.log(keepItQuiet("HOORAY"));
console.log(keepItQuiet("Doggo"));
console.log(keepItQuiet("WHAT?!?!"));
