import { loadCardExtension } from "./loadCardExtension.js";
import { createExtensionCard } from "./createExtensionCard.js";

export async function initExtensionCard() {
    const cardsData = await loadCardExtension();

    const template = document.querySelector("#card-extension");
    const containerCards = document.querySelector(".group-cards-extension");

    cardsData.forEach(card => {
        if(card.isDelete === true) return
        createExtensionCard(card, template, containerCards);
    })
}