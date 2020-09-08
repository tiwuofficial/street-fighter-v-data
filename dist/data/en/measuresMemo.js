"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MeasuresMemos_1 = require("../../class/MeasuresMemos");
const character_1 = require("./character");
const measuresMemo = new MeasuresMemos_1.default();
exports.measuresMemo = measuresMemo;
measuresMemo.syncFromLS(character_1.characters);
//# sourceMappingURL=measuresMemo.js.map