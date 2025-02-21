// 2
const student = {
    firstName: "Tomoya",
    lastName: "Okazaki",
    age: 19,
    skills: ["Installing AC Units", "Customer Service", "Helping People"],
    country: "Japan",
    enrolled: true,
}

localStorage.setItem("student", JSON.stringify(student, undefined, 2));

console.group("Level 2");
console.log(localStorage.getItem("student"));
console.log(JSON.parse(localStorage.getItem("student")).skills);
console.groupEnd("Level 2");