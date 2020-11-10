// Input a number, find out if it is prime or not

const isPrime = function(num) {
  let inst = 0;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      inst += 1;
    }
  }
  if (inst > 0) {
    return num + " is NOT a prime number.";
  } else {
    return num + " is a prime number.";
  }
};

console.log(isPrime(2932));