// 1
function userIdGeneratedByUser(charNum = prompt("Enter the number of characters:"), idNum = prompt("Enter the number of IDs:")) {
    let ids = [];

    for (let i = 0; i < idNum; i++) {
        let id = "";
        for (let j = 0; j < charNum; j++) {
            id += String.fromCharCode(Math.floor(Math.random() * (122 - 48 + 1)) + 48)
        }
        ids.push(id);
    }

    return ids;
}
//console.log(userIdGeneratedByUser());

// 2
function rgbColorGenerator() {
    let rgbColor = "rgb("
    for (let i = 0; i < 3; i++) {
        rgbColor += String(Math.floor(Math.random() * 255));

        if (i < 2) {
            rgbColor += ","
        }
    }
    rgbColor += ")";

    return rgbColor;
}
console.log(rgbColorGenerator());

// 3
function arrOfHexColors(hexNum = prompt("Enter number of hex colors:")) {
    let arrOfHex = [];

    for (let i = 0; i < hexNum; i++) {
        arrOfHex.push(generateRandomHexNumber());
    }

    return arrOfHex;
}
//console.log(arrOfHexColors());

// 4
function arrOfRgbColors(rgbNum = prompt("Enter number of RGB colors:")) {
    let arrOfRgb = [];

    for (let i = 0; i < rgbNum; i++) {
        arrOfRgb.push(rgbColorGenerator());
    }

    return arrOfRgb;
}
//console.log(arrOfRgbColors());

// 5
function convertHexToRgb(hex) {
    let rgb = "rgb(";

    const r = String(parseInt(hex.substring(0, 2), 16));
    const g = String(parseInt(hex.substring(2, 4), 16));
    const b = String(parseInt(hex.substring(4, 6), 16));

    return rgb + r + "," + g + "," + b + ")";
}
console.log(convertHexToRgb("aa44ff"));

// 6
function convertRgbToHex(r, g, b) {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
}
console.log(convertRgbToHex(10, 111, 148));

// 7
function generateColors(codeType, number) {
    if (codeType = "hexa") {
        return arrOfHexColors(number);
    } else if (codeType = "rgb") {
        return arrOfRgbColors(number);
    } else {
        return "We don't support hue. Whoever uses it anyway???";
    }
}
console.log(generateColors("hexa", 4));
console.log(generateColors("rgb", 6));

// 8
function shuffleArray(arr) {
    let shuffledArr = [];

    while (arr.length > 0) {
        const value = arr.splice([Math.floor(Math.random() * arr.length)], 1)[0]
        shuffledArr.push(value);
    }

    return shuffledArr;
}
console.log(shuffleArray([1, 3, 5, 8]));

// 9
function factorial(num) {
    let factorial = "";

    for (let i = num; i > 0; i--) {
        factorial += String(i);
        if (i > 1) {
            factorial += "*";
        }
    }

    return eval(factorial);
}
console.log(factorial(9));

// 10
function isEmpty(param) {
    if (String(param).length == 0 || String(param) == "[object Object]") {
        return true;
    } else {
        return false;
    }
}
console.log(isEmpty(""));

// 11
function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}
console.log(sum(10, 20, 30, 40, 50));

// 12
function sumOfArrayItems(arr) {
    let sum = 0;
    for (const value of arr) {
        if (typeof (value) != 'number') {
            return "There are non-numbers in your array"
        }

        sum += value;
    }

    return sum;
}
console.log(sumOfArrayItems([5, 10, 15, 20]));
console.log(sumOfArrayItems([2, 5, "3", 2]));

// 13
function average(arr) {
    let sum = 0;
    for (const value of arr) {
        if (typeof (value) != 'number') {
            return "There are non-numbers in your array"
        }

        sum += value;
    }

    return sum / arr.length;
}
console.log(average([10, 30, 50, 70, 100]));

// 14
function modifyArray(arr) {
    if (arr[4] != undefined) {
        arr[4] = arr[4].toUpperCase();
    } else {
        return "Item not found.";
    }
    return arr;
}
console.log(modifyArray(["Hello", "My", "Name", "Is", "Eminem", "The", "Real", "Slim", "Shady"]));
console.log(modifyArray(["Hello", "I'm", "Eminem"]));

// 15
function isPrime(num) {
    if (num < 2 || num % 2 == 0 || num % 3 == 0) {
        return num + " is not prime.";
    }

    if (num == 2 || num == 3) {
        return num + " is prime.";
    }

    let isPrime = true;
    for (let i = 5; i * i <= num; i += 2) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        return num + " is prime.";
    } else {
        return num + " is not prime."
    }
}
console.log(isPrime(14));
console.log(isPrime(97));

// 16
function uniqueSetInArr(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i; j < arr.length - 1; j++) {
            if (arr[i] === arr[j + 1]) { // This is actually bad code :)
                console.log("Not all items in the array are unique.");
                return false;
            }
        }
    }

    console.log("All the items in the array are unique, but some items are more unique than others.");
    return true;
}
uniqueSetInArr([1, 2, 3, 4, 5]);
uniqueSetInArr([1, 2, 3, 4, 1]);

// 17
function sameDataTypeInArr(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i; j < arr.length - 1; j++) {
            if (typeof (arr[i]) != typeof (arr[j + 1])) { // This is actually bad code :)
                console.log("Not all items in the array are the same data type.");
                return false;
            }
        }
    }

    console.log("All the items in the array are the same data type, but some items are more the same data type than others.");
    return true;
}
sameDataTypeInArr([1, 2, 3, 4, 5]);
sameDataTypeInArr([1, 2, 3, "4", 1]);

// 18
function isVariableValid(varName) {
    if (/[ \-+*\/\\.,;:!@#%^\&()\[\]{}<>?`~|"'\n\t\r]|^\d/.test(varName)) {
        return "This variable is not valid.";
    } else {
        return "This variable is valid.";
    }
}
console.log(isVariableValid("+variable"));
console.log(isVariableValid("yoMomma"));

// 19
function sevenRandomNums() {
    let arr = [];
    let numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 7; i++) {
        arr.push(numberList.splice(numberList.indexOf(Math.floor(Math.random() * 10)), 1)[0]);
    }
    return arr;
}
console.log(sevenRandomNums());

// 20
function reverseCountries(countriesArr) {
    let arr = [...countriesArr];
    return arr.reverse();
}
console.log(reverseCountries(countries));