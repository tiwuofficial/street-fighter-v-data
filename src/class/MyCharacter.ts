import Character from "./Character";
import { characters } from "../data/character";

const LS_KEY = "myCharacterEnName";

export default class {
  character: Character;

  constructor() {
    // todo クリーンアーキテクチャのように、データ操作クラスはコンストラクタで渡す
    let myCharacterEnName = localStorage.getItem(LS_KEY);
    if (!myCharacterEnName) {
      myCharacterEnName = "ryu";
      localStorage.setItem(LS_KEY, myCharacterEnName);
    }

    this.character = characters.getCharacterByEnName(myCharacterEnName);
  }

  setCharacterByEnName(enName: string): void {
    this.character = characters.getCharacterByEnName(enName);
    // 保存
    // todo クリーンアーキテクチャのように、データ操作クラスはコンストラクタで渡す
    localStorage.setItem("myCharacterEnName", enName);
  }

  getEnName(): string {
    return this.character.enName;
  }
}
