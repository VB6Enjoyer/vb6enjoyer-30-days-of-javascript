// 1 | This is literally copied from Day 9 lol
class Statistics {
    constructor(arr) {
        this.items = arr;
    }
    count() {
        return this.items.length;
    }

    sum() {
        return this.items.reduce((acc, curr) => acc + curr, 0);
    }

    min() {
        return this.items.sort()[0];
    }

    max() {
        return this.items.sort().reverse()[0];
    }

    range() {
        return this.max() - this.min();
    }

    mean() {
        return this.sum() / this.items.length;
    }

    median() {
        const sortedItems = this.items.sort();

        if (sortedItems.length % 2 == 0) {
            return (sortedItems[Math.floor(sortedItems.length / 2) - 1] + sortedItems[Math.floor(sortedItems.length / 2)]) / 2;
        } else {
            return sortedItems[Math.floor(sortedItems.length / 2)];
        }
    }

    mode() {
        const frequencyMap = this.freqDist();

        let count = 0;
        let mode;

        for (const num in frequencyMap) {
            if (frequencyMap[num] > count) {
                count = frequencyMap[num];
                mode = Number(num);
            }
        }

        return { "mode": mode, "count": count };
    }

    var() {
        const mean = this.mean();
        const squaredDiffs = this.items.map(num => (num - mean) ** 2);
        return squaredDiffs.reduce((sum, num) => sum + num, 0) / (this.items.length);
    }

    stdDev() {
        const mean = this.mean();
        const squaredDiffs = this.items.map(num => (num - mean) ** 2);
        return Math.sqrt(squaredDiffs.reduce((sum, num) => sum + num, 0) / (this.items.length));
    }

    freqDist() {
        return this.items.sort().reduce((acc, num) => {
            acc[num] = (acc[num] || 0) + 1;
            return acc;
        }, {});
    }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
let statistics = new Statistics(ages);

console.group("Statistics!");
console.log("Count:", statistics.count());
console.log("Sum:", statistics.sum());
console.log("Min:", statistics.min());
console.log("Max:", statistics.max());
console.log("Range:", statistics.range());
console.log("Mean:", statistics.mean());
console.log("Median:", statistics.median());
console.log("Mode:", statistics.mode());
console.log("Variance:", statistics.var());
console.log("Standard deviation:", statistics.stdDev());
console.log("Frequency distribution:", statistics.freqDist());
console.groupEnd("Statistics!");

// 2 | This is also recycled code.
class PersonAccount {
    constructor(firstName, lastName, incomes, expenses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = incomes;
        this.expenses = expenses;
    }

    get getTotalIncome() {
        let sum = 0;
        for (const income of this.incomes) {
            sum += Number(income[0]);
        }
        return sum;
    }

    get getTotalExpense() {
        let sum = 0;
        for (const expense of this.expenses) {
            sum += Number(expense[0]);
        }
        return sum;
    }

    get getAccountInfo() {
        return String("Full name: " + this.firstName + " " + this.lastName + "\nTotal income: " + this.getTotalIncome + "\nTotal expense: " + this.getTotalExpense + "\nAccount balance: " + this.getAccountBalance);
    }

    get getAccountBalance() {
        return this.getTotalIncome - this.getTotalExpense;
    }

    addIncome(income) {
        this.incomes.push(income);
    }

    addExpense(expense) {
        this.expenses.push(expense);
    }
}

const juani = new PersonAccount("Juan", "Nuñez", [[950000, "Job"], [320000, "Freelancing"], [15000, "Sold music"], [12000, "Interests"]], [[70000, "Desk"], [105000, "Clothes"], [93000, "Groceries"], [1520, "Powder Juice"], [55, "Money for a hobo"]]);

console.group("Accounting!");

console.log(juani.getAccountInfo);
juani.addIncome([12350, "Music gig"]);
juani.addExpense([8525, "Steam games"]);
console.log(juani.getAccountInfo);

console.groupEnd("Accounting!");