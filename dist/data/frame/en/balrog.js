"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const balrog = [
    { name: "Standing LP", outbreak: "4", persistence: "2", rigidity: "7", hit: "5", guard: "3", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "Standing MP", outbreak: "5", persistence: "4", rigidity: "13", hit: "2", guard: "0", damage: "70", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "Standing HP", outbreak: "12", persistence: "2", rigidity: "19", hit: "0", guard: "-3", damage: "80", stan: "150", remarks: "Triggers Crush Counter  (D)", type: "normal", command: "" },
    { name: "Standing LK", outbreak: "3", persistence: "2", rigidity: "8", hit: "2", guard: "1", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "Standing MK", outbreak: "6", persistence: "3", rigidity: "12", hit: "5", guard: "2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "Standing HK", outbreak: "9", persistence: "3", rigidity: "18", hit: "7", guard: "3", damage: "80", stan: "150", remarks: "Triggers Crush Counter (+23F)", type: "normal", command: "" },
    { name: "Crouching LP", outbreak: "4", persistence: "3", rigidity: "7", hit: "4", guard: "3", damage: "30", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
    { name: "Crouching MP", outbreak: "6", persistence: "3", rigidity: "12", hit: "4", guard: "2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    {
        name: "Crouching HP",
        outbreak: "8",
        persistence: "5",
        rigidity: "22",
        hit: "-1",
        guard: "-5",
        damage: "90(*80)",
        stan: "150",
        remarks: "Triggers Crush Counter  (D)\n                                                Forces stand\n                                                                                                                *From active frame 2F",
        type: "normal",
        command: ""
    },
    { name: "Crouching LK", outbreak: "4", persistence: "3", rigidity: "8", hit: "4", guard: "1", damage: "20", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "Crouching MK", outbreak: "7", persistence: "2", rigidity: "17", hit: "2", guard: "-2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "Crouching HK", outbreak: "8", persistence: "2", rigidity: "26", hit: "D", guard: "-14", damage: "100", stan: "150", remarks: "Triggers Crush Counter  (D)", type: "normal", command: "" },
    { name: "Jumping LP", outbreak: "4", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
    { name: "Jumping MP", outbreak: "5", persistence: "3", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", type: "jump", command: "" },
    { name: "Jumping HP", outbreak: "7", persistence: "4", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
    { name: "Jumping LK", outbreak: "3", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
    { name: "Jumping MK", outbreak: "6", persistence: "5", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", type: "jump", command: "" },
    { name: "Jumping HK", outbreak: "9", persistence: "4", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
    { name: "Hard Smasher (2)", outbreak: "6", persistence: "4", rigidity: "20", hit: "D", guard: "-8", damage: "40", stan: "80", remarks: "", type: "unique", command: "MK ▶ MP" },
    {
        name: "Hard Smasher (3)",
        outbreak: "",
        persistence: "",
        rigidity: "31 total frames",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "",
        type: "unique",
        command: "(WHEN SELECTING VSKILL I) MK ▶ MP ▶ MP MK"
    },
    {
        name: "Hard Smasher (4)",
        outbreak: "21",
        persistence: "2",
        rigidity: "23",
        hit: "D",
        guard: "-8",
        damage: "60",
        stan: "120",
        remarks: "",
        type: "unique",
        command: "(WHEN SELECTING VSKILL I) MK ▶ MP ▶ MP MK ▶"
    },
    {
        name: "Hard Pressure (4)",
        outbreak: "26",
        persistence: "3",
        rigidity: "21",
        hit: "D",
        guard: "-8",
        damage: "60",
        stan: "120",
        remarks: "",
        type: "unique",
        command: "(WHEN SELECTING VSKILL I) MK ▶ MP ▶ MP MK ▶"
    },
    {
        name: "OTB",
        outbreak: "",
        persistence: "",
        rigidity: "50 total frames",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "",
        type: "unique",
        command: "(WHEN SELECTING VSKILL II) MK ▶ MP ▶ MP MK"
    },
    { name: "Under Impact (2)", outbreak: "6", persistence: "3", rigidity: "16", hit: "1", guard: "-7", damage: "40", stan: "70", remarks: "", type: "unique", command: "LK ▶ MK" },
    { name: "Under Impact (3)", outbreak: "9", persistence: "2", rigidity: "21", hit: "D", guard: "-8", damage: "70", stan: "100", remarks: "", type: "unique", command: "LK ▶ MK ▶ HK" },
    {
        name: "Stomping Combo (2)",
        outbreak: "9",
        persistence: "2",
        rigidity: "20",
        hit: "2",
        guard: "-7",
        damage: "40",
        stan: "80",
        remarks: "Forces stand",
        type: "unique",
        command: "(WHILE CROUCHING) MK ▶ ↓ + MK"
    },
    { name: "Dirty Bomber", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "140", stan: "150", remarks: "", type: "throw", command: "" },
    { name: "Dirty Shot", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "130", stan: "200", remarks: "", type: "throw", command: "" },
    {
        name: "[VS1] KKB",
        outbreak: "",
        persistence: "",
        rigidity: "29 total frames",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "4F - 22F  projectile invincibility",
        type: "vsystem",
        command: ""
    },
    {
        name: "[VS1] KKB (Cancel)",
        outbreak: "",
        persistence: "",
        rigidity: "25 total frames",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "4F - 22F  projectile invincibility",
        type: "vsystem",
        command: ""
    },
    {
        name: "[VS1] Buffalo Swing",
        outbreak: "7",
        persistence: "2",
        rigidity: "21",
        hit: "2",
        guard: "-4",
        damage: "60",
        stan: "100",
        remarks: "1F - 5F  projectile invincibility",
        type: "vsystem",
        command: ""
    },
    {
        name: "[VS1] Buffalo Pressure",
        outbreak: "17",
        persistence: "3",
        rigidity: "19",
        hit: "5",
        guard: "-7",
        damage: "50",
        stan: "100",
        remarks: "1F - 14F  projectile invincibility",
        type: "vsystem",
        command: ""
    },
    {
        name: "[VS2] FFB",
        outbreak: "",
        persistence: "",
        rigidity: "50 total frames",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "発動後一回だけダッシュストレート・チャージングバッファローの性質変化\n（VT1中のラッシュ時はすべてのストレートが強化される）",
        type: "vsystem",
        command: ""
    },
    {
        name: "Crazy Rush",
        outbreak: "1",
        persistence: "",
        rigidity: "6",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "V-Gauge Timer + 2000F\n                                                                                                                                                                                While active, Balrog gains the special moves Charging Buffalo and Bursting Buffalo",
        type: "vsystem",
        command: ""
    },
    {
        name: "Buffalo Headbutt",
        outbreak: "17",
        persistence: "3",
        rigidity: "23",
        hit: "D",
        guard: "-2",
        damage: "60",
        stan: "0",
        remarks: "1F - 30F  attack & projectile invincibility\n                                                Recover 200 stun upon activation",
        type: "vsystem",
        command: ""
    },
    {
        name: "L Dash Straight",
        outbreak: "12 (*10)",
        persistence: "4",
        rigidity: "22",
        hit: "2",
        guard: "-4",
        damage: "80",
        stan: "150",
        remarks: "*When in contact\nVS*Only possible before the attack\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "M Dash Straight",
        outbreak: "16 (*12)",
        persistence: "4",
        rigidity: "22",
        hit: "3",
        guard: "-6",
        damage: "90",
        stan: "150",
        remarks: "*When in contact\nVS*Only possible before the attack\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "H Dash Straight",
        outbreak: "25 (*19)",
        persistence: "4",
        rigidity: "22",
        hit: "2",
        guard: "-7",
        damage: "100",
        stan: "150",
        remarks: "*When in contact\nVS*Only possible before the attack\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "L Dash Straight (VS2 Ver.)",
        outbreak: "12 (*10)",
        persistence: "4",
        rigidity: "22",
        hit: "D",
        guard: "2",
        damage: "90",
        stan: "100",
        remarks: "*When in contact",
        type: "special",
        command: ""
    },
    {
        name: "M Dash Straight (VS2 Ver.)",
        outbreak: "16 (*12)",
        persistence: "4",
        rigidity: "22",
        hit: "D",
        guard: "2",
        damage: "100",
        stan: "100",
        remarks: "*When in contact",
        type: "special",
        command: ""
    },
    {
        name: "H Dash Straight (VS2 Ver.)",
        outbreak: "25 (*19)",
        persistence: "4",
        rigidity: "22",
        hit: "D",
        guard: "2",
        damage: "110",
        stan: "100",
        remarks: "*When in contact",
        type: "special",
        command: ""
    },
    {
        name: "EX Dash Straight",
        outbreak: "22 (*9)",
        persistence: "6",
        rigidity: "29",
        hit: "D",
        guard: "1",
        damage: "150",
        stan: "200",
        remarks: "*When in contact\nVS*Only possible during 1st attack\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "EX Dash Straight (VS2 Ver.)",
        outbreak: "22 (*9)",
        persistence: "6",
        rigidity: "29",
        hit: "D",
        guard: "4",
        damage: "160",
        stan: "120",
        remarks: "*When in contact",
        type: "special",
        command: ""
    },
    {
        name: "VCharging Buffalo (1)",
        outbreak: "12",
        persistence: "6",
        rigidity: "17",
        hit: "2",
        guard: "-2",
        damage: "30",
        stan: "100",
        remarks: "Uses 500F V-Gauge Timer\n                                                                                                                                                                                VS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "VCharging Buffalo (2)",
        outbreak: "12",
        persistence: "6",
        rigidity: "16",
        hit: "2",
        guard: "-2",
        damage: "40",
        stan: "100",
        remarks: "Uses 300F V-Gauge Timer\n                                                                                                                                                                                VS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "VCharging Buffalo (3)",
        outbreak: "12",
        persistence: "6",
        rigidity: "15",
        hit: "2",
        guard: "-2",
        damage: "50",
        stan: "100",
        remarks: "Uses 300F V-Gauge Timer\n                                                                                                                                                                                VS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "VCharging Buffalo (4)",
        outbreak: "17",
        persistence: "6",
        rigidity: "29",
        hit: "D",
        guard: "-13",
        damage: "90",
        stan: "100",
        remarks: "Uses 300F V-Gauge Timer",
        type: "special",
        command: ""
    },
    {
        name: "VEX Charging Buffalo",
        outbreak: "11",
        persistence: "6",
        rigidity: "18",
        hit: "D",
        guard: "-2",
        damage: "70",
        stan: "100",
        remarks: "Uses 500F V-Gauge Timer\n                                                                                                                                                                                VS*Only for the first iteration\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "VCharging Buffalo (VS2 Ver.) (1)",
        outbreak: "12",
        persistence: "6",
        rigidity: "17",
        hit: "D",
        guard: "0",
        damage: "60",
        stan: "80",
        remarks: "Uses 500F V-Gauge Timer",
        type: "special",
        command: ""
    },
    {
        name: "VCharging Buffalo (VS2 Ver.) (2)",
        outbreak: "12",
        persistence: "6",
        rigidity: "16",
        hit: "D",
        guard: "1",
        damage: "60",
        stan: "80",
        remarks: "Uses 300F V-Gauge Timer",
        type: "special",
        command: ""
    },
    {
        name: "VCharging Buffalo (VS2 Ver.) (3)",
        outbreak: "12",
        persistence: "6",
        rigidity: "15",
        hit: "D",
        guard: "2",
        damage: "70",
        stan: "80",
        remarks: "Uses 300F V-Gauge Timer",
        type: "special",
        command: ""
    },
    {
        name: "VCharging Buffalo (VS2 Ver.) (4)",
        outbreak: "17",
        persistence: "6",
        rigidity: "29",
        hit: "D",
        guard: "-12",
        damage: "130",
        stan: "190",
        remarks: "Uses 300F V-Gauge Timer",
        type: "special",
        command: ""
    },
    {
        name: "VEX Charging Buffalo (VS2 Ver.) (1)",
        outbreak: "11",
        persistence: "6",
        rigidity: "18",
        hit: "D",
        guard: "-1",
        damage: "70",
        stan: "100",
        remarks: "Uses 500F V-Gauge Timer",
        type: "special",
        command: ""
    },
    {
        name: "VEX Charging Buffalo (VS2 Ver.) (2)",
        outbreak: "11",
        persistence: "6",
        rigidity: "18",
        hit: "D",
        guard: "-1",
        damage: "70",
        stan: "120",
        remarks: "Uses 500F V-Gauge Timer",
        type: "special",
        command: ""
    },
    {
        name: "L Dash Grand Blow",
        outbreak: "17",
        persistence: "2",
        rigidity: "26",
        hit: "D",
        guard: "-7",
        damage: "70",
        stan: "150",
        remarks: "*When in contact\nVS*Only possible before the attack\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "M Dash Grand Blow",
        outbreak: "22 (*18)",
        persistence: "2",
        rigidity: "26",
        hit: "D",
        guard: "-7",
        damage: "80",
        stan: "150",
        remarks: "*When in contact\nVS*Only possible before the attack\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "H Dash Grand Blow",
        outbreak: "25(*19)",
        persistence: "2",
        rigidity: "26",
        hit: "D",
        guard: "-7",
        damage: "90",
        stan: "150",
        remarks: "*When in contact\nVS*Only possible before the attack\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "EX Dash Grand Blow",
        outbreak: "19 (*11)",
        persistence: "2",
        rigidity: "23",
        hit: "D",
        guard: "-2",
        damage: "140",
        stan: "200",
        remarks: "*When in contact\nVS*Only possible before the attack\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "L Screw Smash",
        outbreak: "10",
        persistence: "5",
        rigidity: "25",
        hit: "D",
        guard: "-10",
        damage: "100",
        stan: "150",
        remarks: "Will not hit crouching opponents",
        type: "special",
        command: ""
    },
    {
        name: "M Screw Smash",
        outbreak: "13",
        persistence: "5",
        rigidity: "26",
        hit: "D",
        guard: "-10",
        damage: "100",
        stan: "150",
        remarks: "Will not hit crouching opponents",
        type: "special",
        command: ""
    },
    {
        name: "H Screw Smash",
        outbreak: "23",
        persistence: "5",
        rigidity: "23",
        hit: "D",
        guard: "-10",
        damage: "100",
        stan: "150",
        remarks: "Will not hit crouching opponents",
        type: "special",
        command: ""
    },
    { name: "EX Screw Smash", outbreak: "12", persistence: "5", rigidity: "29", hit: "D", guard: "-17", damage: "160", stan: "200", remarks: "Armor from 3F to 16F", type: "special", command: "" },
    {
        name: "VBursting Buffalo (1)",
        outbreak: "14",
        persistence: "5",
        rigidity: "21",
        hit: "D",
        guard: "-2",
        damage: "40",
        stan: "50",
        remarks: "Uses 500F V-Gauge Timer\n                                                                                                                                                                                VS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "VBursting Buffalo (2)",
        outbreak: "14",
        persistence: "5",
        rigidity: "21",
        hit: "D",
        guard: "-2",
        damage: "50",
        stan: "50",
        remarks: "Uses 300F V-Gauge Timer\n                                                                                                                                                                                VS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "VBursting Buffalo (3)",
        outbreak: "14",
        persistence: "5",
        rigidity: "21",
        hit: "D",
        guard: "-2",
        damage: "60",
        stan: "50",
        remarks: "Uses 300F V-Gauge Timer\n                                                                                                                                                                                VS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "VBursting Buffalo (4)",
        outbreak: "17",
        persistence: "5",
        rigidity: "38",
        hit: "D",
        guard: "-21",
        damage: "100",
        stan: "50",
        remarks: "Uses 300F V-Gauge Timer",
        type: "special",
        command: ""
    },
    {
        name: "VEX Bursting Buffalo",
        outbreak: "12",
        persistence: "5",
        rigidity: "19",
        hit: "D",
        guard: "-2",
        damage: "80",
        stan: "70",
        remarks: "Uses 450F V-Gauge Timer\n                                                                                                                                                                                VS*Only for the first iteration\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "Turn Punch (Lv1)",
        outbreak: "30",
        persistence: "2",
        rigidity: "22",
        hit: "2",
        guard: "-2",
        damage: "80",
        stan: "150",
        remarks: "3F - 18F  projectile invincibility\n                                                VS*Only possible before the attack\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "Turn Punch (Lv2)",
        outbreak: "30",
        persistence: "2",
        rigidity: "22",
        hit: "2",
        guard: "-2",
        damage: "100",
        stan: "150",
        remarks: "3F - 18F  projectile invincibility\n                                                VS*Only possible before the attack\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "Turn Punch (Lv3)",
        outbreak: "30",
        persistence: "2",
        rigidity: "22",
        hit: "2",
        guard: "-2",
        damage: "120",
        stan: "150",
        remarks: "3F - 18F  projectile invincibility\n                                                VS*Only possible before the attack\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "Turn Punch (Lv4)",
        outbreak: "30",
        persistence: "2",
        rigidity: "22",
        hit: "D",
        guard: "-2",
        damage: "140",
        stan: "200",
        remarks: "3F - 18F  projectile invincibility\n                                3F - 18F  upper body invincibility\n                VS*Only possible before the attack\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "Turn Punch (Lv5)",
        outbreak: "30",
        persistence: "2",
        rigidity: "22",
        hit: "D",
        guard: "-2",
        damage: "160",
        stan: "200",
        remarks: "3F - 18F  projectile invincibility\n                                3F - 18F  upper body invincibility\n                VS*Only possible before the attack\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "Turn Punch (Lv6)",
        outbreak: "30",
        persistence: "2",
        rigidity: "22",
        hit: "D",
        guard: "-2",
        damage: "180",
        stan: "200",
        remarks: "3F - 18F  projectile invincibility\n                                3F - 18F  upper body invincibility\n                VS*Only possible before the attack\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "Turn Punch (Lv7)",
        outbreak: "30",
        persistence: "2",
        rigidity: "22",
        hit: "D",
        guard: "-2",
        damage: "210",
        stan: "300",
        remarks: "1F - 18F  projectile & throw invincibility\n                                1F - 18F  upper body invincibility\n                VS*Only possible before the attack\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "Turn Punch (Lv8)",
        outbreak: "30",
        persistence: "2",
        rigidity: "22",
        hit: "D",
        guard: "-2",
        damage: "240",
        stan: "300",
        remarks: "1F - 18F  projectile & throw invincibility\n                                1F - 18F  upper body invincibility\n                VS*Only possible before the attack\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "Turn Punch (Lv9)",
        outbreak: "30",
        persistence: "2",
        rigidity: "22",
        hit: "D",
        guard: "-2",
        damage: "270",
        stan: "300",
        remarks: "1F - 18F  projectile & throw invincibility\n                                1F - 18F  upper body invincibility\n                VS*Only possible before the attack\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "Turn Punch (FINAL)",
        outbreak: "30",
        persistence: "2",
        rigidity: "22",
        hit: "D",
        guard: "7",
        damage: "350",
        stan: "400",
        remarks: "1F - 18F  full invincibility\n                                                VS*Only possible before the attack\nVS*VS1のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "Gigaton Blow",
        outbreak: "1+7",
        persistence: "10",
        rigidity: "60",
        hit: "D",
        guard: "-45",
        damage: "330",
        stan: "0",
        remarks: "14F - 17F  projectile invincibility\n11F - 13F  projectile & throw invincibility\n1F - 10F  full invincibility",
        type: "ca",
        command: ""
    }
];
exports.balrog = balrog;
//# sourceMappingURL=balrog.js.map