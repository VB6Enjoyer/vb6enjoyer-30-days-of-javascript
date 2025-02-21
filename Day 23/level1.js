// 1
document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById("headerContainer");

    const h1 = document.createElement("h1");
    h1.innerText = "Number Generator";
    h1.style.color = "#77c791";

    headerContainer.appendChild(h1);

    const h2 = document.createElement("h2");
    h2.innerText = "30 Days of JavaScript | Day 3, Level 1";

    headerContainer.appendChild(h2);

    const h4 = document.createElement("h4");
    h4.innerText = "Author: VB6Enjoyer (based on Asabeneh Yetayeh)"

    headerContainer.appendChild(h4);

    const inputContainer = document.createElement("div");
    inputContainer.style.alignItems = "center";
    inputContainer.style.textAlign = "center";
    inputContainer.style.alignContent = "center"
    inputContainer.style.width = "100%";
    inputContainer.style.marginBottom = "50px";

    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.placeholder = "Input a number";
    textInput.style.border = "1px solid #5bbc7a";
    textInput.style.fontSize = "28px";
    textInput.style.padding = "5px";
    textInput.style.marginRight = "25px";
    textInput.style.verticalAlign = "middle";
    textInput.style.width = "33%";

    const button = document.createElement("button");
    button.textContent = "Generate numbers";
    button.type = "submit";
    button.style.fontSize = "20px";
    button.style.backgroundColor = "#5bbc7a";
    button.style.display = "inline-block";
    button.style.padding = "10px";
    button.style.alignItems = "center";
    button.style.verticalAlign = "middle";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.addEventListener('click', () => addNumbers(textInput.value));

    inputContainer.appendChild(textInput);
    inputContainer.appendChild(button);

    headerContainer.appendChild(inputContainer);

    function addNumbers(amount) {
        const existingParagraph = inputContainer.querySelector('p')
        if (existingParagraph) inputContainer.removeChild(existingParagraph);

        console.log(Number(amount) == "NaN");

        if (amount === "" || isNaN(Number(amount))) {
            const p = document.createElement("p");
            p.style.color = "red";
            p.style.width = "44%";
            p.style.textAlign = "left";
            p.style.margin = "10px auto";

            amount === "" ? p.innerText = "You must input a number." : p.innerText = "You must input a valid number";

            inputContainer.insertBefore(p, inputContainer.firstChild);
            return;
        }

        const numContainer = document.getElementById("numContainer");
        numContainer.replaceChildren();

        const isPrime = (n) => {
            if (n <= 1) return false;
            if (n <= 3) return true;
            if (n % 2 === 0 || n % 3 === 0) return false;

            for (let i = 5; i * i <= n; i += 6) {
                if (n % i === 0 || n % (i + 2) === 0) return false;
            }

            return true;
        }

        for (let i = 0; i < Number(amount); i++) {
            const number = document.createElement("span")
            number.innerText = i;
            number.className = "number";

            number.style.padding = "30px 0px";
            number.style.margin = "10px 20px";
            number.style.display = "inline-block";
            number.style.flex = "1 0 10%";
            number.style.fontSize = "50px";

            if (isPrime(i)) {
                number.style.backgroundColor = "#fd5e53";
            }
            else if (i % 2 == 0) {
                number.style.backgroundColor = "#21bf73";
            } else if (i % 2 != 0) {
                number.style.backgroundColor = "#fddb3a";
            }

            numContainer.appendChild(number)
        }
    }
});
