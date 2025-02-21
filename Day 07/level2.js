// 1
function solveLinEquation(a, b) {
    return Number(-b / a);
}
console.log(solveLinEquation(10, 15));

// 2
function solveQuadraticEquation(a, b, c) {
    const solutionA = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    const solutionB = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    return [solutionA, solutionB];
}
console.log(solveQuadraticEquation(4, -5, -12));

// 3
function printArray(arr) {
    for (const value of arr) {
        console.log(value);
    }
}
printArray(["Boca", "Riber", "Indepechente", "San Llorenzo de Amargo", "Rasin Clú"]);

// 4
function showDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = String(now.getFullYear());
    const hour = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    console.log(day);
    return `${day}/${month}/${year} ${hour}:${minutes}`;
}
console.log(showDateTime());

// 5
function swapValues(x, y) {
    let aux = x;
    x = y;
    y = aux;
    return [x, y];
}
console.log(swapValues(10, 20));

// 6
function reverseArray(arr) {
    let reversedArr = [];
    for (const value of arr) {
        reversedArr.unshift(value);
    }
    return reversedArr;
}
console.log(reverseArray(["Boca", "Riber", "Indepechente", "San Llorenzo de Amargo", "Rasin Clú"]))

// 7
function capitalizeArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = String(arr[i].toUpperCase());
    }
    return arr;
}
console.log(capitalizeArray(["Boca", "Riber", "Indepechente", "San Llorenzo de Amargo", "Rasin Clú"]));

// 8
function addItem(arr, item) {
    arr.push(item);
    return arr;
}
console.log(addItem(["Boca", "Riber", "Indepechente", "San Llorenzo de Amargo", "Rasin Clú"], 'Banfil'));

// 9
function removeItem(arr, index) {
    if (index >= 0 && index <= arr.length - 1) {
        arr.splice(index, 1);
    }
    return arr;
}
console.log(removeItem(["Boca", "Riber", "Indepechente", "San Llorenzo de Amargo", "Rasin Clú"], 4))

// 10
function sumOfNumbers(num1, num2) {
    let max, min;
    let sum = 0;
    if (num1 >= num2) {
        max = num1;
        min = num2;
    } else {
        max = num2;
        min = num1;
    }

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbers(10, 20));

// 11
function sumOfOdds(num1, num2) {
    let max, min;
    let sum = 0;
    if (num1 >= num2) {
        max = num1;
        min = num2;
    } else {
        max = num2;
        min = num1;
    }

    for (let i = min; i <= max; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfOdds(10, 20));

// 12
function sumOfEvens(num1, num2) {
    let max, min;
    let sum = 0;
    if (num1 >= num2) {
        max = num1;
        min = num2;
    } else {
        max = num2;
        min = num1;
    }

    for (let i = min; i <= max; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfEvens(10, 20));

// 13
function evensAndOdds(num) {
    let evens = 0;
    let odds = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            evens++;
        } else {
            odds++;
        }
    }
    return [evens, odds];
}
const evensAndOddsArr = evensAndOdds(100);
console.log("The number of evens is", evensAndOddsArr[0] + ".\nThe number of odds is", evensAndOddsArr[1] + ".");

// 14
function sumAllArgs() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum;
}
console.log(sumAllArgs(1, 5, 10, 12, 48, 23));

// 15
function generateRandomIp() {
    let ip = "";
    let i = 1;

    while (i <= 12) {
        ip += String(Math.floor(Math.random() * 9));

        if (i % 3 == 0 && i != 0 && i != 12) {
            ip += ".";
        }
        i++;
    }

    return ip;
}
console.log(generateRandomIp());

// 16
function generateRandomMacAddress() {
    let address = "0" + String(Math.round(Math.random())) + ":";

    for (let i = 0; i < 10; i++) {
        if (i != 0 && i % 2 == 0) {
            address += ":";
        }

        let rnd = String(Math.floor(Math.random() * 16));

        switch (true) {
            case rnd == 10:
                rnd = "A";
                break;
            case rnd == 11:
                rnd = "B"
                break;
            case rnd == 12:
                rnd = "C";
                break;
            case rnd == 13:
                rnd = "D";
                break;
            case rnd == 14:
                rnd = "E";
                break;
            case rnd == 15:
                rnd = "F";
                break;
            default:
                break;
        }

        address += rnd;
    }

    return address;
}
console.log(generateRandomMacAddress());

// 17
function generateRandomHexNumber() {
    let hex = "#";

    for (let i = 0; i < 6; i++) {
        let rnd = String(Math.floor(Math.random() * 16));

        switch (true) {
            case rnd == 10:
                rnd = "a";
                break;
            case rnd == 11:
                rnd = "b"
                break;
            case rnd == 12:
                rnd = "c";
                break;
            case rnd == 13:
                rnd = "d";
                break;
            case rnd == 14:
                rnd = "e";
                break;
            case rnd == 15:
                rnd = "f";
                break;
            default:
                break;
        }

        hex += rnd;
    }

    return hex;
}
console.log(generateRandomHexNumber());

// 18
function generateRandomUserId() {
    let id = "";

    for (let i = 0; i < 7; i++) {
        id += String.fromCharCode(Math.floor(Math.random() * (122 - 48 + 1)) + 48)
    }

    return id;
}
console.log(generateRandomUserId());