import Lp from "./Lp";
export default class {
    lps: Lp[];
    constructor();
    /**
     *
     * @param {Lp} lps
     */
    setLps(lps: Lp): void;
    /**
     *
     * @param {(frameSort: ) => void} callback
     */
    lpsForEach(callback: (lp: Lp) => void): void;
    /**
     *
     * @param {string} id
     * @returns {Lp | undefined}
     */
    getLpById(id: string): Lp | undefined;
}
