// Set 14 Q2: average of an array of numbers
function average(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((total, n) => total + n, 0);
  return sum / arr.length;
}
console.log(average([10, 20, 30, 40, 50])); // 30
