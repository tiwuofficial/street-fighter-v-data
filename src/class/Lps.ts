import Lp from "./Lp";

export default class {
  lps: Lp[];

  constructor() {
    this.lps = [];
  }

  /**
   *
   * @param {Lp} lps
   */
  setLps(lps: Lp): void {
    this.lps.push(lps);
  }

  /**
   *
   * @param {(frameSort: ) => void} callback
   */
  lpsForEach(callback: (lp: Lp) => void): void {
    this.lps.forEach(lp => {
      callback(lp);
    });
  }

  /**
   *
   * @param {string} id
   * @returns {Lp | undefined}
   */
  getLpById(id: string): Lp | undefined {
    return this.lps.find(lp => {
      return lp.id === id;
    });
  }
}
