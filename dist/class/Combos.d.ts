import Character from "./Character";
import Combo from "./Combo";
import Frame from "./Frame";
import Position from "./Position";
import StartStatus from "./StartStatus";
export default class {
    combos: Combo[];
    constructor();
    getComboFromId(id: number): Combo | undefined;
    getNextId(): number;
    updateComboById(id: number, combo: Combo): void;
    pushCombo(combo: Combo): void;
    getCharacterStartSkillMap(): Map<Character, Frame[]>;
    sortedComboForEach(callback: (combo: Combo, index: number) => void, sortKey?: "create" | "damage" | "stun", sortOrder?: "asc" | "desc", filterStartStatues?: StartStatus[], filterPositions?: Position[]): void;
    save(): void;
    getSaveDate(): any;
}
