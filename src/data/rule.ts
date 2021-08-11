import Rules from "../class/Rules";
import Rule from "../class/Rule";

const rules = new Rules();

rules.setRules(new Rule("1", "2先"));
rules.setRules(new Rule("2", "3先"));
rules.setRules(new Rule("3", "5先"));

export { rules };
