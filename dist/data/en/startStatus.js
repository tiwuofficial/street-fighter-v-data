"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StartStatuses_1 = require("../../class/StartStatuses");
const StartStatus_1 = require("../../class/StartStatus");
const startStatuses = new StartStatuses_1.default();
exports.startStatuses = startStatuses;
startStatuses.setStartStatuss(new StartStatus_1.default("1", "None"));
startStatuses.setStartStatuss(new StartStatus_1.default("2", "Counter hit"));
startStatuses.setStartStatuss(new StartStatus_1.default("3", "Stan"));
startStatuses.setStartStatuss(new StartStatus_1.default("4", "Crash counter"));
//# sourceMappingURL=startStatus.js.map