// Array of objects with the planets and their respective gravitational acceleration.
const celestialBodies = [
    { name: "Mercury", gravity: 3.7 },
    { name: "Venus", gravity: 8.87 },
    { name: "Earth", gravity: 9.81 },
    { name: "Moon", gravity: 1.62 },
    { name: "Mars", gravity: 3.71 },
    { name: "Jupiter", gravity: 24.79 },
    { name: "Saturn", gravity: 10.44 },
    { name: "Uranus", gravity: 8.69 },
    { name: "Neptune", gravity: 11.15 },
    { name: "Pluto", gravity: 0.62 }
];

const select = document.querySelector("select");

// Add the planets to the dropdown selector.
for (const planet of celestialBodies) {
    const option = document.createElement("option");
    option.innerText = planet.name;

    select.appendChild(option);
}

const calButton = document.querySelector("button");
calButton.addEventListener("click", () => {
    const mass = document.querySelector("input").value; // Get the mass in the input
    const planet = celestialBodies[select.selectedIndex - 1] || ""; // Get the selected planet

    const flexContainer = document.getElementsByClassName("flex-container");
    const description = document.getElementsByClassName("description");
    const imgContainer = document.getElementsByClassName("image");
    const img = document.querySelector("img");

    description[0].style.visibility = "visible"; // Make the description visible
    description[0].style.textAlign = "center";

    // Show a message if the input data isn't valid
    if (mass === "" || isNaN(Number(mass)) || planet.name == "none" || planet == "") {
        planet.name == "none" || planet == ""
            ? description[0].innerText = "A planet is required."
            : mass === ""
                ? description[0].innerText = "Mass is required."
                : description[0].innerText = "Mass must be a number.";

        // Format the error message to show up properly
        description[0].style.margin = "50px 0px";
        description[0].style.padding = "50px 250px"
        description[0].style.width = "auto";
        description[0].style.height = "auto";

        // Format other elements for the description to appear properly
        imgContainer[0].style.visibility = "hidden";
        imgContainer[0].style.width = "0%";
        img.style.width = "0%";
    } else {
        // Format the necessary elements to appear properly
        description[0].style.margin = "0px 50px 0px 0px";
        description[0].style.padding = "25px 100px";
        description[0].style.whiteSpace = "nowrap";
        description[0].style.width = "50%";
        description[0].style.height = "33%";
        description[0].style.textAlign = "center"
        description[0].innerText = "The weight of the object on " + planet.name.toUpperCase();

        flexContainer[0].style.padding = "auto";
        imgContainer[0].style.visibility = "visible";
        imgContainer[0].style.width = "100%";
        imgContainer[0].style.textAlign = "left";

        img.style.width = "auto";
        img.src = "src/" + planet.name.toLowerCase() + ".png"; // Change the image of the planet

        const newtons = document.createElement("span");
        newtons.innerText = (mass * planet.gravity).toFixed(2) + " N"; // Weight formula
        newtons.style.display = "flex";
        newtons.style.justifyContent = "center";
        newtons.style.alignItems = "center";
        newtons.style.overflow = "hidden";
        newtons.style.fontSize = "24px";
        newtons.style.fontWeight = "600";
        newtons.style.backgroundColor = "rgba(107, 107, 107, 0.33)";
        newtons.style.border = "1px solid transparent";
        newtons.style.borderRadius = "100%";
        newtons.style.width = "150px";
        newtons.style.height = "150px";
        newtons.style.margin = "auto";
        newtons.style.marginTop = "20px";

        description[0].appendChild(newtons);
    }
})