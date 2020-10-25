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

  constructor(
    id: number,
    docId = "",
    character: Character,
    combo: Frame[],
    startStatus: StartStatus,
    position: Position,
    damage: number,
    stun: number,
    title = "",
    memo = "",
    create: Date
  ) {
    this.id = id;
    this.docId = docId;
    this.character = character;
    this.combo = combo;
    this.startStatus = startStatus;
    this.position = position;
    this.damage = damage;
    this.stun = stun;
    this.title = title;
    this.memo = memo;
    this.create = create;
  }

  zeroFill(val: number): string {
    return ("0" + String(val)).slice(-2);
  }

  // 2020年10月23日18:28
  getDateFromat(): string {
    return `${this.create.getFullYear()}年${this.create.getMonth() +
      1}月${this.create.getDate()}日${this.zeroFill(this.create.getHours())}:${this.zeroFill(
      this.create.getMinutes()
    )}`;
  }

  // 2020-10-23T18:28:02+09:00
  getDateFormatTimezone(): string {
    return `${this.create.getFullYear()}-${this.create.getMonth() +
      1}-${this.create.getDate()}T${this.zeroFill(this.create.getHours())}:${this.zeroFill(
      this.create.getMinutes()
    )}:${this.zeroFill(this.create.getSeconds())}+09:00`;
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
      startStatusId: this.startStatus.id,
      positionId: this.position.id,
      stun: this.stun,
      title: this.title,
      memo: this.memo,
      create: this.create
    };
  }
}
