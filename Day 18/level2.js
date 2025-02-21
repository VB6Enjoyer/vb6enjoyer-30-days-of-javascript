const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// 1
async function fetchCatsAPI() {
    const response = await fetch(catsAPI);
    const cats = await response.json();

    return cats;
}

async function getCatNames() {
    let catNames = [];

    fetchCatsAPI().then(cats => {
        for (const kitty of cats) {
            catNames.push(kitty.name);
        }
    });

    console.groupCollapsed("Level 2");
    console.log(catNames);
    console.groupEnd("Level 2");
}

getCatNames();