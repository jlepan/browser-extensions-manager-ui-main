import { ThemeManager } from "./modules/ThemeManager.js";
import { initFilters } from "./functions/initFilters.js";
import { initExtensionCard } from "./functions/initExtensionCard.js";
import { restoreExtensionCard } from "./functions/restoreExtensionCard.js";
import { getExtensionsData } from "./functions/getExtensionsData.js";

window.addEventListener('DOMContentLoaded', () => {
    const themeManager = new ThemeManager();
    themeManager.init();

    getExtensionsData();

    initExtensionCard()
    initFilters(".filter-group-extension-js", ".card-extension-js", ".group-cards-extension");

    const restoreButton = document.querySelector(".restore-button-js");
    restoreButton.addEventListener("click", e => {
        e.preventDefault();
        restoreExtensionCard()
    })
});