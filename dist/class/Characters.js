"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    /**
     *
     */
    constructor() {
        this.characters = [];
    }
    /**
     *
     * @param {Character} character
     */
    setCharacter(character) {
        this.characters.push(character);
    }
    /**
     *
     * @param {(character: Character) => void} callback
     */
    characterForEach(callback) {
        this.characters.forEach(character => {
            callback(character);
        });
    }
    /**
     *
     * @param {string} id
     * @returns {Character | undefined}
     */
    getCharacterById(id) {
        return this.characters.find(character => {
            return character.id === id;
        });
    }
    /**
     *
     * @param {string} enName
     * @returns {Character | undefined}
     */
    getCharacterByEnName(enName) {
        return this.characters.find(character => {
            return character.enName === enName;
        });
    }
    /**
     *
     * @param {string} enName
     * @param {(frame: ) => void} callback
     * @param {string} sortKey
     * @param {string} sortOrder
     */
    sortedFrameForEachByEnName(vtrigger, enName, callback, filterTypes = [], sortKey = "", sortOrder = "asc") {
        const character = this.getCharacterByEnName(enName);
        if (character) {
            character.sortedFrameForEach(vtrigger, callback, filterTypes, sortKey, sortOrder);
        }
    }
}
exports.default = default_1;
//# sourceMappingURL=Characters.js.map