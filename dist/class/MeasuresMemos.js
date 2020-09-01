"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MeasuresMemo_1 = require("./MeasuresMemo");
const character_1 = require("../data/character");
class default_1 {
    constructor() {
        this.measuresMemo = [];
        this.measuresMemosLSKey = "measuresMemos";
    }
    getNextId() {
        const measuresMemo = this.measuresMemo[this.measuresMemo.length - 1];
        if (measuresMemo) {
            return measuresMemo.id + 1;
        }
        return 1;
    }
    pushMeasuresMemo(measuresMemo) {
        this.measuresMemo.push(measuresMemo);
    }
    save() {
        localStorage.setItem(this.measuresMemosLSKey, JSON.stringify(this.getSaveData()));
    }
    syncFromLS() {
        const measuresMemosLS = JSON.parse(localStorage.getItem(this.measuresMemosLSKey));
        if (measuresMemosLS) {
            measuresMemosLS.forEach((measuresMemoLS) => {
                const character = character_1.characters.getCharacterById(measuresMemoLS.characterId);
                const measuresCharacter = character_1.characters.getCharacterById(measuresMemoLS.measuresCharacterId);
                if (character && measuresCharacter) {
                    const skill = measuresCharacter.getFrameById(Number(measuresMemoLS.skillId));
                    this.pushMeasuresMemo(new MeasuresMemo_1.default(measuresMemoLS.id, character, measuresCharacter, skill !== null && skill !== void 0 ? skill : null, measuresMemoLS.memo, measuresMemoLS.create));
                }
            });
        }
    }
    getSaveData() {
        return this.measuresMemo.map(measuresMemo => {
            return measuresMemo.getSaveData();
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=MeasuresMemos.js.map