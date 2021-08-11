"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rules_1 = require("../class/Rules");
const Rule_1 = require("../class/Rule");
const rules = new Rules_1.default();
exports.rules = rules;
rules.setRules(new Rule_1.default("1", "2先"));
rules.setRules(new Rule_1.default("2", "3先"));
rules.setRules(new Rule_1.default("3", "5先"));
//# sourceMappingURL=rule.js.map