import Combo from "./Combo";
export default class {
    combos: Combo[];
    constructor();
    getComboFromId(id: number): Combo | undefined;
    getNextId(): number;
    pushCombo(combo: Combo): void;
    save(): void;
    getSaveDate(): any;
}
