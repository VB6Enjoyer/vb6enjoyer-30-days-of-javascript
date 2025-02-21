const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

console.log("Union of a & b:", [...a, ...b]); // 1

// 2
const setA = new Set(a);
const setB = new Set(b);
console.log(new Set(a.filter((num) => setB.has(num))));

console.log(new Set(a.filter((num) => !setB.has(num)))); // 3 | "Find a with b"? The fuck u mean bro? Why don't u find some bitches first?