import Rule from "./Rule";
export default class {
    rules: Rule[];
    constructor();
    /**
     *
     * @param {Rule} rule
     */
    setRules(rule: Rule): void;
    /**
     *
     * @param {(frameSort: ) => void} callback
     */
    rulesForEach(callback: (rule: Rule) => void): void;
    /**
     *
     * @param {string} id
     * @returns {Rule | undefined}
     */
    getRuleById(id: string): Rule | undefined;
}
