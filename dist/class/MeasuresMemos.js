"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor() {
        this.measuresMemo = [];
    }
    getNextId() {
        const measuresMemo = this.measuresMemo[this.measuresMemo.length - 1];
        if (measuresMemo) {
            return measuresMemo.id + 1;
        }
        return 1;
    }
    pushMeasuresMemo(measuresMemo) {
        this.measuresMemo.push(measuresMemo);
    }
    save() {
        localStorage.setItem("measuresMemos", JSON.stringify(this.getSaveData()));
    }
    getSaveData() {
        return this.measuresMemo.map(measuresMemo => {
            return measuresMemo.getSaveData();
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=MeasuresMemos.js.map