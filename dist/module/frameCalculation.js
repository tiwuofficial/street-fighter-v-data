export function frameCalculation(value) {
    // 全体45 パターン
    if (value.indexOf("全体") >= 0) {
        value = value.replace(/全体/, "");
    }
    // 着地後45 パターン
    if (value.indexOf("着地後") >= 0) {
        value = value.replace(/着地後/, "");
    }
    // 1+3 パターン
    if (value.indexOf("+") >= 0) {
        const valueSplit = value.split("+");
        return parseInt(valueSplit[0]) + parseInt(valueSplit[1]);
    }
    // 90(※70) パターン
    if (value.indexOf("(※") >= 0) {
        const valueSplit = value.split("(※");
        return parseInt(valueSplit[0]);
    }
    // ※7, ※-7 パターン
    if (value.indexOf("※") >= 0) {
        value = value.replace(/※/, "");
    }
    // 1, -1 などを判定
    return /^\d+|-\d+$/g.test(value) ? parseInt(value) : 0;
}
//# sourceMappingURL=frameCalculation.js.map