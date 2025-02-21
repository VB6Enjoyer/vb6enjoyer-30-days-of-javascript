// 1
let arr = [];
console.group("Level 3");

console.time('for loop');
for (let i = 0; i < 1000000; i++) {
    arr.push(i);
}
console.timeEnd('for loop');

console.time('for of loop');
for (const num of arr) {
    continue;
}
console.timeEnd('for of loop');

console.time('forEach loop');
let sum = 0;
arr.forEach(num => {
    sum += num;
});
console.timeEnd('forEach loop');
console.log("%c" + sum + "%c", 'color: cyan');