// 1
document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    const date = document.getElementById("date");
    const listItems = document.querySelectorAll("li");
    let now = new Date();

    const formatTime = (num) => (num < 10 ? '0' : '') + num;

    date.textContent = now.toDateString() + " " + formatTime(now.getHours()) + ":" + formatTime(now.getMinutes()) + ":" + formatTime(now.getSeconds());
    year.style.fontSize = "50px";

    for (const li of listItems) {
        if (li.className == "complete") {
            li.style.backgroundColor = "#21bf73";
        } else if (li.className == "ongoing") {
            li.style.backgroundColor = "#fddb3a";
        } else if (li.className == "coming") {
            li.style.backgroundColor = "#fd5e53";
        }
    }

    setInterval(() => {
        const colors = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];

        now = new Date();
        date.textContent = now.toDateString() + " " + formatTime(now.getHours()) + ":" + formatTime(now.getMinutes()) + ":" + formatTime(now.getSeconds());

        year.style.color = "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
        date.style.backgroundColor = "rgb(" + colors[1] + "," + colors[2] + "," + colors[0] + ")"; // Hehe, neatly reused values.
    }, 1000);
})