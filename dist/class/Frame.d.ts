export default class {
    id: number;
    name: string;
    outbreak: string;
    persistence: string;
    rigidity: string;
    hit: string;
    guard: string;
    damage: string;
    stan: string;
    remarks: string;
    type: "normal" | "jump" | "unique" | "throw" | "vsystem" | "special" | "ca";
    vtrigger: 1 | 2;
    command: string;
    zeku: "" | "old" | "young";
    constructor(id: number, name: string, stan: string, remarks: string, guard: string, outbreak: string, persistence: string, rigidity: string, hit: string, damage: string, type: "normal" | "jump" | "unique" | "throw" | "vsystem" | "special" | "ca", vtrigger: 1 | 2, command: string, zeku?: "" | "old" | "young");
    /**
     *
     *
     * @returns {(number | null)}
     */
    getCaluculationOutbreak(): number | null;
    /**
     *
     *
     * @returns {(number | null)}
     */
    getCaluculationGuard(): number | null;
    getObject(): {
        id: number;
        name: string;
        outbreak: string;
        persistence: string;
        rigidity: string;
        hit: string;
        guard: string;
        damage: string;
        stan: string;
        remarks: string;
        type: "normal" | "jump" | "unique" | "throw" | "vsystem" | "special" | "ca";
        vtrigger: 1 | 2;
        command: string;
        zeku: "" | "old" | "young";
    };
}
