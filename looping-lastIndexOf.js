let lastIndexOf = function(array, find) {
  var instances = [-1];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === find) {
      instances.push(i);
    }    
  }
  return instances[instances.length - 1];
};

// console.log(lastIndexOf(["fennel", "beet", "carrot", "fennel", "cucumber"], "fennel"));

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
