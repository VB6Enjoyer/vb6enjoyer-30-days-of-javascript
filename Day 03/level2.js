// 1
let base = prompt("Enter base:");
let height = prompt("Enter height:");
console.log("The area of the triangle is", String(0.5 * Number(base) * Number(height)))

// 2
let sideA = prompt("Enter side A:");
let sideB = prompt("Enter side B:");
let sideC = prompt("Enter side C:");
console.log("The perimeter of the triangle is", Number(sideA) + Number(sideB) + Number(sideC));

// 3
let length = prompt("Enter length:");
let width = prompt("Enter width:");
console.log("The area of the rectangle is", Number(length) * Number(width), "and the perimeter is", 2 * (Number(length) + Number(width)));

// 4
let radius = prompt("Enter radius:");
console.log("The area of the circle is", Math.PI * Number(radius) * Number(radius), "and the circumference is", 2 * Math.PI * Number(radius));

// 5
let m = 2;
let b = -2;
console.log("Slope (m):", m);
console.log("Y-Intercept (b):", b);
console.log("X-Intercept:", -b / m);

// 6
let m2 = (10 - 2) / (6 - 2);
console.log("Slope (m):", m);

// 7
console.log("Are the two slopes equal?", m === m2);

// 8
let x = Number(prompt("Enter x:"));
console.log("Value of Y:", x * x + 6 * x + 9);

// 9 
let hours = Number(prompt("Enter working hours:"));
let hourlyRate = Number(prompt("Enter rate per hour:"));
console.log("Your weekly earning is", hours * hourlyRate);

// 10
firstName.length > 7
    ? console.log("Your name is long.")
    : console.log("Your name is short.");

// 11
firstName.length > lastName.length
    ? console.log("Your first name,", firstName + ", is longer than your family name,", lastName)
    : console.log("Your first name,", firstName + ", is shorter than your family name,", lastName);

// 12
let myAge = 23;
let yourAge = 68;
myAge > yourAge
    ? console.log("I am", myAge - yourAge, "years older than you")
    : console.log("You are", yourAge - myAge, "years older than me");

// 13
let birthYear = Number(prompt("Enter year of birth:"));
let userAge = now.getFullYear() - birthYear
userAge >= 18
    ? console.log("You are", userAge + ". You are old enough to drive")
    : console.log("You are", userAge + ". You will be allowed to drive in", 18 - userAge, "years.");

// 14
let yearsAlive = Number(prompt("Enter years alive:"));
let yearBorn = new Date();
yearBorn.setFullYear(yearBorn.getFullYear() - yearsAlive);
let elapsedMs = now - yearBorn.getTime();
console.log(yearBorn);
console.log("You've lived for", Math.floor(elapsedMs / 1000), "seconds");

// 15
let currentYear = now.getFullYear();
let currentMonth = now.getMonth();
let currentDay = now.getDate();
let currentHour = now.getHours();
let currentMinute = now.getMinutes();

console.log(`${currentYear}-${currentMonth + 1}-${currentDay} ${currentHour}:${currentMinute}`);
console.log(`${currentDay}-${currentMonth + 1}-${currentYear} ${currentHour}:${currentMinute}`);
console.log(`${currentDay}/${currentMonth + 1}/${currentYear} ${currentHour}:${currentMinute}`);