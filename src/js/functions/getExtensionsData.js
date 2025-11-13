import { loadCardExtension } from "./loadCardExtension.js";

export async function getExtensionsData() {
    if (!localStorage.getItem("extensionsCards")) {
        const cardsData = await loadCardExtension();
        localStorage.setItem("extensionsCards", JSON.stringify(cardsData))
    }
}