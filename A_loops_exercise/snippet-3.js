let foo = function () {
  for (let num = 10; num > 0; num -= 2) {
    console.log(num);
  }
};
// 10
// 8
// 6
// 4
// 2

console.log("begin");
foo();
console.log("end");
foo();
