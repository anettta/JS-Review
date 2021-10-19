// Write a function `zipper` that accepts two arrays as arguments.
// The function should return a 2D array containing pairs of elements at the same indices.
// You can assume that the arrays have the same length;

let zipper = function (arr1, arr2) {
  let zipped = [];
  for (let i = 0; i < arr1.length; i++) {
    zipped.push([arr1[i], arr2[i]]);
  }
  return zipped;
};

let array1 = ["a", "b", "c", "d"];
let array2 = [-1, -2, -3, -4];

console.log(zipper(array1, array2));
