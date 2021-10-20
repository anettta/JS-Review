// Write a function `removeDupes` that accepts an array as an argument.
// The function should return a new array where each element only appears once.

let removeDupes = function (array) {
  let uniques = [];

  for (let i = 0; i < array.length; i++) {
    if (!uniques.includes(array[i])) {
      uniques.push(array[i]);
    }
  }
  return uniques;
};

console.log(removeDupes(["x", "y", "y", "x", "z"])); // ['x', 'y', 'z']
