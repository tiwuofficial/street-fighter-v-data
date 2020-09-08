import MeasuresMemo, { MeasuresMemoSaveData } from "./MeasuresMemo";
import Characters from "./Characters";

export default class {
  measuresMemo: MeasuresMemo[];
  measuresMemosLSKey: "measuresMemos";

  constructor() {
    this.measuresMemo = [];
    this.measuresMemosLSKey = "measuresMemos";
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
    localStorage.setItem(this.measuresMemosLSKey, JSON.stringify(this.getSaveData()));
  }

  syncFromLS(characters: Characters): void {
    const measuresMemosLS = JSON.parse(localStorage.getItem(this.measuresMemosLSKey));

    if (measuresMemosLS) {
      measuresMemosLS.forEach((measuresMemoLS: MeasuresMemoSaveData) => {
        const character = characters.getCharacterById(measuresMemoLS.characterId);
        const measuresCharacter = characters.getCharacterById(measuresMemoLS.measuresCharacterId);
        if (character && measuresCharacter) {
          const skill = measuresCharacter.getFrameById(Number(measuresMemoLS.skillId));
          this.pushMeasuresMemo(
            new MeasuresMemo(
              measuresMemoLS.id,
              character,
              measuresCharacter,
              skill ?? null,
              measuresMemoLS.memo,
              measuresMemoLS.create
            )
          );
        }
      });
    }
  }

  getSaveData(): MeasuresMemoSaveData[] {
    return this.measuresMemo.map(measuresMemo => {
      return measuresMemo.getSaveData();
    });
  }
}
