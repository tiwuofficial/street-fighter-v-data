import Frame from "./Frame";
export default class {
    id: string;
    name: string;
    enName: string;
    frame: Frame[];
    words: string[];
    /**
     *
     * @param {string} id
     * @param {string} name
     * @param {string} enName
     * @param {object[]} frame
     * @param {string[]} words
     */
    constructor(id: string, name: string, enName: string, frames: object[], words?: string[]);
    /**
     *
     * @param {string} name
     * @returns { | undefined}
     */
    getFrameByName(name: string): Frame | undefined;
    /**
     *
     * @param id
     * @returns {Frame | undefined}
     */
    getFrameById(id: number): Frame | undefined;
    /**
     *
     * @param {(frame: Frame) => void} callback
     */
    frameForEach(callback: (frame: Frame) => void): void;
    /**
     *
     * @param callback
     */
    filterFrame(callback: (frame: Frame) => boolean): Frame[];
    /**
     *
     * @returns
     */
    filterFrameByGuardAvailable(): Frame[];
    getRandomFrameByGuardAvailable(number: number): Frame[];
    /**
     *
     * @param {(frame: ) => void} callback
     * @param {string} sortKey
     * @param {string} sortOrder
     */
    sortedFrameForEach(callback: (frame: Frame, character: this) => void, filterTypes?: any[], sortKey?: string, sortOrder?: string): void;
    /**
     *
     * @param {string} text
     * @returns {boolean}
     */
    existsCharacterName(text: string): boolean;
}
