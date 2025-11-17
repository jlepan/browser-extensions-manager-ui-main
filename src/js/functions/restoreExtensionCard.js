import { createExtensionCard } from "./createExtensionCard.js";

export function restoreExtensionCard() {
    const cardsData = JSON.parse(localStorage.getItem("extensionsCards"));

    const template = document.querySelector("#card-extension");
    const containerCards = document.querySelector(".group-cards-extension");
    
    cardsData.forEach(card => {
        if(card.isDeleted === false) return

        const cardLS = cardsData.find(ext => ext.name === card.name);
        cardLS.isDeleted = false;

        localStorage.setItem("extensionsCards", JSON.stringify(cardsData));
        createExtensionCard(card, template, containerCards);
    })
}