"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StartStatuses_1 = require("../class/StartStatuses");
const StartStatus_1 = require("../class/StartStatus");
const startStatuses = new StartStatuses_1.default();
exports.startStatuses = startStatuses;
startStatuses.setStartStatuss(new StartStatus_1.default("1", "なし"));
startStatuses.setStartStatuss(new StartStatus_1.default("2", "カウンターヒット"));
startStatuses.setStartStatuss(new StartStatus_1.default("3", "スタン"));
startStatuses.setStartStatuss(new StartStatus_1.default("4", "クラカン"));
//# sourceMappingURL=startStatus.js.map