// 1
let mostSkillfulPerson;
let skills = 0;
for (const person of Object.entries(users)) {
    if (person[1].skills.length > skills) {
        mostSkillfulPerson = person;
        skills = person[1].skills.length;
    }
}
console.log(mostSkillfulPerson);

// 2
let loggedInUsers = 0;
let usersWithFiftyPoints = [];
for (const person of Object.entries(users)) {
    if (person[1].isLoggedIn) {
        loggedInUsers++;
    }

    if (person[1].points >= 50) {
        usersWithFiftyPoints.push(person[0]);
    }
}
console.log("Logged-in ussers:", loggedInUsers);
console.log("Users with 50> points:", usersWithFiftyPoints);

// 3
let mernDevs = [];
for (const person of Object.entries(users)) {
    let skills = person[1].skills;
    if (skills.includes("MongoDB") && skills.includes("Express") && skills.includes("React") && skills.includes("Node")) {
        mernDevs.push(person[0]);
    }
}
console.log(mernDevs);

// 4
const usersCopy = Object.assign({}, users);
usersCopy['Juani'] = {
    email: 'juaninun17@gmail.com.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL', 'Angular', 'NestJS', 'Node'],
    age: 22,
    isLoggedIn: true,
    points: 30
}
console.log(usersCopy);

console.log(Object.keys(users)); // 5
console.log(Object.values(users)); // 6
console.log("Country:", countries.Japan.name + "\nCapital:", countries.Japan.capital + "\nPopulation: ", countries.Japan.population + "\nMain language(s):", countries.Japan.mainLanguage); // 7