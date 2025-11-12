import { ThemeManager } from "./modules/ThemeManager.js";
import {ButtonsFilter} from "./modules/ButtonsFilter.js";

window.addEventListener('DOMContentLoaded', () => {
    const themeManager = new ThemeManager();
    themeManager.init();

    const buttonsFilter = new ButtonsFilter(".filter-group-extension-js", "card-extension-js");
    buttonsFilter.init();
});