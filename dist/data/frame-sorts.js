"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FrameSorts_1 = require("../class/FrameSorts");
const FrameSort_1 = require("../class/FrameSort");
const frameSorts = new FrameSorts_1.default();
exports.frameSorts = frameSorts;
frameSorts.setFrameSorts(new FrameSort_1.default("0", "デフォルト", "", "asc"));
frameSorts.setFrameSorts(new FrameSort_1.default("1", "発生の早い順", "outbreak", "asc"));
frameSorts.setFrameSorts(new FrameSort_1.default("2", "発生の遅い順", "outbreak", "desc"));
frameSorts.setFrameSorts(new FrameSort_1.default("3", "ヒット時のフレームが有利順", "hit", "desc"));
frameSorts.setFrameSorts(new FrameSort_1.default("4", "ヒット時のフレームが不利順", "hit", "asc"));
frameSorts.setFrameSorts(new FrameSort_1.default("5", "ガード時のフレームが有利順", "guard", "desc"));
frameSorts.setFrameSorts(new FrameSort_1.default("6", "ガード時のフレームが不利順", "guard", "asc"));
//# sourceMappingURL=frame-sorts.js.map