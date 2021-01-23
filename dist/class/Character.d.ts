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
    frameForEachByVtrigger(vtrigger: 1 | 2, callback: (frame: Frame) => void, zeku?: "" | "old" | "young"): void;
    /**
     *
     * @param callback
     */
    filterFrame(callback: (frame: Frame) => boolean): Frame[];
    /**
     *
     * @param vtrigger
     */
    filterFrameByVtrigger(vtrigger: 1 | 2): Frame[];
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
    sortedFrameForEach(vtrigger: 1 | 2, callback: (frame: Frame, character: this) => void, filterTypes?: any[], sortKey?: string, sortOrder?: string, zeku?: "" | "old" | "young"): void;
    /**
     *
     * @param {string} text
     * @returns {boolean}
     */
    existsCharacterName(text: string): boolean;
    getObject(): {
        id: string;
        name: string;
        enName: string;
        frame: {
            id: number;
            name: string;
            outbreak: string;
            persistence: string;
            rigidity: string;
            hit: string;
            guard: string;
            damage: string;
            stan: string;
            remarks: string;
            type: "normal" | "jump" | "unique" | "throw" | "vsystem" | "special" | "ca";
            vtrigger: 1 | 2;
            command: string;
            zeku: "" | "old" | "young";
        }[];
        words: string[];
    };
}
