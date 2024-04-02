localStorage.setItem("name", "Yuriy");
localStorage.setItem("age", 25);

const name = localStorage.getItem("name");
const age = localStorage.getItem("age");


console.log(name, age);

localStorage.age = 26;

//localStorage.removeItem("age");
//localStorage.removeItem("name");

// clear method

localStorage.clear();