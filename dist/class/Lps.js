"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor() {
        this.lps = [];
    }
    /**
     *
     * @param {Lp} lps
     */
    setLps(lps) {
        this.lps.push(lps);
    }
    /**
     *
     * @param {(frameSort: ) => void} callback
     */
    lpsForEach(callback) {
        this.lps.forEach(lp => {
            callback(lp);
        });
    }
    /**
     *
     * @param {string} id
     * @returns {Lp | undefined}
     */
    getLpById(id) {
        return this.lps.find(lp => {
            return lp.id === id;
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=Lps.js.map