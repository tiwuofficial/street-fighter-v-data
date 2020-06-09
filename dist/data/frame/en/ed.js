"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ed = [
    { name: "Standing LP", outbreak: "4", persistence: "2", rigidity: "8", hit: "5", guard: "3", damage: "30", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
    { name: "Standing MP", outbreak: "6", persistence: "3", rigidity: "16", hit: "9", guard: "3", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    {
        name: "Standing HP",
        outbreak: "11",
        persistence: "3",
        rigidity: "21",
        hit: "2",
        guard: "-2",
        damage: "90",
        stan: "150",
        remarks: "Triggers Crush Counter  (D)\n                                                                                                                                                                Value is the fastest startup",
        type: "normal",
        command: ""
    },
    { name: "Standing LK", outbreak: "3", persistence: "3", rigidity: "8", hit: "2", guard: "1", damage: "30", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
    { name: "Standing MK", outbreak: "7", persistence: "3", rigidity: "15", hit: "4", guard: "2", damage: "70", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "Standing HK", outbreak: "15", persistence: "4", rigidity: "22", hit: "2", guard: "-4", damage: "80", stan: "150", remarks: "Triggers Crush Counter (+20F)", type: "normal", command: "" },
    { name: "Crouching LP", outbreak: "4", persistence: "2", rigidity: "8", hit: "5", guard: "3", damage: "30", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
    { name: "Crouching MP", outbreak: "6", persistence: "3", rigidity: "12", hit: "5", guard: "2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    {
        name: "Crouching HP",
        outbreak: "8",
        persistence: "6",
        rigidity: "21",
        hit: "1",
        guard: "-5",
        damage: "80(*70)",
        stan: "150",
        remarks: "Triggers Crush Counter  (D)\n                                                Forces stand\n                                                                                                                *From active frame 2F",
        type: "normal",
        command: ""
    },
    { name: "Crouching LK", outbreak: "4", persistence: "2", rigidity: "8", hit: "2", guard: "0", damage: "20", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "Crouching MK", outbreak: "7", persistence: "2", rigidity: "17", hit: "1", guard: "-3", damage: "50", stan: "100", remarks: "", type: "normal", command: "" },
    {
        name: "Crouching HK",
        outbreak: "10",
        persistence: "5",
        rigidity: "24(*22)",
        hit: "D",
        guard: "-10",
        damage: "90",
        stan: "150",
        remarks: "Triggers Crush Counter  (D)\n                                                                                                                                                                *On whiff",
        type: "normal",
        command: ""
    },
    { name: "Jumping LP", outbreak: "4", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
    { name: "Jumping MP", outbreak: "7", persistence: "4", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "Causes knockdown on mid-air hit", type: "jump", command: "" },
    { name: "Jumping HP", outbreak: "9", persistence: "4", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
    { name: "Jumping LK", outbreak: "3", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
    { name: "Jumping MK", outbreak: "8", persistence: "5", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "Can cross-up", type: "jump", command: "" },
    { name: "Jumping HK", outbreak: "9", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
    { name: "Psycho Blow", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "130", stan: "150", remarks: "", type: "throw", command: "" },
    { name: "Cheat & Smash", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "140", stan: "200", remarks: "", type: "throw", command: "" },
    {
        name: "[VS1] Psycho Snatcher - Ground",
        outbreak: "21",
        persistence: "6",
        rigidity: "40",
        hit: "D",
        guard: "-2",
        damage: "80",
        stan: "200",
        remarks: "Will not hit airborne opponents\n                                                                Value is the fastest startup\nIf the Snatcher hits, Ed automatically closes the distance with a body blow",
        type: "vsystem",
        command: ""
    },
    {
        name: "[VS1] Psycho Snatcher - Ground (Hold Button)",
        outbreak: "35",
        persistence: "6",
        rigidity: "40",
        hit: "D",
        guard: "3",
        damage: "120",
        stan: "0",
        remarks: "Will not hit airborne opponents\n                                                                If the Snatcher hits, Ed launches the opponent while bringing them closer, if it's blocked, he brings them closer on the ground",
        type: "vsystem",
        command: ""
    },
    {
        name: "[VS1] Psycho Snatcher - Air",
        outbreak: "9",
        persistence: "4",
        rigidity: "47",
        hit: "D",
        guard: "",
        damage: "100",
        stan: "150",
        remarks: "Will not hit grounded opponents\n                                                                                Value is the fastest startup\nIf the Snatcher hits, Ed automatically flies up to the opponent with a punch strike",
        type: "vsystem",
        command: ""
    },
    {
        name: "[VS1] Psycho Snatcher - Air (Hold Button)",
        outbreak: "26",
        persistence: "6",
        rigidity: "40",
        hit: "D",
        guard: "",
        damage: "80",
        stan: "100",
        remarks: "Will not hit grounded opponents\n                                                                                If the Snatcher hits, Ed slams the opponent into the ground and they'll bounce up",
        type: "vsystem",
        command: ""
    },
    {
        name: "[VS2] Psycho Swing",
        outbreak: "22",
        persistence: "3",
        rigidity: "20",
        hit: "D",
        guard: "-6",
        damage: "70",
        stan: "100",
        remarks: "5F - 24F  projectile invincibility",
        type: "vsystem",
        command: ""
    },
    {
        name: "[VS2] Psycho Swing (Hold Button)",
        outbreak: "38",
        persistence: "3",
        rigidity: "19",
        hit: "D",
        guard: "-2",
        damage: "80",
        stan: "120",
        remarks: "5F - 37F  projectile invincibility",
        type: "vsystem",
        command: ""
    },
    { name: "[VS2] Psycho Smash", outbreak: "11", persistence: "5", rigidity: "21", hit: "D", guard: "-6", damage: "70", stan: "100", remarks: "", type: "vsystem", command: "" },
    {
        name: "[VS2] Psycho Smash (Hold Button)",
        outbreak: "31",
        persistence: "5",
        rigidity: "17(*19)",
        hit: "D",
        guard: "3",
        damage: "90",
        stan: "120",
        remarks: "*On whiff",
        type: "vsystem",
        command: ""
    },
    {
        name: "Psycho Cannon",
        outbreak: "1+15(*12)",
        persistence: "",
        rigidity: "25 total frames(*21)",
        hit: "D",
        guard: "",
        damage: "120",
        stan: "150",
        remarks: "*Press the forward direction to change the projectile's speed",
        type: "vsystem",
        command: ""
    },
    {
        name: "Kill Step",
        outbreak: "",
        persistence: "",
        rigidity: "31 total frames",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "1F - 25F  attack invincibility\n                                                Recover 200 stun upon activation",
        type: "vsystem",
        command: ""
    },
    {
        name: "Psycho Flicker",
        outbreak: "6",
        persistence: "6",
        rigidity: "22",
        hit: "3",
        guard: "-2",
        damage: "80",
        stan: "150",
        remarks: "No changes based on button strength",
        type: "special",
        command: ""
    },
    { name: "Psycho Spark", outbreak: "11", persistence: "8", rigidity: "16", hit: "1", guard: "-2", damage: "50", stan: "80", remarks: "Treated as a projectile", type: "special", command: "" },
    {
        name: "Psycho Shoot",
        outbreak: "13",
        persistence: "",
        rigidity: "39 total frames",
        hit: "4",
        guard: "-4",
        damage: "50",
        stan: "70",
        remarks: "Button strength changes projectile speed",
        type: "special",
        command: ""
    },
    { name: "EX Psycho Shoot", outbreak: "13", persistence: "", rigidity: "36 total frames", hit: "D", guard: "8", damage: "100", stan: "150", remarks: "", type: "special", command: "" },
    {
        name: "Psycho Knuckle",
        outbreak: "30",
        persistence: "12",
        rigidity: "27",
        hit: "(crumple)",
        guard: "-2",
        damage: "100",
        stan: "150",
        remarks: "Moves behind the opponent on hit and block\nCrumple time is longer the closer the attack hits\nVS*VS2のみキャンセル可能",
        type: "special",
        command: ""
    },
    { name: "Psycho Upper", outbreak: "16", persistence: "5", rigidity: "33", hit: "D", guard: "-16", damage: "120", stan: "150", remarks: "", type: "special", command: "" },
    {
        name: "EX Psycho Upper",
        outbreak: "16(*13)",
        persistence: "11",
        rigidity: "32",
        hit: "D",
        guard: "-20",
        damage: "140",
        stan: "200",
        remarks: "1F - 18F  full invincibility\n                                                Subject to counter hit during move duration (1.2x damage)\n*During cancel",
        type: "special",
        command: ""
    },
    {
        name: "Psycho Rising",
        outbreak: "12",
        persistence: "18",
        rigidity: "26 frame(s) after landing",
        hit: "D",
        guard: "-38",
        damage: "50",
        stan: "100",
        remarks: "3F - 9F  projectile invincibility\n10F - 13F  full invincibility\n                                                Subject to counter hit during move duration",
        type: "special",
        command: ""
    },
    {
        name: "Psycho Splash",
        outbreak: "14",
        persistence: "Until landing",
        rigidity: "26 frame(s) after landing",
        hit: "D",
        guard: "",
        damage: "70",
        stan: "100",
        remarks: "Can only be done on hit",
        type: "special",
        command: ""
    },
    {
        name: "EX Psycho Splash",
        outbreak: "14",
        persistence: "Until landing",
        rigidity: "13 frame(s) after landing",
        hit: "D",
        guard: "",
        damage: "80",
        stan: "100",
        remarks: "Can only be done on hit\nProjectile invincible while active",
        type: "special",
        command: ""
    },
    {
        name: "Psycho Barrage",
        outbreak: "1+12",
        persistence: "14",
        rigidity: "49",
        hit: "D",
        guard: "-21",
        damage: "340",
        stan: "0",
        remarks: "1F - 22F  full invincibility\n                                                The active frames are for whiff",
        type: "ca",
        command: ""
    }
];
exports.ed = ed;
//# sourceMappingURL=ed.js.map