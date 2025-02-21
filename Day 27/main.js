// Wrapper
//---------------------------------------------------------------------------
const wrapper = document.createElement("div");
wrapper.id = "wrapper";
wrapper.style.margin = "66px 175px";
//---------------------------------------------------------------------------

// Header
//---------------------------------------------------------------------------
const header = document.createElement("h1");
header.innerText = "Juani Núñez";
header.style.fontSize = "70px";
header.style.letterSpacing = "20px";
//---------------------------------------------------------------------------

// Sliding text
//---------------------------------------------------------------------------
const slidingTextContainer = document.createElement("div");
slidingTextContainer.id = "sliding-text-container";
slidingTextContainer.style.display = "flex";
slidingTextContainer.style.backgroundColor = "#eddfde";
slidingTextContainer.style.padding = "18px";
slidingTextContainer.style.alignItems = "center";

const emote = document.createElement("h2");
emote.innerText = vb6Enjoyer.author.titles[0][0];
emote.style.fontSize = "25px"

const slidingText = document.createElement("p");
slidingText.innerText = vb6Enjoyer.author.titles[0][1];
slidingText.style.color = "rgb(255, 0, 0)";
slidingText.style.fontSize = "30px";
slidingText.style.position = "absolute";
slidingText.style.marginLeft = "5px";
slidingText.style.verticalAlign = "middle";

slidingTextContainer.appendChild(emote);
slidingTextContainer.appendChild(slidingText);
//---------------------------------------------------------------------------

// Biography
//---------------------------------------------------------------------------
const bio = document.createElement("p");
bio.id = "biography";
bio.innerHTML = vb6Enjoyer.author.bio + " I made a rhythm game called <b>" + vb6Enjoyer.projects[0].name + "</b>, I played in a fastcore band named <b>" + vb6Enjoyer.projects[1].name + "</b>, \
where I released 2 CDs, and I also have a solo dark ambient project titled <b>" + vb6Enjoyer.projects[2].name + "</b>, for which I produced an EP, an album and a single!";
bio.style.fontSize = "20px";
bio.style.lineHeight = "37px";

// Projects
//---------------------------------------------------------------------------
const projectsContainer = document.createElement("div");
projectsContainer.id = "projects-container";
projectsContainer.style.display = "flex";
projectsContainer.style.flexDirection = "row";
projectsContainer.style.margin = "0px 50px";
projectsContainer.style.textAlign = "center";
projectsContainer.style.alignContent = "center";
projectsContainer.style.justifyContent = "space-between";

const bgSizeMap = new Map(); // Create a map for the background size of each span for zooming in and out independently of each other

for (const project of vb6Enjoyer.projects) {
    const span = document.createElement("span");
    span.className = "project-box";

    // Set up the span to hold the background image
    span.style.position = "relative";
    span.style.color = "white";
    span.style.padding = "130px 150px";
    span.style.maxHeight = "100px";
    span.style.maxWidth = "10%";
    span.style.width = "100%";
    span.style.backgroundImage = `url(${project.img})`;
    span.style.backgroundSize = "100%";
    span.style.backgroundPosition = "50% 50%";
    span.style.minHeight = "100px";

    // Create the overlay div that will change opacity
    const overlay = document.createElement("div");
    overlay.style.position = "absolute";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(44, 51, 56, 0.75)";
    overlay.style.transition = "opacity 0.3s ease-in-out";

    // Create the text element (child of span)
    const textElement = document.createElement("span");
    textElement.innerText = project.name;
    textElement.style.fontSize = "32px";
    textElement.style.position = "absolute"; // Make the text element absolute
    textElement.style.top = "50%"; // Position the top at 50% of the span's height
    textElement.style.left = "50%"; // Position the left at 50% of the span's width
    textElement.style.transform = "translate(-50%, -50%)"; // Offset the element by half of its width/height to perfectly center it
    textElement.style.textAlign = "center"; // Center the text horizontally within the element

    span.appendChild(overlay);
    span.appendChild(textElement);

    bgSizeMap.set(span, 100);
    let interval;
    span.addEventListener("mouseover", () => {
        overlay.style.opacity = "0.33"; // Reduce the opacity of the span

        if (interval) {
            clearInterval(interval);
        }

        // Progressively increase the size of the image
        interval = imageZoom(span, true);
    });

    span.addEventListener("mouseleave", () => {
        overlay.style.opacity = "1"; // Increase the opacity of the span back to normal

        if (interval) {
            clearInterval(interval);
        }

        // Progressively decrease the size of the image back to normal
        interval = imageZoom(span, false);
    });

    projectsContainer.appendChild(span);
}
//---------------------------------------------------------------------------

// Technologies
//---------------------------------------------------------------------------
const technologies = document.createElement("p");
technologies.innerText = "I can do "
technologies.style.marginTop = "55px";
technologies.style.color = "#343434";
technologies.style.fontSize = "24px";
technologies.style.display = "inline-block"

const technology = document.createElement("b");
technology.innerText = vb6Enjoyer.keywords[0].name;
technology.style.color = vb6Enjoyer.keywords[0].color;
technology.style.fontSize = "48px";
technology.style.display = "inline-block"

technologies.appendChild(technology);
//---------------------------------------------------------------------------

// Dynamic text settings
//---------------------------------------------------------------------------
// Progressively decrease transparency and eventually change the text shown
let transparency = 1;
let textMargin = 5;
let titleNextIndex = 1;
let keywordNextIndex = 1;
setInterval(() => {
    slidingText.style.color = "rgba(92, 90, 90," + transparency / 100 + ")";
    slidingText.style.marginLeft = textMargin / 2 + "px";

    technology.style.color = vb6Enjoyer.keywords[keywordNextIndex > 0 ? keywordNextIndex - 1 : keywordNextIndex].color;
    technology.style.opacity = transparency / 100;

    textMargin++;
    transparency++;

    if (transparency == 100) {
        setTimeout(() => {
            transparency = 1;
            textMargin = 5;
            emote.innerText = vb6Enjoyer.author.titles[titleNextIndex][0];
            slidingText.innerText = vb6Enjoyer.author.titles[titleNextIndex][1];
            technology.innerText = vb6Enjoyer.keywords[keywordNextIndex].name;

            titleNextIndex++;
            keywordNextIndex++;

            if (titleNextIndex == vb6Enjoyer.author.titles.length) {
                titleNextIndex = 0;
            }

            if (keywordNextIndex == vb6Enjoyer.keywords.length) {
                keywordNextIndex = 0;
            }
        }, 1100);
    }
}, 12);
//---------------------------------------------------------------------------

// Zoom-in/out image function
//---------------------------------------------------------------------------
function imageZoom(span, zoomIn) {
    let interval = setInterval(() => {
        let bgSize = bgSizeMap.get(span);

        if (zoomIn && bgSize < 110) {
            bgSizeMap.set(span, bgSize + 1);
            span.style.backgroundSize = bgSize + 1 + "%";
        } else if (!zoomIn && bgSize > 100) {
            bgSizeMap.set(span, bgSize - 1);
            span.style.backgroundSize = bgSize - 1 + "%";
        } else {
            clearInterval(interval);
        }
    }, 50);

    return interval;
}
//---------------------------------------------------------------------------

// Appending elements to the document
//---------------------------------------------------------------------------
wrapper.appendChild(header);
wrapper.appendChild(slidingTextContainer);
wrapper.appendChild(bio);
wrapper.appendChild(projectsContainer);
wrapper.appendChild(technologies);

document.body.appendChild(wrapper);