// 1
function fullName() {
    console.log("Juan Ignacio Núñez");
}
fullName();

// 2
function fullNameWithParams(firstName, lastName) {
    console.log(firstName, lastName);
}
fullNameWithParams("Juan Ignacio", "Núñez");

// 3
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(5, 10));

// 4
function calRectangleArea(length, width) {
    return length * width;
}
console.log(calRectangleArea(10, 25));

// 5
function calRectanglePerimeter(length, width) {
    return 2 * (length + width);
}
console.log(calRectanglePerimeter(10, 25));

// 6
function calVolumeRectPrism(length, width, height) {
    return length * width * height;
}
console.log(calVolumeRectPrism(10, 25, 15));

// 7
function calCircleArea(radius) {
    return Math.PI * radius * radius;
}
console.log(calCircleArea(12));

// 8
function calCircleCircum(radius) {
    return 2 * Math.PI * radius;
}
console.log(calCircleCircum(12));

// 9
function calDensity(mass, volume) {
    return mass / volume;
}
console.log(calDensity(300, 25));

// 10
function calSpeed(distance, time) {
    return distance / time;
}
console.log(calSpeed(1000, 50));

// 11
function calWeight(mass) {
    return mass * 9.81;
}
console.log(calWeight(30));

// 12
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log(convertCelsiusToFahrenheit(34));

// 13
function calBmi(weight, height) {
    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Underweight: " + bmi;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight: " + bmi;
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight: " + bmi;
    } else if (bmi >= 30) {
        return "Obese: " + bmi;
    }

    return "There was an error calculating you BMI. You are probably weightless or inhumanely obese."
}
console.log(calBmi(77.5, 1.64));

// 14
function checkSeason(month) {
    if (month == "december" || month == "january" || month == "february") {
        return "Summer | 夏";
    } else if (month == "march" || month == "april" || month == "may") {
        return "Autumn | 秋";
    } else if (month == "june" || month == "july" || month == "august") {
        return "Winter | 冬";
    } else if (month == "september" || month == "october" || month == "november") {
        return "Spring | 春";
    }

    return ("Speak English or die!");
}
console.log(checkSeason("february"));

// 15
function findMax(a, b, c) {
    if (a >= b >= c) {
        return a;
    } else if (b >= a >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(findMax(10, 20, 30));
console.log(findMax(11, 5, 12));
console.log(findMax(5, 18, 300));
console.log(findMax(5, 5, 9));