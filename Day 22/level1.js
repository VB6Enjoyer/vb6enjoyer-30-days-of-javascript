// 1
document.addEventListener("DOMContentLoaded", () => {
    const numContainer = document.getElementById("numContainer");

    const isPrime = (n) => {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;

        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
        }

        return true;
    }

    for (let i = 0; i < 101; i++) {
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
});
