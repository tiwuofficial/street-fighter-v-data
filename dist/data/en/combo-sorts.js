"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComboSorts_1 = require("../../class/ComboSorts");
const ComboSort_1 = require("../../class/ComboSort");
const comboSorts = new ComboSorts_1.default();
exports.comboSorts = comboSorts;
const defaultComboSort = new ComboSort_1.default("0", "Creation order", "create", "desc");
comboSorts.setComboSorts(defaultComboSort);
comboSorts.setComboSorts(new ComboSort_1.default("1", "Highest order of damage", "damage", "desc"));
comboSorts.setComboSorts(new ComboSort_1.default("2", "Highest order of stun", "stun", "desc"));
comboSorts.setDefaultSort(defaultComboSort);
//# sourceMappingURL=combo-sorts.js.map