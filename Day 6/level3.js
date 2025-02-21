let countriesCopy = countries; // 1
console.log(countriesCopy);

// 2
let countriesClone = [...countries];
countriesClone.sort();
let sortedCountries = true;
countriesClone.push(sortedCountries);
console.log(countriesClone);

// 3
webTechs.sort();
mernStack.sort();
console.log(webTechs, mernStack);

// 4
countriesClone = [...countries];
landCountries = [];
let i = 0;
while (i < countriesClone.length) {
    let spliced = false;

    if (countriesClone[i].includes("land")) {
        landCountries.push(countriesClone.splice(i, 1)[0]);
        spliced = true;
    }

    if (!spliced) {
        i++;
    }
}
console.log(landCountries);

// 5
longestCountry = "";
for (const country of countries) {
    if (country.length > longestCountry.length) {
        longestCountry = country;
    }
}
console.log("The longest country name is", longestCountry);

// 6
countriesClone = [...countries];
iaCountries = [];
i = 0;
while (i < countriesClone.length) {
    let spliced = false;

    if (countriesClone[i].includes("ia")) {
        iaCountries.push(countriesClone.splice(i, 1)[0]);
        spliced = true;
    }

    if (!spliced) {
        i++;
    }
}
console.log(iaCountries);

// 7
countriesClone = [...countries];
countriesClone.push("Chad", "Cuba"); // Gotta push a country because the original array has no 4-char countries lol
let countriesWithFourChars = [];
i = 0;
while (i < countriesClone.length) {
    let spliced = false;

    if (countriesClone[i].length == 4) {
        countriesWithFourChars.push(countriesClone.splice(i, 1)[0]);
    }

    if (!spliced) {
        i++;
    }
}
console.log(countriesWithFourChars);

// 8
countriesClone = [...countries];
countriesClone.push("United States"); // Gotta push a country because the original array has no multiple-word countries lol
let countriesWithMultipleWords = [];
i = 0;
while (i < countriesClone.length) {
    let spliced = false;

    if (countriesClone[i].includes(" ")) {
        countriesWithMultipleWords.push(countriesClone.splice(i, 1)[0]);
    }

    if (!spliced) {
        i++;
    }
}
console.log(countriesWithMultipleWords);

// 9
countriesClone = [...countries].reverse();
let capitalizedCountries = [];
for (const country of countriesClone) {
    capitalizedCountries.push(country.toUpperCase());
}
console.log(countriesClone);
console.log(capitalizedCountries);