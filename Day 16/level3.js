console.group("Level 3");

// 1
const studentObj = JSON.parse(txt);
console.log(studentObj);

// 2
let skillfulestStudent;
let max = 0;
for (const entry of Object.entries(studentObj)) {
    if (entry[1].skills.length > max) {
        max = entry[1].skills.length;
        skillfulestStudent = entry;
    }
}
console.log(skillfulestStudent);

console.groupEnd("Level 3");