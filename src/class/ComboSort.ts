export default class {
  id: string;
  text: string;
  sortKey: "create" | "damage" | "stun";
  sortOrder: "asc" | "desc";

  constructor(
    id: string,
    text: string,
    sortKey: "create" | "damage" | "stun",
    sortOrder: "asc" | "desc"
  ) {
    this.id = id;
    this.text = text;
    this.sortKey = sortKey;
    this.sortOrder = sortOrder;
  }
}
