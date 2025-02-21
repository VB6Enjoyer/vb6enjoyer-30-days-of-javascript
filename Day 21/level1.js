
document.addEventListener("DOMContentLoaded", () => {
    console.groupCollapsed("Level 1");

    // 1
    const paragraph = document.querySelector("p");
    console.log(paragraph);
    delete paragraph;

    // 2
    const [firstParagraph, secondParagraph, thirdParagraph, fourthParagraph] = [
        document.getElementById("first-paragraph"),
        document.getElementById("second-paragraph"),
        document.getElementById("third-paragraph"),
        document.getElementById("fourth-paragraph"),
    ];

    console.groupCollapsed("%cExercise 2%c", "color:violet");
    console.log(firstParagraph);
    console.log(secondParagraph);
    console.log(thirdParagraph);
    console.log(fourthParagraph);
    console.groupEnd("Exercise 2");

    // 3
    const paragraphs = document.querySelectorAll("p");
    console.log(paragraphs);

    // 4
    console.groupCollapsed("%cExercise 4%c", "color:cornflowerBlue");
    for (const p of paragraphs) {
        console.log(p.textContent);
    }
    console.groupEnd("Exercise 4");

    paragraphs[3].textContent = "I'm sorry, I got a bit over my head. Please, press F12 and open your console. Thanks!"; // 5

    // 6
    paragraphs[0].className = "console-paragraph";
    paragraphs[1].id = "2nd-paragraph";
    paragraphs[2].setAttribute("class", "console-paragraph");
    paragraphs[3].setAttribute("id", "4th-paragraph");
    console.log(paragraphs);

    console.groupEnd("Level 1");
});


