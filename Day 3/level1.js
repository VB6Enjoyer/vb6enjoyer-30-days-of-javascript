// 1
let firstName = "Juan";
let lastName = "Núñez";
let country = "Argentina";
let city = "Concordia";
let age = 22;
let isMarried = false;
let year = 2025;

console.log("Type of firstName & lastName:", typeof (firstName), "|", typeof (lastName));
console.log("Type of country & city:", typeof (country), "|", typeof (city));
console.log("Type of age, isMarried & year:", typeof (age), "|", typeof (isMarried), "|", typeof (year));

console.log("Are '10' and 10 the same type?:", typeof ('10') == typeof (10)); // 2
console.log("Is parseInt('9.8') equal to 10?:", parseInt('9.8') == 10); // 3

// 4
console.log(Boolean(1), Boolean('Hello'), Boolean(-18));
console.log(Boolean(""), Boolean(0), Boolean(undefined));

// 5
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false
console.log("python".length != "jargon".length); // false

// 6
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)) // true
console.log(!(4 === '4')) // true
console.log(!("python".includes('on') && "jargon".includes('on'))); // false

// 7
let now = new Date();
console.log(now)
console.log("Current year:", now.getFullYear());
console.log("Current month number:", now.getMonth() + 1);
console.log("Today is:", now);
console.log("Today's number is:", now.getDate());
console.log("The current hour is:", now.getHours());
console.log("The current minute is:", now.getMinutes());
console.log("Seconds since 1/1/1970:", Math.floor(Date.now() / 1000));