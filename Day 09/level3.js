// 1
console.log([...countriesInfo.sort((a, b) => a.name.localeCompare(b.name))]);
console.log([...countriesInfo.sort((a, b) => a.capital.localeCompare(b.capital))]);
console.log([...countriesInfo.sort((a, b) => {
    if (a.population > b.population) {
        return 1;
    } else {
        return -1;
    }
})]);

// 2
function countLanguages(arr, num) {
    return Object.entries(
        arr.reduce((acc, country) => {
            let language = country.mainLanguage;
            acc[language] = (acc[language] || 0) + 1; // Count occurrences
            return acc;
        }, {})
    ).sort((a, b) => b[1] - a[1]).slice(0, num).map(([language, count]) => ({ language, count })); // Convert to array of objects
}
console.log(countLanguages(countriesInfo, 3));
console.log(countLanguages(countriesInfo, 10));

// 3
function countPopulations(arr, num) {
    return Object.entries(
        arr.reduce((acc, country) => {
            let name = country.name;
            acc[name] = country.population;
            return acc;
        }, {})
    ).sort((a, b) => b[1] - a[1]).slice(0, num).map(([name, population]) => ({ country: name, population })); // Convert to array of objects
}
console.log(countPopulations(countriesInfo, 3));
console.log(countPopulations(countriesInfo, 10));

// 4
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
class Statistics {
    constructor(arr) {
        this.items = arr;
    }
    count() {
        return this.items.length;
    }

    sum() {
        return this.items.reduce((acc, curr) => acc + curr, 0);
    }

    min() {
        return this.items.sort()[0];
    }

    max() {
        return this.items.sort().reverse()[0];
    }

    range() {
        return this.max() - this.min();
    }

    mean() {
        return this.sum() / this.items.length;
    }

    median() {
        const sortedItems = this.items.sort();

        if (sortedItems.length % 2 == 0) {
            return (sortedItems[Math.floor(sortedItems.length / 2) - 1] + sortedItems[Math.floor(sortedItems.length / 2)]) / 2;
        } else {
            return sortedItems[Math.floor(sortedItems.length / 2)];
        }
    }

    mode() {
        const frequencyMap = this.freqDist();

        let count = 0;
        let mode;

        for (const num in frequencyMap) {
            if (frequencyMap[num] > count) {
                count = frequencyMap[num];
                mode = Number(num);
            }
        }

        return { "mode": mode, "count": count };
    }

    var() {
        const mean = this.mean();
        const squaredDiffs = this.items.map(num => (num - mean) ** 2);
        return squaredDiffs.reduce((sum, num) => sum + num, 0) / (this.items.length);
    }

    stdDev() {
        const mean = this.mean();
        const squaredDiffs = this.items.map(num => (num - mean) ** 2);
        return Math.sqrt(squaredDiffs.reduce((sum, num) => sum + num, 0) / (this.items.length));
    }

    freqDist() {
        return this.items.sort().reduce((acc, num) => {
            acc[num] = (acc[num] || 0) + 1;
            return acc;
        }, {});
    }
}
let statistics = new Statistics(ages);
console.log("Count:", statistics.count());
console.log("Sum:", statistics.sum());
console.log("Min:", statistics.min());
console.log("Max:", statistics.max());
console.log("Range:", statistics.range());
console.log("Mean:", statistics.mean());
console.log("Median:", statistics.median());
console.log("Mode:", statistics.mode());
console.log("Variance:", statistics.var());
console.log("Standard deviation:", statistics.stdDev());
console.log("Frequency distribution:", statistics.freqDist());