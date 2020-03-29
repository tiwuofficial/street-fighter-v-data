"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
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
exports.default = default_1;
//# sourceMappingURL=FrameSorts.js.map