const ratings = [5, 10, 9, 7, 2, 3, 8];

const filteredRatings = ratings.filter((rating) => {
  let result = rating > 6;
  return result;
});

console.log(filteredRatings);
console.log(ratings);

// Filter all the elements where are odd

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = numbers.filter((num) => {
  let result = num % 2 == 0;
  return result;
});

console.log(even);

const odd = numbers.filter((num) => {
  let result = num % 2 == 0;
  return !result;
});

console.log(odd);

// filter list (multiple objects strored in the array)
const movies = [
  { name: "Coffee Day", rating: 9 },
  { name: "The lost Coder", rating: 7 },
  { name: "Typical bug", rating: 4 }
];

const filteredMovies = movies.filter((movie) => {
  return movie.rating > 6;
});

console.log(filteredMovies);


/* Map Method */