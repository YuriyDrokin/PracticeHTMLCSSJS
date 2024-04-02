

const yesterday = new Date('2024, 3, 31');
console.log(yesterday);
console.log(yesterday.getTime());

const now = new Date();


console.log(now);
console.log(now.getTime());

/*
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());

console.log(now.toLocaleDateString());

console.log(now.getTime());

*/


const gap = now - yesterday;

const timeInformation = Math.round(gap / 1000 / 60 / 60 / 24);
console.log(`Blog was posted ${timeInformation} days ago!`);