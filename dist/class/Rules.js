"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor() {
        this.rules = [];
    }
    /**
     *
     * @param {Rule} rule
     */
    setRules(rule) {
        this.rules.push(rule);
    }
    /**
     *
     * @param {(frameSort: ) => void} callback
     */
    rulesForEach(callback) {
        this.rules.forEach(rule => {
            callback(rule);
        });
    }
    /**
     *
     * @param {string} id
     * @returns {Rule | undefined}
     */
    getRuleById(id) {
        return this.rules.find(rule => {
            return rule.id === id;
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=Rules.js.map