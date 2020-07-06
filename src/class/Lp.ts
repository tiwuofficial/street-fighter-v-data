export default class {
  id: string;
  startLP: number;
  endLP: number;
  name: string;
  enName: string;
  words: string[];

  constructor(id: string, startLP: number, endLP: number, name: string, enName: string, words: string[] = []) {
    this.id = id;
    this.startLP = startLP;
    this.endLP = endLP;
    this.name = name;
    this.enName = enName;
    this.words = words;
  }

  /**
   *
   * @param {string} text
   * @returns {boolean}
   */
  existsLP(text: string): boolean {
    let exists = false;
    this.words.forEach(word => {
      if (text.indexOf(word) > 0) {
        exists = true;
      }
    });

    if (text.indexOf(this.name) > 0) {
      exists = true;
    }
    return exists;
  }
}
