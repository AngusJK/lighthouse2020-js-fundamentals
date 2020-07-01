// Tells you whether or not a chosen number falls within the fibonacci sequence

const choose = 144;

let fibonacci = [1,2]

var isFib = function(num) {
  while (fibonacci[fibonacci.length-1] <= num) {
    var next = fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2];
    fibonacci.push(next);
  } 
if (num === fibonacci[fibonacci.length-2]) {
    console.log("Congratulations! " + num + " is part of the Fibonacci sequence!");
  } else {
    console.log("Sorry. " + num + " is not part of the Fibonacci sequence. Try again.");
  }
} 

isFib(choose);



