import FrameSort from "./FrameSort";

export default class {
  frameSorts: FrameSort[];

  constructor() {
    this.frameSorts = [];
  }

  /**
   *
   * @param {FrameSort} frameSorts
   */
  setFrameSorts(frameSorts: FrameSort): void {
    this.frameSorts.push(frameSorts);
  }

  /**
   *
   * @param {(frameSort: ) => void} callback
   */
  frameSortsForEach(callback: (frameSort: FrameSort) => void): void {
    this.frameSorts.forEach(frameSort => {
      callback(frameSort);
    });
  }

  /**
   *
   * @param {string} id
   * @returns {FrameSort | undefined}
   */
  getFrameSortById(id: string): FrameSort | undefined {
    return this.frameSorts.find(frameSort => {
      return frameSort.id === id;
    });
  }
}
