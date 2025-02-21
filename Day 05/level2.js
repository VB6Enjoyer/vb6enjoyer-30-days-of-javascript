// 1
console.log(countries);
console.log(webTechs);

// 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'.replace(",", "").replace(".", "").split(" ");
console.log(text);
console.log("There are", text.length, "words in the array.");

// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart[0] != 'Meat'
    ? shoppingCart.unshift('Meat')
    : shoppingCart;

shoppingCart[shoppingCart.length - 1] != 'Sugar'
    ? shoppingCart.push('Sugar')
    : shoppingCart;

let allergicToHoney = false;
allergicToHoney == true
    ? shoppingCart.splice(shoppingCart.indexOf('Honey'), shoppingCart.indexOf('Honey') + 1)
    : shoppingCart;

shoppingCart[shoppingCart.indexOf('Tea')] = "Green Tea";
console.log(shoppingCart);

// 4
countries.includes('Ethiopia')
    ? console.log('ETHIOPIA')
    : countries.push('Ethiopia');

// 5
webTechs.includes('Sass')
    ? console.log('Sass is a CSS preprocess.')
    : webTechs.push('Sass'), console.log(webTechs);

// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);