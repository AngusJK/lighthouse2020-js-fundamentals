// Tells you whether or not a chosen number falls within the fibonacci sequence

let fibonacci = [1,2];

let isFib = function(num) {
  while (fibonacci[fibonacci.length - 1] <= num) {
    let next = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(next);
  }
  if (num === fibonacci[fibonacci.length - 2]) {
    return "Congratulations! " + num + " is part of the Fibonacci sequence!";
  } else {
    return "Sorry. " + num + " is not part of the Fibonacci sequence. Try again.";
  }
};

console.log(isFib(2549));



