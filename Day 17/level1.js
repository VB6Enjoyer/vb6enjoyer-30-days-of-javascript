// 1
localStorage.setItem("firstName", "Juan");
localStorage.setItem("lastName", "Núñez");
localStorage.setItem("age", 23);
localStorage.setItem("country", "Argentina");
localStorage.setItem("city", "Concordia");

console.group("Level 1");

console.log(localStorage.getItem("firstName"));
console.log(localStorage.getItem("lastName"));
console.log(localStorage.getItem("age"));
console.log(localStorage.getItem("country"));
console.log(localStorage.getItem("city"));

console.groupEnd("Level 1");