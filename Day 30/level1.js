let showPopulation = true; // Used late for showing the graph properly

// Header
//---------------------------------------------------------------------------
const headerContainer = document.createElement("div");
headerContainer.id = "header-container";
headerContainer.style.backgroundColor = "#f2f2f2";
headerContainer.style.display = "flex";
headerContainer.style.flexDirection = "column";
headerContainer.style.justifyContent = "center";
headerContainer.style.alignText = "center";
headerContainer.style.paddingBottom = "10px";
headerContainer.style.marginTop = "-10px";

const header = document.createElement("h2");
header.id = "header";
header.textContent = "World Countries Data";
header.style.color = "#f89b11"
header.style.fontSize = "36px";

const subtitle = document.createElement("h4");
subtitle.id = "subtitle";
subtitle.textContent = "Currently, there are " + countries_data.length + " countries (and dependencies)."; // Count the total amount of countries
subtitle.style.margin = "0";
subtitle.style.marginBottom = "10px";
subtitle.style.color = "#000000";
subtitle.style.fontWeight = "500";

const filterCount = document.createElement("i");
filterCount.id = "filter-count";
filterCount.style.fontWeight = "600";
filterCount.style.color = "#f89b11"

headerContainer.appendChild(header);
headerContainer.appendChild(subtitle);
headerContainer.appendChild(filterCount);
document.body.appendChild(headerContainer);
//---------------------------------------------------------------------------

// Search & Buttons
//---------------------------------------------------------------------------
const inputContainer = document.createElement("div");
inputContainer.id = "input-container";
inputContainer.style.display = "flex";
inputContainer.style.flexDirection = "column";
inputContainer.style.textAlign = "center";
inputContainer.style.alignContent = "center";
inputContainer.style.paddingTop = "30px";
inputContainer.style.backgroundColor = "#fcfcfc";

const searchContainer = document.createElement("div");
searchContainer.id = "search-container";
searchContainer.style.alignItems = "center";
searchContainer.style.textAlign = "center";

const searchInput = document.createElement("input");
searchInput.id = "search";
searchInput.placeholder = "Search country..."
searchInput.style.color = "#f89b11"
searchInput.style.borderRadius = "50px";
searchInput.style.border = "1px solid rgba(33, 33, 33, 0.25)";
searchInput.style.fontSize = "28px";
searchInput.style.padding = "7px 23px";
searchInput.style.width = "900px";
searchInput.style.verticalAlign = "middle";
searchInput.style.marginRight = "15px";

searchContainer.appendChild(searchInput);
inputContainer.appendChild(searchContainer);

const buttonContainer = document.createElement("div");
buttonContainer.id = "button-container";
buttonContainer.style.display = "flex";
buttonContainer.style.flexDirection = "row";
buttonContainer.style.marginBottom = "30px";
buttonContainer.style.paddingTop = "45px";
buttonContainer.style.textAlign = "center";
buttonContainer.style.justifyContent = "center";
buttonContainer.style.alignContent = "center";

const nameBtn = document.createElement("button");
nameBtn.id = "name-button";

const nameBtnText = document.createElement("span");
nameBtnText.id = "name-button-text";
nameBtnText.className = "sort-button-text";
nameBtnText.textContent = "NAME";

const capitalBtn = document.createElement("button");
capitalBtn.id = "capital-button";

const capitalBtnText = document.createElement("span");
capitalBtnText.id = "capital-button-text";
capitalBtnText.className = "sort-button-text";
capitalBtnText.textContent = "CAPITAL";

const populationBtn = document.createElement("button");
populationBtn.id = "population-button";

const populationBtnText = document.createElement("span");
populationBtnText.id = "population-button-text";
populationBtnText.className = "sort-button-text";
populationBtnText.textContent = "POPULATION";

nameBtn.appendChild(nameBtnText);
capitalBtn.appendChild(capitalBtnText);
populationBtn.appendChild(populationBtnText);

const statsIcon = document.createElement("i");
statsIcon.id = "stats-icon";
statsIcon.className = "fas fa-chart-bar";
statsIcon.style.color = "#f89b11";
statsIcon.style.verticalAlign = "middle";
statsIcon.style.fontSize = "49px";
statsIcon.style.marginLeft = "-20px";

const buttonsArr = [nameBtn, capitalBtn, populationBtn];

let sortDown = true;
let lastClickedButtonIndex = 0;
let lastClickedButtonType = "name"
buttonsArr.forEach((button, index) => {
    button.className = "sort-button";
    button.firstChild.style.padding = "15px";

    const arrow = document.createElement("i");
    arrow.className = "sort-arrow fa-solid fa-down-long";
    arrow.style.fontSize = "16px";
    arrow.style.fontWeight = "600";
    arrow.style.verticalAlign = "middle";
    arrow.style.textAlign = "right";
    arrow.style.visibility = "hidden";

    button.appendChild(arrow);

    button.addEventListener("mousedown", e => {
        lastClickedButtonType = button.id.split("-")[0];

        if (lastClickedButtonIndex == index) {
            sortDown = !sortDown;

            arrow.className == "sort-arrow fa-solid fa-down-long"
                ? arrow.className = "sort-arrow fa-solid fa-up-long"
                : arrow.className = "sort-arrow fa-solid fa-down-long";
        }

        lastClickedButtonIndex = index;

        button.style.backgroundColor = "#d88a2f";
        arrow.style.visibility = "visible";

        loadGraph(loadCountries(searchInput.value || "", button.id.split("-")[0], sortDown), showPopulation);
    });

    button.addEventListener("mouseup", e => {
        button.style.backgroundColor = "#f2a93b";
    });

    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "#f2a93b";
    });

});

searchInput.addEventListener("input", e => {
    loadGraph(loadCountries(e.target.value, buttonsArr[lastClickedButtonIndex].id.split("-")[0], sortDown), showPopulation);
})

nameBtn.children[1].style.visibility = "visible"; // Show the sorting arrow since this is the default sorting method

buttonContainer.appendChild(nameBtn);
buttonContainer.appendChild(capitalBtn);
buttonContainer.appendChild(populationBtn);
buttonContainer.appendChild(statsIcon);

inputContainer.appendChild(buttonContainer);

document.body.appendChild(inputContainer);
//---------------------------------------------------------------------------

// Countries
//---------------------------------------------------------------------------
const countriesContainer = document.createElement("div");
countriesContainer.id = "countries-container";
countriesContainer.style.gap = "20px 0px";
countriesContainer.style.display = "grid";
countriesContainer.style.gridTemplateColumns = "repeat(6, 300px)";
countriesContainer.style.justifyContent = "flex-start";
countriesContainer.style.padding = "20px 0";
countriesContainer.style.paddingLeft = "6px";
countriesContainer.style.margin = "0 auto";
countriesContainer.style.backgroundColor = "#f2f2f2";
countriesContainer.style.borderTop = "1px solid #ececec";
countriesContainer.style.borderBottom = "1px solid #ececec";

document.body.appendChild(countriesContainer);
//---------------------------------------------------------------------------

// Graph
//---------------------------------------------------------------------------
const bottomSection = document.createElement("div");
bottomSection.id = "bottom-section";
bottomSection.style.display = "flex";
bottomSection.style.flexDirection = "column";
bottomSection.style.alignItems = "center";
bottomSection.style.alignContent = "center";
bottomSection.style.justifyContent = "center";
bottomSection.style.textAlign = "center";
bottomSection.style.backgroundColor = "#f2f2f2";
bottomSection.style.border = "1px solid #ececec";
bottomSection.style.margin = "10px";

const graphButtonContainer = document.createElement("div");
graphButtonContainer.id = "graph-button-container";
graphButtonContainer.style.display = "flex";
graphButtonContainer.style.flexDirection = "row";
graphButtonContainer.style.backgroundColor = "#f5f5f5";
graphButtonContainer.style.paddingTop = "20px";
graphButtonContainer.style.width = "100%";
graphButtonContainer.style.alignContent = "center";
graphButtonContainer.style.justifyContent = "center";
graphButtonContainer.style.alignItems = "center";

const graphPopulationBtn = document.createElement("button");
graphPopulationBtn.id = "graph-population-button";
graphPopulationBtn.textContent = "POPULATION";

const graphLanguageBtn = document.createElement("button");
graphLanguageBtn.id = "graph-language-button";
graphLanguageBtn.textContent = "LANGUAGES";

const graphBtnArr = [graphPopulationBtn, graphLanguageBtn];

graphBtnArr.forEach(button => {
    button.class = "graph-button";
    button.style.backgroundColor = "#f2a93b";
    button.style.color = "#333333";
    button.style.fontSize = "16px";
    button.style.fontWeight = "600";
    button.style.border = "none";
    button.style.marginRight = "10px";
    button.style.marginLeft = "10px";
    button.style.cursor = "pointer";
    button.style.width = "160px";
    button.style.height = "35px";
    button.style.alignContent = "center";
    button.style.justifyContent = "center";
    button.style.letterSpacing = "1px";

    graphButtonContainer.appendChild(button);

    button.addEventListener("mousedown", () => {
        button.id.split("-")[1] == "population"
            ? showPopulation = true
            : showPopulation = false;

        button.style.backgroundColor = "#d88a2f";

        loadGraph(loadCountries(searchInput.value || "", lastClickedButtonType, sortDown), showPopulation);
    });

    button.addEventListener("mouseup", () => {
        button.style.backgroundColor = "#f2a93b";
    });

    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "#f2a93b";
    });
});

bottomSection.appendChild(graphButtonContainer);

const graphTitle = document.createElement("h4");
graphTitle.id = "graph-title";
graphTitle.textContent = "10 most populated countries in the world";
graphTitle.style.fontWeight = "500";

bottomSection.appendChild(graphTitle);

const graphContainer = document.createElement("span");
graphContainer.id = "graph-container";
graphContainer.style.display = "flex";
graphContainer.style.flexDirection = "column";
graphContainer.style.textAlign = "left";
graphContainer.style.margin = "10px 0px"
graphContainer.style.width = "75%";

bottomSection.appendChild(graphContainer);

document.body.appendChild(bottomSection);
//---------------------------------------------------------------------------

// Functions
//---------------------------------------------------------------------------
function loadCountries(searchTerm, sortType, sortDown) {
    let filteredCountries;

    filterCount.innerHTML = ""; // Clear the filter count in case no filters are used

    // Check whether there are any search filters or not
    if (searchTerm != undefined && searchTerm.length > 0) {
        filteredCountries = [...countries_data].filter(country => {
            const { name, languages } = country;
            const capital = country.capital || "zzz";

            const nameMatch = name.toLowerCase().includes(searchTerm.trim().toLowerCase());
            const capitalMatch = capital.toLowerCase().includes(searchTerm.trim().toLowerCase());
            const languageMatch = languages.some(language => language.toLowerCase().includes(searchTerm.trim().toLowerCase()));

            return nameMatch || capitalMatch || languageMatch;
        });

        filterCount.textContent = filteredCountries.length + " countries satisfied the search criteria.";
        filterCount.style.visibility = "visible";
    } else {
        filteredCountries = [...countries_data];
        filterCount.style.visibility = "hidden";
    }

    // Check the sort direction (A-Z by default)
    switch (sortType) {
        case "name":
            buttonsArr[1].children[1].style.visibility = "hidden"; // These lines hide the arrow for other elements
            buttonsArr[2].children[1].style.visibility = "hidden";
            filteredCountries.sort((a, b) => sortDown ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
            break;
        case "capital":
            buttonsArr[0].children[1].style.visibility = "hidden";
            buttonsArr[2].children[1].style.visibility = "hidden";
            filteredCountries.sort((a, b) => {
                const capitalA = a.capital || "zzz";
                const capitalB = b.capital || "zzz";

                if (sortDown) {
                    return capitalA.localeCompare(capitalB);
                } else {
                    return capitalB.localeCompare(capitalA);
                }
            });
            break;
        case "population":
            buttonsArr[0].children[1].style.visibility = "hidden";
            buttonsArr[1].children[1].style.visibility = "hidden";

            filteredCountries.sort((a, b) => {
                if (sortDown) {
                    return b.population - a.population
                } else {
                    return a.population - b.population
                }
            });
            break;
    }

    countriesContainer.innerHTML = ""; // Clear the HTML to add new children

    // Add a box for each country
    for (const country of filteredCountries) {
        const countryBox = document.createElement("span");
        countryBox.className = "country-box";
        countryBox.style.border = "1px solid transparent";
        countryBox.style.borderRadius = "5px";
        countryBox.style.padding = "0px 0px";
        countryBox.style.margin = "0% 20%";
        countryBox.style.width = "268px";
        countryBox.style.height = "318px";
        countryBox.style.display = "flex";
        countryBox.style.flexDirection = "column";
        countryBox.style.textAlign = "center";
        countryBox.style.alignItems = "center";
        countryBox.style.overflow = "hidden";
        countryBox.style.fontSize = "22px";
        countryBox.style.color = "#000000";
        countryBox.style.backgroundColor = "#fbfbfb";

        const flagContainer = document.createElement("div");
        flagContainer.className = "flag-container";
        flagContainer.style.width = "170px";
        flagContainer.style.height = "85px";
        flagContainer.style.display = "flex;"
        flagContainer.style.alignItems = "center";
        flagContainer.style.justifyContent = "center";
        flagContainer.style.alignContent = "center";
        flagContainer.style.textAlign = "center";
        flagContainer.style.paddingTop = "20px";

        const flag = document.createElement("img");
        flag.className = "country-flag";
        flag.src = country.flag;
        flag.style.maxWidth = "100%";
        flag.style.maxHeight = "100%";

        flagContainer.appendChild(flag);

        const nameContainer = document.createElement("span");
        nameContainer.className = "name-container";
        nameContainer.style.width = "95%";
        nameContainer.style.display = "flex";
        nameContainer.style.alignContent = "center";
        nameContainer.style.textAlign = "center";
        nameContainer.style.justifyContent = "center";
        nameContainer.style.margin = "0";
        nameContainer.style.padding = "0";

        const name = document.createElement("h4");
        name.className = "country-name";
        name.textContent = country.name;
        name.style.color = "#f89b11";
        name.style.fontWeight = "500";
        name.style.fontSize = "21px";

        nameContainer.appendChild(name);

        const countryInfo = document.createElement("span");
        countryInfo.className = "country-info";
        countryInfo.style.display = "flex";
        countryInfo.style.flexDirection = "column";
        countryInfo.style.fontSize = "16px";
        countryInfo.style.color = "#606060";
        countryInfo.style.fontWeight = "500";
        countryInfo.style.textAlign = "left";
        countryInfo.style.margin = "-20px 15px";
        countryInfo.style.width = "90%";

        const capital = document.createElement("p");
        capital.className = "country-capital";
        country.capital == undefined || country.capital == ""
            ? capital.textContent = "Capital: none"
            : capital.textContent = "Capital: " + country.capital;
        capital.style.margin = "2px 0px";

        const languages = document.createElement("p");
        languages.textContent = "Languages: " + country.languages.join(", ");
        languages.style.margin = "2px 0px";

        const population = document.createElement("p");
        population.textContent = "Population: " + country.population.toLocaleString();
        population.style.margin = "2px 0px";

        countryBox.appendChild(flagContainer);
        countryBox.appendChild(nameContainer);
        countryInfo.appendChild(capital);
        countryInfo.appendChild(languages);
        countryInfo.appendChild(population);
        countryBox.appendChild(countryInfo);

        countriesContainer.appendChild(countryBox);
    }

    return filteredCountries;
}

function loadGraph(countries, popBoolean) {
    graphContainer.style.padding = "20px 0px"; // Add padding now so that it doesn't appear at first
    graphContainer.replaceChildren(); // Empty the div to accomodate for new data

    let totalPopulation = 0;
    let totalLanguages = 0;
    const languages = {};
    const filteredLanguages = {};

    if (popBoolean) {
        // Count the total population by counting each nation's population
        for (const country of countries_data) {
            totalPopulation += country.population;
        }
    } else {
        for (const country of countries_data) {
            for (const lang of country.languages) {
                if (Object.keys(languages).includes(lang)) {
                    languages[lang]++;
                } else {
                    Object.defineProperty(languages, lang.toString(), { value: 1, writable: true, enumerable: true });
                    totalLanguages++;
                }

                if (countries.includes(country)) {
                    if (Object.keys(filteredLanguages).includes(lang)) {
                        filteredLanguages[lang]++;
                    } else {
                        Object.defineProperty(filteredLanguages, lang.toString(), { value: 1, writable: true, enumerable: true })
                    }
                }
            }
        }
    }

    const topTenCountries = [...countries].sort((a, b) => b.population - a.population).slice(0, 10); // Sort and get the 10 most populous countries
    const topTenLanguages = Object.entries(filteredLanguages).sort((a, b) => b[1] - a[1]).slice(0, 10);
    const targetValue = popBoolean ? topTenCountries.length : topTenLanguages.length;

    searchInput.value != undefined && searchInput.value.trim().length > 0
        ? popBoolean
            ? graphTitle.textContent = `${targetValue} most populated countries that match search criteria`
            : graphTitle.textContent = `${targetValue} most spoken languages that match search criteria`
        : popBoolean
            ? graphTitle.textContent = "10 most populated countries in the world."
            : graphTitle.textContent = "10 most spoken languages in the world."

    let iterator;
    popBoolean
        ? iterator = -1
        : iterator = 0;

    // Add a graph for each country, and one for the whole world
    for (iterator; iterator < targetValue; iterator++) {
        const div = document.createElement("div");
        iterator == -1 ? div.id = "world"
            : div.id = topTenCountries[iterator].name.toLowerCase().replace(" ", "-") + "-graph";
        popBoolean
            ? div.className = "country-graph"
            : div.className = "language-graph";
        div.style.display = "flex";
        div.style.alignItems = "center";

        const nameP = document.createElement("p");
        iterator == -1 ? nameP.innerText = "World"
            : nameP.innerText = popBoolean
                ? topTenCountries[iterator].name
                : topTenLanguages[iterator][0]
        popBoolean
            ? nameP.className = "graph-country-name"
            : nameP.className = "graph-language-name";
        nameP.style.fontSize = "17px";
        nameP.style.marginRight = "100px";
        nameP.style.width = "200px";
        nameP.style.textAlign = "left";

        const graphBarContainer = document.createElement("div");
        graphBarContainer.className = "graph-bar-container";
        graphBarContainer.style.flexGrow = "1";
        graphBarContainer.style.marginRight = "10px";
        graphBarContainer.style.width = "100%";

        const graph = document.createElement("span");
        graph.className = "graph";
        graph.style.backgroundColor = "#f89b11";
        graph.style.display = "inline-block";
        graph.style.height = "40px";
        iterator == -1 ? graph.style.width = "100%"
            : popBoolean
                ? graph.style.width = (topTenCountries[iterator].population / totalPopulation) * 100 + "%"
                : graph.style.width = (topTenLanguages[iterator][1] / totalLanguages) * 100 + "%";
        graph.style.minWidth = "1px";

        graphBarContainer.appendChild(graph);

        const popP = document.createElement("p");
        popBoolean
            ? popP.className = "graph-country-population"
            : popP.className = "graph-language-speakers";
        iterator == -1 ? popP.innerText = totalPopulation.toLocaleString()
            : popBoolean
                ? popP.innerText = topTenCountries[iterator].population.toLocaleString()
                : popP.innerText = topTenLanguages[iterator][1].toLocaleString();
        popP.className = "countryPopulation";
        popP.style.fontSize = "18px";
        popP.style.width = "200px";

        div.appendChild(nameP);
        div.appendChild(graphBarContainer);
        div.appendChild(popP);

        graphContainer.appendChild(div);
    }
}
//---------------------------------------------------------------------------

// Styles
//---------------------------------------------------------------------------
const stylesheet = document.createElement("style");
stylesheet.textContent = `
    #search:focus {
        outline: none;
        border:1px solid #f89b11 !important;
        box-shadow: 0 0 5px #f89b11;
    }

    .sort-button {
        background-color: #f2a93b;
        color: #000000;
        font-size: 16px;
        border: none;
        border-radius: 50px;
        padding: 15px 20px;
        margin-right: 40px;
        cursor: pointer;
        min-width: 200px;
        max-width: 200px;
    }
`;
document.head.appendChild(stylesheet);
//---------------------------------------------------------------------------

loadGraph(loadCountries("", "name", true), showPopulation);
