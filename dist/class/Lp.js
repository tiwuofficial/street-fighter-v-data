"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor(id, startLP, endLP, name, enName, words = []) {
        this.id = id;
        this.startLP = startLP;
        this.endLP = endLP;
        this.name = name;
        this.enName = enName;
        this.words = words;
    }
    /**
     *
     * @param {string} text
     * @returns {boolean}
     */
    existsLP(text) {
        let exists = false;
        this.words.forEach(word => {
            if (text.indexOf(word) > 0) {
                exists = true;
            }
        });
        if (text.indexOf(this.name) > 0) {
            exists = true;
        }
        return exists;
    }
}
exports.default = default_1;
//# sourceMappingURL=Lp.js.map