import Character from "./Character";
import Combo from "./Combo";
import Frame from "./Frame";
import Position from "./Position";
import StartStatus from "./StartStatus";

export default class {
  combos: Combo[];

  constructor() {
    this.combos = [];
  }

  getComboFromDocId(docId: string): Combo | undefined {
    return this.combos.find(combo => {
      return combo.docId === docId;
    });
  }

  getComboFromId(id: number): Combo | undefined {
    return this.combos.find(combo => {
      return combo.id === id;
    });
  }

  getNextId(): number {
    const ids = this.combos.map(combo => {
      return combo.id;
    });
    const maxId = Math.max(...ids);
    if (maxId !== -Infinity) {
      return maxId + 1;
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

  getCharacterStartSkillMap(): Map<Character, Frame[]> {
    const characterStartSkillMap = new Map<Character, Frame[]>();
    this.combos.forEach(combo => {
      if (!characterStartSkillMap.has(combo.character)) {
        characterStartSkillMap.set(combo.character, []);
      }
      const startSkills = characterStartSkillMap.get(combo.character);
      const skill = combo.combo[0];
      if (skill && !startSkills.includes(skill)) {
        startSkills.push(skill);
      }
    });
    return characterStartSkillMap;
  }

  sortedComboForEach(
    callback: (combo: Combo, index: number) => void,
    sortKey: "create" | "damage" | "stun" = "create",
    sortOrder: "asc" | "desc" = "desc",
    filterStartStatues: StartStatus[] = [],
    filterPositions: Position[] = []
  ): void {
    let combos = this.combos;

    if (filterStartStatues.length > 0) {
      const filterStartStatusIds = filterStartStatues.map(filterStartStatus => {
        return filterStartStatus.id;
      });
      combos = combos.filter(combo => {
        return filterStartStatusIds.includes(combo.startStatus.id);
      });
    }

    if (filterPositions.length > 0) {
      const filterPositionIds = filterPositions.map(filterPosition => {
        return filterPosition.id;
      });
      combos = combos.filter(combo => {
        return filterPositionIds.includes(combo.position.id);
      });
    }

    combos.sort((a, b) => {
      if (sortKey === "create") {
        if (sortOrder === "asc") {
          if (a[sortKey] > b[sortKey]) {
            return 1;
          }
          if (a[sortKey] < b[sortKey]) {
            return -1;
          }
        }

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

    combos.forEach((combo, index) => {
      callback(combo, index);
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
