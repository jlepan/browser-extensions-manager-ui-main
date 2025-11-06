import { ThemeManager } from "./modules/ThemeManager.js";

window.addEventListener('DOMContentLoaded', () => {
    const themeManager = new ThemeManager();
    themeManager.init();
});