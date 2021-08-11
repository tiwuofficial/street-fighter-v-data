import CharacterSelect from "./CharacterSelect";

export default class {
  characterSelects: CharacterSelect[];

  constructor() {
    this.characterSelects = [];
  }

  /**
   *
   * @param {CharacterSelect} characterSelect
   */
  setCharacterSelect(characterSelect: CharacterSelect): void {
    this.characterSelects.push(characterSelect);
  }

  /**
   *
   * @param {(characterSelect: CharacterSelect ) => void} callback
   */
  characterSelectsForEach(callback: (characterSelect: CharacterSelect) => void): void {
    this.characterSelects.forEach(characterSelect => {
      callback(characterSelect);
    });
  }

  /**
   *
   * @param {string} id
   * @returns {CharacterSelect | undefined}
   */
  getCharacterSelectById(id: string): CharacterSelect | undefined {
    return this.characterSelects.find(characterSelect => {
      return characterSelect.id === id;
    });
  }
}
