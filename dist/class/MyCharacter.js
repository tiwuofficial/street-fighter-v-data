"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("../data/character");
const LS_KEY = "myCharacterEnName";
class default_1 {
    constructor() {
        // todo クリーンアーキテクチャのように、データ操作クラスはコンストラクタで渡す
        let myCharacterEnName = localStorage.getItem(LS_KEY);
        if (!myCharacterEnName) {
            myCharacterEnName = "ryu";
            localStorage.setItem(LS_KEY, myCharacterEnName);
        }
        this.character = character_1.characters.getCharacterByEnName(myCharacterEnName);
    }
    setCharacterByEnName(enName) {
        this.character = character_1.characters.getCharacterByEnName(enName);
        // 保存
        // todo クリーンアーキテクチャのように、データ操作クラスはコンストラクタで渡す
        localStorage.setItem("myCharacterEnName", enName);
    }
    getEnName() {
        return this.character.enName;
    }
}
exports.default = default_1;
//# sourceMappingURL=MyCharacter.js.map