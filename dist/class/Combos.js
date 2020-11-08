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
    updateComboById(id, combo) {
        const index = this.combos.findIndex(combo => {
            return combo.id === id;
        });
        this.combos.splice(index, 1, combo);
    }
    pushCombo(combo) {
        this.combos.push(combo);
    }
    sortedComboForEach(callback, sortKey = "create", sortOrder = "desc", filterStartStatues = [], filterPositions = []) {
        let combos = this.combos;
        if (filterStartStatues.length > 0) {
            const filterStartStatusIds = filterStartStatues.map(filterStartStatus => {
                return filterStartStatus.id;
            });
            combos = combos.filter(combo => {
                return filterStartStatusIds.includes(combo.startStatus.id);
            });
        }
        if (filterPositions.length > 0) {
            const filterPositionIds = filterPositions.map(filterPosition => {
                return filterPosition.id;
            });
            combos = combos.filter(combo => {
                return filterPositionIds.includes(combo.position.id);
            });
        }
        combos.sort((a, b) => {
            if (sortKey === "create") {
                if (sortOrder === "asc") {
                    if (a[sortKey] > b[sortKey]) {
                        return 1;
                    }
                    if (a[sortKey] < b[sortKey]) {
                        return -1;
                    }
                }
                if (a[sortKey] > b[sortKey]) {
                    return -1;
                }
                if (a[sortKey] < b[sortKey]) {
                    return 1;
                }
                return 0;
            }
            if (sortOrder === "asc") {
                return a[sortKey] - b[sortKey];
            }
            return b[sortKey] - a[sortKey];
        });
        combos.forEach((combo, index) => {
            callback(combo, index);
        });
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