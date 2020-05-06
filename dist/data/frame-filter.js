"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FrameFilteres_1 = require("../class/FrameFilteres");
const FrameFilter_1 = require("../class/FrameFilter");
const frameFilteres = new FrameFilteres_1.default();
exports.frameFilteres = frameFilteres;
frameFilteres.setFrameFilteres(new FrameFilter_1.default("0", "指定なし"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("1", "通常技"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("2", "ジャンプ技"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("3", "特殊技"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("4", "通常投げ"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("5", "Vシステム"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("6", "必殺技"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("7", "クリティカルアーツ"));
//# sourceMappingURL=frame-filter.js.map