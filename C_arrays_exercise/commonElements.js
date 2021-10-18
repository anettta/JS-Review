// Write a function `commonElements` that accepts two arrays as arguments.
// The function should return a new array containing the elements
// that are found in both of the input arrays.
// The order of the elements in the output array doesn't matter
// as long as the function returns the correct elements.

let commonElements = function (array1, array2) {
  let newArr = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      newArr.push(array1[i]);
    }
  }
  return newArr;
};

let arr1 = ["a", "c", "d", "b"];
let arr2 = ["b", "a", "y"];
console.log(commonElements(arr1, arr2)); // ['a', 'b']
