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

  updateComboById(id: number, combo: Combo): void {
    const index = this.combos.findIndex(combo => {
      return combo.id === id;
    });
    this.combos.splice(index, 1, combo);
  }

  pushCombo(combo: Combo): void {
    this.combos.push(combo);
  }

  sortedComboForEach(
    callback: (combo: Combo) => void,
    sortKey: "create" | "damage" | "stun" = "create",
    sortOrder: "asc" | "desc" = "desc"
  ): void {
    const combos = this.combos;

    combos.sort((a, b) => {
      if (sortKey === "create") {
        if (a[sortKey] > b[sortKey]) {
          return -1;
        }
        if (a[sortKey] < b[sortKey]) {
          return 1;
        }
        return 0;
      }

      if (sortOrder === "asc") {
        return a[sortKey] - b[sortKey];
      }

      return b[sortKey] - a[sortKey];
    });

    combos.forEach(combo => {
      callback(combo);
    });
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
