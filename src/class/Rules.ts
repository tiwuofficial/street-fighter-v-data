import Rule from "./Rule";

export default class {
  rules: Rule[];

  constructor() {
    this.rules = [];
  }

  /**
   *
   * @param {Rule} rule
   */
  setRules(rule: Rule): void {
    this.rules.push(rule);
  }

  /**
   *
   * @param {(frameSort: ) => void} callback
   */
  rulesForEach(callback: (rule: Rule) => void): void {
    this.rules.forEach(rule => {
      callback(rule);
    });
  }

  /**
   *
   * @param {string} id
   * @returns {Rule | undefined}
   */
  getRuleById(id: string): Rule | undefined {
    return this.rules.find(rule => {
      return rule.id === id;
    });
  }
}
