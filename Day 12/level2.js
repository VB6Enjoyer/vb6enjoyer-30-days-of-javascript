// 1
function tenMostFrequentWords(string) {
    let wordArr = string.split(/[ ,.!?;:]+/);
    let wordSet = new Set(wordArr);
    let words = [];

    for (const currentWord of wordSet) {
        const matches = wordArr.filter(word => word.toLowerCase() == currentWord.toLowerCase());

        if (words.length >= 10) {
            for (let i = 0; i < words.length - 1; i++) {
                if (matches.length > words[i].count) {
                    words[i].word = currentWord.toLowerCase();
                    words[i].count = matches.length;
                }
            }
        } else {
            words.push({ word: currentWord.toLowerCase(), count: matches.length });
        }
    }

    return words.sort((a, b) => b.count - a.count);
}
console.log(tenMostFrequentWords("I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love."));
