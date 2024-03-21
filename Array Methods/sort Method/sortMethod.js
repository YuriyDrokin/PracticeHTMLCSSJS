const numbers = [5, 10, 30, 2, 7, 9];

numbers.sort();

console.log(numbers);


const names = ["shubham", "john", "deepa", "alex"];

names.sort();

console.log(names);


const numbers1 = [5, 10, 7, 2, 9, 30];
numbers1.sort((a, b) => {
  return b - a;
});

console.log(numbers1);

const movies = [
  { name: "bug Finder", rating: 10 },
  { name: "pro documentary", rating: 7 },
  { name: "123", rating: 9 },
  { name: "987", rating: 8 }

];

movies.sort((a, b) => {
  return a.rating - b.rating;
});

console.log(movies);