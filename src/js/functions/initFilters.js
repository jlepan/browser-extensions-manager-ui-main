import { ButtonsFilter } from "../modules/ButtonsFilter.js";

/**
 * Initialise le système de filtres des extensions.
 *
 * @param {string} buttons - Sélecteur du groupe de boutons de filtre.
 * @param {string} cards - Sélecteur des cartes à filtrer.
 * @param {string} containerCards - Sélecteur du conteneur des cartes.
 *
 * @returns {void}
 */

export function initFilters(buttons, cards, containerCards) {
  const buttonsFilter = new ButtonsFilter(buttons, cards, containerCards);
  buttonsFilter.init();
}
