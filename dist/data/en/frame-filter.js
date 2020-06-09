"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FrameFilteres_1 = require("../../class/FrameFilteres");
const FrameFilter_1 = require("../../class/FrameFilter");
const frameFilteres = new FrameFilteres_1.default();
exports.frameFilteres = frameFilteres;
frameFilteres.setFrameFilteres(new FrameFilter_1.default("1", "Normal Moves", "normal"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("2", "Jump Moves", "jump"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("3", "Unique Attacks", "unique"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("4", "Normal Throws", "throw"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("5", "V-System", "vsystem"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("6", "Special Moves", "special"));
frameFilteres.setFrameFilteres(new FrameFilter_1.default("7", "Critical Art", "ca"));
//# sourceMappingURL=frame-filter.js.map