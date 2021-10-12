let calculateAvg = function (num1, num2) {
  return (num1 + num2) / 2;
};
console.log(calculateAvg(6, 2));

let yellOrWhisper = function (str) {
  // str = parameter = placeholder
  if (str.length > 4) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};
console.log(yellOrWhisper("heLlo there")); // argument = actual concrete value
console.log(yellOrWhisper("cAt"));
