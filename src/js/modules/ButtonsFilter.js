export class ButtonsFilter {

    /** @type {HTMLElement} */
    #groupButtons;
    /** @type {NodeListOf<HTMLElement>} */
    #buttons;
    /** @type {NodeListOf<HTMLElement>} */
    #groupCards;
    /** @type {HTMLElement} */
    #activeButton
    /** @type {string} */
    #activeButtonClass = "active";
    /** @type {string} */
    #visbileCardClass = "visible";
    /** @type {string} */
    #dataFilter = "all";
    
    /**
     * @param {string} groupSelector - sélecteur du conteneur de boutons
     * @param {string} cardsSelector - sélecteur des cartes à filtrer
     */

    constructor(groupSelector, cardsSelector) {
        this.#groupButtons = document.querySelector(groupSelector);
        this.#groupCards = document.querySelectorAll(cardsSelector);
        this.#buttons = this.#groupButtons.querySelectorAll('button');
        this.#activeButton = this.#groupButtons.querySelector(`button.${this.#activeButtonClass}`);
    }

    init() {
        this.#filterCards();
        this.#buttons.forEach(button => {
            button.addEventListener('click', this.#handleClick.bind(this));
        })
    }

    #handleClick(e) {
        this.#updateActiveButton(e);
        this.#filterCards();
    }

    #updateActiveButton(e) {
        const clickedButton = e.currentTarget;
        if (clickedButton === this.#activeButton) {
            return;
        }
        this.#activeButton.classList.remove(this.#activeButtonClass);
        clickedButton.classList.add(this.#activeButtonClass);
        this.#activeButton = clickedButton;
        this.#dataFilter = this.#activeButton.getAttribute('data-filter');
    }

    #filterCards() {
        this.#groupCards.forEach(card => {
            const cardStatus = card.getAttribute('data-status');
            if (this.#dataFilter === 'all' || this.#dataFilter === cardStatus) {
                card.classList.add(this.#visbileCardClass);
                card.setAttribute("aria-hidden", "false");
            } else {
                card.classList.remove(this.#visbileCardClass);
                card.setAttribute("aria-hidden", "true");
            }
        })
    }
}