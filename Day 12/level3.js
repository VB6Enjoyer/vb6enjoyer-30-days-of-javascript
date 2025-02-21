// 1
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(text) {
    return text.replace(/[\[%@;$&#]/g, "");
}
let cleanSentence = cleanText(sentence);
console.log(cleanSentence);

// 2
function mostFrequentWords(string, wordNum) {
    let wordArr = string.split(/[ ,.!?;:]+/);
    let wordSet = new Set(wordArr);
    let words = [];

    for (const currentWord of wordSet) {
        const matches = wordArr.filter(word => word.toLowerCase() == currentWord.toLowerCase());

        if (currentWord != "and" && currentWord != "a") {
            if (words.length >= wordNum) {
                for (let i = 0; i < words.length - 1; i++) {
                    if (words[i].word != "and" && words[i].word != "a") {
                        if (matches.length > words[i].count) {
                            words[i].word = currentWord.toLowerCase();
                            words[i].count = matches.length;
                        }
                    }
                }
            } else {
                words.push({ word: currentWord, count: matches.length });
            }
        }
    }

    return words.sort((a, b) => b.count - a.count);
}
console.log(mostFrequentWords(cleanSentence, 3));