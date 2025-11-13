import { ButtonsFilter } from "../modules/ButtonsFilter.js";

export function initFilters(firstFilter, secundFilter) {
    const buttonsFilter = new ButtonsFilter(firstFilter, secundFilter);
    buttonsFilter.init();
}