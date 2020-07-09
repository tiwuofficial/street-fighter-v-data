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
        if (text.indexOf(this.name) > 0) {
            return true;
        }
        const wordsCheck = this.words.some(word => {
            return text.indexOf(word) > 0;
        });
        if (wordsCheck) {
            return true;
        }
        if (this.endLP && String(this.endLP).length >= 4) {
            const splitLP = Math.pow(10, String(this.endLP).length - 2);
            // 3桁以上の数値を取り出す
            const lpCheck = text.match(/[0-9]{3,}/g).some(number => {
                let exists = false;
                for (let lp = this.startLP; lp < this.endLP; lp = lp + splitLP) {
                    if (parseInt(number) === lp) {
                        exists = true;
                    }
                }
                return exists;
            });
            if (lpCheck) {
                return true;
            }
        }
        return false;
    }
}
exports.default = default_1;
//# sourceMappingURL=Lp.js.map