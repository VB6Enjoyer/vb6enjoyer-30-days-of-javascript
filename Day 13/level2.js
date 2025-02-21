console.group("Level 2");
console.assert(10 > 2 * 10, "10 is not greater than its double."); // 1
console.warn("%cDo%c %cNOT%c %cread this!%c", 'color:yellow', '', 'color:red', '', 'color:yellow'); // 2
console.error("Error: You just read the warning you were not supposed to read. %cYou will die in 10 seconds.%c Good luck!", 'color:#4b2f36'); // 3