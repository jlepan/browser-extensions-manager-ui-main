import { ExtensionCard } from "../modules/extensionCard";

/**
 * Génère une carte d’extension à partir des données fournies
 * et l’insère dans le conteneur.
 *
 * @param {Object} cardData - Données JSON d'une extension.
 * @param {HTMLTemplateElement} template - Template HTML utilisé pour cloner la carte.
 * @param {HTMLElement} containerCards - Élément conteneur dans lequel la carte est ajoutée.
 *
 * @returns {void}
 */

export function createExtensionCard(cardData, template, containerCards) {
  const clone = template.content.cloneNode(true);

  const element = clone.querySelector(".card-extension-js");
  const logo = clone.querySelector(".card-extension_logo");
  const title = clone.querySelector(".card-extension_title");
  const description = clone.querySelector(".card-extension_description");

  element.setAttribute("data-status", cardData.isActive === true ? "active" : "inactive");

  logo.setAttribute("src", cardData.logo);
  logo.setAttribute("alt", `logo de ${cardData.name}`);

  element.setAttribute("aria-hidden", cardData.isActive);
  title.textContent = cardData.name;
  description.textContent = cardData.description;

  containerCards.appendChild(clone);
  new ExtensionCard(element, cardData);
}
