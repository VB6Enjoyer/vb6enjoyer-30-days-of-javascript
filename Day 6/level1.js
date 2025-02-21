// 1
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let iterator = 0;
while (iterator <= 10) {
    console.log(iterator);
    iterator++;
}

iterator = 0;
do {
    console.log(iterator)
    iterator++;
} while (iterator <= 10);

// 2
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

iterator = 10;
while (iterator >= 0) {
    console.log(iterator);
    iterator--;
}

iterator = 10;
do {
    console.log(iterator)
    iterator--;
} while (iterator >= 0);

// 3
let n = 10;
for (let i = 0; i <= n; i++) {
    console.log(i);
}

// 4
let numeral = "#";
do {
    console.log(numeral);
    numeral += "#";
} while (numeral.length <= 7)

// 5
for (let i = 0; i <= 10; i++) {
    console.log(i, "x", i, "=", i * i);
}

// 6
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log("i\ti^2\ti^3");
    }

    console.log(i + "\t" + i ** 2 + "\t" + i ** 3);
}

// 7
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 8
for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// 9
for (let i = 0; i <= 100; i++) {
    if (i < 2) {
        continue;
    }

    if (i == 2 || i == 3) {
        console.log(i);
        continue;
    }

    if (i % 2 == 0 || i % 3 == 0) {
        continue;
    }

    let isPrime = true;
    for (let j = 5; j * j <= i; j += 2) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}

// 10
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log("The sum of all numbers from 0 to 100 is", sum);

// 11
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        evenSum += i;
    } else {
        oddSum += i;
    }
}
console.log("The sum of all even numbers from 0 to 100 is", evenSum, "and the sum of all odd numbers from 0 to 100 is", oddSum);
console.log([evenSum, oddSum]); // 12

// 13
let rndNumArr = []
for (let i = 0; i <= 5; i++) {
    rndNumArr.push(Math.round(Math.random() * 100));
}
console.log(rndNumArr);

// 14
rndNumArr = []
for (let i = 0; i <= 5; i++) {
    let randomNum = Math.round(Math.random() * 100);

    while (rndNumArr.includes(randomNum)) {
        randomNum = Math.round(Math.random() * 100);
    }

    rndNumArr.push(randomNum);
}
console.log(rndNumArr);

// 15
let randomId = "";
for (let i = 0; i <= 6; i++) {
    randomId += String.fromCharCode(Math.floor(Math.random() * (122 - 48 + 1)) + 48)
}
console.log(randomId);