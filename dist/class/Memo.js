"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    /* eslint @typescript-eslint/no-empty-function: 0 */
    constructor() { }
    getMemoByEnName(enName) {
        const memo = JSON.parse(localStorage.getItem(`memo_${enName}`));
        if (memo && memo.character) {
            return memo.character;
        }
        return "";
    }
    setMemoByEnName(enName, memo) {
        // 保存
        localStorage.setItem(`memo_${enName}`, JSON.stringify({
            character: memo
        }));
    }
}
exports.default = default_1;
//# sourceMappingURL=Memo.js.map