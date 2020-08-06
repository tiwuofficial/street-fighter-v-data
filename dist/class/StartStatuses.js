"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor() {
        this.startStatuses = [];
    }
    /**
     *
     * @param {StartStatus} StartStatus
     */
    setStartStatuss(StartStatus) {
        this.startStatuses.push(StartStatus);
    }
    /**
     *
     * @param {(startStatus: ) => void} callback
     */
    startStatussForEach(callback) {
        this.startStatuses.forEach(startStatus => {
            callback(startStatus);
        });
    }
    /**
     *
     * @param {string} id
     * @returns {StartStatus | undefined}
     */
    getStartStatusById(id) {
        return this.startStatuses.find(StartStatus => {
            return StartStatus.id === id;
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=StartStatuses.js.map