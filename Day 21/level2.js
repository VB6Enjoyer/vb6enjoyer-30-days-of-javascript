document.addEventListener("DOMContentLoaded", () => {
    const paragraphs = document.querySelectorAll("p");

    // 1, 2 & 3 | Technically not what 2 asked, but the intended result is the same.
    for (const p in paragraphs) {
        if (p < paragraphs.length) {
            if (p % 2 == 0) {
                paragraphs[p].style.color = "Cornsilk";
            } else {
                paragraphs[p].style.color = "BlanchedAlmond";
                paragraphs[p].style.backgroundColor = "DarkKhaki";
                paragraphs[p].style.border = "1px solid DarkOrange";
            }
        }

        paragraphs[p].textContent = "Paragraph " + p;
        paragraphs[p].id = "paragraph-" + p;
        paragraphs[p].className = "paragraph-test";
    }

    console.groupCollapsed("Level 2");
    console.log(paragraphs);
    console.groupEnd("Level 2");
});