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
  command: string;

  constructor(id: number, name: string, stan: string, remarks: string, guard: string, outbreak: string, persistence:string, rigidity:string, hit:string, damage:string, command:string) {
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
    this.command = command;
  }
}

