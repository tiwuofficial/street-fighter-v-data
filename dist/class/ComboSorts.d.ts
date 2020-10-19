import ComboSort from "./ComboSort";
export default class {
    comboSorts: ComboSort[];
    constructor();
    /**
     *
     * @param {ComboSort} comboSorts
     */
    setComboSorts(comboSorts: ComboSort): void;
    /**
     *
     * @param {(comboSort: ) => void} callback
     */
    comboSortsForEach(callback: (comboSort: ComboSort) => void): void;
    /**
     *
     * @param {string} id
     * @returns {ComboSort | undefined}
     */
    getComboSortById(id: string): ComboSort | undefined;
}
