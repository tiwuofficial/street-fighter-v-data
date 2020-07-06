export default class {
    id: string;
    startLP: number;
    endLP: number;
    name: string;
    enName: string;
    words: string[];
    constructor(id: string, startLP: number, endLP: number, name: string, enName: string, words?: string[]);
    /**
     *
     * @param {string} text
     * @returns {boolean}
     */
    existsLP(text: string): boolean;
}
