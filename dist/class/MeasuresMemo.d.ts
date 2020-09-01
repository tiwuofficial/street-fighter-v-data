import Character from "./Character";
import Frame from "./Frame";
export declare type MeasuresMemoSaveData = {
    id: number;
    characterId: string;
    measuresCharacterId: string;
    memo: string;
    create: Date;
};
export default class {
    id: number;
    character: Character;
    measuresCharacter: Character;
    skill: Frame;
    memo: string;
    create: Date;
    constructor(id: number, character: Character, measuresCharacter: Character, memo: any, create: Date);
    getSaveData(): MeasuresMemoSaveData;
}
