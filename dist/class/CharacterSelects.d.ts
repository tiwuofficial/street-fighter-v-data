import CharacterSelect from "./CharacterSelect";
export default class {
    characterSelects: CharacterSelect[];
    constructor();
    /**
     *
     * @param {CharacterSelect} characterSelect
     */
    setCharacterSelect(characterSelect: CharacterSelect): void;
    /**
     *
     * @param {(characterSelect: CharacterSelect ) => void} callback
     */
    characterSelectsForEach(callback: (characterSelect: CharacterSelect) => void): void;
    /**
     *
     * @param {string} id
     * @returns {CharacterSelect | undefined}
     */
    getCharacterSelectById(id: string): CharacterSelect | undefined;
}
