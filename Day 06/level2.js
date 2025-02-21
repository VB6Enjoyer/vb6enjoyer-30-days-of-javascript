// 1
n = Number(prompt("Enter a number"));
randomId = ""
for (let i = 0; i < n; i++) {
    randomId += String.fromCharCode(Math.floor(Math.random() * (122 - 48 + 1)) + 48)
}
console.log(randomId);

// 2
let hexColor = "#"
for (let i = 0; i < 6; i++) {
    let addNum = Boolean(Math.round(Math.random()));

    if (addNum) {
        hexColor += String.fromCharCode(Math.floor(Math.random() * (57 - 48 + 1)) + 48)
    } else {
        hexColor += String.fromCharCode(Math.floor(Math.random() * (102 - 97 + 1)) + 97)
    }
}
console.log(hexColor);

// 3
let rgbColor = "rgb("
for (let i = 0; i < 3; i++) {
    rgbColor += String(Math.floor(Math.random() * 255));

    if (i < 2) {
        rgbColor += ","
    }
}
rgbColor += ")";
console.log(rgbColor);

// 4
console.log(countries.sort());

// 5
let countryLengths = [];
for (const country of countries) {
    countryLengths.push(country.length);
}
console.log(countryLengths);

// 6
let arrOfArrOfCountries = [];
for (const country of countries) {
    arrOfArrOfCountries.push([country, country.slice(0, 3).toUpperCase(), country.length]);
}
console.log(arrOfArrOfCountries);

// 7
let landCountries = [];
for (const country of countries) {
    if (country.includes("land")) {
        landCountries.push(country)
    }
}
landCountries.length > 0
    ? console.log(landCountries)
    : console.log("There are no countries with 'land'");

// 8
let iaCountries = [];
for (const country of countries) {
    if (country.includes("ia")) {
        iaCountries.push(country)
    }
}
iaCountries.length > 0
    ? console.log(iaCountries)
    : console.log("There are no countries with 'ia'");

// 9
let longestCountry = "";
for (const country of countries) {
    if (country.length > longestCountry.length) {
        longestCountry = country;
    }
}
console.log("The longest country name is", longestCountry);

// 10
let countriesWithFiveChars = [];
for (const country of countries) {
    if (country.length == 5) {
        countriesWithFiveChars.push(country);
    }
}
console.log(countriesWithFiveChars);

// 11
let longestTech = "";
for (const tech of webTechs) {
    if (tech.length > longestTech.length) {
        longestTech = tech;
    }
}
console.log("The longest tech name is", longestTech);

// 12
let arrOfArrOfTechs = [];
for (const tech of webTechs) {
    arrOfArrOfTechs.push([tech, tech.length]);
}
console.log(arrOfArrOfTechs);

// 13
let mern = "";
for (const tech of mernStack) {
    mern += tech[0];
}
console.log(mern);

// 14
for (const tech of ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]) {
    console.log(tech);
}

// 15
let fruits = [];
for (const fruit of ['banana', 'orange', 'mango', 'lemon']) {
    fruits.unshift(fruit);
}
console.log(fruits);

// 16
const fullStack = [['HTML', 'CSS', 'JS', 'React'], ['Node', 'Express', 'MongoDB']];
for (const arr of fullStack) {
    for (const tech of arr) {
        console.log(tech.toUpperCase());
    }
}