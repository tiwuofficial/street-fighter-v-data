"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nash = [
    { name: "Standing LP", outbreak: "4", persistence: "2", rigidity: "6", hit: "4", guard: "3", damage: "30", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
    { name: "Standing MP", outbreak: "6", persistence: "3", rigidity: "15", hit: "2", guard: "0", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "Standing HP", outbreak: "8", persistence: "3", rigidity: "22", hit: "0", guard: "-5", damage: "90", stan: "150", remarks: "Triggers Crush Counter (+14F)", type: "normal", command: "" },
    { name: "Standing LK", outbreak: "4", persistence: "3", rigidity: "7", hit: "4", guard: "3", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "Standing MK", outbreak: "7", persistence: "4", rigidity: "15", hit: "2", guard: "0", damage: "70", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "Standing HK", outbreak: "9", persistence: "4", rigidity: "14(*15)", hit: "2", guard: "-2", damage: "90", stan: "150", remarks: "*On whiff", type: "normal", command: "" },
    { name: "Crouching LP", outbreak: "4", persistence: "2", rigidity: "7", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
    { name: "Crouching MP", outbreak: "6", persistence: "3", rigidity: "13", hit: "6", guard: "2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "Crouching HP", outbreak: "9", persistence: "2", rigidity: "17", hit: "7", guard: "3", damage: "80", stan: "150", remarks: "Forces stand", type: "normal", command: "" },
    { name: "Crouching LK", outbreak: "4", persistence: "3", rigidity: "6", hit: "4", guard: "1", damage: "20", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "Crouching MK", outbreak: "8", persistence: "2", rigidity: "17", hit: "0", guard: "-4", damage: "50", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "Crouching HK", outbreak: "8", persistence: "2", rigidity: "24", hit: "D", guard: "-12", damage: "90", stan: "150", remarks: "Triggers Crush Counter  (D)", type: "normal", command: "" },
    { name: "Jumping LP", outbreak: "3", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
    { name: "Jumping MP", outbreak: "5", persistence: "5", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", type: "jump", command: "" },
    { name: "Jumping HP", outbreak: "7", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
    { name: "Jumping LK", outbreak: "4", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
    { name: "Jumping MK", outbreak: "6", persistence: "5", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "Can cross-up", type: "jump", command: "" },
    { name: "Diagonal Jumping HK", outbreak: "9", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
    {
        name: "Vertical Jump HK",
        outbreak: "8",
        persistence: "6",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "90",
        stan: "150",
        remarks: "Can cross-up\n                                                                                                                                                Causes blowback knockdown on airborne hit",
        type: "jump",
        command: ""
    },
    {
        name: "Chopping Assault",
        outbreak: "22",
        persistence: "3",
        rigidity: "16",
        hit: "1",
        guard: "-7",
        damage: "60",
        stan: "100",
        remarks: "9F - 22F  throw invincibility",
        type: "unique",
        command: "→ + MP"
    },
    {
        name: "Spinning Back Knuckle",
        outbreak: "15",
        persistence: "3",
        rigidity: "30",
        hit: "-3",
        guard: "-13",
        damage: "90",
        stan: "150",
        remarks: "Triggers Crush Counter  (crumple)",
        type: "unique",
        command: "→ + HP"
    },
    {
        name: "Knee Bazooka",
        outbreak: "7",
        persistence: "6",
        rigidity: "18",
        hit: "-1",
        guard: "-5",
        damage: "60",
        stan: "70",
        remarks: "7F - 22F  throw invincibility",
        type: "unique",
        command: "→ + LK"
    },
    {
        name: "Jumping Sobat",
        outbreak: "13",
        persistence: "2",
        rigidity: "18",
        hit: "2",
        guard: "-3",
        damage: "60",
        stan: "100",
        remarks: "10F - 19F  throw invincibility",
        type: "unique",
        command: "→ + MK"
    },
    { name: "Side Knee Attack", outbreak: "5", persistence: "4", rigidity: "14", hit: "4", guard: "2", damage: "60", stan: "100", remarks: "", type: "unique", command: "← + MK" },
    { name: "Step Kick", outbreak: "14", persistence: "4", rigidity: "15", hit: "3", guard: "-3", damage: "90", stan: "150", remarks: "", type: "unique", command: "→ + HK" },
    { name: "Rapid Punch", outbreak: "6", persistence: "3", rigidity: "14", hit: "1", guard: "-6", damage: "50", stan: "80", remarks: "", type: "unique", command: "LP ▶ MP" },
    { name: "Rapid Kick", outbreak: "5", persistence: "4", rigidity: "11", hit: "4", guard: "-2", damage: "60", stan: "80", remarks: "", type: "unique", command: "LK ▶ MK" },
    {
        name: "Wind Shear (2)",
        outbreak: "9",
        persistence: "4",
        rigidity: "22",
        hit: "3",
        guard: "-7",
        damage: "40",
        stan: "50",
        remarks: "8F - 23F  throw invincibility",
        type: "unique",
        command: "MP ▶ LK"
    },
    { name: "Wind Shear (3)", outbreak: "6", persistence: "3", rigidity: "24", hit: "D", guard: "", damage: "70", stan: "100", remarks: "", type: "unique", command: "MP ▶ LK ▶ HP" },
    {
        name: "Down Burst",
        outbreak: "18",
        persistence: "3",
        rigidity: "16",
        hit: "1",
        guard: "-7",
        damage: "60",
        stan: "100",
        remarks: "5F - 18F  throw invincibility",
        type: "unique",
        command: "↓ + MP ▶ → + MP"
    },
    { name: "(Raptor/Bullet) Combination (2)", outbreak: "9", persistence: "3", rigidity: "26", hit: "D", guard: "-10", damage: "55", stan: "80", remarks: "", type: "unique", command: "MK ▶ HK" },
    { name: "Raptor Combination (3)", outbreak: "14", persistence: "4", rigidity: "17", hit: "D", guard: "", damage: "55", stan: "100", remarks: "", type: "unique", command: "MK ▶ HK ▶ MK" },
    {
        name: "Bullet Combination (3)",
        outbreak: "8",
        persistence: "2",
        rigidity: "23",
        hit: "D",
        guard: "",
        damage: "55",
        stan: "100",
        remarks: "",
        type: "unique",
        command: "(WHEN SELECTING VSKILL I) MK ▶ HK ▶ MP MK"
    },
    { name: "Dragon Suplex", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "140", stan: "150", remarks: "", type: "throw", command: "" },
    { name: "Target Down", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "150", stan: "200", remarks: "", type: "throw", command: "" },
    { name: "Air Jack", outbreak: "5", persistence: "2", rigidity: "6 frame(s) after landing", hit: "D", guard: "", damage: "140", stan: "200", remarks: "", type: "throw", command: "" },
    {
        name: "[VS1] Bullet Clear",
        outbreak: "8 (*6)",
        persistence: "4(*8)",
        rigidity: "21",
        hit: "5",
        guard: "-5",
        damage: "70",
        stan: "100",
        remarks: "*Value while absorbing projectile\nV-Gauge +80 upon successful absorption of a projectile",
        type: "vsystem",
        command: ""
    },
    {
        name: "[VS2] Silent Sharpness",
        outbreak: "",
        persistence: "",
        rigidity: "53 total frames",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "次に発動するソニックサイスが強化される",
        type: "vsystem",
        command: ""
    },
    {
        name: "Sonic Move - Hide",
        outbreak: "",
        persistence: "",
        rigidity: "9",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "1F - 3F  projectile & throw invincibility\n4F  full invincibility\n                                                出現後2F間投げ無敵",
        type: "vsystem",
        command: ""
    },
    {
        name: "Sonic Move - Blitz Air",
        outbreak: "",
        persistence: "",
        rigidity: "24+4 frame(s) after landing",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "4F  full invincibility",
        type: "vsystem",
        command: ""
    },
    {
        name: "Sonic Move - Steel Air",
        outbreak: "",
        persistence: "",
        rigidity: "24+4 frame(s) after landing",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "4F  full invincibility",
        type: "vsystem",
        command: ""
    },
    {
        name: "Sonic Move - Avoid",
        outbreak: "",
        persistence: "",
        rigidity: "44",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "1F - 15F, 42F - 45F  attack & projectile invincibility\n16F - 41F  full invincibility\n                                                Recover 200 stun upon activation",
        type: "vsystem",
        command: ""
    },
    { name: "L Sonic Boom", outbreak: "15", persistence: "", rigidity: "47 total frames", hit: "-2", guard: "-6", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
    { name: "M Sonic Boom", outbreak: "17", persistence: "", rigidity: "47 total frames", hit: "0", guard: "-4", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
    { name: "H Sonic Boom", outbreak: "22", persistence: "", rigidity: "45 total frames", hit: "4", guard: "-2", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
    { name: "EX Sonic Boom", outbreak: "11", persistence: "", rigidity: "37 total frames", hit: "4", guard: "2", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
    { name: "EX Sonic Boom (2)", outbreak: "10", persistence: "", rigidity: "36 total frames", hit: "3", guard: "2", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
    { name: "L Moonsault Slash", outbreak: "37", persistence: "3", rigidity: "11", hit: "4", guard: "1", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
    { name: "M Moonsault Slash", outbreak: "37", persistence: "3", rigidity: "12", hit: "4", guard: "2", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
    { name: "H Moonsault Slash", outbreak: "37", persistence: "3", rigidity: "14", hit: "4", guard: "3", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
    { name: "EX Moonsault Slash", outbreak: "39", persistence: "9", rigidity: "10", hit: "7", guard: "3", damage: "120", stan: "150", remarks: "", type: "special", command: "" },
    {
        name: "L Tragedy Assault",
        outbreak: "18",
        persistence: "2",
        rigidity: "23",
        hit: "D",
        guard: "-5",
        damage: "100",
        stan: "150",
        remarks: "50 reduction of the opponent's V-Gauge on hit",
        type: "special",
        command: ""
    },
    {
        name: "M Tragedy Assault",
        outbreak: "22",
        persistence: "2",
        rigidity: "26",
        hit: "D",
        guard: "-6",
        damage: "120",
        stan: "150",
        remarks: "100 reduction of the opponent's V-Gauge on hit",
        type: "special",
        command: ""
    },
    {
        name: "H Tragedy Assault",
        outbreak: "34",
        persistence: "2",
        rigidity: "28",
        hit: "D",
        guard: "-8",
        damage: "140",
        stan: "150",
        remarks: "150 reduction of the opponent's V-Gauge on hit",
        type: "special",
        command: ""
    },
    {
        name: "EX Tragedy Assault",
        outbreak: "8",
        persistence: "5",
        rigidity: "48",
        hit: "D",
        guard: "-23",
        damage: "120",
        stan: "150",
        remarks: "Nash gains 30 vitality on hit\nV*Only on hit",
        type: "special",
        command: ""
    },
    { name: "L Sonic Scythe", outbreak: "10", persistence: "3", rigidity: "24", hit: "D", guard: "-7", damage: "80", stan: "100", remarks: "", type: "special", command: "" },
    { name: "M Sonic Scythe", outbreak: "15", persistence: "3", rigidity: "22", hit: "D", guard: "-10", damage: "100", stan: "100", remarks: "", type: "special", command: "" },
    {
        name: "H Sonic Scythe",
        outbreak: "13",
        persistence: "5",
        rigidity: "21",
        hit: "D",
        guard: "-15",
        damage: "110",
        stan: "150",
        remarks: "13F - 20F  invincible to mid-air attacks\n                                V*Only possible during 1st attack",
        type: "special",
        command: ""
    },
    { name: "L Sonic Scythe (VS2 Ver.)", outbreak: "10", persistence: "8", rigidity: "19", hit: "D", guard: "2", damage: "90", stan: "100", remarks: "", type: "special", command: "" },
    { name: "M Sonic Scythe (VS2 Ver.)", outbreak: "15", persistence: "6", rigidity: "22", hit: "D", guard: "-5", damage: "110", stan: "120", remarks: "", type: "special", command: "" },
    {
        name: "H Sonic Scythe (VS2 Ver.)",
        outbreak: "13",
        persistence: "5",
        rigidity: "21",
        hit: "D",
        guard: "-15",
        damage: "120",
        stan: "150",
        remarks: "13F - 20F  invincible to mid-air attacks\n                                V*Only possible during 1st attack",
        type: "special",
        command: ""
    },
    {
        name: "EX Sonic Scythe",
        outbreak: "6",
        persistence: "13",
        rigidity: "34",
        hit: "D",
        guard: "-19",
        damage: "150",
        stan: "200",
        remarks: "1F - 6F  throw invincibility\n                6F - 14F  invincible to mid-air attacks\n                                V*Only possible during 1st, 3rd, 4th attack",
        type: "special",
        command: ""
    },
    {
        name: "EX Sonic Scythe (VS2 Ver.)",
        outbreak: "6",
        persistence: "16",
        rigidity: "34",
        hit: "D",
        guard: "-19",
        damage: "160",
        stan: "200",
        remarks: "1F - 6F  throw invincibility\n                6F - 14F  invincible to mid-air attacks\n                                V*Only possible during 1st, 4th, 5th attack",
        type: "special",
        command: ""
    },
    {
        name: "Judgement Saber",
        outbreak: "1+9",
        persistence: "3",
        rigidity: "40",
        hit: "D",
        guard: "-31",
        damage: "330",
        stan: "0",
        remarks: "11F - 12F  projectile invincibility\n1F - 10F  full invincibility",
        type: "ca",
        command: ""
    }
];
exports.nash = nash;
//# sourceMappingURL=nash.js.map