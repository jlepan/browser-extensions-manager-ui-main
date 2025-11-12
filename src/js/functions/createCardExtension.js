import { loadCardExtension } from "./loadCardExtension.js";

export async function createCardExtension() {
    const cardsData = await loadCardExtension();

    const template = document.querySelector("#card-extension");
    const containerCards = document.querySelector(".group-cards-extension");

    cardsData.forEach(card => {
        const clone = template.content.cloneNode(true);

        const element = clone.querySelector(".card-extension-js");
        const logo = clone.querySelector(".card-extension_logo");
        const title = clone.querySelector(".card-extension_title");
        const description = clone.querySelector(".card-extension_description");

        element.setAttribute("data-status", card.isActive === true ? "active" : "inactive");

        logo.setAttribute("src", card.logo);
        logo.setAttribute("alt", `logo de ${card.name}`);

        element.setAttribute("aria-hidden", card.isActive);
        title.textContent = card.name;
        description.textContent = card.description;

        console.log(clone)
        containerCards.appendChild(clone);
    })
}