export class ExtensionCard {

    /** @type {HTMLElement} */
    #element
    /** @type {string} */
    #dataCard
    /** @type {string} */
    #dataStatus
    /** @type {boolean} */
    #ariaHidden
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
        this.#dataStatus = this.#element.dataset.status;
        this.#ariaHidden = this.#element.getAttribute("aria-hidden");
        this.init();
    }

    init() {
        this.#removeButton.addEventListener("click", this.#removeElement.bind(this));
        this.#isActiveButton.addEventListener("click", this.#updateElement.bind(this));
    }

    #removeElement(e) {
        e.preventDefault();
        this.#dataCard.isActive = false;
        this.#dataCard.isDelete = true;
        this.#element.remove();
    }

    #updateElement() {
        
    }
    
}