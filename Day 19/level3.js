// 1 | I'm tired of reusing this code.
function personAccount() {
    const firstName = "Juan";
    const lastName = "Núñez";
    let incomes = [[950000, "Job"], [320000, "Freelancing"], [15000, "Sold music"], [12000, "Interests"]];
    let expenses = [[70000, "Desk"], [105000, "Clothes"], [93000, "Groceries"], [1520, "Powder Juice"], [55, "Money for a hobo"]];

    function totalIncome() {
        let sum = 0;
        for (const income of incomes) {
            if (income != undefined) {
                sum += Number(income[0]);
            }
        }
        return sum;
    }

    function totalExpense() {
        let sum = 0;
        for (const expense of expenses) {
            if (expense != undefined) {
                sum += Number(expense[0]);
            }
        }
        return sum;
    }

    function accountInfo() {
        return String("Full name: " + firstName + " " + lastName + "\nTotal income: " + totalIncome() + "\nTotal expense: " + totalExpense() + "\nAccount balance: " + accountBalance());
    }

    function addIncome(income) {
        incomes.push(income);
    }

    function addExpense(expense) {
        expenses.push(expense);
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return {
        totalIncome,
        totalExpense,
        accountInfo,
        addIncome,
        addExpense,
        accountBalance
    }
}

const myAccount = personAccount();
console.log(myAccount.accountInfo());
myAccount.addIncome([5000, "Gig"]);
myAccount.addExpense([1200, "Guitar Strings"]);
console.log(myAccount.accountInfo());