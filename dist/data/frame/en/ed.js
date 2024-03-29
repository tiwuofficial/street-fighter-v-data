"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ed = [
    {
        name: "Standing LP",
        outbreak: "4",
        persistence: "2",
        rigidity: "8",
        hit: "5",
        guard: "3",
        damage: "30",
        stan: "70",
        remarks: "Can be rapid canceled",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Standing MP",
        outbreak: "6",
        persistence: "3",
        rigidity: "16",
        hit: "10",
        guard: "3",
        damage: "60",
        stan: "100",
        remarks: "",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
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
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Standing LK",
        outbreak: "3",
        persistence: "3",
        rigidity: "8",
        hit: "2",
        guard: "1",
        damage: "30",
        stan: "70",
        remarks: "Can be rapid canceled",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Standing MK",
        outbreak: "7",
        persistence: "3",
        rigidity: "15",
        hit: "4",
        guard: "2",
        damage: "70",
        stan: "100",
        remarks: "",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Standing HK",
        outbreak: "14",
        persistence: "4",
        rigidity: "22",
        hit: "2",
        guard: "-4",
        damage: "80",
        stan: "150",
        remarks: "Triggers Crush Counter (+20F)",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Crouching LP",
        outbreak: "4",
        persistence: "2",
        rigidity: "8",
        hit: "5",
        guard: "3",
        damage: "30",
        stan: "70",
        remarks: "Can be rapid canceled",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Crouching MP",
        outbreak: "6",
        persistence: "3",
        rigidity: "12",
        hit: "5",
        guard: "2",
        damage: "60",
        stan: "100",
        remarks: "",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
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
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Crouching LK",
        outbreak: "4",
        persistence: "2",
        rigidity: "8",
        hit: "2",
        guard: "0",
        damage: "20",
        stan: "70",
        remarks: "",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Crouching MK",
        outbreak: "7",
        persistence: "2",
        rigidity: "17",
        hit: "1",
        guard: "-3",
        damage: "50",
        stan: "100",
        remarks: "",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
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
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Jumping LP",
        outbreak: "4",
        persistence: "5",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "40",
        stan: "70",
        remarks: "",
        vtrigger: 1,
        type: "jump",
        command: ""
    },
    {
        name: "Jumping MP",
        outbreak: "7",
        persistence: "4",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "70",
        stan: "100",
        remarks: "Causes knockdown on mid-air hit",
        vtrigger: 1,
        type: "jump",
        command: ""
    },
    {
        name: "Jumping HP",
        outbreak: "9",
        persistence: "4",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "90",
        stan: "150",
        remarks: "",
        vtrigger: 1,
        type: "jump",
        command: ""
    },
    {
        name: "Jumping LK",
        outbreak: "3",
        persistence: "6",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "40",
        stan: "70",
        remarks: "",
        vtrigger: 1,
        type: "jump",
        command: ""
    },
    {
        name: "Jumping MK",
        outbreak: "8",
        persistence: "5",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "60",
        stan: "100",
        remarks: "Can cross-up",
        vtrigger: 1,
        type: "jump",
        command: ""
    },
    {
        name: "Jumping HK",
        outbreak: "9",
        persistence: "5",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "90",
        stan: "150",
        remarks: "",
        vtrigger: 1,
        type: "jump",
        command: ""
    },
    {
        name: "Psycho Blow",
        outbreak: "5",
        persistence: "3",
        rigidity: "17",
        hit: "D",
        guard: "",
        damage: "130",
        stan: "150",
        remarks: "",
        vtrigger: 1,
        type: "throw",
        command: "OR → + LP LK"
    },
    {
        name: "Cheat & Smash",
        outbreak: "5",
        persistence: "3",
        rigidity: "17",
        hit: "D",
        guard: "",
        damage: "140",
        stan: "200",
        remarks: "",
        vtrigger: 1,
        type: "throw",
        command: "← + LP LK"
    },
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
        vtrigger: 1,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL I) MP MK"
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
        vtrigger: 1,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL I) MP MK (HOLD BUTTONS)"
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
        vtrigger: 1,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL I) ↓ + MP MK"
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
        vtrigger: 1,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL I) ↓ + MP MK (HOLD BUTTONS)"
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
        vtrigger: 1,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL II) MP MK"
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
        vtrigger: 1,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL II) MP MK (HOLD BUTTONS)"
    },
    {
        name: "[VS2] Psycho Smash",
        outbreak: "11",
        persistence: "5",
        rigidity: "21",
        hit: "D",
        guard: "-6",
        damage: "70",
        stan: "100",
        remarks: "",
        vtrigger: 1,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL II) ↓ + MP MK"
    },
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
        vtrigger: 1,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL II) ↓ + MP MK (HOLD BUTTONS)"
    },
    {
        name: "Psycho Cannon",
        outbreak: "1+15(*12)",
        persistence: "",
        rigidity: "25 total frames(*21)",
        hit: "D",
        guard: "",
        damage: "140",
        stan: "175",
        remarks: "*Press the forward direction to change the projectile's speed",
        vtrigger: 1,
        type: "vsystem",
        command: "HP HK"
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
        vtrigger: 1,
        type: "vsystem",
        command: "(DURING GUARD) → + LK"
    },
    {
        name: "V-Shift",
        outbreak: "1",
        persistence: "9",
        rigidity: "22",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "1F - 16F  throw invincibility\n                                                Allows you to evade strikes and projectiles from frames 1-9 (Increases the V-Gauge by 150 when the evasion triggers)\nCounterable during recovery\n17 frame move that's fully invincible until the end of recovery when evading attacks.\nTransitions to V-Shift Break when evading attacks.",
        vtrigger: 1,
        type: "vsystem",
        command: "HP MK"
    },
    {
        name: "Psycho Split",
        outbreak: "8",
        persistence: "3",
        rigidity: "23",
        hit: "D",
        guard: "-2",
        damage: "60",
        stan: "0",
        remarks: "1F - 10F  full invincibility",
        vtrigger: 1,
        type: "vsystem",
        command: "HP MK ▶ (AFTER EVADING WITH V-SHIFT) HP MK"
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
        vtrigger: 1,
        type: "special",
        command: "P (REPEAT BUTTON)"
    },
    {
        name: "Psycho Spark",
        outbreak: "11",
        persistence: "8",
        rigidity: "16",
        hit: "1",
        guard: "-2",
        damage: "50",
        stan: "80",
        remarks: "Treated as a projectile",
        vtrigger: 1,
        type: "special",
        command: "→ + MP"
    },
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
        vtrigger: 1,
        type: "special",
        command: "(DURING Psycho Spark) P"
    },
    {
        name: "EX Psycho Shoot",
        outbreak: "13",
        persistence: "",
        rigidity: "36 total frames",
        hit: "D",
        guard: "8",
        damage: "100",
        stan: "150",
        remarks: "",
        vtrigger: 1,
        type: "special",
        command: "(DURING Psycho Spark) P P"
    },
    {
        name: "Psycho Knuckle",
        outbreak: "30",
        persistence: "12",
        rigidity: "27",
        hit: "(crumple)",
        guard: "-2",
        damage: "100",
        stan: "150",
        remarks: "Moves behind the opponent on hit and block\nCrumple time is longer the closer the attack hits\nVS*Can only be canceled V-Skill II",
        vtrigger: 1,
        type: "special",
        command: "HP (HOLD BUTTONS)"
    },
    {
        name: "Psycho Upper",
        outbreak: "16",
        persistence: "5",
        rigidity: "33",
        hit: "D",
        guard: "-16",
        damage: "120",
        stan: "150",
        remarks: "",
        vtrigger: 1,
        type: "special",
        command: "P P"
    },
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
        vtrigger: 1,
        type: "special",
        command: "LP"
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
        vtrigger: 1,
        type: "special",
        command: "K K"
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
        vtrigger: 1,
        type: "special",
        command: "(AFTER Psycho Rising HITS) P"
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
        vtrigger: 1,
        type: "special",
        command: "(AFTER Psycho Rising HITS) P P"
    },
    {
        name: "Psycho Barrage",
        outbreak: "1+9",
        persistence: "14",
        rigidity: "49",
        hit: "D",
        guard: "-21",
        damage: "340",
        stan: "0",
        remarks: "1F - 19F  full invincibility\n                                                The active frames are for whiff",
        vtrigger: 1,
        type: "ca",
        command: "↓↘→ ↓↘→ + P"
    },
    {
        name: "Standing LP",
        outbreak: "4",
        persistence: "2",
        rigidity: "8",
        hit: "5",
        guard: "3",
        damage: "30",
        stan: "70",
        remarks: "Can be rapid canceled",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Standing MP",
        outbreak: "6",
        persistence: "3",
        rigidity: "16",
        hit: "10",
        guard: "3",
        damage: "60",
        stan: "100",
        remarks: "",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
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
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Standing LK",
        outbreak: "3",
        persistence: "3",
        rigidity: "8",
        hit: "2",
        guard: "1",
        damage: "30",
        stan: "70",
        remarks: "Can be rapid canceled",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Standing MK",
        outbreak: "7",
        persistence: "3",
        rigidity: "15",
        hit: "4",
        guard: "2",
        damage: "70",
        stan: "100",
        remarks: "",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Standing HK",
        outbreak: "14",
        persistence: "4",
        rigidity: "22",
        hit: "2",
        guard: "-4",
        damage: "80",
        stan: "150",
        remarks: "Triggers Crush Counter (+20F)",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Crouching LP",
        outbreak: "4",
        persistence: "2",
        rigidity: "8",
        hit: "5",
        guard: "3",
        damage: "30",
        stan: "70",
        remarks: "Can be rapid canceled",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Crouching MP",
        outbreak: "6",
        persistence: "3",
        rigidity: "12",
        hit: "5",
        guard: "2",
        damage: "60",
        stan: "100",
        remarks: "",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
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
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Crouching LK",
        outbreak: "4",
        persistence: "2",
        rigidity: "8",
        hit: "2",
        guard: "0",
        damage: "20",
        stan: "70",
        remarks: "",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Crouching MK",
        outbreak: "7",
        persistence: "2",
        rigidity: "17",
        hit: "1",
        guard: "-3",
        damage: "50",
        stan: "100",
        remarks: "",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
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
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Jumping LP",
        outbreak: "4",
        persistence: "5",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "40",
        stan: "70",
        remarks: "",
        vtrigger: 2,
        type: "jump",
        command: ""
    },
    {
        name: "Jumping MP",
        outbreak: "7",
        persistence: "4",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "70",
        stan: "100",
        remarks: "Causes knockdown on mid-air hit",
        vtrigger: 2,
        type: "jump",
        command: ""
    },
    {
        name: "Jumping HP",
        outbreak: "9",
        persistence: "4",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "90",
        stan: "150",
        remarks: "",
        vtrigger: 2,
        type: "jump",
        command: ""
    },
    {
        name: "Jumping LK",
        outbreak: "3",
        persistence: "6",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "40",
        stan: "70",
        remarks: "",
        vtrigger: 2,
        type: "jump",
        command: ""
    },
    {
        name: "Jumping MK",
        outbreak: "8",
        persistence: "5",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "60",
        stan: "100",
        remarks: "Can cross-up",
        vtrigger: 2,
        type: "jump",
        command: ""
    },
    {
        name: "Jumping HK",
        outbreak: "9",
        persistence: "5",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "90",
        stan: "150",
        remarks: "",
        vtrigger: 2,
        type: "jump",
        command: ""
    },
    {
        name: "Psycho Blow",
        outbreak: "5",
        persistence: "3",
        rigidity: "17",
        hit: "D",
        guard: "",
        damage: "130",
        stan: "150",
        remarks: "",
        vtrigger: 2,
        type: "throw",
        command: "OR → + LP LK"
    },
    {
        name: "Cheat & Smash",
        outbreak: "5",
        persistence: "3",
        rigidity: "17",
        hit: "D",
        guard: "",
        damage: "140",
        stan: "200",
        remarks: "",
        vtrigger: 2,
        type: "throw",
        command: "← + LP LK"
    },
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
        vtrigger: 2,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL I) MP MK"
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
        vtrigger: 2,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL I) MP MK (HOLD BUTTONS)"
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
        vtrigger: 2,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL I) ↓ + MP MK"
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
        vtrigger: 2,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL I) ↓ + MP MK (HOLD BUTTONS)"
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
        vtrigger: 2,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL II) MP MK"
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
        vtrigger: 2,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL II) MP MK (HOLD BUTTONS)"
    },
    {
        name: "[VS2] Psycho Smash",
        outbreak: "11",
        persistence: "5",
        rigidity: "21",
        hit: "D",
        guard: "-6",
        damage: "70",
        stan: "100",
        remarks: "",
        vtrigger: 2,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL II) ↓ + MP MK"
    },
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
        vtrigger: 2,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL II) ↓ + MP MK (HOLD BUTTONS)"
    },
    {
        name: "Enhanced Snatcher",
        outbreak: "1",
        persistence: "",
        rigidity: "5",
        hit: "",
        guard: "",
        damage: "0",
        stan: "0",
        remarks: "V-Gauge Timer + 4000F\n                                                                                                                                                                                Gains the special moves Ultra Snatcher - Ground and Ultra Snatcher - Air while active",
        vtrigger: 2,
        type: "vsystem",
        command: "HP HK"
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
        vtrigger: 2,
        type: "vsystem",
        command: "(DURING GUARD) → + LK"
    },
    {
        name: "V-Shift",
        outbreak: "1",
        persistence: "9",
        rigidity: "22",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "1F - 16F  throw invincibility\n                                                Allows you to evade strikes and projectiles from frames 1-9 (Increases the V-Gauge by 150 when the evasion triggers)\nCounterable during recovery\n17 frame move that's fully invincible until the end of recovery when evading attacks.\nTransitions to V-Shift Break when evading attacks.",
        vtrigger: 2,
        type: "vsystem",
        command: "HP MK"
    },
    {
        name: "Psycho Split",
        outbreak: "8",
        persistence: "3",
        rigidity: "23",
        hit: "D",
        guard: "-2",
        damage: "60",
        stan: "0",
        remarks: "1F - 10F  full invincibility",
        vtrigger: 2,
        type: "vsystem",
        command: "HP MK ▶ (AFTER EVADING WITH V-SHIFT) HP MK"
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
        vtrigger: 2,
        type: "special",
        command: "P (REPEAT BUTTON)"
    },
    {
        name: "Psycho Spark",
        outbreak: "11",
        persistence: "8",
        rigidity: "16",
        hit: "1",
        guard: "-2",
        damage: "50",
        stan: "80",
        remarks: "Treated as a projectile",
        vtrigger: 2,
        type: "special",
        command: "→ + MP"
    },
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
        vtrigger: 2,
        type: "special",
        command: "(DURING Psycho Spark) P"
    },
    {
        name: "EX Psycho Shoot",
        outbreak: "13",
        persistence: "",
        rigidity: "36 total frames",
        hit: "D",
        guard: "8",
        damage: "100",
        stan: "150",
        remarks: "",
        vtrigger: 2,
        type: "special",
        command: "(DURING Psycho Spark) P P"
    },
    {
        name: "Psycho Knuckle",
        outbreak: "30",
        persistence: "12",
        rigidity: "27",
        hit: "(crumple)",
        guard: "-2",
        damage: "100",
        stan: "150",
        remarks: "Moves behind the opponent on hit and block\nCrumple time is longer the closer the attack hits\nVS*Can only be canceled V-Skill II",
        vtrigger: 2,
        type: "special",
        command: "HP (HOLD BUTTONS)"
    },
    {
        name: "Psycho Upper",
        outbreak: "16",
        persistence: "5",
        rigidity: "33",
        hit: "D",
        guard: "-16",
        damage: "120",
        stan: "150",
        remarks: "",
        vtrigger: 2,
        type: "special",
        command: "P P"
    },
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
        vtrigger: 2,
        type: "special",
        command: "LP"
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
        vtrigger: 2,
        type: "special",
        command: "K K"
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
        vtrigger: 2,
        type: "special",
        command: "(AFTER Psycho Rising HITS) P"
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
        vtrigger: 2,
        type: "special",
        command: "(AFTER Psycho Rising HITS) P P"
    },
    {
        name: "VUltra Snatcher - Ground",
        outbreak: "26",
        persistence: "8",
        rigidity: "37",
        hit: "6",
        guard: "GB+3",
        damage: "80",
        stan: "100",
        remarks: "Uses 1300F V-Gauge Timer\n                                                                                                                Will not hit airborne opponents\n                                                                If the Snatcher hits, Ed will automatically close the distance and attack\nCan be canceled into from special moves, except for Psycho Rising and regular Psycho Splash",
        vtrigger: 2,
        type: "special",
        command: "(DURING V-TRIGGER II) HP HK"
    },
    {
        name: "VUltra Snatcher - Air",
        outbreak: "16",
        persistence: "7",
        rigidity: "32",
        hit: "D",
        guard: "",
        damage: "100",
        stan: "150",
        remarks: "Uses 1300F V-Gauge Timer\n                                                                                                Will not hit grounded opponents\n                                                                                If the Snatcher hits, Ed automatically brings the opponent closer and attacks\nCan be canceled into from special moves, except for Psycho Rising and regular Psycho Splash",
        vtrigger: 2,
        type: "special",
        command: "(DURING V-TRIGGER II) ↓ + HP HK"
    },
    {
        name: "Psycho Barrage",
        outbreak: "1+9",
        persistence: "14",
        rigidity: "49",
        hit: "D",
        guard: "-21",
        damage: "340",
        stan: "0",
        remarks: "1F - 19F  full invincibility\n                                                The active frames are for whiff",
        vtrigger: 2,
        type: "ca",
        command: "↓↘→ ↓↘→ + P"
    }
];
exports.ed = ed;
//# sourceMappingURL=ed.js.map