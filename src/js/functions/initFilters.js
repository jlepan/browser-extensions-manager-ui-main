import { ButtonsFilter } from "../modules/ButtonsFilter.js";

export function initFilters(buttons, cards, containerCards) {
    const buttonsFilter = new ButtonsFilter(buttons, cards, containerCards);
    buttonsFilter.init();
}