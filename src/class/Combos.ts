import Combo from "./Combo";

export default class {
  combos: Combo[];

  constructor() {
    this.combos = [];
  }

  getComboFromId(id: number): Combo | undefined {
    return this.combos.find(combo => {
      return combo.id === id;
    });
  }

  getNextId(): number {
    const lastCombo = this.combos[this.combos.length - 1];
    if (lastCombo) {
      return lastCombo.id + 1;
    }
    return 1;
  }

  deleteComboById(id: number): void {
    const index = this.combos.findIndex(combo => {
      return combo.id === id;
    });
    this.combos.splice(index, 1);
  }

  pushCombo(combo: Combo): void {
    this.combos.push(combo);
  }

  save(): void {
    localStorage.setItem("combos", JSON.stringify(this.getSaveDate()));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getSaveDate(): any {
    return this.combos.map(combo => {
      const frames = [];
      combo.combo.forEach(frame => {
        frames.push(frame.id);
      });
      return {
        id: combo.id,
        characterId: combo.character.id,
        combo: frames,
        damage: combo.damage,
        startStatus: combo.startStatus.id,
        position: combo.position.id,
        stun: combo.stun,
        title: combo.title,
        memo: combo.memo,
        create: combo.create
      };
    });
  }
}
