export default class {
  id: string;
  startLP: number;
  endLP: number;
  name: string;
  enName: string;
  words: string[];

  constructor(id: string, startLP: number, endLP: number, name: string, enName: string, words: string[] = []) {
    this.id = id;
    this.startLP = startLP;
    this.endLP = endLP;
    this.name = name;
    this.enName = enName;
    this.words = words;
  }
}
