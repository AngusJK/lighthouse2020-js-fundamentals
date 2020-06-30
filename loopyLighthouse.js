/*
write out the numbers 100 through 200 
if a number is divisible by 3, replace it with "Loopy"
if a number is divisible by 4, replace it with "Lighthouse"
if a number is divisible by 3 AND 4, replace it with "LoopyLighthouse"
*/

for (let num = 100; num <= 200; num++) {
  if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (num % 3 === 0) {
    console.log("Loopy");
  } else if (num % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(num);
  }
}


// Function declaration that takes in two arguments: a function for displaying
// a message, along with the name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {console.log("My favorite movie is " + movieName);}, "Finding Nemo");