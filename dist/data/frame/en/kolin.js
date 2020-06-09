"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kolin = [
    { name: "Standing LP", outbreak: "4", persistence: "3", rigidity: "6", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "Standing MP", outbreak: "6", persistence: "3", rigidity: "13", hit: "4", guard: "2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "Standing HP", outbreak: "8", persistence: "3", rigidity: "19", hit: "5", guard: "-4", damage: "80", stan: "150", remarks: "Triggers Crush Counter (+18F)", type: "normal", command: "" },
    { name: "Standing LK", outbreak: "5", persistence: "3", rigidity: "9", hit: "1", guard: "-2", damage: "40", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "Standing MK", outbreak: "5", persistence: "3", rigidity: "14", hit: "3", guard: "-2", damage: "50", stan: "100", remarks: "", type: "normal", command: "" },
    {
        name: "Standing HK",
        outbreak: "11",
        persistence: "3",
        rigidity: "20",
        hit: "6",
        guard: "-2",
        damage: "80",
        stan: "150",
        remarks: "Triggers Crush Counter (+23F)\n                                                                Will not hit crouching opponents",
        type: "normal",
        command: ""
    },
    { name: "Crouching LP", outbreak: "3", persistence: "2", rigidity: "8", hit: "4", guard: "1", damage: "20", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "Crouching MP", outbreak: "6", persistence: "3", rigidity: "13", hit: "5", guard: "2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "Crouching HP", outbreak: "7", persistence: "3", rigidity: "23", hit: "0", guard: "-3", damage: "80", stan: "150", remarks: "", type: "normal", command: "" },
    { name: "Crouching LK", outbreak: "4", persistence: "2", rigidity: "8", hit: "3", guard: "1", damage: "20", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
    { name: "Crouching MK", outbreak: "8", persistence: "3", rigidity: "15", hit: "3", guard: "1", damage: "50", stan: "100", remarks: "", type: "normal", command: "" },
    {
        name: "Crouching HK",
        outbreak: "10",
        persistence: "4",
        rigidity: "24",
        hit: "D",
        guard: "-12",
        damage: "100",
        stan: "150",
        remarks: "Triggers Crush Counter  (D)\n                                                                                                                                                                S*CA*Only possible for 1st attack on hit\nV*Only possible during 1st attack",
        type: "normal",
        command: ""
    },
    { name: "Jumping LP", outbreak: "3", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
    { name: "Jumping MP", outbreak: "5", persistence: "6", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", type: "jump", command: "" },
    { name: "Jumping HP", outbreak: "7", persistence: "4", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
    { name: "Jumping LK", outbreak: "4", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "Can cross-up", type: "jump", command: "" },
    { name: "Jumping MK", outbreak: "6", persistence: "5", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", type: "jump", command: "" },
    { name: "Jumping HK", outbreak: "9", persistence: "4", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
    { name: "Blizzard Heel", outbreak: "23", persistence: "5", rigidity: "18", hit: "1", guard: "-7", damage: "60", stan: "100", remarks: "", type: "unique", command: "→ + MK" },
    {
        name: "Sniping Kick",
        outbreak: "14",
        persistence: "3",
        rigidity: "19",
        hit: "3",
        guard: "-2",
        damage: "90",
        stan: "150",
        remarks: "Triggers Crush Counter  (D)",
        type: "unique",
        command: "← + HK"
    },
    {
        name: "Isicle Stamp",
        outbreak: "18",
        persistence: "Until landing",
        rigidity: "4 frame(s) after landing",
        hit: "",
        guard: "",
        damage: "30",
        stan: "70",
        remarks: "",
        type: "unique",
        command: "(DURING JUMP) ↓ + MK"
    },
    { name: "Frost Spike (2)", outbreak: "6", persistence: "3", rigidity: "17", hit: "0", guard: "-6", damage: "40", stan: "60", remarks: "", type: "unique", command: "LP ▶ MP" },
    { name: "Frost Spike (3)", outbreak: "8", persistence: "", rigidity: "", hit: "1", guard: "-9", damage: "60", stan: "80", remarks: "S*CA*Only on hit", type: "unique", command: "LP ▶ MP ▶ HP" },
    { name: "White Out (2)", outbreak: "8", persistence: "3", rigidity: "23", hit: "-1", guard: "-9", damage: "50", stan: "70", remarks: "", type: "unique", command: "MK ▶ HP" },
    {
        name: "White Out (3)",
        outbreak: "10",
        persistence: "",
        rigidity: "",
        hit: "D",
        guard: "-12",
        damage: "60",
        stan: "100",
        remarks: "",
        type: "unique",
        command: "(WHEN SELECTING VSKILL I) MK ▶ HP ▶ MP MK"
    },
    {
        name: "White Pressure",
        outbreak: "14",
        persistence: "1",
        rigidity: "49",
        hit: "D",
        guard: "",
        damage: "100",
        stan: "150",
        remarks: "Opponent takes ice damage on hit",
        type: "unique",
        command: "(WHEN SELECTING VSKILL II) MK ▶ HP ▶ MP MK"
    },
    { name: "Cold Low (2)", outbreak: "4", persistence: "2", rigidity: "8", hit: "3", guard: "1", damage: "20", stan: "70", remarks: "", type: "unique", command: "(DURING M Vanity Step) ↓ + LK" },
    {
        name: "Cold Low (3)",
        outbreak: "10",
        persistence: "4",
        rigidity: "24",
        hit: "D",
        guard: "-12",
        damage: "100",
        stan: "150",
        remarks: "S*CA*Only possible for 1st attack on hit\nV*Only possible during 1st attack",
        type: "unique",
        command: "(DURING M Vanity Step) ↓ + LK ▶ ↓ + HK"
    },
    { name: "Brinicle (2)", outbreak: "4", persistence: "2", rigidity: "8", hit: "3", guard: "1", damage: "20", stan: "70", remarks: "", type: "unique", command: "(DURING M Vanity Step) ↓ + LK" },
    {
        name: "Brinicle (3)",
        outbreak: "8",
        persistence: "3",
        rigidity: "21",
        hit: "D",
        guard: "-2",
        damage: "90",
        stan: "150",
        remarks: "S*CA*Only on hit",
        type: "unique",
        command: "(DURING M Vanity Step) ↓ + LK ▶ ↓ + HP"
    },
    { name: "Snow Grain (2)", outbreak: "6", persistence: "3", rigidity: "13", hit: "5", guard: "2", damage: "60", stan: "100", remarks: "", type: "unique", command: "(DURING M Vanity Step) ↓ + MP" },
    {
        name: "Snow Grain (3)",
        outbreak: "8",
        persistence: "3",
        rigidity: "19",
        hit: "5",
        guard: "-8",
        damage: "90",
        stan: "150",
        remarks: "S*CA*Only on hit",
        type: "unique",
        command: "(DURING M Vanity Step) ↓ + MP ▶ HP"
    },
    {
        name: "White Spear (2)",
        outbreak: "4",
        persistence: "5",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "40",
        stan: "70",
        remarks: "Can cross-up",
        type: "unique",
        command: "(DURING H Vanity Step)(DURING JUMP) LK"
    },
    {
        name: "White Spear (3)",
        outbreak: "3",
        persistence: "5",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "70",
        stan: "100",
        remarks: "Can cross-up",
        type: "unique",
        command: "(DURING H Vanity Step)(DURING JUMP) LK ▶ MK"
    },
    { name: "Pressure Ridge", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "130", stan: "120", remarks: "", type: "throw", command: "" },
    { name: "Sublimation", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "120", stan: "150", remarks: "", type: "throw", command: "" },
    { name: "Avalance Rock", outbreak: "5", persistence: "2", rigidity: "6 frame(s) after landing", hit: "D", guard: "", damage: "120", stan: "200", remarks: "", type: "throw", command: "" },
    {
        name: "[VS1] Inside Slash",
        outbreak: "15",
        persistence: "2",
        rigidity: "23",
        hit: "2",
        guard: "-8",
        damage: "50",
        stan: "100",
        remarks: "Counter for all hit levels from 8F to 16F",
        type: "vsystem",
        command: ""
    },
    {
        name: "[VS1] Inside Slash (upon successful parry)",
        outbreak: "1",
        persistence: "5",
        rigidity: "31",
        hit: "D",
        guard: "",
        damage: "150",
        stan: "200",
        remarks: "1F - 54F  full invincibility",
        type: "vsystem",
        command: ""
    },
    {
        name: "[VS2] Glacier Throw",
        outbreak: "26",
        persistence: "3",
        rigidity: "47",
        hit: "D",
        guard: "",
        damage: "100",
        stan: "150",
        remarks: "Opponent takes ice damage on hit",
        type: "vsystem",
        command: ""
    },
    {
        name: "Diamond Dust",
        outbreak: "17",
        persistence: "24",
        rigidity: "30 total frames",
        hit: "D",
        guard: "32",
        damage: "120",
        stan: "360",
        remarks: "V-Gauge Timer + 2000F\n                                                                                                                                                                                While active, Kolin gains the Diamond Dust special move\nOpponent takes ice damage on hit\nWhile under the ice effect, the opponent's stun gauge will not recover. Effect is released if Kolin is hit\nCan hit a knocked down opponent",
        type: "vsystem",
        command: ""
    },
    {
        name: "Third Eye",
        outbreak: "",
        persistence: "",
        rigidity: "33 total frames",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "1F - 25F  attack & projectile invincibility\n                                                Recover 200 stun upon activation",
        type: "vsystem",
        command: ""
    },
    { name: "Frost Touch - Low", outbreak: "2", persistence: "11", rigidity: "34", hit: "D", guard: "", damage: "200", stan: "250", remarks: "Counter for low attacks", type: "special", command: "" },
    {
        name: "Frost Touch - Mid",
        outbreak: "2",
        persistence: "11",
        rigidity: "34",
        hit: "D",
        guard: "",
        damage: "180",
        stan: "250",
        remarks: "Can counter high and mid grounded attacks",
        type: "special",
        command: ""
    },
    {
        name: "Frost Touch - High",
        outbreak: "2",
        persistence: "11",
        rigidity: "34",
        hit: "D",
        guard: "",
        damage: "180",
        stan: "250",
        remarks: "Can counter airborne attacks",
        type: "special",
        command: ""
    },
    { name: "EX Frost Touch - Low", outbreak: "1", persistence: "12", rigidity: "29", hit: "D", guard: "", damage: "260", stan: "300", remarks: "Counter for low attacks", type: "special", command: "" },
    {
        name: "EX Frost Touch - Mid",
        outbreak: "1",
        persistence: "12",
        rigidity: "29",
        hit: "D",
        guard: "",
        damage: "240",
        stan: "300",
        remarks: "Can counter high and mid grounded attacks",
        type: "special",
        command: ""
    },
    {
        name: "EX Frost Touch - High",
        outbreak: "1",
        persistence: "12",
        rigidity: "29",
        hit: "D",
        guard: "",
        damage: "240",
        stan: "300",
        remarks: "Can counter airborne attacks",
        type: "special",
        command: ""
    },
    { name: "L Parabellum", outbreak: "9", persistence: "8", rigidity: "17", hit: "2", guard: "-4", damage: "70", stan: "150", remarks: "", type: "special", command: "" },
    { name: "M Parabellum", outbreak: "14", persistence: "10", rigidity: "21", hit: "4", guard: "-6", damage: "80", stan: "150", remarks: "", type: "special", command: "" },
    { name: "H Parabellum", outbreak: "18", persistence: "12", rigidity: "31", hit: "D", guard: "-9", damage: "100", stan: "150", remarks: "", type: "special", command: "" },
    {
        name: "EX Parabellum",
        outbreak: "9",
        persistence: "10",
        rigidity: "22",
        hit: "D",
        guard: "-7",
        damage: "100",
        stan: "150",
        remarks: "Stops after the 5th attack on block and whiff\nS*The final attack can be canceled into Vanity Step, Hailstorm",
        type: "special",
        command: ""
    },
    {
        name: "L Vanity Step",
        outbreak: "",
        persistence: "",
        rigidity: "43 total frames",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "7F - 14F  attack & projectile invincibility\n                                                VS*VS2のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "M Vanity Step",
        outbreak: "",
        persistence: "",
        rigidity: "46 total frames",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "6F - 14F  attack & projectile invincibility\n                                                Can cancel into normal and unique moves from 39F",
        type: "special",
        command: ""
    },
    {
        name: "H Vanity Step",
        outbreak: "",
        persistence: "",
        rigidity: "4 frame(s) after landing",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "7F - 14F  attack & projectile invincibility\n                                                Can perform normal moves and her air throw during the jump",
        type: "special",
        command: ""
    },
    {
        name: "EX L Vanity Step",
        outbreak: "",
        persistence: "",
        rigidity: "32 total frames",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "17F - 32F  projectile invincibility\n1F - 16F  attack & projectile invincibility\n                                                VS*VS2のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "EX M Vanity Step",
        outbreak: "",
        persistence: "",
        rigidity: "38 total frames",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "15F - 45F  projectile invincibility\n1F - 14F  attack & projectile invincibility\n                                                Can cancel into normal and unique moves from 33F",
        type: "special",
        command: ""
    },
    {
        name: "EX H Vanity Step",
        outbreak: "",
        persistence: "",
        rigidity: "4 frame(s) after landing",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "18F - 55F  projectile invincibility\n1F - 17F  attack & projectile invincibility",
        type: "special",
        command: ""
    },
    {
        name: "Silver Edge",
        outbreak: "8",
        persistence: "9",
        rigidity: "23",
        hit: "D",
        guard: "-12",
        damage: "100",
        stan: "150",
        remarks: "1F - 11F  projectile invincibility",
        type: "special",
        command: ""
    },
    {
        name: "EX Silver Edge",
        outbreak: "5",
        persistence: "9",
        rigidity: "18",
        hit: "D",
        guard: "-9",
        damage: "160",
        stan: "200",
        remarks: "1F - 13F  projectile invincibility",
        type: "special",
        command: ""
    },
    {
        name: "L Hailstorm",
        outbreak: "12",
        persistence: "5/Until landing",
        rigidity: "25",
        hit: "D",
        guard: "-8",
        damage: "50",
        stan: "100",
        remarks: "The startup motion and the projectile itself nullify projectiles",
        type: "special",
        command: ""
    },
    {
        name: "M Hailstorm",
        outbreak: "12",
        persistence: "5/Until landing",
        rigidity: "28",
        hit: "D",
        guard: "-11",
        damage: "50",
        stan: "100",
        remarks: "The startup motion and the projectile itself nullify projectiles",
        type: "special",
        command: ""
    },
    {
        name: "H Hailstorm",
        outbreak: "12",
        persistence: "5/Until landing",
        rigidity: "28",
        hit: "D",
        guard: "-11",
        damage: "50",
        stan: "100",
        remarks: "The startup motion and the projectile itself nullify projectiles",
        type: "special",
        command: ""
    },
    {
        name: "EX Hailstorm",
        outbreak: "12",
        persistence: "5/Until landing",
        rigidity: "25",
        hit: "D",
        guard: "-8",
        damage: "50+100",
        stan: "100+200",
        remarks: "The startup motion and the projectile itself nullify projectiles\n初段が空中の相手にヒットした場合飛び道具部分のスタン値が50になる",
        type: "special",
        command: ""
    },
    {
        name: "VDiamond Dust",
        outbreak: "17",
        persistence: "24",
        rigidity: "36 total frames",
        hit: "D",
        guard: "26",
        damage: "120",
        stan: "360",
        remarks: "Uses 2000F V-Gauge Timer\n                                                                                                                                                                                Opponent takes ice damage on hit\nWhile under the ice effect, the opponent's stun gauge will not recover. Effect is released if Kolin is hit\nPuts the opponent in a knocked down juggle state",
        type: "special",
        command: ""
    },
    { name: "Frost Tower", outbreak: "7", persistence: "3", rigidity: "52", hit: "D", guard: "-37", damage: "330", stan: "0", remarks: "1F - 9F  full invincibility", type: "ca", command: "" }
];
exports.kolin = kolin;
//# sourceMappingURL=kolin.js.map