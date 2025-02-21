const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// 1
/*
forEach(): Iterates through each item of an array.
map(): Iterates through the elements of an array, modifies them, and returns a new array.
filter(): Returns an array with only the values that pass a particular conditional.
reduce(): Applies a function on every element of an array and reduces it to a single value by accumulating results over iterations.
*/

// 2
const callback = (num) => {
    console.log(num);
    return num * 2;
}
let numArr = [1, 2, 3, 4, 5];
numArr.forEach(callback);

countries.forEach(country => { console.log(country) }); // 3
names.forEach(name => { console.log(name) }); // 4
numbers.forEach(num => { console.log(num) }); // 5
console.log(countries.map(country => { return country.toUpperCase() })); // 6
console.log(countries.map(country => { return country.length })); // 7
console.log(numbers.map(num => { return num ** 2 })); // 8
console.log(names.map(name => { return name.toUpperCase() })); // 9
console.log(products.map(product => { return parseFloat(product.price) || "No price data" })); // 10 | Instructions unclear, accidentally built code for a nuclear reactor.
console.log(countries.filter(country => country.toLowerCase().includes('land'))); // 11
console.log(countries.filter(country => country.length == 6)); // 12
console.log(countries.filter(country => country.length >= 6)); // 13
console.log(countries.filter(country => country[0] == "I")); // 14 | Using I 'cuz there are no countries with "E" in the provided array. Is the creator of this course stupid?
console.log(products.filter(product => Number(product.price) == 0)); // 15

// 16
function getStringsLists(arr) {
    return arr.filter(item => typeof (item) == "string");
}
console.log(getStringsLists([2, "Boca", true, "Patronato", { name: "Martín", surname: "Palermo" }]));

console.log(numbers.reduce((acc, curr) => acc + curr)); // 17
console.log(countries.reduce((acc, curr, index) => index < countries.length - 1 ? acc + ", " + curr : acc + " and " + curr) + " are Nordic countries."); // 18 | 'Nordic' sounds better than 'North European' and is actually more accurate ☝️🤓

// 19
/*
some() = Returns true if any of the items in an array meets the specified condition.
every() = Returns true if all of the items in an array meet the specified condition.
*/

console.log(names.some(name => name.length > 7)); // 20
console.log(countries.every(country => country.toLowerCase().includes('land'))); // 21

// 22
/*
find() = Returns the first item that meets the specified condition.
findIndex() = Returns the index of the first item that meets the specified condition.
*/

console.log(countries.find(country => country.length == 6)); // 23
console.log(countries.findIndex(country => country.length == 6)); // 24
console.log(countries.findIndex(country => country == "Norway")); // 25
console.log(countries.findIndex(country => country == "Russia")); // 26