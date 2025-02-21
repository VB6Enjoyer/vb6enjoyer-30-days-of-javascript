// 2
function japan() {
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

    const prefectures = [
        "Hokkaido",
        "Aomori",
        "Iwate",
        "Miyagi",
        "Akita",
        "Yamagata",
        "Fukushima",
        "Ibaraki",
        "Tochigi",
        "Gunma",
        "Saitama",
        "Chiba",
        "Tokyo",
        "Kanagawa",
        "Niigata",
        "Toyama",
        "Ishikawa",
        "Fukui",
        "Yamanashi",
        "Nagano",
        "Gifu",
        "Shizuoka",
        "Aichi",
        "Mie",
        "Shiga",
        "Kyoto",
        "Osaka",
        "Hyogo",
        "Nara",
        "Wakayama",
        "Tottori",
        "Shimane",
        "Okayama",
        "Hiroshima",
        "Yamaguchi",
        "Tokushima",
        "Kagawa",
        "Ehime",
        "Kochi",
        "Fukuoka",
        "Saga",
        "Nagasaki",
        "Kumamoto",
        "Oita",
        "Miyazaki",
        "Kagoshima",
        "Okinawa"
    ];

    const foods = [
        "Sushi",
        "Ramen",
        "Tempura",
        "Sashimi",
        "Udon",
        "Soba",
        "Yakitori",
        "Okonomiyaki",
        "Takoyaki",
        "Miso Soup"
    ];

    function randomCity() {
        return cities[Math.floor(Math.random() * 20)];
    }

    function randomPrefecture() {
        return prefectures[Math.floor(Math.random() * 46)];
    }

    function randomFood() {
        return foods[Math.floor(Math.random() * 10)];
    }

    return {
        city: randomCity(),
        prefecture: randomPrefecture(),
        food: randomFood()
    }
}

const theJapanVariableTM = japan();

console.groupCollapsed("Level 2");
console.log(theJapanVariableTM.city);
console.log(theJapanVariableTM.prefecture);
console.log(theJapanVariableTM.food);
console.groupEnd("Level 2");