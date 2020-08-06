import Position from "./Position";
export default class {
    positions: Position[];
    constructor();
    /**
     *
     * @param {Position} Position
     */
    setPositions(position: Position): void;
    /**
     *
     * @param {(Position: ) => void} callback
     */
    positionsForEach(callback: (position: Position) => void): void;
    /**
     *
     * @param {string} id
     * @returns {Position | undefined}
     */
    getPositionById(id: string): Position | undefined;
}
