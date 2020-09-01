import MeasuresMemo, { MeasuresMemoSaveData } from "./MeasuresMemo";

export default class {
  measuresMemo: MeasuresMemo[];

  constructor() {
    this.measuresMemo = [];
  }

  getNextId(): number {
    const measuresMemo = this.measuresMemo[this.measuresMemo.length - 1];
    if (measuresMemo) {
      return measuresMemo.id + 1;
    }
    return 1;
  }

  pushMeasuresMemo(measuresMemo: MeasuresMemo): void {
    this.measuresMemo.push(measuresMemo);
  }

  save(): void {
    localStorage.setItem("measuresMemos", JSON.stringify(this.getSaveData()));
  }

  getSaveData(): MeasuresMemoSaveData[] {
    return this.measuresMemo.map(measuresMemo => {
      return measuresMemo.getSaveData();
    });
  }
}
