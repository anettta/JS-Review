let total = 0;
for (let i = 1; i < 5; i++) {
  // 1 // 2 // 3 // 4 // 5 - exit
  total += i; // 0 + 1 = 1 // 3 // 6 // 10
  console.log(total); // 1 // 3 // 6 // 10
}
console.log("grand total: " + total); // 10
