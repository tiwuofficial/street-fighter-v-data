"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor() {
        this.comboSorts = [];
    }
    /**
     *
     * @param {ComboSort} comboSorts
     */
    setComboSorts(comboSorts) {
        this.comboSorts.push(comboSorts);
    }
    /**
     *
     * @param {(comboSort: ) => void} callback
     */
    comboSortsForEach(callback) {
        this.comboSorts.forEach(comboSort => {
            callback(comboSort);
        });
    }
    /**
     *
     * @param {string} id
     * @returns {ComboSort | undefined}
     */
    getComboSortById(id) {
        return this.comboSorts.find(comboSort => {
            return comboSort.id === id;
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=ComboSorts.js.map