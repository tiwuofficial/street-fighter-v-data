"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MeasuresMemos_1 = require("../../class/MeasuresMemos");
const character_1 = require("./character");
function getMeasuresMemosFromLocalStroage() {
    const measuresMemos = new MeasuresMemos_1.default();
    measuresMemos.syncFromLS(character_1.characters);
    return measuresMemos;
}
exports.getMeasuresMemosFromLocalStroage = getMeasuresMemosFromLocalStroage;
//# sourceMappingURL=measuresMemo.js.map