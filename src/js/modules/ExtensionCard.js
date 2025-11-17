export class ExtensionCard {

    /** @type {HTMLElement} */
    #element
    /** @type {object} */
    #dataCard
    /** @type {HTMLElement} */
    #removeButton
    /** @type {HTMLElement} */
    #isActiveButton

    /**
     * @param {HTMLElement} element - élément HTML de la carte d'extension
     * @param {string} card - données JSON implémentant la carte d'extension
     */

    constructor(element, card) {
        this.#element = element;
        this.#dataCard = card;
        this.#removeButton = this.#element.querySelector(".card-extension_remove-button");
        this.#isActiveButton = this.#element.querySelector(".card-extension_is-active-button");
        this.init();
    }

    init() {
        this.#removeButton.addEventListener("click", this.#removeElement.bind(this));
        this.#isActiveButton.addEventListener("click", this.#updateElement.bind(this));
    }

    #getLocalStorage() {
        const localStorageData = JSON.parse(localStorage.getItem("extensionsCards"));
        const extensionLS = localStorageData.find(ext => ext.name === this.#dataCard.name);
        return {localStorageData, extensionLS}
    }

    #removeElement(e) {
        e.preventDefault();
        const {localStorageData, extensionLS} = this.#getLocalStorage();

        extensionLS.isActive = false;
        extensionLS.isDeleted = true;
        
        localStorage.setItem("extensionsCards", JSON.stringify(localStorageData));
        this.#element.remove();
    }

    #updateElement(e) {
        e.preventDefault();
        const {localStorageData, extensionLS} = this.#getLocalStorage();

        extensionLS.isActive = extensionLS.isActive ? false : true;
        this.#element.dataset.status = this.#element.dataset.status === "active" ? "inactive" : "active";
        this.#element.setAttribute("aria-hidden", this.#element.getAttribute("aria-hidden") === "true" ? "false" : "true");
        localStorage.setItem("extensionsCards", JSON.stringify(localStorageData));

        this.#element.dispatchEvent(new CustomEvent("card-status-changed", {bubbles: true}));
    }
    
}