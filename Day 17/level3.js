// 1 | Once more, just reusing code, but am I supposed to store this? The course doesn't specify it, actually.
const personAccount = {
    firstName: "Juan",
    lastName: "Núñez",
    incomes: [[950000, "Job"], [320000, "Freelancing"], [15000, "Sold music"], [12000, "Interests"]],
    expenses: [[70000, "Desk"], [105000, "Clothes"], [93000, "Groceries"], [1520, "Powder Juice"], [55, "Money for a hobo"]],

    totalIncome() {
        let sum = 0;
        for (const income of this.incomes) {
            sum += Number(income[0]);
        }
        return sum;
    },

    totalExpense() {
        let sum = 0;
        for (const expense of this.expenses) {
            sum += Number(expense[0]);
        }
        return sum;
    },

    accountInfo() {
        return String("Full name: " + this.firstName + " " + this.lastName + "\nTotal income: " + this.totalIncome() + "\nTotal expense: " + this.totalExpense() + "\nAccount balance: " + this.accountBalance());
    },

    addIncome(income) {
        this.incomes.push(income);
    },

    addExpense(expense) {
        this.expenses.push(expense);
    },

    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
}

localStorage.setItem("personAccount", JSON.stringify(personAccount, undefined, 4));

console.group("Level 3");
console.log(localStorage.getItem("personAccount"));
//console.log(JSON.parse(localStorage.getItem("personAccount")).accountInfo()); | This doesn't work because the functions don't get stringified.
console.groupEnd("Level 3")