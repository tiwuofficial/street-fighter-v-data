import Character from "./Character";
import Frame from "./Frame";
export default class {
    characters: Character[];
    /**
     *
     */
    constructor();
    /**
     *
     * @param {Character} character
     */
    setCharacter(character: Character): void;
    /**
     *
     * @param {(character: Character) => void} callback
     */
    characterForEach(callback: (character: Character) => void): void;
    /**
     *
     * @param {string} id
     * @returns {Character | undefined}
     */
    getCharacterById(id: string): Character | undefined;
    /**
     *
     * @param {string} enName
     * @returns {Character | undefined}
     */
    getCharacterByEnName(enName: string): Character | undefined;
    /**
     *
     * @param {string} enName
     * @param {(frame: ) => void} callback
     * @param {string} sortKey
     * @param {string} sortOrder
     */
    sortedFrameForEachByEnName(vtrigger: 1 | 2, enName: string, callback: (frame: Frame, character: Character) => void, filterTypes?: any[], sortKey?: string, sortOrder?: string): void;
}
