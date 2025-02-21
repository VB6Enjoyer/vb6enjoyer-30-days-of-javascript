console.group("Level 2");
console.log(JSON.stringify(student, ["firstName", "lastName", "skills"])); // 1
console.groupEnd("Level 2");