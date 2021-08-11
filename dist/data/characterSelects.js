"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterSelects_1 = require("../class/CharacterSelects");
const CharacterSelect_1 = require("../class/CharacterSelect");
const characterSelects = new CharacterSelects_1.default();
exports.characterSelects = characterSelects;
characterSelects.setCharacterSelect(new CharacterSelect_1.default("1", "ON"));
characterSelects.setCharacterSelect(new CharacterSelect_1.default("2", "OFF"));
//# sourceMappingURL=characterSelects.js.map