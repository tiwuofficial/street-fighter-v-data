import { frameCalculation } from "../module/frameCalculation";

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

  constructor(
    id: number,
    name: string,
    stan: string,
    remarks: string,
    guard: string,
    outbreak: string,
    persistence: string,
    rigidity: string,
    hit: string,
    damage: string,
    type: "normal" | "jump" | "unique" | "throw" | "vsystem" | "special" | "ca",
    vtrigger: 1 | 2,
    command: string,
    zeku: "" | "old" | "young" = ""
  ) {
    this.id = id;
    this.name = name;
    this.outbreak = outbreak;
    this.persistence = persistence;
    this.rigidity = rigidity;
    this.hit = hit;
    this.guard = guard;
    this.damage = damage;
    this.stan = stan;
    this.remarks = remarks;
    this.type = type;
    this.vtrigger = vtrigger;
    this.command = command;
    this.zeku = zeku;
  }

  /**
   *
   *
   * @returns {(number | null)}
   */
  getCaluculationOutbreak(): number | null {
    if (this.outbreak === "") {
      return null;
    }
    return frameCalculation(this.outbreak);
  }

  /**
   *
   *
   * @returns {(number | null)}
   */
  getCaluculationGuard(): number | null {
    if (this.guard === "") {
      return null;
    }
    return frameCalculation(this.guard);
  }
}
