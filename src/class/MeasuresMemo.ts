import Character from "./Character";
import Frame from "./Frame";

export type MeasuresMemoSaveData = {
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

  constructor(id: number, character: Character, measuresCharacter: Character, memo, create: Date) {
    this.id = id;
    this.character = character;
    this.measuresCharacter = measuresCharacter;
    this.memo = memo;
    this.create = create;
  }

  getSaveData(): MeasuresMemoSaveData {
    return {
      id: this.id,
      characterId: this.character.id,
      measuresCharacterId: this.measuresCharacter.id,
      memo: this.memo,
      create: this.create
    };
  }
}
