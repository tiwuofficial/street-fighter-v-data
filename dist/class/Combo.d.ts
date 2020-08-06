import Character from "./Character";
import Frame from "./Frame";
export default class {
    id: number;
    docId: string;
    character: Character;
    combo: Frame[];
    damage: number;
    stun: number;
    title: string;
    memo: string;
    create: Date;
    constructor(id: number, docId: string, character: Character, combo: Frame[], damage: number, stun: number, title: string, memo: string, create: Date);
    getDateForFireStore(): object;
}
