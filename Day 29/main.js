const fonts = [
    "'Work Sans', sans-serif",
    "'Roboto', sans-serif",
    "'Open Sans', sans-serif",
    "'Lato', sans-serif",
    "'Montserrat', sans-serif",
    "'Courier New', Courier, monospace",
    "'Franklin Gothic Medium'",
    "'Arial Narrow'",
    "'Arial, sans-serif'",
    "'Gill Sans'",
    "'Calibri'",
    "'Trebuchet MS', sans-serif",
    "'Lucida Sans Unicode', sans-serif"
];

const animationContainer = document.createElement("div");
animationContainer.id = "animation-container";
animationContainer.style.backgroundColor = randomColor();
animationContainer.style.width = "100%";
animationContainer.style.height = "100%";
animationContainer.style.marginTop = "-20px";
animationContainer.style.transition = "opacity 0.3s ease-in-out";

const animationText = document.createElement("p");
animationText.id = "animation-text";
animationText.style.fontSize = "120px";
animationText.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
animationText.style.margin = "50px";
animationText.style.padding = "75px 0";
animationText.style.wordSpacing = "12px";
animationText.style.letterSpacing = "10px";
animationText.style.lineHeight = "150px";
animationText.style.opacity = "0.01";

const text = "30 DAYS OF JAVASCRIPT CHALLENGE 2025 VB6ENJOYER";

for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.className = "colored-text";
    span.textContent = text[i];
    span.style.color = randomColor();
    span.style.marginTop = "5px";

    animationText.appendChild(span);
}

animationContainer.appendChild(animationText);

function animation() {
    let transparency = 1;
    setInterval(() => {
        animationText.style.opacity = transparency / 100;

        transparency++;

        if (transparency == 100) {
            setTimeout(() => {
                animationContainer.style.backgroundColor = randomColor();

                for (const span of animationText.children) {
                    span.style.color = randomColor();
                }

                animationText.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
                animationText.style.opacity = "0.01";
                transparency = 1;
            }, 2000);
        }
    }, 12);
}

function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

document.body.appendChild(animationContainer);

animation();