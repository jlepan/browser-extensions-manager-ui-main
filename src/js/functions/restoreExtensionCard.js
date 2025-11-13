import { loadCardExtension } from "./loadCardExtension.js";
import { createExtensionCard } from "./createExtensionCard.js";

export async function restoreExtensionCard() {
    const cardsData = await loadCardExtension();

    const template = document.querySelector("#card-extension");
    const containerCards = document.querySelector(".group-cards-extension");
    
    cardsData.forEach(card => {
        if(card.isDelete === false) return
        createExtensionCard(card, template, containerCards);
    })
}