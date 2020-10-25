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
    zeroFill(val) {
        return ("0" + String(val)).slice(-2);
    }
    // 2020年10月23日18:28
    getDateFromat() {
        return `${this.create.getFullYear()}年${this.create.getMonth() +
            1}月${this.create.getDate()}日${this.zeroFill(this.create.getHours())}:${this.zeroFill(this.create.getMinutes())}`;
    }
    // 2020-10-23T18:28:02+09:00
    getDateFormatTimezone() {
        return `${this.create.getFullYear()}-${this.create.getMonth() +
            1}-${this.create.getDate()}T${this.zeroFill(this.create.getHours())}:${this.zeroFill(this.create.getMinutes())}:${this.zeroFill(this.create.getSeconds())}+09:00`;
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