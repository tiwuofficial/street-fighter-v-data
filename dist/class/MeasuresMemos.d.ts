import MeasuresMemo, { MeasuresMemoSaveData } from "./MeasuresMemo";
export default class {
    measuresMemo: MeasuresMemo[];
    constructor();
    getNextId(): number;
    pushMeasuresMemo(measuresMemo: MeasuresMemo): void;
    save(): void;
    getSaveData(): MeasuresMemoSaveData[];
}
