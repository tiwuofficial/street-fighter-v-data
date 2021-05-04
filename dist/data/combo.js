"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Combo_1 = require("../class/Combo");
const Combos_1 = require("../class/Combos");
const character_1 = require("./character");
const position_1 = require("./position");
const startStatus_1 = require("./startStatus");
function getCombosFromLocalStroage() {
    const combos = new Combos_1.default();
    const combosFromLS = JSON.parse(localStorage.getItem("combos"));
    if (combosFromLS) {
        combosFromLS.reverse().forEach(comboFromLS => {
            const character = character_1.characters.getCharacterById(comboFromLS.characterId);
            if (character) {
                const frames = [];
                comboFromLS.combo.forEach(frameId => {
                    const frame = character.getFrameById(parseInt(frameId, 10));
                    if (frame) {
                        frames.push(frame);
                    }
                });
                let startStatus = startStatus_1.startStatuses.getStartStatusById(comboFromLS.startStatus ? comboFromLS.startStatus : "1");
                if (!startStatus) {
                    startStatus = startStatus_1.startStatuses.getStartStatusById("1");
                }
                let position = position_1.positions.getPositionById(comboFromLS.position ? comboFromLS.position : "1");
                if (!position) {
                    position = position_1.positions.getPositionById("1");
                }
                combos.pushCombo(new Combo_1.default(comboFromLS.id, "", character, frames, startStatus, position, comboFromLS.damage, comboFromLS.stun, comboFromLS.title, comboFromLS.memo, comboFromLS.create));
            }
        });
    }
    return combos;
}
exports.getCombosFromLocalStroage = getCombosFromLocalStroage;
//# sourceMappingURL=combo.js.map