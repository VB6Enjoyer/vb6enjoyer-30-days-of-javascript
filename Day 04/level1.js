// 1
let birthYear = Number(prompt("Enter year of birth:"));
let userAge = now.getFullYear() - birthYear
userAge >= 18
    ? console.log("You are", userAge + ". You are old enough to drive")
    : console.log("You are", userAge + ". You will be allowed to drive in", 18 - userAge, "years.");

// 2
let myAge = 23;
let yourAge = 68;
myAge > yourAge
    ? console.log("I am", myAge - yourAge, "years older than you")
    : console.log("You are", yourAge - myAge, "years older than me");

// 3
let a = 4;
let b = 3;

if (a > b) {
    console.log(a, "is greater than", b);
} else {
    console.log(b, " is greater than", a);
}

a > b
    ? console.log(a, "is greater than", b)
    : console.log(b, " is greater than", a);

// 4
let number = prompt("Enter a number:");
number % 2 == 0
    ? console.log(number, "is even.")
    : console.log(number, "is odd.");