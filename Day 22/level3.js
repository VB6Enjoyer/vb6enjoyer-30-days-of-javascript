// 1
document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementsByClassName("wrapper");
    wrapper[0].style.display = "flex";
    wrapper[0].style.alignItems = "center";
    wrapper[0].style.flexDirection = "column";
    wrapper[0].style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"

    const year = document.getElementById("year");
    const date = document.getElementById("date");
    const listItems = document.querySelectorAll("li");
    let now = new Date();

    const formatTime = (num) => (num < 10 ? '0' : '') + num;

    date.textContent = now.toDateString() + " " + formatTime(now.getHours()) + ":" + formatTime(now.getMinutes()) + ":" + formatTime(now.getSeconds());
    year.innerText = now.getFullYear();
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

    const challenges = asabenehChallenges2020.challenges;

    const challengesList = document.createElement("ul");
    challengesList.className = "challengesList";
    challengesList.style.padding = "10px 30px";
    challengesList.style.width = "50%";

    for (const challenge of challenges) {
        const li = document.createElement("li");

        const nameSpan = document.createElement("span");
        nameSpan.style.margin

        if (challenge.githubUrl != "") {
            const repoLink = document.createElement("a");
            repoLink.innerText = challenge.name;
            repoLink.href = challenge.githubUrl;
            nameSpan.appendChild(repoLink);
        } else {
            nameSpan.innerText = challenge.name;
        }

        const details = document.createElement("details");
        const summary = document.createElement("summary");
        details.style.display = "flex";
        details.style.flexDirection = "column";
        summary.innerText = challenge.name.substring(10, challenge.name.length);
        details.appendChild(summary);

        for (const topic of challenge.topics) {
            const p = document.createElement("p");
            p.innerText = topic;
            details.appendChild(p);
        }

        const status = challenge.status;
        const statusSpan = document.createElement("span");
        statusSpan.innerText = status;

        if (status == "Done") {
            li.className = "doneChallenge";
            li.style.backgroundColor = "#21bf73"
        } else if (status == "Ongoing") {
            li.className = "ongoingnChallenge";
            li.style.backgroundColor = "#fddb3a";
        } else if (status == "Coming") {
            li.className = "comingChallenge";
            li.style.backgroundColor = "#fd5e53";
        }

        li.style.padding = "30px";
        li.style.margin = "5px 0px";
        li.style.display = "flex";
        li.style.justifyContent = "space-between";

        li.appendChild(nameSpan);
        li.appendChild(details);
        li.appendChild(statusSpan);

        challengesList.appendChild(li);
    }

    wrapper[0].appendChild(challengesList);

    const authorObj = asabenehChallenges2020.author;

    const authorName = document.createElement("h1");
    authorName.innerText = authorObj.firstName + " " + authorObj.lastName;
    wrapper[0].appendChild(authorName);

    const socialWrapper = document.createElement("div");
    socialWrapper.id = "socialWrapper";
    socialWrapper.style.display = "flex";
    wrapper[0].appendChild(socialWrapper);

    const socials = document.createElement("span");
    const linkedInLink = document.createElement("a");
    const linkedIn = document.createElement("i");
    const twitterLink = document.createElement("a");
    const twitter = document.createElement("i");
    const gitHubLink = document.createElement("a");
    const gitHub = document.createElement("i");

    linkedInLink.href = authorObj.socialLinks[0].url;
    twitterLink.href = authorObj.socialLinks[1].url;
    gitHubLink.href = authorObj.socialLinks[2].url;
    linkedInLink.style.margin = "5px";
    twitterLink.style.margin = "5px";
    gitHubLink.style.margin = "5px";
    linkedInLink.style.textDecoration = "none";
    twitterLink.style.textDecoration = "none";
    gitHubLink.style.textDecoration = "none";

    linkedInLink.appendChild(linkedIn);
    twitterLink.appendChild(twitter);
    gitHubLink.appendChild(gitHub);

    linkedIn.className = authorObj.socialLinks[0].fontawesomeIcon.substring(authorObj.socialLinks[0].fontawesomeIcon.indexOf("\"") + 1, authorObj.socialLinks[0].fontawesomeIcon.lastIndexOf("\""));
    twitter.className = authorObj.socialLinks[1].fontawesomeIcon.substring(authorObj.socialLinks[1].fontawesomeIcon.indexOf("\"") + 1, authorObj.socialLinks[1].fontawesomeIcon.lastIndexOf("\""));
    gitHub.className = authorObj.socialLinks[2].fontawesomeIcon.substring(authorObj.socialLinks[2].fontawesomeIcon.indexOf("\"") + 1, authorObj.socialLinks[2].fontawesomeIcon.lastIndexOf("\""));

    socials.appendChild(linkedInLink);
    socials.appendChild(twitterLink);
    socials.appendChild(gitHubLink);
    socialWrapper.appendChild(socials);

    const authorBio = document.createElement("p");
    authorBio.innerText = authorObj.bio;
    authorBio.style.display = "inline-block";
    authorBio.style.textAlign = "center";
    authorBio.style.margin = "50px 500px";

    wrapper[0].appendChild(authorBio);

    const careerWrapper = document.createElement("div");
    careerWrapper.style.display = "flex";
    careerWrapper.style.flexDirection = "row";
    careerWrapper.style.alignContent = "flex-start";

    const titles = document.createElement("ul");
    titles.innerText = "Titles";
    titles.style.fontSize = "20px";
    titles.style.verticalAlign = "top";
    titles.style.marginRight = "100px";
    titles.style.listStyleType = "none";

    for (const title of authorObj.titles) {
        const li = document.createElement("li");
        li.innerText = title[0] + " " + title[1];
        li.style.fontSize = "16px";
        li.style.margin = "5px";

        titles.appendChild(li);
    }

    careerWrapper.appendChild(titles);

    const skills = document.createElement("ul");
    skills.innerText = "Skills";
    skills.style.fontSize = "20px";
    skills.style.verticalAlign = "top";
    skills.style.listStyle = "none";
    skills.style.marginRight = "100px";

    for (const skill of authorObj.skills) {
        const li = document.createElement("li");
        li.innerText = "✅" + " " + skill;
        li.style.fontSize = "16px";
        li.style.margin = "5px";

        skills.appendChild(li);
    }

    careerWrapper.appendChild(skills);

    const qualifications = document.createElement("ul");
    qualifications.innerText = "Qualifications";
    qualifications.style.fontSize = "20px";
    qualifications.style.verticalAlign = "top";
    qualifications.style.listStyleType = "none";

    for (const qual in authorObj.qualifications) {
        const li = document.createElement("li");
        qual == 0 ? li.innerText = "📖" : li.innerText = "🎓 ";
        li.innerText += authorObj.qualifications[qual];
        li.style.fontSize = "16px";
        li.style.margin = "5px";

        qualifications.append(li);
    }

    careerWrapper.appendChild(qualifications);

    wrapper[0].appendChild(careerWrapper);

    const keywordsWrapper = document.createElement("div");
    keywordsWrapper.className = "keywordsWrapper";
    keywordsWrapper.style.display = "flex";
    keywordsWrapper.style.flexWrap = "wrap";
    keywordsWrapper.style.alignContent = "center";
    keywordsWrapper.style.margin = "10px 500px";

    const keywordsHeader = document.createElement("h2");
    keywordsHeader.innerText = "Keywords";
    keywordsHeader.textAlign = "left";
    keywordsHeader.style.width = "100%";

    keywordsWrapper.appendChild(keywordsHeader);

    for (const keyword of asabenehChallenges2020.keywords) {
        const colors = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];

        const span = document.createElement("span");
        span.innerText = "# " + keyword;

        span.style.fontStyle = "italic";
        span.style.backgroundColor = "rgb(" + colors[1] + "," + colors[2] + "," + colors[0] + ")";
        span.style.border = "0px solid black";
        span.style.borderRadius = "50px";
        span.style.margin = "5px";
        span.style.paddingRight = keyword.length + 20 + "px";

        keywordsWrapper.appendChild(span);
    }

    wrapper[0].appendChild(keywordsWrapper);
});