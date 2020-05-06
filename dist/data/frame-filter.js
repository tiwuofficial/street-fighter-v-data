"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FrameFilteres_1 = require("../class/FrameFilteres");
const FrameFilter_1 = require("../class/FrameFilter");
const frameFilteres = new FrameFilteres_1.default();
exports.frameFilteres = frameFilteres;
frameFilteres.setFrameFilteres(new FrameFilter_1.default("1", "通常技", "normal"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("2", "ジャンプ技", "jump"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("3", "特殊技", "unique"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("4", "通常投げ", "throw"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("5", "Vシステム", "vsystem"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("6", "必殺技", "special"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("7", "クリティカルアーツ", "ca"));
//# sourceMappingURL=frame-filter.js.map