"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rules_1 = require("../class/Rules");
const Rule_1 = require("../class/Rule");
const rules = new Rules_1.default();
exports.rules = rules;
rules.setRules(new Rule_1.default("1", "3先(キャラセレOFF)"));
rules.setRules(new Rule_1.default("2", "5先(キャラセレOFF)"));
rules.setRules(new Rule_1.default("3", "3先(キャラセレON)"));
rules.setRules(new Rule_1.default("4", "5先(キャラセレON)"));
//# sourceMappingURL=rule.js.map