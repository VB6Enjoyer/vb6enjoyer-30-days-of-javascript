const countriesAPI = 'https://restcountries.com/v2/all';

// 1
async function fetchCountriesAPI() {
    const response = await fetch(countriesAPI);
    const countries = await response.json();

    return countries;
}

async function useCountriesAPI() {
    fetchCountriesAPI().then(countries => {
        console.groupCollapsed("Level 1");

        for (const country of countries) {
            console.log("Native Name:", country.nativeName + "\nCapital:", country.capital + "\nMain Language:", JSON.stringify(country.languages[0].name) + "\nPopulation:", country.population + "\nArea:", country.area);
        }

        console.groupEnd("Level 1");
    });
}

useCountriesAPI();


