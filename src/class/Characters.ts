import Character from "./Character";
import Frame from "./Frame";

export default class {
  characters: Character[];

  /**
   *
   */
  constructor() {
    this.characters = [];
  }

  /**
   *
   * @param {Character} character
   */
  setCharacter(character: Character): void {
    this.characters.push(character);
  }

  /**
   *
   * @param {(character: Character) => void} callback
   */
  characterForEach(callback: (character: Character) => void): void {
    this.characters.forEach(character => {
      callback(character);
    });
  }

  /**
   *
   * @param {string} id
   * @returns {Character | undefined}
   */
  getCharacterById(id: string): Character | undefined {
    return this.characters.find(character => {
      return character.id === id;
    });
  }

  /**
   *
   * @param {string} enName
   * @returns {Character | undefined}
   */
  getCharacterByEnName(enName: string): Character | undefined {
    return this.characters.find(character => {
      return character.enName === enName;
    });
  }

  /**
   *
   * @param {string} enName
   * @param {(frame: ) => void} callback
   * @param {string} sortKey
   * @param {string} sortOrder
   */
  sortedFrameForEachByEnName(enName: string, callback: (frame: Frame, character: Character) => void, filterTypes = [], sortKey = "", sortOrder = "asc"): void {
    const character = this.getCharacterByEnName(enName);
    if (character) {
      character.sortedFrameForEach(callback, filterTypes, sortKey, sortOrder);
    }
  }
}
