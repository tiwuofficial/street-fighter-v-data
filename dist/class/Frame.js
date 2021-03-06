"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const frameCalculation_1 = require("../module/frameCalculation");
class default_1 {
    constructor(id, name, stan, remarks, guard, outbreak, persistence, rigidity, hit, damage, type, vtrigger, command, zeku = "") {
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
    getCaluculationOutbreak() {
        if (this.outbreak === "") {
            return null;
        }
        return frameCalculation_1.frameCalculation(this.outbreak);
    }
    /**
     *
     *
     * @returns {(number | null)}
     */
    getCaluculationGuard() {
        if (this.guard === "") {
            return null;
        }
        return frameCalculation_1.frameCalculation(this.guard);
    }
    getObject() {
        return {
            id: this.id,
            name: this.name,
            outbreak: this.outbreak,
            persistence: this.persistence,
            rigidity: this.rigidity,
            hit: this.hit,
            guard: this.guard,
            damage: this.damage,
            stan: this.stan,
            remarks: this.remarks,
            type: this.type,
            vtrigger: this.vtrigger,
            command: this.command,
            zeku: this.zeku
        };
    }
}
exports.default = default_1;
//# sourceMappingURL=Frame.js.map