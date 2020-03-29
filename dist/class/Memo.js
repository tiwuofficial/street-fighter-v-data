export default class {
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
//# sourceMappingURL=Memo.js.map