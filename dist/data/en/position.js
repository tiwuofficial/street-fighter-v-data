"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Positions_1 = require("../../class/Positions");
const Position_1 = require("../../class/Position");
const positions = new Positions_1.default();
exports.positions = positions;
positions.setPositions(new Position_1.default("1", "Middle"));
positions.setPositions(new Position_1.default("2", "Screen edge"));
positions.setPositions(new Position_1.default("3", "Anti-aircraft"));
//# sourceMappingURL=position.js.map