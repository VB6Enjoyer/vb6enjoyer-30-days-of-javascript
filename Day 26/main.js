let sortDown = true; // Determines sort direction
let startingWord = true; // Determines default search mode

const imageContainer = document.createElement("div");
imageContainer.id = "image-container";
imageContainer.style.backgroundImage = "url(\"src/globe.jpg\")";
imageContainer.style.backgroundSize = "cover";
imageContainer.style.backgroundPosition = "10%";

const topContainer = document.createElement("div");
topContainer.id = "top-container";
topContainer.style.display = "flex";
topContainer.style.flexDirection = "column";
topContainer.style.color = "#ffffff";
topContainer.style.alignItems = "center";
topContainer.style.backgroundColor = "rgba(17, 80, 110, 0.5)";

// Header
const headerContainer = document.createElement("div");
headerContainer.id = "header-container";
headerContainer.style.margin = "100px 0px 10px 0px";

const header = document.createElement("h1");
header.id = "header";
header.innerText = "WORLD COUNTRIES LIST";
header.style.fontSize = "70px";
header.style.letterSpacing = "15px";
header.style.wordSpacing = "10px";
header.style.marginBottom = "0px";

const countriesCount = document.createElement("h2");
countriesCount.id = "countries-count";
countriesCount.innerText = "Total number of countries: " + countries.length;
countriesCount.style.marginBottom = "0px";

const filterCount = document.createElement("h4");
filterCount.id = "filter-count";

headerContainer.appendChild(header);
headerContainer.appendChild(countriesCount);
headerContainer.appendChild(filterCount);
topContainer.appendChild(headerContainer);
//---------------------------------------------------------------------------

// Buttons
//---------------------------------------------------------------------------
const buttonContainer = document.createElement("div");
buttonContainer.id = "button-container";
buttonContainer.style.display = "flex";
buttonContainer.style.flexDirection = "row";
buttonContainer.style.marginBottom = "30px";

const startingWordBtn = document.createElement("button");
startingWordBtn.id = "str-wrd-button";
startingWordBtn.innerText = "STARTING WORD";
startingWordBtn.style.backgroundColor = "#581cb8";
startingWordBtn.style.color = "#ffffff";
startingWordBtn.style.fontSize = "16px";
startingWordBtn.style.border = "none";
startingWordBtn.style.padding = "17px 20px";
startingWordBtn.style.marginRight = "5px";
startingWordBtn.style.cursor = "pointer";

const anyWordBtn = document.createElement("button");
anyWordBtn.id = "any-word-button";
anyWordBtn.innerText = "SEARCH WITH ANY WORD";
anyWordBtn.style.backgroundColor = "#895be6";
anyWordBtn.style.color = "#ffffff";
anyWordBtn.style.fontSize = "16px";
anyWordBtn.style.border = "none";
anyWordBtn.style.padding = "17px 20px";
anyWordBtn.style.marginRight = "5px";
anyWordBtn.style.cursor = "pointer";

const sortBtn = document.createElement("button");
sortBtn.id = "sort-button";
sortBtn.style.backgroundColor = "#895be6";
sortBtn.style.color = "ffffff";
sortBtn.style.fontSize = "16px";
sortBtn.style.border = "none";
sortBtn.style.padding = "17px 20px";
sortBtn.style.cursor = "pointer";

const sortIcon = document.createElement("span");
sortIcon.id = "sort-icon";
sortIcon.className = "fa-solid fa-arrow-down-a-z";

startingWordBtn.addEventListener("click", () => {
    startingWordBtn.style.backgroundColor = "#581cb8";
    anyWordBtn.style.backgroundColor = "#895be6";
    startingWord = true;
});
anyWordBtn.addEventListener("click", () => {
    startingWordBtn.style.backgroundColor = "#895be6";
    anyWordBtn.style.backgroundColor = "#581cb8";
    startingWord = false;
});

sortBtn.addEventListener("mousedown", () => {
    sortBtn.style.backgroundColor = "#581cb8";
});
sortBtn.addEventListener("mouseup", () => {
    sortBtn.style.backgroundColor = "#895be6";
});

sortBtn.appendChild(sortIcon);

buttonContainer.appendChild(startingWordBtn);
buttonContainer.appendChild(anyWordBtn);
buttonContainer.appendChild(sortBtn);
topContainer.appendChild(buttonContainer);
//---------------------------------------------------------------------------

// Search
//---------------------------------------------------------------------------
const searchContainer = document.createElement("div");
searchContainer.id = "search-container";
searchContainer.style.display = "flex";
searchContainer.style.flexDirection = "row";
searchContainer.style.alignItems = "center";
searchContainer.style.paddingBottom = "170px";

const searchInput = document.createElement("input");
searchInput.id = "search";
searchInput.placeholder = "Search country..."
searchInput.style.color = "#63666b"
searchInput.style.borderRadius = "50px";
searchInput.style.border = "1px solid transparent";
searchInput.style.fontSize = "28px";
searchInput.style.padding = "10px 20px";
searchInput.style.width = "600px";
searchInput.style.verticalAlign = "middle";
searchInput.style.marginRight = "15px";

const lensIcon = document.createElement("i");
lensIcon.id = "lens-icon";
lensIcon.className = "fa-solid fa-magnifying-glass";
lensIcon.style.color = "#d7dadd";
lensIcon.style.fontSize = "30px";

searchContainer.appendChild(searchInput);
searchContainer.appendChild(lensIcon);
topContainer.appendChild(searchContainer);
imageContainer.appendChild(topContainer);
//---------------------------------------------------------------------------

// Countries container
//---------------------------------------------------------------------------
const countriesContainer = document.createElement("div");
countriesContainer.id = "countries-container";
countriesContainer.style.gap = "20px 150px";
countriesContainer.style.display = "grid";
countriesContainer.style.gridTemplateColumns = "repeat(6, 100px)";
countriesContainer.style.justifyContent = "start";
countriesContainer.style.padding = "100px 200px";
countriesContainer.style.backgroundColor = "#fefee3";
//---------------------------------------------------------------------------

// Functions
//---------------------------------------------------------------------------
// Loads all countries, or load countries according to the search term
function loadCountries(searchTerm, sort) {
    let filteredCountries;

    countriesCount.innerHTML = ""; // Clear the countries count in case no filters are used

    // Create dynamic text for the countriesCount header
    const searchValue = document.createElement("em");
    searchValue.style.color = "rgb(221, 21, 21)";

    const countriesAmount = document.createElement("b");
    countriesAmount.style.color = "rgb(80, 250, 90)";

    // Check whether there are any search filters or not
    if (searchTerm != undefined && searchTerm.length > 0) {
        startingWord
            ? filteredCountries = [...countries].filter(country => country.toLowerCase().startsWith(searchTerm.toLowerCase()))
            : filteredCountries = [...countries].filter(country => country.toLowerCase().includes(searchTerm.toLowerCase()));

        searchValue.innerText = searchTerm;
        countriesAmount.innerText = filteredCountries.length;

        countriesCount.innerHTML = "There are ";
        countriesCount.appendChild(countriesAmount);
        countriesCount.innerHTML += " countries that start with ";
        countriesCount.appendChild(searchValue);
    } else {
        filteredCountries = [...countries];

        if (searchTerm != undefined && searchTerm.length > 0) {
            searchValue.innerText = searchTerm;
            countriesAmount.innerText = filteredCountries.length;

            countriesCount.innerHTML = "There are ";
            countriesCount.appendChild(countriesAmount);
            countriesCount.innerHTML += " containing ";
            countriesCount.appendChild(searchValue);
        }
    }

    // Check the sort direction (A-Z by default)
    if (!sort && sort != undefined) {
        filteredCountries.sort((a, b) => sort ? a.localeCompare(b) : b.localeCompare(a));
    }

    countriesContainer.innerHTML = ""; // Clear the HTML to add new children

    // Add a box for each country
    for (const country of filteredCountries) {
        const countryBox = document.createElement("span");
        countryBox.innerText = country.toUpperCase();
        countryBox.className = "country-box";

        countryBox.style.border = "1px solid transparent";
        countryBox.style.borderRadius = "5px";
        countryBox.style.padding = "33px 50px";
        countryBox.style.margin = "0% 35%";
        countryBox.style.width = "80px";
        countryBox.style.height = "120px";
        countryBox.style.display = "flex";
        countryBox.style.textAlign = "center";
        countryBox.style.alignItems = "center";
        countryBox.style.overflow = "hidden";
        countryBox.style.flexWrap = "wrap";
        countryBox.style.justifyContent = "center";
        countryBox.style.flex = "1 0 10%";
        countryBox.style.fontSize = "23px";
        countryBox.style.color = "white";
        countryBox.style.fontWeight = "700";
        countryBox.style.backgroundImage = "linear-gradient(rgba(71, 108, 141, 0.5), rgba(18, 56, 90, 0.5)), url(\"src/map.jpg\")";
        countryBox.style.backgroundSize = "cover";
        countryBox.style.backgroundPosition = "50%";

        countriesContainer.appendChild(countryBox);
    }
}

// Add event listeners for searching and sorting
searchInput.addEventListener("input", (event) => loadCountries(event.target.value, sortDown));
sortBtn.addEventListener("click", () => {
    sortDown
        ? sortIcon.className = "fa-solid fa-arrow-up-a-z"
        : sortIcon.className = "fa-solid fa-arrow-down-a-z";
    sortDown = !sortDown;
    loadCountries(searchInput.value, sortDown)
});
//---------------------------------------------------------------------------

document.body.appendChild(imageContainer);
document.body.appendChild(countriesContainer);

loadCountries();