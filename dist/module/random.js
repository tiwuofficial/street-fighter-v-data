"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.getRandom = getRandom;
function getRandomArray(min, max, count) {
    const randoms = [];
    /** 重複チェックしながら乱数作成 */
    for (let i = min; i <= max - 1; i++) {
        while (true) {
            const tmp = getRandom(min, max);
            // 0 を返すとフレームクイズで正解が2つになってしまうので除く
            if (!randoms.includes(tmp) && tmp !== 0) {
                randoms.push(tmp);
                break;
            }
        }
    }
    const tmp = randoms.slice(0, count);
    tmp.push(0);
    return shuffle(tmp);
}
exports.getRandomArray = getRandomArray;
//# sourceMappingURL=random.js.map