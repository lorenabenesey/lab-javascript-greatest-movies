const moviesExample = require("../src/data.js");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArr) {
  return moviesArr.map((el) => el.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  return moviesArray
    .filter((el) => el.director == "Steven Spielberg")
    .filter((el) => el.genre.includes("Drama")).length;
}

//console.log(howManyMovies(moviesExample));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  }
  return parseFloat(
    (
      moviesArray
        .filter((el) => el.score != undefined)
        .map((el) => el.score)
        .reduce((acc, curr) => acc + curr) / moviesArray.length
    ).toPrecision(3)
  );
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  }
  const dramaMovies = moviesArray.filter((el) => el.genre.includes("Drama"));
  const sum = dramaMovies.reduce((a, b) => {
    return parseFloat(a + b.score / dramaMovies.length);
  }, 0);
  return sum;
}
console.log(dramaMoviesScore(moviesExample));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArray = [...moviesArray];
  return newArray.sort((a, b) => a.year - b.year);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray.sort((x, y) => (x.title < y.title ? -1 : 0)).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
