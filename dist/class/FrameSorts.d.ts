import FrameSort from "./FrameSort";
export default class {
    frameSorts: FrameSort[];
    constructor();
    /**
     *
     * @param {FrameSort} frameSorts
     */
    setFrameSorts(frameSorts: FrameSort): void;
    /**
     *
     * @param {(frameSort: ) => void} callback
     */
    frameSortsForEach(callback: (frameSort: FrameSort) => void): void;
    /**
     *
     * @param {string} id
     * @returns {FrameSort | undefined}
     */
    getFrameSortById(id: string): FrameSort | undefined;
}
