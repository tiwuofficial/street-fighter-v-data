export default class {
    constructor() {
        this.frameSorts = [];
    }
    /**
     *
     * @param {FrameSort} frameSorts
     */
    setFrameSorts(frameSorts) {
        this.frameSorts.push(frameSorts);
    }
    /**
     *
     * @param {(frameSort: ) => void} callback
     */
    frameSortsForEach(callback) {
        this.frameSorts.forEach(frameSort => {
            callback(frameSort);
        });
    }
    /**
     *
     * @param {string} id
     * @returns {FrameSort | undefined}
     */
    getFrameSortById(id) {
        return this.frameSorts.find(frameSort => {
            return frameSort.id === id;
        });
    }
}
//# sourceMappingURL=FrameSorts.js.map