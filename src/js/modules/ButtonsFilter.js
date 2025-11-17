export class ButtonsFilter {
  /** @type {HTMLElement} */
  #groupButtons;
  /** @type {NodeListOf<HTMLElement>} */
  #buttons;
  /** @type {NodeListOf<HTMLElement>} */
  #groupCards;
  /** @type {HTMLElement} */
  #containerCards;
  /** @type {string} */
  #cardsSelector
  /** @type {HTMLElement} */
  #activeButton;
  /** @type {string} */
  #activeButtonClass = "active";
  /** @type {string} */
  #visibleCardClass = "visible";
  /** @type {string} */
  #dataFilter = "all";

  /**
   * @param {string} groupSelector - sélecteur du conteneur de boutons
   * @param {string} cardsSelector - sélecteur des cartes à filtrer
   * @param {string} containerSelector - sélecteur du conteneur des cartes à filtrer
   */

  constructor(groupSelector, cardsSelector, containerSelector) {
    this.#groupButtons = document.querySelector(groupSelector);
    this.#containerCards = document.querySelector(containerSelector);
    this.#cardsSelector = cardsSelector;
    this.#buttons = this.#groupButtons.querySelectorAll("button");
    this.#activeButton = this.#groupButtons.querySelector(`button.${this.#activeButtonClass}`);
  }

  init() {
    this.#filterCards();
    this.#buttons.forEach((button) => {
      button.addEventListener("click", this.#handleClick.bind(this));
    });
    this.#containerCards.addEventListener("card-status-changed", this.#filterCards.bind(this));
    this.#containerCards.addEventListener("extensions-restored", this.#filterCards.bind(this));
  }

  #getCards() {
    return this.#containerCards.querySelectorAll(this.#cardsSelector)
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
    this.#dataFilter = this.#activeButton.getAttribute("data-filter");
  }

  #filterCards() {
    this.#groupCards = this.#getCards();

    this.#groupCards.forEach((card) => {
      const cardStatus = card.getAttribute("data-status");
      if (this.#dataFilter === "all" || this.#dataFilter === cardStatus) {
        document.activeElement.blur();
        card.classList.add(this.#visibleCardClass);
        card.setAttribute("aria-hidden", "false");
      } else {
        card.classList.remove(this.#visibleCardClass);
        card.setAttribute("aria-hidden", "true");
      }
    });
  }
}
