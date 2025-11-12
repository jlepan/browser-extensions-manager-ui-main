import { ThemeManager } from "./modules/ThemeManager.js";
import { ButtonsFilter } from "./modules/ButtonsFilter.js";
import { createCardExtension } from "./functions/createCardExtension.js";

window.addEventListener('DOMContentLoaded', () => {
    createCardExtension().then(() => {
        const buttonsFilter = new ButtonsFilter(".filter-group-extension-js", ".card-extension-js");
        buttonsFilter.init();
    });

    const themeManager = new ThemeManager();
    themeManager.init();
});