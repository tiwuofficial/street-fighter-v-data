import FrameFilter from "./FrameFilter";

export default class {
  frameFilteres: FrameFilter[];

  constructor() {
    this.frameFilteres = [];
  }

  /**
   *
   * @param {FrameFilter} frameFilter
   */
  setFrameFilteres(frameFilter: FrameFilter): void {
    this.frameFilteres.push(frameFilter);
  }

  /**
   *
   * @param {(FrameFilter: ) => void} callback
   */
  frameFilteresForEach(callback: (frameFilter: FrameFilter) => void): void {
    this.frameFilteres.forEach(frameFilter => {
      callback(frameFilter);
    });
  }

  /**
   *
   * @param {string} id
   * @returns {FrameFilter | undefined}
   */
  getFrameFilterById(id: string): FrameFilter | undefined {
    return this.frameFilteres.find(frameFilter => {
      return frameFilter.id === id;
    });
  }
}
