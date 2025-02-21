// 1
for (const { name, capital, population, languages } of countries) {
    console.log("Country:", name + "\nCapital:", capital + "\nPopulation:", population + "\nLanguages:", languages);
}

// 2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [studentName, studentSkills, [, , jsScore, reactScore]] = [...student];
console.log(studentName, "(" + studentSkills.length + ")", studentSkills, jsScore, reactScore);

// 3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(arr) {
    let objArr = [];

    for (const item of arr) {
        const [name, skills, scores] = item;
        objArr.push({ name: name, skills: skills, scores: scores });
    }

    return objArr;
}
console.log(convertArrayToObject(students))

// 4
const studentObj = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

const newStudent = {
    ...studentObj, skills: {
        frontEnd: [
            ...studentObj.skills.frontEnd,
            { skill: "Bootstrap", level: 8 }
        ],
        backEnd: [
            ...studentObj.skills.backEnd,
            { skill: "Express", level: 9 }
        ],
        dataBase: [
            ...studentObj.skills.dataBase,
            { skill: "SQL", level: 8 }
        ],
        dataScience: [...studentObj.skills.dataScience, "SQL"]
    }
};
console.log(newStudent)