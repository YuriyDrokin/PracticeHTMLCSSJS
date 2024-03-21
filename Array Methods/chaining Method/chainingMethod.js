const numbers = [70, 50, 90, 80, 25, 35];

/*const filterNumbers = numbers.filter((num) => {
  return num > 75;
});


const mapNumbers = filterNumbers.map((num) => {
  return num + 5;
});
console.log(mapNumbers);
*/

const result = numbers.filter(num => num > 75).map(num => num + 5);

console.log(result);