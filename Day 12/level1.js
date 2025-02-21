// 1
let regEx = /\b\d+\b/g;
console.log("He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
    .match(regEx)
    .map(value => Number(value))
    .reduce((acc, sum) => Number(acc + sum)));

// 2 | What does this have to go with regex???
let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
let sortedPoints = points.map(Number).sort((a, b) => a - b);
console.log("Distance:", sortedPoints[sortedPoints.length - 1] - sortedPoints[0]);

// 3
const is_valid_variable = varName => {
    return /^[a-zA-Z_$][a-zA-Z_$]*$/.test(varName);
}

console.log(is_valid_variable('first_name')) // true
console.log(is_valid_variable('first-name')) // false
console.log(is_valid_variable('1first_name')) // false
console.log(is_valid_variable('firstname')) // true