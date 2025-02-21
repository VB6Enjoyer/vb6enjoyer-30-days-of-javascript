// 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();

console.log("Youngest age:", ages[0], "| Oldest age:", ages[ages.length - 1]);
console.log("Median:", (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2);

let sum = 0;
ages.forEach((age) => {
    sum += age;
})
console.log("Average:", sum / ages.length);

console.log("Range:", ages[ages.length - 1] - ages[0]);
console.log(Math.abs(ages[0] - sum / ages.length) == Math.abs(ages[ages.length - 1] - sum / ages.length));

// 2
console.log(countries.slice(0, 10));

// 3
Number.isInteger(countries.length / 2)
    ? console.log("Middle countries:", countries[Math.ceil(countries.length / 2)] + ",", countries[Math.floor(countries.length / 2)])
    : console.log("Middle country:", countries[Math.floor(countries.length / 2)]);

// 4
let countriesHalf = []
countries.length % 2 == 0
    ? countriesHalf = countries.splice(Math.floor(countries.length / 2))
    : countriesHalf = countries.splice(Math.floor(countries.length / 2)), countries.push("Argentina");
console.log(countriesHalf);
console.log(countries);