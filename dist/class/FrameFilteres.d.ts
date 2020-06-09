import FrameFilter from "./FrameFilter";
export default class {
    frameFilteres: FrameFilter[];
    constructor();
    /**
     *
     * @param {FrameFilter} frameFilter
     */
    setFrameFilteres(frameFilter: FrameFilter): void;
    /**
     *
     * @param {(FrameFilter: ) => void} callback
     */
    frameFilteresForEach(callback: (frameFilter: FrameFilter) => void): void;
    /**
     *
     * @param {string} id
     * @returns {FrameFilter | undefined}
     */
    getFrameFilterById(id: string): FrameFilter | undefined;
}
