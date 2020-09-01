"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor(id, character, measuresCharacter, memo, create) {
        this.id = id;
        this.character = character;
        this.measuresCharacter = measuresCharacter;
        this.memo = memo;
        this.create = create;
    }
    getSaveData() {
        return {
            id: this.id,
            characterId: this.character.id,
            measuresCharacterId: this.measuresCharacter.id,
            memo: this.memo,
            create: this.create
        };
    }
}
exports.default = default_1;
//# sourceMappingURL=MeasuresMemo.js.map