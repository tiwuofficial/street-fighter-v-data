import Position from "./Position";

export default class {
  positions: Position[];

  constructor() {
    this.positions = [];
  }

  /**
   *
   * @param {Position} Position
   */
  setPositions(position: Position): void {
    this.positions.push(position);
  }

  /**
   *
   * @param {(Position: ) => void} callback
   */
    positionsForEach(callback: (position: Position) => void): void {
    this.positions.forEach(position => {
      callback(position);
    });
  }

  /**
   *
   * @param {string} id
   * @returns {Position | undefined}
   */
  getPositionById(id: string): Position | undefined {
    return this.positions.find(position => {
      return position.id === id;
    });
  }
}
