"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor() {
        this.combos = [];
    }
    getComboFromId(id) {
        return this.combos.find(combo => {
            return combo.id === id;
        });
    }
    getNextId() {
        const lastCombo = this.combos[this.combos.length - 1];
        if (lastCombo) {
            return lastCombo.id + 1;
        }
        return 1;
    }
    pushCombo(combo) {
        this.combos.push(combo);
    }
    save() {
        localStorage.setItem("combos", JSON.stringify(this.getSaveDate()));
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getSaveDate() {
        return this.combos.map(combo => {
            const frames = [];
            combo.combo.forEach(frame => {
                frames.push(frame.id);
            });
            return {
                id: combo.id,
                characterId: combo.character.id,
                combo: frames,
                damage: combo.damage,
                startStatus: combo.startStatus.id,
                position: combo.position.id,
                stun: combo.stun,
                title: combo.title,
                memo: combo.memo,
                create: combo.create
            };
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=Combos.js.map