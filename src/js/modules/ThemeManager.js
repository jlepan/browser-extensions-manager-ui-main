export class ThemeManager {

    /** @type {HTMLElement} */
    #body
    /** @type {HTMLElement} */
    #toggleButton
    /** @type {string} */
    #storageKey = "theme"
    /** @type {string} */
    #currentTheme = "light-theme"

    constructor() {
        this.#body = document.querySelector('body');
        this.#toggleButton = document.querySelector('.theme-button-js');
    }

    init() {
        const savedTheme = localStorage.getItem(this.#storageKey);
        if (savedTheme) {
            this.#currentTheme = savedTheme;
        }
        this.#applyTheme();
        this.#toggleButton.addEventListener('click', this.#toggleTheme.bind(this));
    }

    #applyTheme() {
        this.#body.classList.remove('light-theme', 'dark-theme');
        this.#body.classList.add(this.#currentTheme);
        this.#toggleButton.title = this.#currentTheme === 'light-theme' ? 'Switch to dark theme' : 'Switch to light theme';
    }

    #toggleTheme(e) {
        if (e.currentTarget.tagName.toLowerCase() === 'a') {
            e.preventDefault();
        }
        this.#currentTheme = this.#currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
        localStorage.setItem(this.#storageKey, this.#currentTheme);
        this.#applyTheme();
    }
}