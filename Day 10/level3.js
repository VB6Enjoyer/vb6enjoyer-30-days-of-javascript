// I just realized there was a countries_data.js file NOW. I ain't redoing the previous exercises tho.
// 1
const languages = [];
countries.forEach(country => country.languages.forEach(lang => languages.push(lang)));
const languageSet = new Set(languages);
console.log("Languages in countries_data.js:", languageSet.size);

// 2
const languagesCount = Object.entries(languages.reduce((acc, lang) => {
    let language = lang;
    acc[language] = (acc[language] || 0) + 1;
    return acc;
}, {}));
const languageMap = new Map(languagesCount.sort((a, b) => b[1] - a[1]).slice(0, 10));
console.log(languageMap);