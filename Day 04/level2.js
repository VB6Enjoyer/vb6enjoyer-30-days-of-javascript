// 1
let grade = Number(prompt("Enter a grade:"));
switch (true) {
    case (grade >= 80):
        console.log("A");
        break;
    case (grade >= 70):
        console.log("B");
        break;
    case (grade >= 60):
        console.log("C");
        break;
    case (grade >= 50):
        console.log("D");
        break;
    case (grade <= 49):
        console.log("F");
        break;
    default:
        console.log("This somehow failed :)");
        break;
}

// 2
let month = prompt("Input current month:").toLowerCase();

if (month == "december" || month == "january" || month == "february") {
    console.log("The season is Summer | 夏");
} else if (month == "march" || month == "april" || month == "may") {
    console.log("The season is Autumn | 秋");
} else if (month == "june" || month == "july" || month == "august") {
    console.log("The season is Winter | 冬");
} else if (month == "september" || month == "october" || month == "november") {
    console.log("The season is Spring | 春");
}

// 3
let day = prompt("Input a weekday:").toLowerCase();
if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday") {
    console.log(String(day).replace(day[0], day[0].toUpperCase()), "is a working day.");
} else if (day == "saturday" || day == "sunday") {
    console.log(String(day).replace(day[0], day[0].toUpperCase()), "is a weekend.");
}