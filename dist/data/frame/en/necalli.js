"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const necalli = [
    { name: "Standing LP", outbreak: "3", persistence: "2", rigidity: "9", hit: "3", guard: "1", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "VStanding LP", outbreak: "3", persistence: "2", rigidity: "9", hit: "3", guard: "1", damage: "40", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "Standing MP", outbreak: "6", persistence: "2", rigidity: "14", hit: "5", guard: "0", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "VStanding MP", outbreak: "6", persistence: "3", rigidity: "13", hit: "6", guard: "0", damage: "70", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "Standing HP", outbreak: "9", persistence: "4", rigidity: "19", hit: "1", guard: "-2", damage: "80", stan: "150", remarks: "Triggers Crush Counter  (crumple)", type: "normal", command: "" },
    {
        name: "VStanding HP",
        outbreak: "9",
        persistence: "5",
        rigidity: "18",
        hit: "2",
        guard: "-2",
        damage: "90",
        stan: "150",
        remarks: "Triggers Crush Counter  (crumple)",
        type: "normal",
        command: ""
    },
    { name: "Standing LK", outbreak: "4", persistence: "4", rigidity: "8", hit: "4", guard: "2", damage: "40", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "VStanding LK", outbreak: "4", persistence: "4", rigidity: "8", hit: "4", guard: "2", damage: "40", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "Standing MK", outbreak: "5", persistence: "3", rigidity: "12", hit: "6", guard: "2", damage: "60", stan: "100", remarks: "Forces stand", type: "normal", command: "" },
    { name: "VStanding MK", outbreak: "5", persistence: "3", rigidity: "12", hit: "6", guard: "2", damage: "60", stan: "100", remarks: "Forces stand", type: "normal", command: "" },
    { name: "Standing HK", outbreak: "12", persistence: "4", rigidity: "21", hit: "3", guard: "-4", damage: "90", stan: "150", remarks: "Triggers Crush Counter (+19F)", type: "normal", command: "" },
    { name: "VStanding HK", outbreak: "12", persistence: "4", rigidity: "21", hit: "3", guard: "-4", damage: "90", stan: "150", remarks: "Triggers Crush Counter (+19F)", type: "normal", command: "" },
    { name: "Crouching LP", outbreak: "3", persistence: "3", rigidity: "7", hit: "3", guard: "1", damage: "20", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
    { name: "VCrouching LP", outbreak: "3", persistence: "3", rigidity: "7", hit: "3", guard: "1", damage: "30", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
    { name: "Crouching MP", outbreak: "5", persistence: "2", rigidity: "13", hit: "4", guard: "2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "VCrouching MP", outbreak: "5", persistence: "2", rigidity: "13", hit: "5", guard: "2", damage: "70", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "Crouching HP", outbreak: "9", persistence: "3", rigidity: "21", hit: "1", guard: "-4", damage: "80", stan: "150", remarks: "Triggers Crush Counter  (D)", type: "normal", command: "" },
    { name: "VCrouching HP", outbreak: "7", persistence: "3", rigidity: "21", hit: "1", guard: "-4", damage: "90", stan: "150", remarks: "Triggers Crush Counter  (D)", type: "normal", command: "" },
    { name: "Crouching LK", outbreak: "4", persistence: "2", rigidity: "9", hit: "3", guard: "1", damage: "20", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "VCrouching LK", outbreak: "4", persistence: "2", rigidity: "9", hit: "3", guard: "1", damage: "20", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "Crouching MK", outbreak: "8", persistence: "3", rigidity: "15", hit: "0", guard: "-4", damage: "50", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "VCrouching MK", outbreak: "8", persistence: "3", rigidity: "15", hit: "0", guard: "-4", damage: "50", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "Crouching HK", outbreak: "7", persistence: "4", rigidity: "21", hit: "D", guard: "-10", damage: "90", stan: "150", remarks: "Triggers Crush Counter  (D)", type: "normal", command: "" },
    { name: "VCrouching HK", outbreak: "7", persistence: "4", rigidity: "21", hit: "D", guard: "-10", damage: "90", stan: "150", remarks: "Triggers Crush Counter  (D)", type: "normal", command: "" },
    { name: "Jumping LP", outbreak: "3", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
    { name: "VJumping LP", outbreak: "3", persistence: "6", rigidity: "", hit: "", guard: "", damage: "50", stan: "70", remarks: "", type: "jump", command: "" },
    { name: "Jumping MP", outbreak: "7", persistence: "4", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "Causes blowback knockdown on airborne hit", type: "jump", command: "" },
    {
        name: "VJumping MP",
        outbreak: "7",
        persistence: "4",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "70",
        stan: "100",
        remarks: "Causes blowback knockdown on airborne hit",
        type: "jump",
        command: ""
    },
    { name: "Jumping HP", outbreak: "9", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
    { name: "VJumping HP", outbreak: "9", persistence: "5", rigidity: "", hit: "", guard: "", damage: "100", stan: "150", remarks: "", type: "jump", command: "" },
    { name: "Jumping LK", outbreak: "4", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
    { name: "VJumping LK", outbreak: "4", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
    { name: "Jumping MK", outbreak: "6", persistence: "5", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "Can cross-up", type: "jump", command: "" },
    { name: "VJumping MK", outbreak: "6", persistence: "5", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "Can cross-up", type: "jump", command: "" },
    { name: "Jumping HK", outbreak: "7", persistence: "6", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
    { name: "VJumping HK", outbreak: "7", persistence: "6", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
    {
        name: "Opening Dagger",
        outbreak: "23",
        persistence: "3",
        rigidity: "23",
        hit: "1",
        guard: "-7",
        damage: "80",
        stan: "100",
        remarks: "Triggers Crush Counter (+20F)\n                                                                                                                12F - 19F  throw invincibility",
        type: "unique",
        command: "↘ + HP"
    },
    {
        name: "VOpening Dagger",
        outbreak: "23",
        persistence: "3",
        rigidity: "24",
        hit: "1",
        guard: "-7",
        damage: "90",
        stan: "150",
        remarks: "Triggers Crush Counter (+20F)\n                                                                                                                12F - 19F  throw invincibility",
        type: "unique",
        command: "↘ + HP"
    },
    {
        name: "VOpening Dagger (Hold Button)",
        outbreak: "38",
        persistence: "3",
        rigidity: "18",
        hit: "7",
        guard: "2",
        damage: "100",
        stan: "150",
        remarks: "Triggers Crush Counter (+26F)\n                                                                                                                23F - 34F  throw invincibility",
        type: "unique",
        command: "↘ + HP(HOLD BUTTONS)"
    },
    {
        name: "Road of the Sun",
        outbreak: "14",
        persistence: "12",
        rigidity: "11 frame(s) after landing",
        hit: "",
        guard: "",
        damage: "80",
        stan: "100",
        remarks: "",
        type: "unique",
        command: "(DURING FORWARD JUMP) ↓ + HK"
    },
    {
        name: "VRoad of the Sun",
        outbreak: "14",
        persistence: "12",
        rigidity: "11 frame(s) after landing",
        hit: "",
        guard: "",
        damage: "80",
        stan: "100",
        remarks: "",
        type: "unique",
        command: "(DURING FORWARD JUMP) ↓ + HK"
    },
    { name: "Sacrificial Altar (2)", outbreak: "11", persistence: "4", rigidity: "21", hit: "D", guard: "-8", damage: "60", stan: "100", remarks: "", type: "unique", command: "MK ▶ HK" },
    { name: "VSacrificial Altar (2)", outbreak: "11", persistence: "4", rigidity: "21", hit: "D", guard: "-8", damage: "60", stan: "100", remarks: "", type: "unique", command: "MK ▶ HK" },
    {
        name: "Sacrificial Altar (3)",
        outbreak: "20",
        persistence: "4",
        rigidity: "33",
        hit: "D",
        guard: "-9",
        damage: "40",
        stan: "50",
        remarks: "",
        type: "unique",
        command: "(WHEN SELECTING VSKILL I) MK ▶ HK ▶ MP MKOR ← + MP MK"
    },
    {
        name: "VSacrificial Altar (3)",
        outbreak: "20",
        persistence: "4",
        rigidity: "33",
        hit: "D",
        guard: "-9",
        damage: "60",
        stan: "80",
        remarks: "",
        type: "unique",
        command: "(WHEN SELECTING VSKILL I) MK ▶ HK ▶ MP MKOR ← + MP MK"
    },
    {
        name: "Messenger Of Chaos",
        outbreak: "24",
        persistence: "*180",
        rigidity: "55 total frames",
        hit: "(crumple)",
        guard: "-5",
        damage: "60",
        stan: "80",
        remarks: "180F経過若しくは相手に接触すると攻撃判定が発生する\n(攻撃判定の持続は3F)",
        type: "unique",
        command: "(WHEN SELECTING VSKILL II) MK ▶ HK ▶ MP MK"
    },
    {
        name: "VMessenger Of Chaos",
        outbreak: "24",
        persistence: "*180",
        rigidity: "55 total frames",
        hit: "(crumple)",
        guard: "-5",
        damage: "60",
        stan: "80",
        remarks: "180F経過若しくは相手に接触すると攻撃判定が発生する\n(攻撃判定の持続は3F)",
        type: "unique",
        command: "(WHEN SELECTING VSKILL II) MK ▶ HK ▶ MP MK"
    },
    { name: "Soul Sealer", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "120", stan: "120", remarks: "", type: "throw", command: "" },
    { name: "VSoul Sealer", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "130", stan: "150", remarks: "", type: "throw", command: "" },
    { name: "Soul Discriminator", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "110", stan: "120", remarks: "", type: "throw", command: "" },
    { name: "VSoul Discriminator", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "120", stan: "150", remarks: "", type: "throw", command: "" },
    {
        name: "[VS1] Culminated Power",
        outbreak: "25",
        persistence: "3",
        rigidity: "29",
        hit: "D",
        guard: "-1",
        damage: "50",
        stan: "100",
        remarks: "Will not hit airborne opponents",
        type: "vsystem",
        command: ""
    },
    {
        name: "V[VS1] Culminated Power",
        outbreak: "20",
        persistence: "3",
        rigidity: "34",
        hit: "D",
        guard: "-1",
        damage: "70",
        stan: "150",
        remarks: "Will not hit airborne opponents",
        type: "vsystem",
        command: ""
    },
    {
        name: "[VS2] Crawling Beast",
        outbreak: "24",
        persistence: "*180",
        rigidity: "55 total frames",
        hit: "(crumple)",
        guard: "-5",
        damage: "60",
        stan: "80",
        remarks: "180F経過若しくは相手に接触すると攻撃判定が発生する\n(攻撃判定の持続は3F)",
        type: "vsystem",
        command: ""
    },
    {
        name: "V[VS2] Crawling Beast",
        outbreak: "24",
        persistence: "*180",
        rigidity: "55 total frames",
        hit: "(crumple)",
        guard: "-5",
        damage: "60",
        stan: "80",
        remarks: "180F経過若しくは相手に接触すると攻撃判定が発生する\n(攻撃判定の持続は3F)",
        type: "vsystem",
        command: ""
    },
    {
        name: "Torrent of Power",
        outbreak: "1",
        persistence: "",
        rigidity: "4",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "V-Gauge Timer + unlimited F\n                                                                                                                                                                                Remains active until the end of the round\nGains an exclusive special move",
        type: "vsystem",
        command: ""
    },
    {
        name: "The Calling",
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
        name: "L The Disc's Guidance",
        outbreak: "18",
        persistence: "3",
        rigidity: "25",
        hit: "D",
        guard: "-6",
        damage: "80",
        stan: "150",
        remarks: "Nullifies projectiles from 6F-20F",
        type: "special",
        command: ""
    },
    {
        name: "M The Disc's Guidance",
        outbreak: "21",
        persistence: "3",
        rigidity: "26",
        hit: "D",
        guard: "-6",
        damage: "100",
        stan: "150",
        remarks: "Nullifies projectiles from 6F-23F",
        type: "special",
        command: ""
    },
    {
        name: "H The Disc's Guidance",
        outbreak: "24",
        persistence: "3",
        rigidity: "26",
        hit: "D",
        guard: "-6",
        damage: "120",
        stan: "150",
        remarks: "Nullifies projectiles from 6F-26F",
        type: "special",
        command: ""
    },
    {
        name: "VL The Disc's Guidance",
        outbreak: "15",
        persistence: "5",
        rigidity: "25",
        hit: "D",
        guard: "-6",
        damage: "100",
        stan: "150",
        remarks: "Nullifies projectiles from 6F-20F\nNo charge time required when used from a special move cancel",
        type: "special",
        command: ""
    },
    {
        name: "VM The Disc's Guidance",
        outbreak: "17",
        persistence: "5",
        rigidity: "26",
        hit: "D",
        guard: "-6",
        damage: "120",
        stan: "150",
        remarks: "Nullifies projectiles from 6F-23F\nNo charge time required when used from a special move cancel",
        type: "special",
        command: ""
    },
    {
        name: "VH The Disc's Guidance",
        outbreak: "21",
        persistence: "5",
        rigidity: "26",
        hit: "D",
        guard: "-6",
        damage: "140",
        stan: "150",
        remarks: "Nullifies projectiles from 6F-26F\nNo charge time required when used from a special move cancel",
        type: "special",
        command: ""
    },
    {
        name: "EX The Disc's Guidance",
        outbreak: "17",
        persistence: "7",
        rigidity: "31",
        hit: "D",
        guard: "-13",
        damage: "150",
        stan: "200",
        remarks: "Nullifies projectiles from 5F-47F\nV*Only possible during 2nd attack",
        type: "special",
        command: ""
    },
    {
        name: "VEX The Disc's Guidance",
        outbreak: "17",
        persistence: "9",
        rigidity: "31",
        hit: "D",
        guard: "-13",
        damage: "170",
        stan: "200",
        remarks: "Nullifies projectiles from 5F-47F\nNo charge time required when used from a special move cancel",
        type: "special",
        command: ""
    },
    {
        name: "L Raging Light",
        outbreak: "3",
        persistence: "4",
        rigidity: "19+16 frame(s) after landing",
        hit: "D",
        guard: "-24",
        damage: "100",
        stan: "150",
        remarks: "1F - 3F  throw invincibility\n                                                Subject to counter hit during move duration",
        type: "special",
        command: ""
    },
    {
        name: "M Raging Light",
        outbreak: "5",
        persistence: "7",
        rigidity: "21+16 frame(s) after landing",
        hit: "D",
        guard: "-28",
        damage: "110",
        stan: "150",
        remarks: "Invincibility at the legs from 1F\nSubject to counter hit during move duration",
        type: "special",
        command: ""
    },
    {
        name: "H Raging Light",
        outbreak: "7",
        persistence: "6",
        rigidity: "26+19 frame(s) after landing",
        hit: "D",
        guard: "-33",
        damage: "120",
        stan: "150",
        remarks: "3F - 8F  attack & projectile invincibility\n                                                Subject to counter hit during move duration",
        type: "special",
        command: ""
    },
    {
        name: "VL Raging Light",
        outbreak: "3",
        persistence: "4",
        rigidity: "19+16 frame(s) after landing",
        hit: "D",
        guard: "-24",
        damage: "120",
        stan: "150",
        remarks: "1F - 3F  throw invincibility\n                                                Subject to counter hit during move duration",
        type: "special",
        command: ""
    },
    {
        name: "VM Raging Light",
        outbreak: "5",
        persistence: "9",
        rigidity: "25+16 frame(s) after landing",
        hit: "D",
        guard: "-29",
        damage: "130",
        stan: "150",
        remarks: "Invincibility at the legs from 1F\nSubject to counter hit during move duration",
        type: "special",
        command: ""
    },
    {
        name: "VH Raging Light",
        outbreak: "7",
        persistence: "8",
        rigidity: "27+19 frame(s) after landing",
        hit: "D",
        guard: "-34",
        damage: "140",
        stan: "150",
        remarks: "3F - 8F  attack & projectile invincibility\n                                                Subject to counter hit during move duration",
        type: "special",
        command: ""
    },
    {
        name: "EX Raging Light",
        outbreak: "3",
        persistence: "13",
        rigidity: "23+19 frame(s) after landing",
        hit: "D",
        guard: "-38",
        damage: "150",
        stan: "200",
        remarks: "1F - 7F  full invincibility\n                                                Subject to counter hit during move duration (1.2x damage)",
        type: "special",
        command: ""
    },
    {
        name: "VEX Raging Light",
        outbreak: "3",
        persistence: "13",
        rigidity: "23+19 frame(s) after landing",
        hit: "D",
        guard: "-38",
        damage: "170",
        stan: "200",
        remarks: "1F - 7F  full invincibility\n                                                Subject to counter hit during move duration (1.2x damage)",
        type: "special",
        command: ""
    },
    { name: "L Mask of Tlalli", outbreak: "8", persistence: "2", rigidity: "60", hit: "D", guard: "", damage: "140", stan: "200", remarks: "", type: "special", command: "" },
    { name: "M Mask of Tlalli", outbreak: "8", persistence: "2", rigidity: "60", hit: "D", guard: "", damage: "150", stan: "200", remarks: "", type: "special", command: "" },
    { name: "H Mask of Tlalli", outbreak: "8", persistence: "2", rigidity: "60", hit: "D", guard: "", damage: "160", stan: "200", remarks: "", type: "special", command: "" },
    { name: "VL Mask of Tlalli", outbreak: "8", persistence: "2", rigidity: "60", hit: "D", guard: "", damage: "160", stan: "200", remarks: "", type: "special", command: "" },
    { name: "VM Mask of Tlalli", outbreak: "8", persistence: "2", rigidity: "60", hit: "D", guard: "", damage: "170", stan: "200", remarks: "", type: "special", command: "" },
    { name: "VH Mask of Tlalli", outbreak: "8", persistence: "2", rigidity: "60", hit: "D", guard: "", damage: "180", stan: "200", remarks: "", type: "special", command: "" },
    { name: "EX Mask of Tlalli", outbreak: "8", persistence: "2", rigidity: "60", hit: "D", guard: "", damage: "60", stan: "50", remarks: "", type: "special", command: "" },
    { name: "VEX Mask of Tlalli", outbreak: "8", persistence: "2", rigidity: "60", hit: "D", guard: "", damage: "80", stan: "50", remarks: "", type: "special", command: "" },
    {
        name: "L Valiant Rebellion",
        outbreak: "14",
        persistence: "3",
        rigidity: "20",
        hit: "2",
        guard: "-4",
        damage: "50",
        stan: "100",
        remarks: "Nullifies projectiles from 14F-16F",
        type: "special",
        command: ""
    },
    {
        name: "M Valiant Rebellion",
        outbreak: "19",
        persistence: "3",
        rigidity: "20",
        hit: "5",
        guard: "-2",
        damage: "60",
        stan: "100",
        remarks: "Nullifies projectiles from 19F-21F",
        type: "special",
        command: ""
    },
    {
        name: "H Valiant Rebellion",
        outbreak: "23",
        persistence: "3",
        rigidity: "16",
        hit: "D",
        guard: "0",
        damage: "80",
        stan: "150",
        remarks: "Nullifies projectiles from 23F-25F",
        type: "special",
        command: ""
    },
    {
        name: "VL Valiant Rebellion",
        outbreak: "14",
        persistence: "4",
        rigidity: "19",
        hit: "2",
        guard: "-3",
        damage: "70",
        stan: "100",
        remarks: "Nullifies projectiles from 14F-17F",
        type: "special",
        command: ""
    },
    {
        name: "VM Valiant Rebellion",
        outbreak: "19",
        persistence: "5",
        rigidity: "18",
        hit: "5",
        guard: "-1",
        damage: "80",
        stan: "100",
        remarks: "Nullifies projectiles from 19F-23F",
        type: "special",
        command: ""
    },
    {
        name: "VH Valiant Rebellion",
        outbreak: "23",
        persistence: "6",
        rigidity: "13",
        hit: "D",
        guard: "2",
        damage: "100",
        stan: "150",
        remarks: "Nullifies projectiles from 23F-28F",
        type: "special",
        command: ""
    },
    {
        name: "EX Valiant Rebellion",
        outbreak: "10",
        persistence: "4",
        rigidity: "21",
        hit: "2",
        guard: "2",
        damage: "120",
        stan: "200",
        remarks: "Nullifies projectiles from 10F-11F, 36F-37F\nV*Only possible during 1st attack",
        type: "special",
        command: ""
    },
    {
        name: "VEX Valiant Rebellion",
        outbreak: "10",
        persistence: "6",
        rigidity: "20",
        hit: "2",
        guard: "2",
        damage: "140",
        stan: "200",
        remarks: "Nullifies projectiles from 10F-12F, 36F-38F",
        type: "special",
        command: ""
    },
    {
        name: "VClouded Mirror",
        outbreak: "43",
        persistence: "4",
        rigidity: "23",
        hit: "D",
        guard: "-2",
        damage: "70",
        stan: "100",
        remarks: "16F - 47F  projectile invincibility\n                                                Cannot recover\nCan be canceled into from special move cancelable moves and V-Skill",
        type: "special",
        command: ""
    },
    {
        name: "VClouded Mirror (HOLD BUTTON)",
        outbreak: "57",
        persistence: "8",
        rigidity: "24",
        hit: "(crumple)",
        guard: "2",
        damage: "80",
        stan: "100",
        remarks: "25F - 63F  projectile invincibility\n                                                Can hit downed opponents\nCan be canceled into from special move cancelable moves and V-Skill",
        type: "special",
        command: ""
    },
    { name: "Ceremony of Honor", outbreak: "1+6", persistence: "2", rigidity: "45", hit: "D", guard: "-25", damage: "330", stan: "0", remarks: "1F - 8F  full invincibility", type: "ca", command: "" },
    { name: "VSoul Offering", outbreak: "1+6", persistence: "2", rigidity: "45", hit: "D", guard: "-25", damage: "370", stan: "0", remarks: "1F - 8F  full invincibility", type: "ca", command: "" }
];
exports.necalli = necalli;
//# sourceMappingURL=necalli.js.map