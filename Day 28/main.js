// Header
//---------------------------------------------------------------------------
const headerContainer = document.createElement("div");
headerContainer.id = "header-container";
headerContainer.style.padding = "20px 0px 10px 0px";

const header = document.createElement("h1");
header.innerText = "30 Days of JavaScript Challenge | Leaderboard";
header.style.fontWeight = "500";

headerContainer.appendChild(header);

document.body.appendChild(headerContainer);
//---------------------------------------------------------------------------

// Inputs
//---------------------------------------------------------------------------
const inputFocusStyle = document.createElement("style");
inputFocusStyle.textContent = `
    .player-info-input:focus {
        outline: none;
        border:1px solid #ea8777 !important;
        box-shadow: 0 0 5px #ea8777;
    }
`;

document.head.appendChild(inputFocusStyle);

const inputContainer = document.createElement("div");
inputContainer.id = "input-container";
inputContainer.style.display = "flex";
inputContainer.style.flexDirection = "row";
inputContainer.style.alignItems = "center";
inputContainer.style.justifyContent = "center";

const nameInput = document.createElement("input");
nameInput.id = "name-input";
nameInput.placeholder = "First name";

const surnameInput = document.createElement("input");
surnameInput.id = "surname-input";
surnameInput.placeholder = "Last name";

const countryInput = document.createElement("input");
countryInput.id = "country-input";
countryInput.placeholder = "Country";

const scoreInput = document.createElement("input");
scoreInput.id = "score-input";
scoreInput.placeholder = "Player score";
scoreInput.type = "number";
scoreInput.min = "0";

scoreInput.addEventListener("beforeinput", e => {
    if (e.data && !/^\d+$/.test(e.data)) {
        e.preventDefault();
    }
});
scoreInput.addEventListener("input", function () {
    if (this.value > 100) {
        this.value = 100;
    }
});

const inputArr = [nameInput, surnameInput, countryInput, scoreInput];

inputArr.forEach(input => {
    input.className = "player-info-input";
    input.style.fontSize = "24px";
    input.style.color = "#444444";
    input.style.border = "1px solid #e5c9c5";
    input.style.padding = "10px";
    input.style.maxWidth = "222px";
    input.style.marginRight = "15px";

    inputContainer.appendChild(input);
});

const addButton = document.createElement("button");
addButton.innerText = "Add player";
addButton.style.border = "none";
addButton.style.color = "#ffffff";
addButton.style.fontSize = "24px";
addButton.style.backgroundColor = "#e5c9c5";
addButton.style.padding = "11px 33px";
addButton.style.cursor = "pointer";

addButton.addEventListener("mousedown", () => {
    addButton.style.backgroundColor = "#d1b0ac";

    addPlayer(nameInput.value, surnameInput.value, countryInput.value, scoreInput.value);
});
addButton.addEventListener("mouseup", () => {
    addButton.style.backgroundColor = "#e5c9c5";
});

inputContainer.appendChild(addButton);

document.body.appendChild(inputContainer);
//---------------------------------------------------------------------------

// Error message
//---------------------------------------------------------------------------
const errMsgContainer = document.createElement("div");
errMsgContainer.id = "error-message-container";
errMsgContainer.style.textAlign = "center";
errMsgContainer.style.marginTop = "25px";

const errorMessage = document.createElement("b");
errorMessage.id = "error-message";
errorMessage.innerText = "All fields are required.";
errorMessage.style.color = "#ea3323";
errorMessage.style.fontSize = "22px";
errorMessage.style.visibility = "hidden";

errMsgContainer.appendChild(errorMessage);

document.body.appendChild(errMsgContainer);
//---------------------------------------------------------------------------

// Leaderboard functions
//---------------------------------------------------------------------------
const leaderboardContainer = document.createElement("div");
leaderboardContainer.id = "leaderboard-container";
leaderboardContainer.style.display = "flex";
leaderboardContainer.style.flexDirection = "column";
leaderboardContainer.style.alignItems = "center";
leaderboardContainer.style.justifyContent = "center";

let leaderboardEntries = [];

function addPlayer(name, surname, country, score) {
    if (name.trim().length == 0 || surname.trim().length == 0 || country.trim().length == 0 || score.trim().length == 0) {
        errorMessage.style.visibility = "visible";
        errMsgContainer.style.marginBottom = "10px";
        return;
    } else {
        errorMessage.style.visibility = "hidden";
        errMsgContainer.style.marginBottom = "0px";
    }

    const now = new Date();
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const leaderboardSpan = document.createElement("span");
    leaderboardSpan.style.display = "flex";
    leaderboardSpan.style.flexDirection = "row";
    leaderboardSpan.style.justifyContent = "space-between";
    leaderboardSpan.style.alignItems = "center"
    leaderboardSpan.style.backgroundColor = "#e5c9c5";
    leaderboardSpan.style.width = "1127px";
    leaderboardSpan.style.margin = "10px 0px";

    const nameDate = document.createElement("span");
    nameDate.className = "name-and-date";
    nameDate.style.maxWidth = "250px";
    nameDate.style.minWidth = "250px"
    nameDate.style.overflow = "hidden";
    nameDate.style.textOverflow = "ellipsis";
    nameDate.style.textAlign = "left";

    const nameP = document.createElement("p");
    nameP.className = "name-paragraph";
    nameP.innerText = name.toUpperCase() + " " + surname.toUpperCase();
    nameP.style.color = "#343434";
    nameP.style.fontSize = "24px";
    nameP.style.marginLeft = "15px";
    nameP.style.paddingBottom = "0";
    nameP.style.marginBottom = "0";

    const dateP = document.createElement("p");
    dateP.className = "date-paragraph";
    dateP.innerText = `${months[now.getMonth()]} ${now.getDay()}, ${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    dateP.style.color = "#898592";
    dateP.style.marginTop = "10";
    dateP.style.marginLeft = "15px";

    nameDate.appendChild(nameP);
    nameDate.appendChild(dateP);

    const countryP = document.createElement("p");
    countryP.className = "country-paragraph";
    countryP.innerText = country.toUpperCase();
    countryP.style.color = "#343434";
    countryP.style.fontSize = "24px";
    countryP.style.verticalAlign = "middle";
    countryP.style.alignItems = "center";

    const scoreP = document.createElement("p");
    scoreP.className = "score-paragraph";
    scoreP.innerText = score;
    scoreP.style.color = "#343434";
    scoreP.style.fontSize = "24px";

    const buttonsSpan = document.createElement("span");
    buttonsSpan.style.display = "flex";
    buttonsSpan.style.flexDirection = "row";
    buttonsSpan.style.justifyContent = "space-between";
    buttonsSpan.style.alignItems = "center";
    buttonsSpan.style.marginRight = "50px";

    const deleteButton = document.createElement("i");
    deleteButton.className = "fa fa-trash leaderboard-button";
    deleteButton.ariaHidden = "true";
    deleteButton.style.color = "#ea3323";

    const plusButton = document.createElement("p");
    plusButton.className = "leaderboard-button";
    plusButton.innerText = "+5";
    plusButton.style.color = "#343434";

    const minusButton = document.createElement("p");
    minusButton.className = "leaderboard-button";
    minusButton.innerText = "-5";
    minusButton.style.color = "#343434";

    const buttons = [deleteButton, plusButton, minusButton];
    buttons.forEach(button => {
        button.style.backgroundColor = "#ffffff";
        button.style.borderRadius = "100%";
        button.style.width = "66px";
        button.style.height = "66px";
        button.style.alignContent = "center";
        button.style.marginRight = "10px";
        button.style.cursor = "pointer";
        button.style.userSelect = "none";

        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#def4b3";
        });

        button.addEventListener("mouseleave", () => {
            button.style.backgroundColor = "#ffffff";
        });
    });

    deleteButton.addEventListener("mousedown", () => {
        leaderboardContainer.removeChild(leaderboardSpan);
        leaderboardEntries = leaderboardEntries.filter(entry => entry[0] !== leaderboardSpan);
    });

    plusButton.addEventListener("mousedown", () => {
        let newScore = Number(scoreP.innerText) + 5

        if (newScore > 100) {
            newScore = 100;
        }

        scoreP.innerText = String(newScore);

        const entry = leaderboardEntries.find(entry => entry[0] === leaderboardSpan);
        if (entry) entry[1] = newScore;

        sortPlayers();
    });

    minusButton.addEventListener("mousedown", () => {
        let newScore = Number(scoreP.innerText) - 5

        if (newScore < 0) {
            newScore = 0;
        }

        scoreP.innerText = String(newScore);

        const entry = leaderboardEntries.find(entry => entry[0] === leaderboardSpan);
        if (entry) entry[1] = newScore;

        sortPlayers();
    });

    buttonsSpan.appendChild(deleteButton);
    buttonsSpan.appendChild(plusButton);
    buttonsSpan.appendChild(minusButton);

    leaderboardSpan.appendChild(nameDate);
    leaderboardSpan.appendChild(countryP);
    leaderboardSpan.appendChild(scoreP);
    leaderboardSpan.appendChild(buttonsSpan);

    leaderboardEntries.push([leaderboardSpan, score]);

    sortPlayers();
}

function sortPlayers() {
    leaderboardEntries.sort((a, b) => b[1] - a[1]);
    leaderboardEntries.forEach(span => { leaderboardContainer.appendChild(span[0]) });
}

document.body.appendChild(leaderboardContainer);
//---------------------------------------------------------------------------

nameInput.value = "John";
surnameInput.value = "Smith";
countryInput.value = "United Kingdom";
scoreInput.value = "50";