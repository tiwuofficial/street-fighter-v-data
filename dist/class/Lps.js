export default class {
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
//# sourceMappingURL=Lps.js.map