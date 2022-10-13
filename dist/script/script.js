
function getCards(data) {
    var cards = data;
    var cardsContainer = document.getElementById("cardsContainer");
    cards.forEach((data) => {
        console.log(data);
        if(data.officeNumber !== undefined) {
            const divContainer = document.createElement("div");
            divContainer.setAttribute("class", "cards");
            divContainer.setAttribute("style", "width: 18rem;");
            const divContainer2 = document.createElement("div");
            divContainer2.setAttribute("class", "card-cover");
            const h3 = document.createElement("h3");
            h3.setAttribute("class", "card-title");
            h3.innerHTML = `${data.name}`;
            const h4 = document.createElement("h4");
            h4.setAttribute("class", "card-title");
            h4.innerHTML = `&#9749; Manager`;
            const divContainer3 = document.createElement("div");
            divContainer3.setAttribute("class", "card-body");
            const divContainer4 = document.createElement("div");
            divContainer4.setAttribute("class", "card-content");
            const p1 = document.createElement("p");
            p1.setAttribute("class", "card-text");
            p1.setAttribute("id", "borderBot");
            p1.innerHTML = `ID: ${data.id}`;
            const p2 = document.createElement("p");
            p2.setAttribute("class", "card-text");
            p2.setAttribute("id", "borderBot");
            p2.innerHTML = `Email: `;
            const mail = document.createElement("a");
            mail.setAttribute("href", `mailto:${data.email}`);
            mail.innerHTML = `${data.email}`;
            const p3 = document.createElement("p");
            p3.setAttribute("class", "card-text");
            p3.innerHTML = `Office number: ${data.officeNumber}`;

            divContainer.appendChild(divContainer2);
            divContainer2.appendChild(h3);
            divContainer2.appendChild(h4);
            divContainer.appendChild(divContainer3);
            divContainer3.appendChild(divContainer4);
            divContainer4.appendChild(p1);
            divContainer4.appendChild(p2);
            p2.appendChild(mail);
            divContainer4.appendChild(p3);

            cardsContainer.appendChild(divContainer);
        } else if(data.github !== undefined) {
            const divContainer = document.createElement("div");
            divContainer.setAttribute("class", "cards");
            divContainer.setAttribute("style", "width: 18rem;");
            const divContainer2 = document.createElement("div");
            divContainer2.setAttribute("class", "card-cover");
            const h3 = document.createElement("h3");
            h3.setAttribute("class", "card-title");
            h3.innerHTML = `${data.name}`;
            const h4 = document.createElement("h4");
            h4.setAttribute("class", "card-title");
            h4.innerHTML = `&#128083; Engineer`;
            const divContainer3 = document.createElement("div");
            divContainer3.setAttribute("class", "card-body");
            const divContainer4 = document.createElement("div");
            divContainer4.setAttribute("class", "card-content");
            const p1 = document.createElement("p");
            p1.setAttribute("class", "card-text");
            p1.setAttribute("id", "borderBot");
            p1.innerHTML = `ID: ${data.id}`;
            const p2 = document.createElement("p");
            p2.setAttribute("class", "card-text");
            p2.setAttribute("id", "borderBot");
            p2.innerHTML = `Email: `;
            const mail = document.createElement("a");
            mail.setAttribute("href", `mailto:${data.email}`);
            mail.innerHTML = `${data.email}`;
            const p3 = document.createElement("p");
            p3.setAttribute("class", "card-text");
            p3.innerHTML = `Github: `;
            const git = document.createElement("a");
            git.setAttribute("href", `https://github.com/${data.github}/`);
            git.innerHTML = `${data.github}`;

            divContainer.appendChild(divContainer2);
            divContainer2.appendChild(h3);
            divContainer2.appendChild(h4);
            divContainer.appendChild(divContainer3);
            divContainer3.appendChild(divContainer4);
            divContainer4.appendChild(p1);
            divContainer4.appendChild(p2);
            p2.appendChild(mail);
            divContainer4.appendChild(p3);
            p3.appendChild(git);

            cardsContainer.appendChild(divContainer);
        }else if(data.school !== undefined) {
            const divContainer = document.createElement("div");
            divContainer.setAttribute("class", "cards");
            divContainer.setAttribute("style", "width: 18rem;");
            const divContainer2 = document.createElement("div");
            divContainer2.setAttribute("class", "card-cover");
            const h3 = document.createElement("h3");
            h3.setAttribute("class", "card-title");
            h3.innerHTML = `${data.name}`;
            const h4 = document.createElement("h4");
            h4.setAttribute("class", "card-title");
            h4.innerHTML = `&#127891; Intern`;
            const divContainer3 = document.createElement("div");
            divContainer3.setAttribute("class", "card-body");
            const divContainer4 = document.createElement("div");
            divContainer4.setAttribute("class", "card-content");
            const p1 = document.createElement("p");
            p1.setAttribute("class", "card-text");
            p1.setAttribute("id", "borderBot");
            p1.innerHTML = `ID: ${data.id}`;
            const p2 = document.createElement("p");
            p2.setAttribute("class", "card-text");
            p2.setAttribute("id", "borderBot");
            p2.innerHTML = `Email: `;
            const mail = document.createElement("a");
            mail.setAttribute("href", `mailto:${data.email}`);
            mail.innerHTML = `${data.email}`;
            const p3 = document.createElement("p");
            p3.setAttribute("class", "card-text");
            p3.innerHTML = `School: ${data.school}`;

            divContainer.appendChild(divContainer2);
            divContainer2.appendChild(h3);
            divContainer2.appendChild(h4);
            divContainer.appendChild(divContainer3);
            divContainer3.appendChild(divContainer4);
            divContainer4.appendChild(p1);
            divContainer4.appendChild(p2);
            p2.appendChild(mail);
            divContainer4.appendChild(p3);

            cardsContainer.appendChild(divContainer);
        }

    })
}

function init() {
fetch("./data.json")
.then(res => res.json())
.then((data) => {
    getCards(data)}
)
}

init();