export default class {
  id: string;
  text: string;
  type: "" | "normal" | "jump" | "unique" | "throw" | "vsystem" | "special" | "ca";

  constructor(id: string, text: string, type: "" | "normal" | "jump" | "unique" | "throw" | "vsystem" | "special" | "ca") {
    this.id = id;
    this.text = text;
    this.type = type;
  }
}
