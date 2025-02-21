// 1
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
console.log(personAccount.accountInfo());
personAccount.addIncome([12350, "Music gig"]);
personAccount.addExpense([8525, "Steam games"]);
console.log(personAccount.accountInfo());

// 2
const userAccounts = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

// 2a
function signUp(username, email, password) {
    for (const user of userAccounts) {
        if (user.username == username || user.email == email) {
            console.log("This account already exists.");
            return;
        }
    }

    let id = "";
    for (let i = 0; i < 7; i++) {
        id += String.fromCharCode(Math.floor(Math.random() * (122 - 48 + 1)) + 48);
    }

    userAccounts.push({ _id: id, username: username, email: email, password: password, createdAt: Date(), isLoggedIn: false });
}
signUp("vb6enjoyer", "juaninun17@gmail.com", "ManILoveFSharp");
console.log(userAccounts);
signUp("Thomas", "thetrainengine@hotmail.com", "choochoo12");
signUp("FSharpSucks", "martha@martha.com", "CSharpMyBeloved");

// 2b
function signIn(username, password) {
    for (const user of userAccounts) {
        if (user.username == username) {
            if (user.password == password) {
                console.log("Logged in successfully.");
                user.isLoggedIn = true;
                return true;
            } else {
                console.log("Wrong password. Try again.");
                return false;
            }
        }
    }
    console.log("This user doesn't exist.");
    return false;
}
signIn("vb6enjoyer", "ManILoveFSharp");
signIn("vb6enjoyer", "ManILovefSharp");
signIn("vb5enjoyer", "ManILoveFSharp");

// 3
const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
];

// 3a
function rateProduct(productName, user, rating) {
    for (const product of products) {
        if (product.name.toLowerCase() == productName.toLowerCase()) {
            product.ratings.push({ userId: user._id, rate: rating });
            console.log("Product rated!");
            return true;
        }
    }
    console.log("The product doesn't exist.");
    return false;
};
rateProduct("Tv", userAccounts[5], 4);
console.log(products);
rateProduct("RTX 3050", userAccounts[2], 3);

// 3b
function averageRating(productName) {
    let sum = 0;
    let ratingAmount = 0;
    for (const product of products) {
        if (product.name.toLowerCase() == productName.toLowerCase()) {
            for (const rating of product.ratings) {
                sum += rating.rate;
                ratingAmount++;
            }
        }
    }

    return sum / ratingAmount;
}
console.log(averageRating("TV"));

// 4
function likeProduct(productName, user) {
    for (const product of products) {
        if (product.name.toLowerCase() == productName.toLowerCase()) {
            product.likes.push(user._id);
            console.log("Product liked!");
            return true;
        }
    }
    console.log("The product doesn't exist.");
    return false;
}
likeProduct("TV", userAccounts[5]);
console.log(products[2].likes);
likeProduct("RTX 3050", userAccounts[5]);