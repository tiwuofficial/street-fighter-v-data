import Character from "./Character";
import Frame from "./Frame";
import StartStatus from "./StartStatus";
import Position from "./Position";
export default class {
    id: number;
    docId: string;
    character: Character;
    combo: Frame[];
    startStatus: StartStatus;
    position: Position;
    damage: number;
    stun: number;
    title: string;
    memo: string;
    create: Date;
    constructor(id: number, docId: string, character: Character, combo: Frame[], startStatus: StartStatus, position: Position, damage: number, stun: number, title: string, memo: string, create: Date);
    zeroFill(val: number): string;
    getDateFromat(): string;
    getDateFormatTimezone(): string;
    getDateForFireStore(): object;
}
