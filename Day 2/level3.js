let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

console.log("Instances of 'love':", love.match(/\blove\b/gi).length); // 1
console.log("Instances of 'because':", sentence.match(/\bbecause\b/gi).length); // 2

// 3
const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentence2.replace(/[%$@#&;]+/gi, ""));

// 4
const income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
console.log(Number(income.substring(8, 12)) * 12 + Number(income.substring(42, 47)) + Number(income.substring(67, 73)) * 12);