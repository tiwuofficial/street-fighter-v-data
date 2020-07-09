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
    if (text.indexOf(this.name) > 0) {
      return true;
    }

    const wordsCheck = this.words.some(word => {
      return text.indexOf(word) > 0;
    });
    if (wordsCheck) {
      return true;
    }

    if (this.endLP && String(this.endLP).length >= 4) {
      // 桁数に応じて刻んでいくLPを変える
      // 4桁であれば100, 5桁であれば1000
      const splitLP = Math.pow(10, String(this.endLP).length - 2);

      // 3桁以上の数値を取り出す
      const matches = text.match(/[0-9]{3,}/g);
      if (matches === null) {
        return false;
      }

      const lpCheck = matches.some(number => {
        let exists = false;
        for (let lp = this.startLP; lp < this.endLP; lp = lp + splitLP) {
          if (parseInt(number) === lp) {
            exists = true;
          }
        }
        return exists;
      });

      if (lpCheck) {
        return true;
      }
    }

    return false;
  }
}
