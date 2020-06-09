"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chunli = [
    { name: "Standing LP", outbreak: "4", persistence: "2", rigidity: "8", hit: "5", guard: "2", damage: "30", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
    { name: "VStanding LP", outbreak: "4", persistence: "5", rigidity: "5", hit: "6", guard: "2", damage: "40", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
    { name: "Standing MP", outbreak: "5", persistence: "3", rigidity: "9", hit: "6", guard: "3", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "VStanding MP", outbreak: "5", persistence: "3", rigidity: "9", hit: "8", guard: "3", damage: "70", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "Standing HP", outbreak: "11", persistence: "2", rigidity: "18", hit: "0", guard: "-4", damage: "80", stan: "150", remarks: "", type: "normal", command: "" },
    { name: "VStanding HP", outbreak: "11", persistence: "4", rigidity: "16", hit: "2", guard: "-4", damage: "90", stan: "150", remarks: "", type: "normal", command: "" },
    { name: "Standing LK", outbreak: "5", persistence: "3", rigidity: "7", hit: "1", guard: "-3", damage: "40", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "VStanding LK", outbreak: "5", persistence: "4", rigidity: "6", hit: "1", guard: "-3", damage: "50", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "Standing MK", outbreak: "8", persistence: "3", rigidity: "15", hit: "2", guard: "-2", damage: "70", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "VStanding MK", outbreak: "8", persistence: "4", rigidity: "14", hit: "4", guard: "-2", damage: "80", stan: "100", remarks: "", type: "normal", command: "" },
    {
        name: "Standing HK",
        outbreak: "12",
        persistence: "3",
        rigidity: "16",
        hit: "1",
        guard: "-2",
        damage: "90",
        stan: "150",
        remarks: "Triggers Crush Counter (+21F)\n                                                                Will not hit crouching opponents",
        type: "normal",
        command: ""
    },
    {
        name: "VStanding HK",
        outbreak: "12",
        persistence: "3",
        rigidity: "16",
        hit: "1",
        guard: "-2",
        damage: "100",
        stan: "150",
        remarks: "Triggers Crush Counter  (D)\n                                                                Will not hit crouching opponents",
        type: "normal",
        command: ""
    },
    { name: "Crouching LP", outbreak: "4", persistence: "3", rigidity: "5", hit: "5", guard: "2", damage: "30", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
    { name: "VCrouching LP", outbreak: "4", persistence: "4", rigidity: "4", hit: "6", guard: "2", damage: "40", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
    {
        name: "Crouching MP",
        outbreak: "10",
        persistence: "9",
        rigidity: "18",
        hit: "-3",
        guard: "-8",
        damage: "60",
        stan: "100",
        remarks: "6F - 18F  projectile invincibility",
        type: "normal",
        command: ""
    },
    {
        name: "VCrouching MP",
        outbreak: "10",
        persistence: "9",
        rigidity: "18",
        hit: "-3",
        guard: "-8",
        damage: "70",
        stan: "100",
        remarks: "6F - 18F  projectile invincibility",
        type: "normal",
        command: ""
    },
    {
        name: "Crouching HP",
        outbreak: "7",
        persistence: "4",
        rigidity: "17",
        hit: "2",
        guard: "-5",
        damage: "100",
        stan: "150",
        remarks: "S*CA*V*VS*Only possible during 1st attack",
        type: "normal",
        command: ""
    },
    {
        name: "VCrouching HP",
        outbreak: "7",
        persistence: "4",
        rigidity: "14",
        hit: "2",
        guard: "-2",
        damage: "110",
        stan: "150",
        remarks: "S*CA*VS*Only possible during 1st attack",
        type: "normal",
        command: ""
    },
    {
        name: "Crouching LK",
        outbreak: "3",
        persistence: "2",
        rigidity: "8",
        hit: "2",
        guard: "-1",
        damage: "20",
        stan: "70",
        remarks: "Can be rapid canceled\n                                                                                                                                S*Can only be canceled into Hyakuretsukyaku",
        type: "normal",
        command: ""
    },
    {
        name: "VCrouching LK",
        outbreak: "3",
        persistence: "3",
        rigidity: "7",
        hit: "4",
        guard: "-1",
        damage: "30",
        stan: "70",
        remarks: "Can be rapid canceled\n                                                                                                                                S*Can only be canceled into Hyakuretsukyaku",
        type: "normal",
        command: ""
    },
    { name: "Crouching MK", outbreak: "6", persistence: "2", rigidity: "16", hit: "2", guard: "-2", damage: "50", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "VCrouching MK", outbreak: "6", persistence: "2", rigidity: "14", hit: "4", guard: "-2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "Crouching HK", outbreak: "8", persistence: "3", rigidity: "24", hit: "D", guard: "-12", damage: "90", stan: "150", remarks: "Triggers Crush Counter  (D)", type: "normal", command: "" },
    { name: "VCrouching HK", outbreak: "8", persistence: "4", rigidity: "23", hit: "D", guard: "-12", damage: "100", stan: "150", remarks: "Triggers Crush Counter  (D)", type: "normal", command: "" },
    { name: "Jumping LP", outbreak: "3", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
    { name: "VJumping LP", outbreak: "3", persistence: "5", rigidity: "", hit: "", guard: "", damage: "50", stan: "70", remarks: "", type: "jump", command: "" },
    { name: "Jumping MP", outbreak: "6", persistence: "4", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "Causes blowback knockdown on airborne hit", type: "jump", command: "" },
    {
        name: "VJumping MP",
        outbreak: "6",
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
    { name: "Jumping HP", outbreak: "6", persistence: "8", rigidity: "", hit: "", guard: "", damage: "100", stan: "150", remarks: "", type: "jump", command: "" },
    {
        name: "VJumping HP",
        outbreak: "6",
        persistence: "8",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "110",
        stan: "150",
        remarks: "Causes blowback knockdown on airborne hit",
        type: "jump",
        command: ""
    },
    { name: "Jumping LK", outbreak: "4", persistence: "7", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
    { name: "VJumping LK", outbreak: "4", persistence: "7", rigidity: "", hit: "", guard: "", damage: "50", stan: "70", remarks: "", type: "jump", command: "" },
    { name: "Jumping MK", outbreak: "6", persistence: "5", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "Can cross-up", type: "jump", command: "" },
    {
        name: "VJumping MK",
        outbreak: "6",
        persistence: "5",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "70",
        stan: "100",
        remarks: "Can cross-up\n                                                                                                                                                Causes blowback knockdown on airborne hit",
        type: "jump",
        command: ""
    },
    { name: "Diagonal Jumping HK", outbreak: "9", persistence: "6", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
    {
        name: "VDiagonal Jumping HK",
        outbreak: "9",
        persistence: "6",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "100",
        stan: "150",
        remarks: "Causes blowback knockdown on airborne hit",
        type: "jump",
        command: ""
    },
    { name: "Vertical Jump HK", outbreak: "7", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
    {
        name: "VVertical Jump HK",
        outbreak: "7",
        persistence: "5",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "100",
        stan: "150",
        remarks: "Causes blowback knockdown on airborne hit",
        type: "jump",
        command: ""
    },
    { name: "Senenshu", outbreak: "26", persistence: "2", rigidity: "16", hit: "2", guard: "-2", damage: "70", stan: "100", remarks: "", type: "unique", command: "↘ + MK" },
    { name: "VSenenshu", outbreak: "26", persistence: "2", rigidity: "16", hit: "4", guard: "-2", damage: "80", stan: "100", remarks: "", type: "unique", command: "↘ + MK" },
    { name: "Tsuitotsuken", outbreak: "7", persistence: "2", rigidity: "12", hit: "3", guard: "0", damage: "65", stan: "100", remarks: "", type: "unique", command: "←OR → + MP" },
    { name: "VTsuitotsuken", outbreak: "7", persistence: "3", rigidity: "11", hit: "4", guard: "0", damage: "75", stan: "100", remarks: "", type: "unique", command: "←OR → + MP" },
    { name: "Hakkei", outbreak: "7", persistence: "5", rigidity: "13", hit: "3", guard: "2", damage: "90", stan: "150", remarks: "Triggers Crush Counter  (D)", type: "unique", command: "← + HP" },
    { name: "VHakkei", outbreak: "7", persistence: "7", rigidity: "11", hit: "6", guard: "2", damage: "100", stan: "150", remarks: "Triggers Crush Counter  (D)", type: "unique", command: "← + HP" },
    {
        name: "Kakurakukyaku",
        outbreak: "34",
        persistence: "7",
        rigidity: "3+7 frame(s) after landing",
        hit: "8",
        guard: "4",
        damage: "80",
        stan: "150",
        remarks: "Can cross-up\n                                                                                                                                                Recovery is for when the move hits on the 5th active frame against the same character",
        type: "unique",
        command: "↘ + HK"
    },
    {
        name: "VKakurakukyaku",
        outbreak: "34",
        persistence: "7",
        rigidity: "3+7 frame(s) after landing",
        hit: "8",
        guard: "6",
        damage: "90",
        stan: "150",
        remarks: "Can cross-up\n                                                                                                                                                Recovery is for when the move hits on the 5th active frame against the same character",
        type: "unique",
        command: "↘ + HK"
    },
    { name: "Tenkukyaku", outbreak: "8", persistence: "5", rigidity: "13", hit: "2", guard: "0", damage: "80", stan: "150", remarks: "Forces stand", type: "unique", command: "← + HK" },
    { name: "VTenkukyaku", outbreak: "8", persistence: "5", rigidity: "13", hit: "2", guard: "0", damage: "80", stan: "150", remarks: "Forces stand", type: "unique", command: "← + HK" },
    {
        name: "Yokusenkyaku",
        outbreak: "18",
        persistence: "5",
        rigidity: "13(*18)",
        hit: "2",
        guard: "-2",
        damage: "80",
        stan: "150",
        remarks: "Triggers Crush Counter (+18F)\n                                                                                                                                                                *On whiff",
        type: "unique",
        command: "→ + HK"
    },
    {
        name: "VYokusenkyaku",
        outbreak: "18",
        persistence: "5",
        rigidity: "13(*18)",
        hit: "4",
        guard: "-2",
        damage: "90",
        stan: "150",
        remarks: "Triggers Crush Counter (+18F)\n                                                                                                                                                                *On whiff",
        type: "unique",
        command: "→ + HK"
    },
    {
        name: "Yosokyaku",
        outbreak: "5",
        persistence: "4",
        rigidity: "4 frame(s) after landing",
        hit: "D",
        guard: "",
        damage: "40",
        stan: "60",
        remarks: "Can cross-up",
        type: "unique",
        command: "(DURING JUMP) ↓ + MK"
    },
    {
        name: "VYosokyaku",
        outbreak: "5",
        persistence: "4",
        rigidity: "4 frame(s) after landing",
        hit: "D",
        guard: "",
        damage: "50",
        stan: "60",
        remarks: "Can cross-up",
        type: "unique",
        command: "(DURING JUMP) ↓ + MK"
    },
    {
        name: "Yosokyaku (2)",
        outbreak: "",
        persistence: "",
        rigidity: "4 frame(s) after landing",
        hit: "D",
        guard: "",
        damage: "50",
        stan: "60",
        remarks: "Can cross-up",
        type: "unique",
        command: "(DURING JUMP) ↓ + MK ▶ ↓ + MK"
    },
    {
        name: "VYosokyaku (2)",
        outbreak: "",
        persistence: "",
        rigidity: "4 frame(s) after landing",
        hit: "D",
        guard: "",
        damage: "60",
        stan: "60",
        remarks: "Can cross-up",
        type: "unique",
        command: "(DURING JUMP) ↓ + MK ▶ ↓ + MK"
    },
    {
        name: "Yosokyaku (3)",
        outbreak: "",
        persistence: "",
        rigidity: "4 frame(s) after landing",
        hit: "D",
        guard: "",
        damage: "60",
        stan: "60",
        remarks: "Can cross-up",
        type: "unique",
        command: "(DURING JUMP) ↓ + MK ▶ ↓ + MK ▶ ↓ + MK"
    },
    {
        name: "VYosokyaku (3)",
        outbreak: "",
        persistence: "",
        rigidity: "4 frame(s) after landing",
        hit: "D",
        guard: "",
        damage: "70",
        stan: "60",
        remarks: "Can cross-up",
        type: "unique",
        command: "(DURING JUMP) ↓ + MK ▶ ↓ + MK ▶ ↓ + MK"
    },
    { name: "Wall Jump", outbreak: "", persistence: "", rigidity: "", hit: "", guard: "", damage: "", stan: "", remarks: "", type: "unique", command: "(DURING JUMP NEAR WALL) ↗" },
    { name: "Koshuto", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "120", stan: "150", remarks: "", type: "throw", command: "" },
    { name: "Tenshin Shushu", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "140", stan: "200", remarks: "", type: "throw", command: "" },
    { name: "Ryuseiraku", outbreak: "5", persistence: "2", rigidity: "6 frame(s) after landing", hit: "", guard: "", damage: "130", stan: "200", remarks: "", type: "throw", command: "" },
    {
        name: "[VS1] Rankyaku",
        outbreak: "11",
        persistence: "6",
        rigidity: "36+6 frame(s) after landing",
        hit: "D",
        guard: "-24",
        damage: "40(*50)",
        stan: "50",
        remarks: "V-Gauge increase on jump attack hit/block\nEX-Gauge increase during V-Trigger\n*during V-Trigger",
        type: "vsystem",
        command: ""
    },
    {
        name: "[VS1] Souseikyaku",
        outbreak: "12",
        persistence: "6",
        rigidity: "4 frame(s) after landing",
        hit: "",
        guard: "",
        damage: "100(*110)",
        stan: "120",
        remarks: "*during V-Trigger",
        type: "vsystem",
        command: ""
    },
    {
        name: "[VS2] Hazansyu",
        outbreak: "27",
        persistence: "3",
        rigidity: "20",
        hit: "D",
        guard: "-4",
        damage: "80",
        stan: "120",
        remarks: "後ろ入力時は移動距離が短くなる\nCan hit a knocked down opponent",
        type: "vsystem",
        command: ""
    },
    {
        name: "V[VS2] Hazansyu",
        outbreak: "27",
        persistence: "3",
        rigidity: "20",
        hit: "D",
        guard: "-4",
        damage: "90",
        stan: "130",
        remarks: "後ろ入力時は移動距離が短くなる\nCan hit a knocked down opponent",
        type: "vsystem",
        command: ""
    },
    {
        name: "Renkiko",
        outbreak: "1",
        persistence: "",
        rigidity: "4",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "V-Gauge Timer + 800F\n                                                                                                                                                                                Increases offensive abilities while active",
        type: "vsystem",
        command: ""
    },
    {
        name: "Sohakkei",
        outbreak: "12",
        persistence: "2",
        rigidity: "24",
        hit: "2",
        guard: "-2",
        damage: "40",
        stan: "0",
        remarks: "1F - 25F  attack & projectile invincibility\n                                                Recover 200 stun upon activation",
        type: "vsystem",
        command: ""
    },
    { name: "L Kikoken", outbreak: "13", persistence: "70", rigidity: "46 total frames", hit: "0", guard: "-6", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
    { name: "M Kikoken", outbreak: "11", persistence: "50", rigidity: "45 total frames", hit: "-1", guard: "-5", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
    { name: "H Kikoken", outbreak: "9", persistence: "30", rigidity: "44 total frames", hit: "-1", guard: "-4", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
    { name: "VL Kikoken", outbreak: "13", persistence: "140", rigidity: "46 total frames", hit: "0", guard: "-6", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
    { name: "VM Kikoken", outbreak: "11", persistence: "100", rigidity: "45 total frames", hit: "-1", guard: "-5", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
    { name: "VH Kikoken", outbreak: "9", persistence: "60", rigidity: "44 total frames", hit: "-1", guard: "-4", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
    { name: "EX Kikoken", outbreak: "11", persistence: "", rigidity: "38 total frames", hit: "4", guard: "1", damage: "100", stan: "100", remarks: "", type: "special", command: "" },
    { name: "VEX Kikoken", outbreak: "11", persistence: "", rigidity: "38 total frames", hit: "4", guard: "1", damage: "120", stan: "100", remarks: "", type: "special", command: "" },
    {
        name: "L Hyakuretsukyaku",
        outbreak: "5",
        persistence: "8",
        rigidity: "20",
        hit: "4",
        guard: "-8",
        damage: "60",
        stan: "80",
        remarks: "CA*V*Only possible during 3rd attack",
        type: "special",
        command: ""
    },
    {
        name: "M Hyakuretsukyaku",
        outbreak: "11",
        persistence: "10",
        rigidity: "20",
        hit: "3",
        guard: "-9",
        damage: "80",
        stan: "120",
        remarks: "CA*V*Only possible during 4th attack",
        type: "special",
        command: ""
    },
    {
        name: "H Hyakuretsukyaku",
        outbreak: "14",
        persistence: "12",
        rigidity: "20",
        hit: "D",
        guard: "-10",
        damage: "100",
        stan: "120",
        remarks: "CA*V*Only possible during 5th attack",
        type: "special",
        command: ""
    },
    {
        name: "VL Hyakuretsukyaku",
        outbreak: "5",
        persistence: "8",
        rigidity: "20",
        hit: "4",
        guard: "-8",
        damage: "70",
        stan: "80",
        remarks: "CA*Only possible during 3rd attack",
        type: "special",
        command: ""
    },
    {
        name: "VM Hyakuretsukyaku",
        outbreak: "11",
        persistence: "10",
        rigidity: "20",
        hit: "3",
        guard: "-9",
        damage: "90",
        stan: "120",
        remarks: "CA*Only possible during 4th attack",
        type: "special",
        command: ""
    },
    {
        name: "VH Hyakuretsukyaku",
        outbreak: "14",
        persistence: "12",
        rigidity: "20",
        hit: "D",
        guard: "-10",
        damage: "110",
        stan: "120",
        remarks: "CA*Only possible during 5th attack",
        type: "special",
        command: ""
    },
    {
        name: "EX Hyakuretsukyaku",
        outbreak: "5",
        persistence: "20",
        rigidity: "19",
        hit: "D",
        guard: "-2",
        damage: "140",
        stan: "200",
        remarks: "V*Only possible during 6th attack",
        type: "special",
        command: ""
    },
    { name: "VEX Hyakuretsukyaku", outbreak: "5", persistence: "20", rigidity: "19", hit: "D", guard: "-2", damage: "150", stan: "200", remarks: "", type: "special", command: "" },
    {
        name: "L Airborne Hyakuretsukyaku",
        outbreak: "8",
        persistence: "8",
        rigidity: "12 frame(s) after landing",
        hit: "4",
        guard: "-2",
        damage: "70",
        stan: "80",
        remarks: "",
        type: "special",
        command: ""
    },
    {
        name: "M Airborne Hyakuretsukyaku",
        outbreak: "10",
        persistence: "10",
        rigidity: "12 frame(s) after landing",
        hit: "4",
        guard: "-2",
        damage: "80",
        stan: "100",
        remarks: "",
        type: "special",
        command: ""
    },
    {
        name: "H Airborne Hyakuretsukyaku",
        outbreak: "12",
        persistence: "12",
        rigidity: "12 frame(s) after landing",
        hit: "0",
        guard: "-3",
        damage: "100",
        stan: "120",
        remarks: "",
        type: "special",
        command: ""
    },
    {
        name: "VL Airborne Hyakuretsukyaku",
        outbreak: "8",
        persistence: "8",
        rigidity: "12 frame(s) after landing",
        hit: "4",
        guard: "-2",
        damage: "80",
        stan: "80",
        remarks: "",
        type: "special",
        command: ""
    },
    {
        name: "VM Airborne Hyakuretsukyaku",
        outbreak: "10",
        persistence: "10",
        rigidity: "12 frame(s) after landing",
        hit: "4",
        guard: "-2",
        damage: "90",
        stan: "100",
        remarks: "",
        type: "special",
        command: ""
    },
    {
        name: "VH Airborne Hyakuretsukyaku",
        outbreak: "12",
        persistence: "12",
        rigidity: "12 frame(s) after landing",
        hit: "0",
        guard: "-3",
        damage: "110",
        stan: "120",
        remarks: "",
        type: "special",
        command: ""
    },
    {
        name: "EX Airborne Hyakuretsukyaku",
        outbreak: "6",
        persistence: "14",
        rigidity: "12 frame(s) after landing",
        hit: "-7",
        guard: "-10",
        damage: "160",
        stan: "210",
        remarks: "",
        type: "special",
        command: ""
    },
    {
        name: "VEX Airborne Hyakuretsukyaku",
        outbreak: "6",
        persistence: "14",
        rigidity: "12 frame(s) after landing",
        hit: "-7",
        guard: "-10",
        damage: "170",
        stan: "210",
        remarks: "",
        type: "special",
        command: ""
    },
    {
        name: "L Spinning Bird Kick",
        outbreak: "9",
        persistence: "10",
        rigidity: "24",
        hit: "D",
        guard: "-6",
        damage: "110",
        stan: "200",
        remarks: "First hit only forces stand",
        type: "special",
        command: ""
    },
    {
        name: "M Spinning Bird Kick",
        outbreak: "15",
        persistence: "14",
        rigidity: "24",
        hit: "D",
        guard: "-8",
        damage: "130",
        stan: "200",
        remarks: "First hit only forces stand",
        type: "special",
        command: ""
    },
    {
        name: "H Spinning Bird Kick",
        outbreak: "19",
        persistence: "18",
        rigidity: "24",
        hit: "D",
        guard: "-8",
        damage: "150",
        stan: "200",
        remarks: "First hit only forces stand",
        type: "special",
        command: ""
    },
    {
        name: "VL Spinning Bird Kick",
        outbreak: "9",
        persistence: "10",
        rigidity: "24",
        hit: "D",
        guard: "-6",
        damage: "120",
        stan: "200",
        remarks: "First hit only forces stand",
        type: "special",
        command: ""
    },
    {
        name: "VM Spinning Bird Kick",
        outbreak: "15",
        persistence: "14",
        rigidity: "24",
        hit: "D",
        guard: "-8",
        damage: "140",
        stan: "200",
        remarks: "First hit only forces stand",
        type: "special",
        command: ""
    },
    {
        name: "VH Spinning Bird Kick",
        outbreak: "19",
        persistence: "18",
        rigidity: "24",
        hit: "D",
        guard: "-8",
        damage: "160",
        stan: "200",
        remarks: "First hit only forces stand",
        type: "special",
        command: ""
    },
    {
        name: "EX Spinning Bird Kick",
        outbreak: "5",
        persistence: "17",
        rigidity: "31",
        hit: "D",
        guard: "-16",
        damage: "150",
        stan: "200",
        remarks: "9F - 33F  projectile invincibility\n1F - 8F  full invincibility\n                                                Subject to counter hit during move duration (1.2x damage)",
        type: "special",
        command: ""
    },
    {
        name: "VEX Spinning Bird Kick",
        outbreak: "5",
        persistence: "17",
        rigidity: "31",
        hit: "D",
        guard: "-16",
        damage: "160",
        stan: "200",
        remarks: "9F - 33F  projectile invincibility\n1F - 8F  full invincibility\n                                                Subject to counter hit during move duration (1.2x damage)",
        type: "special",
        command: ""
    },
    { name: "Hoyokusen", outbreak: "1+4", persistence: "2", rigidity: "35", hit: "D", guard: "-20", damage: "330", stan: "0", remarks: "1F - 6F  full invincibility", type: "ca", command: "" }
];
exports.chunli = chunli;
//# sourceMappingURL=chun-li.js.map