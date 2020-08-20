import Combo from "./Combo";
export default class {
    combos: Combo[];
    constructor();
    getComboFromId(id: number): Combo | undefined;
    getNextId(): number;
    deleteComboById(id: number): void;
    pushCombo(combo: Combo): void;
    save(): void;
    getSaveDate(): any;
}
