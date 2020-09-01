import Character from "./Character";
import Frame from "./Frame";
export declare type MeasuresMemoSaveData = {
    id: number;
    characterId: string;
    measuresCharacterId: string;
    skillId: string;
    memo: string;
    create: Date;
};
export default class {
    id: number;
    character: Character;
    measuresCharacter: Character;
    skill: Frame | null;
    memo: string;
    create: Date;
    constructor(id: number, character: Character, measuresCharacter: Character, skill: Frame | null, memo: any, create: Date);
    getSaveData(): MeasuresMemoSaveData;
}
