"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor(id, docId = "", character, combo, startStatus, position, damage, stun, title = "", memo = "", create) {
        this.id = id;
        this.docId = docId;
        this.character = character;
        this.combo = combo;
        this.startStatus = startStatus;
        this.position = position;
        this.damage = damage;
        this.stun = stun;
        this.title = title;
        this.memo = memo;
        this.create = create;
    }
    getDateForFireStore() {
        const frames = [];
        this.combo.forEach(frame => {
            frames.push(frame.id);
        });
        return {
            id: this.id,
            characterId: this.character.id,
            combo: frames,
            damage: this.damage,
            startStatusId: this.startStatus.id,
            positionId: this.position.id,
            stun: this.stun,
            title: this.title,
            memo: this.memo,
            create: this.create
        };
    }
}
exports.default = default_1;
//# sourceMappingURL=Combo.js.map