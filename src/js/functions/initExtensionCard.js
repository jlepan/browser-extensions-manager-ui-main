import { createExtensionCard } from "./createExtensionCard.js";

export function initExtensionCard() {
    const cardsData = JSON.parse(localStorage.getItem("extensionsCards"));

    const template = document.querySelector("#card-extension");
    const containerCards = document.querySelector(".group-cards-extension");

    cardsData.forEach(card => {
        if(card.isDeleted === true) return
        createExtensionCard(card, template, containerCards);
    })
}