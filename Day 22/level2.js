let countriesArr = [];
for (const country of countries) {
    countriesArr.push([country.name, country.flag]);
}

document.addEventListener("DOMContentLoaded", () => {
    const countriesContainer = document.getElementById("countriesContainer");
    const totalNumber = document.getElementById("totalNumber");
    totalNumber.innerText += " " + countriesArr.length;

    for (const country of countriesArr) {
        const countryBox = document.createElement("span");
        countryBox.innerText = country[0];
        countryBox.className = "country";

        countryBox.style.border = "1px solid rgb(141, 141, 141)";
        countryBox.style.borderRadius = "4px";
        countryBox.style.padding = "50px 50px";
        countryBox.style.margin = "10px 20px";
        countryBox.style.width = "150px";
        countryBox.style.height = "150px";
        countryBox.style.display = "flex";
        countryBox.style.textAlign = "center";
        countryBox.style.alignItems = "center";
        countryBox.style.overflow = "hidden";
        countryBox.style.flexWrap = "wrap";
        countryBox.style.justifyContent = "center";
        countryBox.style.flex = "1 0 10%";
        countryBox.style.fontSize = "25px";

        countriesContainer.appendChild(countryBox);
    }
})