const data = [
  { username: "Yuriy", age: 25 },
  { username: "Jack", age: 29 },
];

const dataStringify = JSON.stringify(data);

localStorage.setItem("data", dataStringify);

const accessData = JSON.parse(localStorage.getItem("data"));
console.log(accessData);