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

  constructor(id: number, docId = "", character: Character, combo: Frame[], damage: number, stun: number, title = "", memo = "", create: Date) {
    this.id = id;
    this.docId = docId;
    this.character = character;
    this.combo = combo;
    this.damage = damage;
    this.stun = stun;
    this.title = title;
    this.memo = memo;
    this.create = create;
  }

  getDateForFireStore(): object {
    const frames = [];
    this.combo.forEach(frame => {
      frames.push(frame.id);
    });
    return {
      id: this.id,
      characterId: this.character.id,
      combo: frames,
      damage: this.damage,
      stun: this.stun,
      title: this.title,
      memo: this.memo,
      create: this.create
    };
  }
}
