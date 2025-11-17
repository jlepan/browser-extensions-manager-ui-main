import { createExtensionCard } from "./createExtensionCard.js";

/**
 * Initialise l’affichage des cartes d’extensions.
 * Récupère les données depuis le localStorage, ignore les cartes supprimées,
 * puis génère dynamiquement les cartes visibles.
 *
 * @returns {void}
 */

export function initExtensionCard() {
  const cardsData = JSON.parse(localStorage.getItem("extensionsCards"));

  const template = document.querySelector("#card-extension");
  const containerCards = document.querySelector(".group-cards-extension");

  cardsData.forEach((card) => {
    if (card.isDeleted === true) return;
    createExtensionCard(card, template, containerCards);
  });
}
