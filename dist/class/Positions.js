"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor() {
        this.positions = [];
    }
    /**
     *
     * @param {Position} Position
     */
    setPositions(position) {
        this.positions.push(position);
    }
    /**
     *
     * @param {(Position: ) => void} callback
     */
    positionsForEach(callback) {
        this.positions.forEach(position => {
            callback(position);
        });
    }
    /**
     *
     * @param {string} id
     * @returns {Position | undefined}
     */
    getPositionById(id) {
        return this.positions.find(position => {
            return position.id === id;
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=Positions.js.map