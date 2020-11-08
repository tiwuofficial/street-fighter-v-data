import Combo from "./Combo";
import Position from "./Position";
import StartStatus from "./StartStatus";
export default class {
    combos: Combo[];
    constructor();
    getComboFromId(id: number): Combo | undefined;
    getNextId(): number;
    updateComboById(id: number, combo: Combo): void;
    pushCombo(combo: Combo): void;
    sortedComboForEach(callback: (combo: Combo, index: number) => void, sortKey?: "create" | "damage" | "stun", sortOrder?: "asc" | "desc", filterStartStatus?: StartStatus, filterPosition?: Position): void;
    save(): void;
    getSaveDate(): any;
}
