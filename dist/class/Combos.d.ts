import Combo from "./Combo";
export default class {
    combos: Combo[];
    constructor();
    getComboFromId(id: number): Combo | undefined;
    getNextId(): number;
    updateComboById(id: number, combo: Combo): void;
    pushCombo(combo: Combo): void;
    sortedComboForEach(callback: (combo: Combo) => void, sortKey?: "create" | "damage" | "stun", sortOrder?: "asc" | "desc"): void;
    save(): void;
    getSaveDate(): any;
}
