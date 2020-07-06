function howManyHundreds(num) {
  var hundreds = (num / 100) - (num % 100 / 100);
  return hundreds; 
}

console.log(howManyHundreds(123));