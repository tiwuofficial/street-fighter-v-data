"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor() {
        this.frameFilteres = [];
    }
    /**
     *
     * @param {FrameFilter} frameFilter
     */
    setFrameFilteres(frameFilter) {
        this.frameFilteres.push(frameFilter);
    }
    /**
     *
     * @param {(FrameFilter: ) => void} callback
     */
    frameFilteresForEach(callback) {
        this.frameFilteres.forEach(frameFilter => {
            callback(frameFilter);
        });
    }
    /**
     *
     * @param {string} id
     * @returns {FrameFilter | undefined}
     */
    getFrameFilterById(id) {
        return this.frameFilteres.find(frameFilter => {
            return frameFilter.id === id;
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=FrameFilteres.js.map