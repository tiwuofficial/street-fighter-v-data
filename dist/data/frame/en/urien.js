"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urien = [
    { name: "Standing LP", outbreak: "4", persistence: "2", rigidity: "10", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "Standing MP", outbreak: "7", persistence: "3", rigidity: "12", hit: "6", guard: "3", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "Standing HP", outbreak: "12", persistence: "3", rigidity: "18", hit: "4", guard: "-2", damage: "90", stan: "150", remarks: "Triggers Crush Counter (+22F)", type: "normal", command: "" },
    {
        name: "Standing HP (Hold Button)",
        outbreak: "22",
        persistence: "3",
        rigidity: "15",
        hit: "9",
        guard: "5",
        damage: "100",
        stan: "150",
        remarks: "Triggers Crush Counter (+31F)",
        type: "normal",
        command: ""
    },
    { name: "Standing LK", outbreak: "5", persistence: "2", rigidity: "8", hit: "4", guard: "3", damage: "40", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "Standing MK", outbreak: "9", persistence: "2", rigidity: "18", hit: "1", guard: "-2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    {
        name: "Standing HK",
        outbreak: "9",
        persistence: "6",
        rigidity: "19",
        hit: "4",
        guard: "-2",
        damage: "80(*90)",
        stan: "150",
        remarks: "Frames 1F – 2F will not hit grounded opponents\n                                                                                *From active frame 2F\nRecovery frames for V-Cancel/regular are for canceling on the 4th active frame",
        type: "normal",
        command: ""
    },
    {
        name: "Standing HK (Hold Button)",
        outbreak: "22",
        persistence: "5",
        rigidity: "18",
        hit: "8",
        guard: "2",
        damage: "100",
        stan: "150",
        remarks: "Frames 1F – 2F will not hit grounded opponents",
        type: "normal",
        command: ""
    },
    { name: "Crouching LP", outbreak: "4", persistence: "3", rigidity: "9", hit: "4", guard: "1", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "Crouching MP", outbreak: "6", persistence: "2", rigidity: "15", hit: "5", guard: "0", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "Crouching HP", outbreak: "7", persistence: "5", rigidity: "21", hit: "D", guard: "-8", damage: "90", stan: "150", remarks: "", type: "normal", command: "" },
    { name: "Crouching LK", outbreak: "4", persistence: "2", rigidity: "7", hit: "4", guard: "1", damage: "20", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "Crouching MK", outbreak: "8", persistence: "2", rigidity: "17", hit: "4", guard: "-2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "Crouching HK", outbreak: "11", persistence: "2", rigidity: "27", hit: "D", guard: "-14", damage: "100", stan: "150", remarks: "Triggers Crush Counter  (D)", type: "normal", command: "" },
    { name: "Jumping LP", outbreak: "3", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
    { name: "Jumping MP", outbreak: "5", persistence: "5", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", type: "jump", command: "" },
    { name: "Jumping HP", outbreak: "8", persistence: "4", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
    { name: "Jumping LK", outbreak: "4", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "Can cross-up", type: "jump", command: "" },
    { name: "Jumping MK", outbreak: "7", persistence: "5", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "", type: "jump", command: "" },
    { name: "Jumping HK", outbreak: "9", persistence: "4", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
    { name: "Quarrel Punch", outbreak: "7", persistence: "4", rigidity: "14", hit: "2", guard: "-2", damage: "70", stan: "100", remarks: "", type: "unique", command: "→ + MP" },
    { name: "Quarrel Kick", outbreak: "15", persistence: "4", rigidity: "18", hit: "4", guard: "-4", damage: "90", stan: "150", remarks: "", type: "unique", command: "↘ + HK" },
    { name: "Terrible Smash", outbreak: "21", persistence: "2", rigidity: "20", hit: "1", guard: "-8", damage: "80", stan: "150", remarks: "", type: "unique", command: "→ + HP" },
    { name: "Killer Straight", outbreak: "5", persistence: "3", rigidity: "14", hit: "1", guard: "-4", damage: "50", stan: "80", remarks: "", type: "unique", command: "LP ▶ MP" },
    { name: "Break Rush", outbreak: "17", persistence: "2", rigidity: "20", hit: "1", guard: "-8", damage: "60", stan: "150", remarks: "", type: "unique", command: "→ + MP ▶ → + HP" },
    { name: "Spartan Bomb (Forward)", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "130", stan: "150", remarks: "", type: "throw", command: "" },
    { name: "Spartan Bomb (Back)", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "130", stan: "150", remarks: "", type: "throw", command: "" },
    {
        name: "[VS1] Metallic Aura",
        outbreak: "",
        persistence: "",
        rigidity: "50 total frames",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "The moves Chariot Tackle, Dangerous Headbutt, and Violence Knee Drop gain armor.",
        type: "vsystem",
        command: ""
    },
    {
        name: "[VS2] Indignant Thunder",
        outbreak: "",
        persistence: "",
        rigidity: "50 total frames",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "発動後一回だけメタリックスフィアの性質変化",
        type: "vsystem",
        command: ""
    },
    {
        name: "Aegis Reflector (Forward)",
        outbreak: "1+9",
        persistence: "250",
        rigidity: "20 total frames",
        hit: "12",
        guard: "7",
        damage: "60",
        stan: "0",
        remarks: "V-Gauge Timer + 3000F\n                                                                                                                                                                                While active, Urien gains the special move Aegis Reflector",
        type: "vsystem",
        command: ""
    },
    {
        name: "Aegis Reflector (Back)",
        outbreak: "1+4",
        persistence: "230",
        rigidity: "13 total frames",
        hit: "14",
        guard: "9",
        damage: "60",
        stan: "0",
        remarks: "V-Gauge Timer + 3000F\n                                                                                                                                                                                While active, Urien gains the special move Aegis Reflector",
        type: "vsystem",
        command: ""
    },
    {
        name: "Aegis Reflector (Up)",
        outbreak: "1+14",
        persistence: "250",
        rigidity: "32 total frames",
        hit: "5",
        guard: "0",
        damage: "60",
        stan: "0",
        remarks: "V-Gauge Timer + 3000F\n                                                                                Will not hit crouching opponents\n                                                                                                While active, Urien gains the special move Aegis Reflector",
        type: "vsystem",
        command: ""
    },
    {
        name: "Anger Snap Fist",
        outbreak: "17",
        persistence: "2",
        rigidity: "24",
        hit: "D",
        guard: "-2",
        damage: "60",
        stan: "0",
        remarks: "1F - 30F  attack & projectile invincibility\n                                                Recover 200 stun upon activation",
        type: "vsystem",
        command: ""
    },
    {
        name: "L Chariot Tackle",
        outbreak: "10",
        persistence: "6",
        rigidity: "22",
        hit: "0",
        guard: "-5",
        damage: "80",
        stan: "150",
        remarks: "*Value for V-Skill1 version\n                                                                Gains armor from 3F - 12F during Metallic Aura",
        type: "special",
        command: ""
    },
    {
        name: "M Chariot Tackle",
        outbreak: "13",
        persistence: "11",
        rigidity: "21",
        hit: "-3",
        guard: "-9",
        damage: "90",
        stan: "150",
        remarks: "*Value for V-Skill1 version\n                                                                Gains armor from 3F - 15F during Metallic Aura",
        type: "special",
        command: ""
    },
    {
        name: "H Chariot Tackle",
        outbreak: "16",
        persistence: "8",
        rigidity: "21",
        hit: "D",
        guard: "-6",
        damage: "100",
        stan: "150",
        remarks: "*Value for V-Skill1 version\n                                                                Gains armor from 5F - 18F during Metallic Aura",
        type: "special",
        command: ""
    },
    {
        name: "EX Chariot Tackle",
        outbreak: "7",
        persistence: "13",
        rigidity: "20",
        hit: "D",
        guard: "-2",
        damage: "150",
        stan: "200",
        remarks: "*Value for V-Skill1 version\n                                                                Gains armor from 3F - 9F during Metallic Aura",
        type: "special",
        command: ""
    },
    {
        name: "L Dangerous Headbutt",
        outbreak: "8",
        persistence: "3",
        rigidity: "18",
        hit: "1",
        guard: "-2",
        damage: "100",
        stan: "150",
        remarks: "Will not hit crouching opponents\n                                                *Value for V-Skill1 version\n                                                                Gains armor from 3F - 10F during Metallic Aura",
        type: "special",
        command: ""
    },
    {
        name: "M Dangerous Headbutt",
        outbreak: "11",
        persistence: "4",
        rigidity: "18",
        hit: "1",
        guard: "-2",
        damage: "110",
        stan: "150",
        remarks: "Will not hit crouching opponents\n                                                *Value for V-Skill1 version\n                                                                Gains armor from 3F - 13F during Metallic Aura",
        type: "special",
        command: ""
    },
    {
        name: "H Dangerous Headbutt",
        outbreak: "13",
        persistence: "5",
        rigidity: "17",
        hit: "D",
        guard: "-2",
        damage: "120",
        stan: "150",
        remarks: "Will not hit crouching opponents\n                                                *Value for V-Skill1 version\n                                                                Gains armor from 3F - 15F during Metallic Aura",
        type: "special",
        command: ""
    },
    {
        name: "EX Dangerous Headbutt",
        outbreak: "12",
        persistence: "5",
        rigidity: "29\n(*119)\n(*224)",
        hit: "D",
        guard: "-17",
        damage: "80",
        stan: "80",
        remarks: "*Value for V-Skill1 version\n                1F - 16F  full invincibility\n                                                Subject to counter hit during move duration (1.2x damage)\n*1on hit\n*2On Block",
        type: "special",
        command: ""
    },
    {
        name: "L Violence Knee Drop",
        outbreak: "25",
        persistence: "Until landing",
        rigidity: "11 frame(s) after landing",
        hit: "D",
        guard: "-3",
        damage: "100",
        stan: "200",
        remarks: "*Value for V-Skill1 version\n                                                                Gains armor from 3F - 27F during Metallic Aura",
        type: "special",
        command: ""
    },
    {
        name: "M Violence Knee Drop",
        outbreak: "25",
        persistence: "Until landing",
        rigidity: "13 frame(s) after landing",
        hit: "D",
        guard: "-5",
        damage: "100",
        stan: "200",
        remarks: "*Value for V-Skill1 version\n                                                                Gains armor from 3F - 27F during Metallic Aura",
        type: "special",
        command: ""
    },
    {
        name: "H Violence Knee Drop",
        outbreak: "25",
        persistence: "Until landing",
        rigidity: "14 frame(s) after landing",
        hit: "D",
        guard: "-6",
        damage: "100",
        stan: "200",
        remarks: "*Value for V-Skill1 version\n                                                                Gains armor from 3F - 27F during Metallic Aura",
        type: "special",
        command: ""
    },
    {
        name: "EX Violence Knee Drop",
        outbreak: "25",
        persistence: "Until landing",
        rigidity: "10 frame(s) after landing",
        hit: "D",
        guard: "2",
        damage: "150",
        stan: "200",
        remarks: "*Value for V-Skill1 version\n                                                                Movement distance can be controlled with directional input\nGains armor from 3F - 27F during Metallic Aura",
        type: "special",
        command: ""
    },
    { name: "L Metallic Sphere", outbreak: "14", persistence: "", rigidity: "50 total frames", hit: "-1", guard: "-7", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
    { name: "M Metallic Sphere", outbreak: "14", persistence: "", rigidity: "50 total frames", hit: "1", guard: "-7", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
    {
        name: "H Metallic Sphere",
        outbreak: "13",
        persistence: "",
        rigidity: "49 total frames",
        hit: "D",
        guard: "",
        damage: "70",
        stan: "100",
        remarks: "Will not hit grounded opponents",
        type: "special",
        command: ""
    },
    { name: "L Metallic Sphere (Hold Button)", outbreak: "53", persistence: "", rigidity: "81 total frames", hit: "7", guard: "4", damage: "90", stan: "120", remarks: "", type: "special", command: "" },
    { name: "M Metallic Sphere (Hold Button)", outbreak: "53", persistence: "", rigidity: "83 total frames", hit: "5", guard: "2", damage: "90", stan: "120", remarks: "", type: "special", command: "" },
    {
        name: "H Metallic Sphere (Hold Button)",
        outbreak: "42",
        persistence: "",
        rigidity: "72 total frames",
        hit: "D",
        guard: "",
        damage: "100",
        stan: "120",
        remarks: "Will not hit grounded opponents",
        type: "special",
        command: ""
    },
    { name: "EX L Metallic Sphere", outbreak: "12", persistence: "", rigidity: "44 total frames", hit: "3", guard: "2", damage: "90", stan: "120", remarks: "", type: "special", command: "" },
    { name: "EX M Metallic Sphere", outbreak: "12", persistence: "", rigidity: "44 total frames", hit: "3", guard: "2", damage: "90", stan: "120", remarks: "", type: "special", command: "" },
    {
        name: "EX H Metallic Sphere",
        outbreak: "13",
        persistence: "",
        rigidity: "45 total frames",
        hit: "D",
        guard: "",
        damage: "100",
        stan: "120",
        remarks: "Will not hit grounded opponents",
        type: "special",
        command: ""
    },
    {
        name: "EX L Metallic Sphere (Hold Button)",
        outbreak: "41",
        persistence: "",
        rigidity: "68 total frames",
        hit: "17",
        guard: "13",
        damage: "120",
        stan: "150",
        remarks: "",
        type: "special",
        command: ""
    },
    {
        name: "EX M Metallic Sphere (Hold Button)",
        outbreak: "41",
        persistence: "",
        rigidity: "68 total frames",
        hit: "17",
        guard: "13",
        damage: "120",
        stan: "150",
        remarks: "",
        type: "special",
        command: ""
    },
    {
        name: "EX H Metallic Sphere (Hold Button)",
        outbreak: "32",
        persistence: "",
        rigidity: "59 total frames",
        hit: "D",
        guard: "",
        damage: "130",
        stan: "150",
        remarks: "Will not hit grounded opponents",
        type: "special",
        command: ""
    },
    { name: "L Metallic Sphere (VS2 Ver.)", outbreak: "14", persistence: "", rigidity: "50 total frames", hit: "3", guard: "2", damage: "90", stan: "120", remarks: "", type: "special", command: "" },
    { name: "M Metallic Sphere (VS2 Ver.)", outbreak: "14", persistence: "", rigidity: "50 total frames", hit: "3", guard: "2", damage: "90", stan: "120", remarks: "", type: "special", command: "" },
    {
        name: "H Metallic Sphere (VS2 Ver.)",
        outbreak: "13",
        persistence: "",
        rigidity: "49 total frames",
        hit: "D",
        guard: "",
        damage: "90",
        stan: "120",
        remarks: "Will not hit grounded opponents",
        type: "special",
        command: ""
    },
    {
        name: "EX Metallic Sphere L (VS2 Ver.)",
        outbreak: "12",
        persistence: "",
        rigidity: "44 total frames",
        hit: "D",
        guard: "12",
        damage: "120",
        stan: "150",
        remarks: "",
        type: "special",
        command: ""
    },
    {
        name: "EX Metallic Sphere M (VS2 Ver.)",
        outbreak: "12",
        persistence: "",
        rigidity: "44 total frames",
        hit: "D",
        guard: "12",
        damage: "120",
        stan: "150",
        remarks: "",
        type: "special",
        command: ""
    },
    {
        name: "EX Metallic Sphere H (VS2 Ver.)",
        outbreak: "13",
        persistence: "",
        rigidity: "45 total frames",
        hit: "D",
        guard: "",
        damage: "130",
        stan: "150",
        remarks: "Will not hit grounded opponents",
        type: "special",
        command: ""
    },
    {
        name: "V2nd Aegis Reflector (Forward)",
        outbreak: "14",
        persistence: "250",
        rigidity: "30 total frames",
        hit: "6",
        guard: "1",
        damage: "60",
        stan: "0",
        remarks: "Uses all of the V-Gauge Timer",
        type: "special",
        command: ""
    },
    {
        name: "V2nd Aegis Reflector (Back)",
        outbreak: "24",
        persistence: "230",
        rigidity: "30 total frames",
        hit: "16",
        guard: "11",
        damage: "60",
        stan: "0",
        remarks: "Uses all of the V-Gauge Timer",
        type: "special",
        command: ""
    },
    {
        name: "V2nd Aegis Reflector (Up)",
        outbreak: "16",
        persistence: "250",
        rigidity: "32 total frames",
        hit: "6",
        guard: "1",
        damage: "60",
        stan: "0",
        remarks: "Uses all of the V-Gauge Timer\n                                                                                Will not hit crouching opponents",
        type: "special",
        command: ""
    },
    { name: "Dominant Crush", outbreak: "1+5", persistence: "19", rigidity: "60", hit: "D", guard: "-47", damage: "340", stan: "0", remarks: "1F - 24F  full invincibility", type: "ca", command: "" }
];
exports.urien = urien;
//# sourceMappingURL=urien.js.map