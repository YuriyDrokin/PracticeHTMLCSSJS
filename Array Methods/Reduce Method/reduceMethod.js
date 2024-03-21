const numbers = [10, 20, 30, 40, 50];

const reduceNumbers = numbers.reduce((total, current) => {
  total = total + current;
  return total;
}, 0);

console.log(reduceNumbers);


const numbers1 = [3, 2, 1, 2, 3];

const reduceNmumbers1 = numbers1.reduce((total, current) => {
  total = total * current;
  return total;
}, 1);

console.log(reduceNmumbers1);

const students = [
  { name: "Shubham", marks: 9 },
  { name: "John", marks: 8 },
  { name: "Alex", marks: 6 },
  { name: "John D", marks: 10 },
  { name: "Alex", marks: 10 },
  { name: "Santa", marks: 7 },
  { name: "Shubham", marks: 7 }
];

const reduceStudents = students.reduce((total, current) => {

  if (current.name === "Shubham") {
    total = total + current.marks;

  }
  return total;

}, 0);
console.log(reduceStudents);