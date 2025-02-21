// 1
async function calAverageCatWeight() {
    let catWeights = [];

    try {
        fetchCatsAPI().then(cats => {
            for (const kitty of cats) {
                catWeights.push(kitty.weight.metric);
            }
        }).then(() => {
            console.groupCollapsed("Cats!");

            let sum = 0;

            for (const weightRange of catWeights) {
                const weightArr = weightRange.split(" - ");
                sum += (weightArr[0] + weightArr[1]) / 2;
            }

            console.log("Average cat weight:", Number(sum / catWeights.length));

            console.groupEnd("Cats!");
        });
    } catch (err) {
        return err;
    }
}

calAverageCatWeight();

// 2
async function tenLargestCountries() {
    let countriesArr = await fetchCountriesAPI();

    countriesArr.sort((a, b) => Number(b.area) - Number(a.area));

    console.groupCollapsed("Countries!");
    console.log(countriesArr.slice(0, 10)); // This just WON'T show Russia for whatever reason.
    console.groupEnd("Countries!");
};

tenLargestCountries();

// 3
async function countLanguages() {
    let countriesArr = await fetchCountriesAPI();
    let languagesArr = [];

    for (const country of countriesArr) {
        for (const language of country.languages) {
            languagesArr.push(language.name);
        }
    }

    console.groupCollapsed("Languages!");
    console.log(new Set(languagesArr).size)
    console.groupEnd("Languages!")
}

countLanguages();