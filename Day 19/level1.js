// 1
function japaneseCities() {
    const cities = [
        "Tokyo",
        "Kyoto",
        "Osaka",
        "Hiroshima",
        "Nagoya",
        "Sapporo",
        "Fukuoka",
        "Kobe",
        "Yokohama",
        "Nara",
        "Sendai",
        "Kawasaki",
        "Saitama",
        "Chiba",
        "Shizuoka",
        "Okayama",
        "Kagoshima",
        "Niigata",
        "Matsuyama",
        "Kanazawa"
    ];

    function randomCity() {
        return cities[Math.floor(Math.random() * 21)];
    }

    return randomCity();
}

const japaneseCity = japaneseCities();

console.groupCollapsed("Level 1");
console.log(japaneseCity);
console.groupEnd("Level 1");