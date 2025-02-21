let challenge = "30 Days of JavaScript"; // 1

console.log(challenge); // 2
console.log("Challenge length:", challenge.length); // 3
console.log(challenge.toUpperCase()); // 4
console.log(challenge.toLowerCase()); // 5
console.log(challenge.substring(3, 7)); // 6
console.log(challenge.substring(0, 3)); // 7
console.log("Does Challenge include 'Script'?", challenge.includes("Script")); // 8
console.log(challenge.split()); // 9
console.log(challenge.split(" ")); // 10

// 11
let corporations = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(corporations.split(", "));

console.log(challenge.replace("JavaScript", "Python")); // 12
console.log("Char at 15:", challenge.charAt(15)); // 13
console.log("Char code of J:", challenge.charCodeAt(challenge.indexOf("J"))); // 14
console.log("First index of 'a':", challenge.indexOf("a")); // 15
console.log("Last index of 'a':", challenge.lastIndexOf("a")); // 16

// 17
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log("Index of 'because':", sentence.indexOf("because"));

console.log("Last index of 'because':", sentence.lastIndexOf("because")); // 18
console.log("Position of the first occurrence of 'because':", sentence.search("because")); // 19

// 20
let challengeUntrimmed = " 30 Days of JavaScript ";
console.log("Untrimmed:", challengeUntrimmed, "| Trimmed:", challengeUntrimmed.trim());

console.log("Does challenge start with 30?:", challenge.startsWith(30)); // 21
console.log("Does challenge end with 'Python'?:", challenge.endsWith("Python")); // 22
console.log("About 'a' in challenge:", challenge.match("a")); // 23

// 24
let challengeFirstHalf = "30 Days of ";
let challengeSecondHalf = "JavaScript";
console.log("Concatenated string:", challengeFirstHalf.concat(challengeSecondHalf));

console.log(challenge.repeat(2)); // 25