import Combo from "./Combo";
export default class {
    combos: Combo[];
    constructor();
    getComboFromId(id: number): Combo | undefined;
    getNextId(): number;
    updateComboById(id: number, combo: Combo): void;
    pushCombo(combo: Combo): void;
    save(): void;
    getSaveDate(): any;
}
