import MeasuresMemo, { MeasuresMemoSaveData } from "./MeasuresMemo";
export default class {
    measuresMemo: MeasuresMemo[];
    measuresMemosLSKey: "measuresMemos";
    constructor();
    getNextId(): number;
    pushMeasuresMemo(measuresMemo: MeasuresMemo): void;
    save(): void;
    syncFromLS(): void;
    getSaveData(): MeasuresMemoSaveData[];
}
