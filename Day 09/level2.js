console.log(products.map(product => parseFloat(product.price)).filter(price => !isNaN(price)).reduce((sum, price) => sum += price, 0)); // 1
console.log(products.reduce((sum, product) => { return isNaN(parseFloat(product.price)) ? sum : sum + product.price }, 0)); // 2

// 3
function categorizeCountries(arr) {
    return arr.filter(country => country.toLowerCase().includes('land') || country.toLowerCase().includes('ia') || country.toLowerCase().includes('stan'));
}
console.log(categorizeCountries(countries));

// 4 | That broken English makes it impossible to understand what the requirement for this exercise is.
function countFirstLetters(arr) {
    return Object.entries(
        arr.reduce((acc, country) => {
            let firstLetter = country[0].toUpperCase(); // Get the first letter (uppercase)
            acc[firstLetter] = (acc[firstLetter] || 0) + 1; // Count occurrences
            return acc;
        }, {})
    ).map(([letter, count]) => ({ letter, count })); // Convert to array of objects
}
console.log(countFirstLetters(countries));

// 5
function getFirstTenCountries(arr) {
    return arr.map((country, index) => { if (index < 10) return country }).filter(country => typeof (country) != "undefined");
}
console.log(getFirstTenCountries(countriesArr));

// 6
function getLastTenCountries(arr) {
    return arr.map((country, index) => { if (index >= arr.length - 10) return country }).filter(country => typeof (country) != "undefined");
}
console.log(getLastTenCountries(countriesArr));

// 7 || Broken English and o lord please help me.
function countCountriesPerFirstLetter(arr) {
    return Object.entries(
        arr.reduce((acc, country) => {
            let firstLetter = country[0].toUpperCase(); // Get the first letter (uppercase)
            if (!acc[firstLetter]) {
                acc[firstLetter] = [];
            }
            acc[firstLetter].push(country); // Add the country to the array for this letter
            return acc;
        }, {})
    ).map(([letter, countriesList]) => ({ letter, countries: countriesList })); // Map to desired structure
}
console.log(countCountriesPerFirstLetter(countriesArr));