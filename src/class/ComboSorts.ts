import ComboSort from "./ComboSort";

export default class {
  comboSorts: ComboSort[];

  constructor() {
    this.comboSorts = [];
  }

  /**
   *
   * @param {ComboSort} comboSorts
   */
  setComboSorts(comboSorts: ComboSort): void {
    this.comboSorts.push(comboSorts);
  }

  /**
   *
   * @param {(comboSort: ) => void} callback
   */
  comboSortsForEach(callback: (comboSort: ComboSort) => void): void {
    this.comboSorts.forEach(comboSort => {
      callback(comboSort);
    });
  }

  /**
   *
   * @param {string} id
   * @returns {ComboSort | undefined}
   */
  getComboSortById(id: string): ComboSort | undefined {
    return this.comboSorts.find(comboSort => {
      return comboSort.id === id;
    });
  }
}
