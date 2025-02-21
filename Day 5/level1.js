let arr = []; // 1
let arr2 = [1, 2, 3, 4, 5, 6, 7]; // 2
console.log("Length of arr2:", arr2.length); // 3
console.log("First item of arr2:", arr2[0], "| Middle item of arr2:", arr2[Math.round(arr2.length / 2) - 1], "| Last item of arr2:", arr2[arr2.length - 1]); // 4

// 5
let mixedDataTypes = [1, "String", true, { name: "Juan", surname: "Núñez" }, null, undefined, 2.3, ["Another string"]];
console.log("Length of mixedDataTypes:", mixedDataTypes.length);

let itCompanies = ["Meta", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]; // 6
console.log(itCompanies); // 7
console.log("Number of IT companies:", itCompanies.length); // 8
console.log("First company:", itCompanies[0], "| Second company:", itCompanies[Math.round(itCompanies.length / 2) - 1], "| Last company:", itCompanies[itCompanies.length - 1]); // 9
console.log(`Companies:\n* ${itCompanies[0]}\n* ${itCompanies[1]}\n* ${itCompanies[2]}\n* ${itCompanies[3]}\n* ${itCompanies[4]}\n* ${itCompanies[5]}\n* ${itCompanies[6]}`); // 10
console.log(`Companies:\n* ${itCompanies[0].toUpperCase()}\n* ${itCompanies[1].toUpperCase()}\n* ${itCompanies[2].toUpperCase()}\n* ${itCompanies[3].toUpperCase()}\n* ${itCompanies[4].toUpperCase()}\n* ${itCompanies[5].toUpperCase()}\n* ${itCompanies[6].toUpperCase()}`); // 11
console.log(itCompanies.toString().replace(/\,/g, ", ").replace(itCompanies[itCompanies.length - 1], "and " + itCompanies[itCompanies.length - 1]), "are big IT companies."); // 12
console.log("Is Tencent in the array?", itCompanies.includes("Tencent"), "| Is Amazon in the array?", itCompanies.includes("Amazon")); // 13

// 14
let oolessItCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
    if (!itCompanies[i].includes("oo")) {
        oolessItCompanies.push(itCompanies[i]);
    }
}
console.log(oolessItCompanies);

itCompanies = ["Meta", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies.sort()); // 15
itCompanies = ["Meta", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies.reverse()); // 16
itCompanies = ["Meta", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies.slice(0, 3)); // 17
itCompanies = ["Meta", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies.slice(itCompanies.length - 4, itCompanies.length - 1)); // 18
itCompanies = ["Meta", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.ceil(itCompanies.length / 2))); // 19

// 20
itCompanies.shift();
console.log(itCompanies);
itCompanies = ["Meta", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 21
delete itCompanies[Math.floor(itCompanies.length / 2)]
console.log(itCompanies);
itCompanies = ["Meta", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 22
itCompanies.pop();
console.log(itCompanies);

// 23
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);