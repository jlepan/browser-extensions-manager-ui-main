import { loadCardExtension } from "./loadCardExtension.js";

/**
 * Initialise les données des extensions dans le localStorage.
 * Si les données n'existent pas encore, elles sont chargées
 * depuis le fichier JSON local puis stockées.
 *
 * @async
 * @returns {Promise<void>}
 */

export async function getExtensionsData() {
  if (!localStorage.getItem("extensionsCards")) {
    const cardsData = await loadCardExtension();
    localStorage.setItem("extensionsCards", JSON.stringify(cardsData));
  }
}
