let set = new Set(); // 1

// 2
for (let i = 0; i <= 10; i++) {
    set.add(i);
}
console.log(set);

// 3
set.delete(0);
console.log(set);

// 4
set.clear();
console.log(set);

// 5
set = new Set(["Boca", "Riber", "Rasin", "San Llorenzo", "Inbependiente", "Rasin", "Boca"]);
console.log(set);

// 6
const countriesMap = new Map([
    ["Argentina", "Argentina".length],
    ["China", "China".length],
    ["Italy", "Italy".length],
    ["Japan", "Japan".length],
    ["United States", "United States".length]]);
console.log(countriesMap);