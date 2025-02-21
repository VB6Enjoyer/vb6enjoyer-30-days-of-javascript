const subtitle = document.getElementsByClassName("subtitle");
subtitle[0].innerText = "Currently, there are " + countries_data.length + " countries (and dependencies)."; // Count the total amount of countries

const graphTitle = document.querySelector("h4");

const popButton = document.getElementsByClassName("population");
const langButton = document.getElementsByClassName("languages");
const graphWrapper = document.getElementById("stat");

popButton[0].addEventListener("click", () => {
    graphTitle.innerText = "10 most populated countries in the world.";
    graphWrapper.style.padding = "20px 0px"; // Add padding now so that it doesn't appear at first
    graphWrapper.replaceChildren(); // Empty the div to accomodate for new data

    // Count the total population by counting each nation's population
    let totalPopulation = 0;
    for (const country of countries_data) {
        totalPopulation += country.population;
    }

    const topTenCountries = [...countries_data].sort((a, b) => b.population - a.population).slice(0, 10); // Sort and get the 10 most populous countries

    // Add a graph for each country, and one for the whole world
    for (let i = -1; i < 10; i++) {
        const div = document.createElement("div");
        i == -1 ? div.id = "world"
            : div.id = topTenCountries[i].name.toLowerCase().replace(" ", "-");
        div.className = "countryGraph";
        div.style.display = "flex";
        div.style.alignItems = "center";

        const nameP = document.createElement("p");
        i == -1 ? nameP.innerText = "World"
            : nameP.innerText = topTenCountries[i].name;
        nameP.className = "countryName";
        nameP.style.fontSize = "18px";
        nameP.style.marginRight = "10px";
        nameP.style.width = "200px";
        nameP.style.textAlign = "center";

        const graphBarContainer = document.createElement("div");
        graphBarContainer.className = "graph-bar-container";
        graphBarContainer.style.flexGrow = "1";
        graphBarContainer.style.marginRight = "10px";

        const graph = document.createElement("span");
        graph.style.backgroundColor = "#f89b11";
        graph.style.display = "inline-block";
        graph.style.height = "40px";
        i == -1 ? graph.style.width = "100%"
            : graph.style.width = (topTenCountries[i].population / totalPopulation) * 100 + "%";

        graphBarContainer.appendChild(graph);

        const popP = document.createElement("p")
        i == -1 ? popP.innerText = totalPopulation
            : popP.innerText = topTenCountries[i].population;
        popP.className = "countryPopulation";
        popP.style.fontSize = "18px";
        popP.style.width = "200px";

        div.appendChild(nameP);
        div.appendChild(graphBarContainer);
        div.appendChild(popP);
        graphWrapper.appendChild(div);
    }
})

langButton[0].addEventListener("click", () => {
    graphTitle.innerText = "10 most spoken languages in the world.";
    graphWrapper.style.padding = "20px 0px"; // Add padding now so that it doesn't appear at first
    graphWrapper.replaceChildren(); // Empty the div to accomodate for new data

    // Get all of the languages and count their apparitions
    const languages = {}
    let totalLanguages = 0;
    for (const country of countries_data) {
        for (const lang of country.languages) {
            if (Object.keys(languages).includes(lang)) {
                languages[lang]++;
            } else {
                Object.defineProperty(languages, lang.toString(), { value: 1, writable: true, enumerable: true });
                totalLanguages++;
            }
        }
    }

    const topTenLanguages = Object.entries(languages).sort((a, b) => b[1] - a[1]).slice(0, 10);

    // Add a graph for each language
    for (let i = 0; i < 10; i++) {
        const div = document.createElement("div");
        div.id = topTenLanguages[i][0].toLowerCase().replace(" ", "-");
        div.className = "langGraph";
        div.style.display = "flex";
        div.style.alignItems = "center";

        const nameP = document.createElement("p");
        nameP.innerText = topTenLanguages[i][0];
        nameP.className = "langName";
        nameP.style.fontSize = "18px";
        nameP.style.marginRight = "10px";
        nameP.style.width = "200px";
        nameP.style.textAlign = "center";

        const graphBarContainer = document.createElement("div");
        graphBarContainer.className = "graph-bar-container";
        graphBarContainer.style.flexGrow = "1";
        graphBarContainer.style.marginRight = "10px";

        const graph = document.createElement("span");
        graph.style.backgroundColor = "#f89b11";
        graph.style.display = "inline-block";
        graph.style.height = "40px";
        graph.style.width = (topTenLanguages[i][1] / totalLanguages) * 100 + "%";
        graphBarContainer.appendChild(graph);

        const popP = document.createElement("p")
        popP.innerText = topTenLanguages[i][1];
        popP.className = "langCountries";
        popP.style.fontSize = "18px";
        popP.style.width = "200px";

        div.appendChild(nameP);
        div.appendChild(graphBarContainer);
        div.appendChild(popP);
        graphWrapper.appendChild(div);
    }
})