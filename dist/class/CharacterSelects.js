"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor() {
        this.characterSelects = [];
    }
    /**
     *
     * @param {CharacterSelect} characterSelect
     */
    setCharacterSelect(characterSelect) {
        this.characterSelects.push(characterSelect);
    }
    /**
     *
     * @param {(characterSelect: CharacterSelect ) => void} callback
     */
    characterSelectsForEach(callback) {
        this.characterSelects.forEach(characterSelect => {
            callback(characterSelect);
        });
    }
    /**
     *
     * @param {string} id
     * @returns {CharacterSelect | undefined}
     */
    getCharacterSelectById(id) {
        return this.characterSelects.find(characterSelect => {
            return characterSelect.id === id;
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=CharacterSelects.js.map