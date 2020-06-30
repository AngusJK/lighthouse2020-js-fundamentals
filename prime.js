// Input a number, find out if it is prime or not

const isPrime = function (num) {
  var inst = 0;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      inst += 1;
    }
  }
    if (inst > 0) {
      console.log(num + " is not a prime number.");
    } else {
      console.log(num + " is a prime number.");
    }
}

isPrime(371);