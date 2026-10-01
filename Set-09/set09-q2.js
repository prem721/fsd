// Set 9 Q2: check if a number is prime
function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
console.log(isPrime(1));  // false
