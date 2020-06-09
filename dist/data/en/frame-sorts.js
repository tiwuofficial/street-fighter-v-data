"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FrameSorts_1 = require("../../class/FrameSorts");
const FrameSort_1 = require("../../class/FrameSort");
const frameSorts = new FrameSorts_1.default();
exports.frameSorts = frameSorts;
frameSorts.setFrameSorts(new FrameSort_1.default("0", "Default", "", "asc"));
frameSorts.setFrameSorts(new FrameSort_1.default("1", "In order of fast Startup", "outbreak", "asc"));
frameSorts.setFrameSorts(new FrameSort_1.default("2", "In order of late Startup", "outbreak", "desc"));
frameSorts.setFrameSorts(new FrameSort_1.default("3", "Frame at hit is in order of advantage", "hit", "desc"));
frameSorts.setFrameSorts(new FrameSort_1.default("4", "Frame on hit in order of disadvantage", "hit", "asc"));
frameSorts.setFrameSorts(new FrameSort_1.default("5", "Frame at guard is in order of advantage", "guard", "desc"));
frameSorts.setFrameSorts(new FrameSort_1.default("6", "Frame at guard is in order of disadvantage", "guard", "asc"));
//# sourceMappingURL=frame-sorts.js.map