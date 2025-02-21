document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById("wrapper");
    wrapper.style.display = "flex";
    wrapper.style.width = "100%";
    wrapper.style.margin = "0";
    wrapper.style.fontFamily = "Courier New";
    wrapper.style.flexDirection = "column";
    wrapper.style.verticalAlign = "middle";
    wrapper.style.alignItems = "center";
    wrapper.style.alignContent = "center";
    wrapper.style.textAlign = "center";
    wrapper.style.justifyContent = "center";
    wrapper.style.height = "100vh";

    const text = document.createElement("span");
    text.innerText = "Press any keyboard key!";
    text.style.fontSize = "33px";
    text.style.border = "1px solid gray"
    text.style.padding = "15px 10%";
    text.style.marginBottom = "50px";
    text.style.display = "inline-block";
    text.style.minWidth = "460px";

    const keyVal = document.createElement("span")
    keyVal.style.fontSize = "60px";
    keyVal.style.color = "#5bbc7a";
    keyVal.style.border = "1px solid gray"
    keyVal.style.textAlign = "center";
    keyVal.style.padding = "70px 70px";
    keyVal.style.minWidth = "140px";
    keyVal.style.minHeight = "68px";
    keyVal.style.display = "inline-block";

    wrapper.appendChild(text);
    wrapper.appendChild(keyVal);

    window.addEventListener("keypress", e => {
        const keyPressed = document.createElement("b");
        keyPressed.innerText = e.key;
        keyPressed.style.color = "#5bbc7a";
        keyPressed.style.fontWeight = "600";

        text.innerText = "You pressed ";
        text.appendChild(keyPressed);

        keyVal.innerText = e.key.charCodeAt(0); // e.keyCode could be used, but it's deprecated.
    })
})