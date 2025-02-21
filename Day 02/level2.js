console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."); // 1
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."); // 2

// 3
console.log("Is '10' exactly equal to 10?", typeof ('10') === typeof (10));
console.log("Is Number('10') exactly equal to 10?", typeof (Number('10')) === typeof (10));

// 4
console.log("Is parseFloat('9.8') equal to 10?", parseFloat('9.8') == 10);
console.log("Is Math.ceil(parseFloat('9.8')) equal to 10?", Math.ceil(parseFloat('9.8')) == 10);

console.log("Is 'on' in both 'python' and 'jargon'?", "python".includes("on") == "jargon".includes("on")); // 5
console.log("Is jargon in 'I hope this course is not full of jargon.'?", "I hope this course is not full of jargon.".includes('jargon')); // 6
console.log(Math.round(Math.random() * 100)); // 7
console.log(Math.round(Math.random() * (100 - 50 + 1) + 50)); // 8
console.log(Math.round(Math.random() * 255)); // 9
console.log("JavaScript".charAt(Math.round(Math.random() * ("JavaScript".length - 1)))); // 10

// 11
console.log("\
1 1 1 1 1\n\
2 1 2 4 8\n\
3 1 3 9 27\n\
4 1 4 16 64\n\
5 1 5 25 125");

console.log(sentence.substring(sentence.indexOf('because'), sentence.lastIndexOf('because') + 'because'.length)); // 12