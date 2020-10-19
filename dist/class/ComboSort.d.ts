export default class {
    id: string;
    text: string;
    sortKey: string;
    sortOrder: "asc" | "desc";
    constructor(id: string, text: string, sortKey: "create" | "damage" | "stun", sortOrder: "asc" | "desc");
}
