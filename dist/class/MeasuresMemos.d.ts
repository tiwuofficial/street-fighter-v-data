import MeasuresMemo, { MeasuresMemoSaveData } from "./MeasuresMemo";
import Characters from "./Characters";
export default class {
    measuresMemo: MeasuresMemo[];
    measuresMemosLSKey: "measuresMemos";
    constructor();
    getNextId(): number;
    pushMeasuresMemo(measuresMemo: MeasuresMemo): void;
    save(): void;
    syncFromLS(characters: Characters): void;
    getSaveData(): MeasuresMemoSaveData[];
}
