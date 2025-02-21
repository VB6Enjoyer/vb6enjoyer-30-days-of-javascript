// 1
month = prompt("Enter a month:").toLowerCase();
switch (month) {
    case "january":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 31 days.");
        break;
    case "february":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 28 days.");
        break;
    case "march":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 31 days.");
        break;
    case "april":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 30 days.");
        break;
    case "may":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 31 days.");
        break;
    case "june":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 30 days.");
        break;
    case "july":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 31 days.");
        break;
    case "august":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 31 days.");
        break;
    case "september":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 30 days.");
        break;
    case "october":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 31 days.");
        break;
    case "november":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 30 days.");
        break;
    case "december":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 31 days.");
        break;
}

// 2
month = prompt("Enter a month:").toLowerCase();
switch (month) {
    case "january":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 31 days.");
        break;
    case "february":
        let leap = confirm("Is it a leap year?");

        if (leap) {
            console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 29 days.");
        } else {
            console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 28 days.");
        }
        break;
    case "march":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 31 days.");
        break;
    case "april":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 30 days.");
        break;
    case "may":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 31 days.");
        break;
    case "june":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 30 days.");
        break;
    case "july":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 31 days.");
        break;
    case "august":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 31 days.");
        break;
    case "september":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 30 days.");
        break;
    case "october":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 31 days.");
        break;
    case "november":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 30 days.");
        break;
    case "december":
        console.log(String(month).replace(month[0], month[0].toUpperCase()), "has 31 days.");
        break;
}