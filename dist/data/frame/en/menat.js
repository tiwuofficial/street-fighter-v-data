"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const menat = [
    {
        name: "Standing LP",
        outbreak: "5",
        persistence: "4",
        rigidity: "8(*11)",
        hit: "5",
        guard: "3",
        damage: "30",
        stan: "70",
        remarks: "*On whiff",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Standing MP",
        outbreak: "6",
        persistence: "6",
        rigidity: "20",
        hit: "-2",
        guard: "-8",
        damage: "60",
        stan: "100",
        remarks: "",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Standing HP",
        outbreak: "12",
        persistence: "9",
        rigidity: "19",
        hit: "-6",
        guard: "-10",
        damage: "80",
        stan: "150",
        remarks: "Triggers Crush Counter  (D)",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Standing LK",
        outbreak: "3",
        persistence: "3",
        rigidity: "10",
        hit: "4",
        guard: "1",
        damage: "30",
        stan: "70",
        remarks: "",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Standing MK",
        outbreak: "8",
        persistence: "3",
        rigidity: "16",
        hit: "2",
        guard: "-2",
        damage: "60",
        stan: "100",
        remarks: "S*Can only be canceled into Soul Sphere - Ankh and Soul Spark",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Standing HK",
        outbreak: "11",
        persistence: "6",
        rigidity: "23",
        hit: "-4",
        guard: "-8",
        damage: "90",
        stan: "150",
        remarks: "Triggers Crush Counter  (crumple)\n                                                Forces stand",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Crouching LP",
        outbreak: "4",
        persistence: "4",
        rigidity: "8(*11)",
        hit: "4",
        guard: "2",
        damage: "30",
        stan: "70",
        remarks: "*On whiff",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Crouching MP",
        outbreak: "7",
        persistence: "6",
        rigidity: "13",
        hit: "2",
        guard: "-3",
        damage: "60",
        stan: "100",
        remarks: "",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Crouching HP",
        outbreak: "9",
        persistence: "5",
        rigidity: "19",
        hit: "-1",
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
        rigidity: "9",
        hit: "4",
        guard: "1",
        damage: "20",
        stan: "70",
        remarks: "S*Can only be canceled into Soul Sphere - Ankh and Soul Spark\nStanding/Crouching LP can be rapid canceled",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Crouching MK",
        outbreak: "7",
        persistence: "3",
        rigidity: "14",
        hit: "3",
        guard: "2",
        damage: "50",
        stan: "100",
        remarks: "",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "Crouching HK",
        outbreak: "11",
        persistence: "3",
        rigidity: "33",
        hit: "D",
        guard: "-16",
        damage: "90",
        stan: "150",
        remarks: "Triggers Crush Counter  (D)",
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
        outbreak: "8",
        persistence: "4",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "70",
        stan: "100",
        remarks: "",
        vtrigger: 1,
        type: "jump",
        command: ""
    },
    {
        name: "Jumping HP",
        outbreak: "13",
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
        outbreak: "4",
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
        outbreak: "7",
        persistence: "4",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "60",
        stan: "100",
        remarks: "",
        vtrigger: 1,
        type: "jump",
        command: ""
    },
    {
        name: "Jumping HK",
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
        name: "Divine Retribution",
        outbreak: "27",
        persistence: "2",
        rigidity: "23",
        hit: "1",
        guard: "-7",
        damage: "60",
        stan: "100",
        remarks: "S*The first hit only can only be canceled into Soul Sphere - Ankh and Soul Spark",
        vtrigger: 1,
        type: "unique",
        command: "→ + MK"
    },
    {
        name: "Judgment Of Anubis",
        outbreak: "11",
        persistence: "11",
        rigidity: "18",
        hit: "-6",
        guard: "-10",
        damage: "50",
        stan: "100",
        remarks: "Area around her head is projectile invincible from 11F - 35F",
        vtrigger: 1,
        type: "unique",
        command: "↘ + MK"
    },
    {
        name: "Khamun Kick",
        outbreak: "12",
        persistence: "Until landing",
        rigidity: "9 frame(s) after landing",
        hit: "",
        guard: "",
        damage: "60",
        stan: "70",
        remarks: "",
        vtrigger: 1,
        type: "unique",
        command: "(DURING JUMP) ↓ + K"
    },
    {
        name: "Overflowing Nile",
        outbreak: "5",
        persistence: "3",
        rigidity: "17",
        hit: "D",
        guard: "",
        damage: "120",
        stan: "170",
        remarks: "",
        vtrigger: 1,
        type: "throw",
        command: "(NEAR OPPONENT) → OR + LP LK"
    },
    {
        name: "Pyramid Hopscotch",
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
        command: "(NEAR OPPONENT) ← + LP LK"
    },
    {
        name: "[VS1] Soul Reflect: Kamal",
        outbreak: "9",
        persistence: "3(*8)",
        rigidity: "37",
        hit: "D",
        guard: "-18",
        damage: "80",
        stan: "150",
        remarks: "*Value while refrection projectile\nCan reflect projectiles. Cannot reflect EX or stronger projectiles",
        vtrigger: 1,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL I) MP MK"
    },
    {
        name: "[VS1] Soul Reflect: Stella",
        outbreak: "14",
        persistence: "3(*15)",
        rigidity: "35",
        hit: "D",
        guard: "-16",
        damage: "80",
        stan: "150",
        remarks: "*Value while refrection projectile\nCan reflect projectiles. Cannot reflect EX or stronger projectiles",
        vtrigger: 1,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL I) ↓ + MP MK"
    },
    {
        name: "[VS2] Soul Spiral",
        outbreak: "19",
        persistence: "10",
        rigidity: "24",
        hit: "D",
        guard: "-14",
        damage: "70",
        stan: "120",
        remarks: "",
        vtrigger: 1,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL II) MP MK"
    },
    {
        name: "Wisdom Of Thoth",
        outbreak: "1",
        persistence: "",
        rigidity: "4",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "V-Gauge Timer + 2000F",
        vtrigger: 1,
        type: "vsystem",
        command: "HP HK"
    },
    {
        name: "Wisdom Of Thoth (Projectile)",
        outbreak: "10",
        persistence: "",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "20",
        stan: "20",
        remarks: "Press and release a button to fire the projectile. Each button corresponds to a projectile\nStanding/crouching/airborne states change the projectile's trajectory\nProjectiles cannot be fired while blocking, during hit stun, while knocked down, at the beginning of a normal move, and during certain conditions",
        vtrigger: 1,
        type: "vsystem",
        command: ""
    },
    {
        name: "Left Eye Of The Lion",
        outbreak: "",
        persistence: "",
        rigidity: "43 total frames",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "1F - 22F  attack & projectile invincibility\n23F - 39F  full invincibility\n                                                Teleports to the other side of the opponent regardless of distance\nRecover 200 stun upon activation",
        vtrigger: 1,
        type: "vsystem",
        command: "(DURING GUARD) → + LP"
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
        name: "Sistrum Of Fortune",
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
        name: "L Soul Sphere",
        outbreak: "14",
        persistence: "26",
        rigidity: "38 total frames",
        hit: "2",
        guard: "-8",
        damage: "40",
        stan: "70",
        remarks: "CA cancel can only be performed in close range on base hit",
        vtrigger: 1,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) ↓↘→ + LP"
    },
    {
        name: "M Soul Sphere",
        outbreak: "14",
        persistence: "33",
        rigidity: "43 total frames",
        hit: "1",
        guard: "-11",
        damage: "40",
        stan: "70",
        remarks: "CA cancel can only be performed in close range on base hit",
        vtrigger: 1,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) ↓↘→ + MP"
    },
    {
        name: "H Soul Sphere",
        outbreak: "14",
        persistence: "33",
        rigidity: "36 total frames",
        hit: "4",
        guard: "-4",
        damage: "40",
        stan: "70",
        remarks: "Will not hit crouching opponents",
        vtrigger: 1,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) ↓↘→ + HP"
    },
    {
        name: "EX L Soul Sphere",
        outbreak: "19",
        persistence: "21",
        rigidity: "47 total frames",
        hit: "7",
        guard: "3",
        damage: "60",
        stan: "0",
        remarks: "",
        vtrigger: 1,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) ↓↘→ + LP MP"
    },
    {
        name: "EX M Soul Sphere",
        outbreak: "10",
        persistence: "21",
        rigidity: "51 total frames",
        hit: "D",
        guard: "-10",
        damage: "150",
        stan: "200",
        remarks: "",
        vtrigger: 1,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) ↓↘→ + LP HP"
    },
    {
        name: "EX H Soul Sphere",
        outbreak: "10",
        persistence: "21",
        rigidity: "40 total frames",
        hit: "0",
        guard: "-9",
        damage: "150(*40)",
        stan: "200(*70)",
        remarks: "Locks if it hits an airborne opponent\n*On grounded hit",
        vtrigger: 1,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) ↓↘→ + MP HP"
    },
    {
        name: "L Guardian Of The Sun",
        outbreak: "6",
        persistence: "15",
        rigidity: "21+30 frame(s) after landing",
        hit: "D",
        guard: "",
        damage: "100",
        stan: "150",
        remarks: "",
        vtrigger: 1,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) →↓↘ + LK"
    },
    {
        name: "M Guardian Of The Sun",
        outbreak: "8",
        persistence: "15",
        rigidity: "21+30 frame(s) after landing",
        hit: "D",
        guard: "",
        damage: "120",
        stan: "150",
        remarks: "",
        vtrigger: 1,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) →↓↘ + MK"
    },
    {
        name: "H Guardian Of The Sun",
        outbreak: "10",
        persistence: "15",
        rigidity: "21+30 frame(s) after landing",
        hit: "D",
        guard: "",
        damage: "140",
        stan: "200",
        remarks: "",
        vtrigger: 1,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) →↓↘ + HK"
    },
    {
        name: "EX Guardian Of The Sun",
        outbreak: "6",
        persistence: "15",
        rigidity: "21+30 frame(s) after landing",
        hit: "D",
        guard: "",
        damage: "150",
        stan: "200",
        remarks: "5F - 20F  full invincibility",
        vtrigger: 1,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) →↓↘ + K K"
    },
    {
        name: "The Nefertem",
        outbreak: "1+3",
        persistence: "16",
        rigidity: "65",
        hit: "D",
        guard: "-46",
        damage: "330",
        stan: "0",
        remarks: "1F - 20F  full invincibility",
        vtrigger: 1,
        type: "ca",
        command: "↓↘→ ↓↘→ + P"
    },
    {
        name: "Standing LP",
        outbreak: "5",
        persistence: "4",
        rigidity: "8(*11)",
        hit: "5",
        guard: "3",
        damage: "30",
        stan: "70",
        remarks: "*On whiff",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Standing MP",
        outbreak: "6",
        persistence: "6",
        rigidity: "20",
        hit: "-2",
        guard: "-8",
        damage: "60",
        stan: "100",
        remarks: "",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Standing HP",
        outbreak: "12",
        persistence: "9",
        rigidity: "19",
        hit: "-6",
        guard: "-10",
        damage: "80",
        stan: "150",
        remarks: "Triggers Crush Counter  (D)",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Standing LK",
        outbreak: "3",
        persistence: "3",
        rigidity: "10",
        hit: "4",
        guard: "1",
        damage: "30",
        stan: "70",
        remarks: "",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Standing MK",
        outbreak: "8",
        persistence: "3",
        rigidity: "16",
        hit: "2",
        guard: "-2",
        damage: "60",
        stan: "100",
        remarks: "S*Can only be canceled into Soul Sphere - Ankh and Soul Spark",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Standing HK",
        outbreak: "11",
        persistence: "6",
        rigidity: "23",
        hit: "-4",
        guard: "-8",
        damage: "90",
        stan: "150",
        remarks: "Triggers Crush Counter  (crumple)\n                                                Forces stand",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Crouching LP",
        outbreak: "4",
        persistence: "4",
        rigidity: "8(*11)",
        hit: "4",
        guard: "2",
        damage: "30",
        stan: "70",
        remarks: "*On whiff",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Crouching MP",
        outbreak: "7",
        persistence: "6",
        rigidity: "13",
        hit: "2",
        guard: "-3",
        damage: "60",
        stan: "100",
        remarks: "",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Crouching HP",
        outbreak: "9",
        persistence: "5",
        rigidity: "19",
        hit: "-1",
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
        rigidity: "9",
        hit: "4",
        guard: "1",
        damage: "20",
        stan: "70",
        remarks: "S*Can only be canceled into Soul Sphere - Ankh and Soul Spark\nStanding/Crouching LP can be rapid canceled",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Crouching MK",
        outbreak: "7",
        persistence: "3",
        rigidity: "14",
        hit: "3",
        guard: "2",
        damage: "50",
        stan: "100",
        remarks: "",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "Crouching HK",
        outbreak: "11",
        persistence: "3",
        rigidity: "33",
        hit: "D",
        guard: "-16",
        damage: "90",
        stan: "150",
        remarks: "Triggers Crush Counter  (D)",
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
        outbreak: "8",
        persistence: "4",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "70",
        stan: "100",
        remarks: "",
        vtrigger: 2,
        type: "jump",
        command: ""
    },
    {
        name: "Jumping HP",
        outbreak: "13",
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
        outbreak: "4",
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
        outbreak: "7",
        persistence: "4",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "60",
        stan: "100",
        remarks: "",
        vtrigger: 2,
        type: "jump",
        command: ""
    },
    {
        name: "Jumping HK",
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
        name: "Divine Retribution",
        outbreak: "27",
        persistence: "2",
        rigidity: "23",
        hit: "1",
        guard: "-7",
        damage: "60",
        stan: "100",
        remarks: "S*The first hit only can only be canceled into Soul Sphere - Ankh and Soul Spark",
        vtrigger: 2,
        type: "unique",
        command: "→ + MK"
    },
    {
        name: "Judgment Of Anubis",
        outbreak: "11",
        persistence: "11",
        rigidity: "18",
        hit: "-6",
        guard: "-10",
        damage: "50",
        stan: "100",
        remarks: "Area around her head is projectile invincible from 11F - 35F",
        vtrigger: 2,
        type: "unique",
        command: "↘ + MK"
    },
    {
        name: "Khamun Kick",
        outbreak: "12",
        persistence: "Until landing",
        rigidity: "9 frame(s) after landing",
        hit: "",
        guard: "",
        damage: "60",
        stan: "70",
        remarks: "",
        vtrigger: 2,
        type: "unique",
        command: "(DURING JUMP) ↓ + K"
    },
    {
        name: "Overflowing Nile",
        outbreak: "5",
        persistence: "3",
        rigidity: "17",
        hit: "D",
        guard: "",
        damage: "120",
        stan: "170",
        remarks: "",
        vtrigger: 2,
        type: "throw",
        command: "(NEAR OPPONENT) → OR + LP LK"
    },
    {
        name: "Pyramid Hopscotch",
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
        command: "(NEAR OPPONENT) ← + LP LK"
    },
    {
        name: "[VS1] Soul Reflect: Kamal",
        outbreak: "9",
        persistence: "3(*8)",
        rigidity: "37",
        hit: "D",
        guard: "-18",
        damage: "80",
        stan: "150",
        remarks: "*Value while refrection projectile\nCan reflect projectiles. Cannot reflect EX or stronger projectiles\nS*Can canceled into Judgement of Thoth, Prophecy of Thoth",
        vtrigger: 2,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL I) MP MK"
    },
    {
        name: "[VS1] Soul Reflect: Stella",
        outbreak: "14",
        persistence: "3(*15)",
        rigidity: "35",
        hit: "D",
        guard: "-16",
        damage: "80",
        stan: "150",
        remarks: "*Value while refrection projectile\nCan reflect projectiles. Cannot reflect EX or stronger projectiles\nS*Can canceled into Judgement of Thoth, Prophecy of Thoth",
        vtrigger: 2,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL I) ↓ + MP MK"
    },
    {
        name: "[VS2] Soul Spiral",
        outbreak: "19",
        persistence: "10",
        rigidity: "24",
        hit: "D",
        guard: "-14",
        damage: "70",
        stan: "120",
        remarks: "S*Can canceled into Judgement of Thoth, Prophecy of Thoth",
        vtrigger: 2,
        type: "vsystem",
        command: "(WHEN SELECTING VSKILL II) MP MK"
    },
    {
        name: "Prophecy Of Thoth",
        outbreak: "1",
        persistence: "",
        rigidity: "4",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "V-Gauge Timer + 2000F\n                                                                                                                                                                                Gains an exclusive special move",
        vtrigger: 2,
        type: "vsystem",
        command: "HP HK"
    },
    {
        name: "Left Eye Of The Lion",
        outbreak: "",
        persistence: "",
        rigidity: "43 total frames",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "1F - 22F  attack & projectile invincibility\n23F - 39F  full invincibility\n                                                Teleports to the other side of the opponent regardless of distance\nRecover 200 stun upon activation",
        vtrigger: 2,
        type: "vsystem",
        command: "(DURING GUARD) → + LP"
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
        name: "Sistrum Of Fortune",
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
        name: "L Soul Sphere",
        outbreak: "14",
        persistence: "26",
        rigidity: "38 total frames",
        hit: "2",
        guard: "-8",
        damage: "40",
        stan: "70",
        remarks: "CA cancel can only be performed in close range on base hit\nS*Can canceled into Judgement of Thoth, Prophecy of Thoth",
        vtrigger: 2,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) ↓↘→ + LP"
    },
    {
        name: "M Soul Sphere",
        outbreak: "14",
        persistence: "33",
        rigidity: "43 total frames",
        hit: "1",
        guard: "-11",
        damage: "40",
        stan: "70",
        remarks: "CA cancel can only be performed in close range on base hit\nS*Can canceled into Judgement of Thoth, Prophecy of Thoth",
        vtrigger: 2,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) ↓↘→ + MP"
    },
    {
        name: "H Soul Sphere",
        outbreak: "14",
        persistence: "33",
        rigidity: "36 total frames",
        hit: "4",
        guard: "-4",
        damage: "40",
        stan: "70",
        remarks: "Will not hit crouching opponents\n                                                                                                S*Can canceled into Judgement of Thoth, Prophecy of Thoth",
        vtrigger: 2,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) ↓↘→ + HP"
    },
    {
        name: "EX L Soul Sphere",
        outbreak: "19",
        persistence: "21",
        rigidity: "47 total frames",
        hit: "7",
        guard: "3",
        damage: "60",
        stan: "0",
        remarks: "",
        vtrigger: 2,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) ↓↘→ + LP MP"
    },
    {
        name: "EX M Soul Sphere",
        outbreak: "10",
        persistence: "21",
        rigidity: "51 total frames",
        hit: "D",
        guard: "-10",
        damage: "150",
        stan: "200",
        remarks: "",
        vtrigger: 2,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) ↓↘→ + LP HP"
    },
    {
        name: "EX H Soul Sphere",
        outbreak: "10",
        persistence: "21",
        rigidity: "40 total frames",
        hit: "0",
        guard: "-9",
        damage: "150(*40)",
        stan: "200(*70)",
        remarks: "Locks if it hits an airborne opponent\n*On grounded hit\nS*Can be canceled with Judgment of Thoth/Prophecy of Thoth only on hit or block",
        vtrigger: 2,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) ↓↘→ + MP HP"
    },
    {
        name: "L Guardian Of The Sun",
        outbreak: "6",
        persistence: "15",
        rigidity: "21+30 frame(s) after landing",
        hit: "D",
        guard: "",
        damage: "100",
        stan: "150",
        remarks: "",
        vtrigger: 2,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) →↓↘ + LK"
    },
    {
        name: "M Guardian Of The Sun",
        outbreak: "8",
        persistence: "15",
        rigidity: "21+30 frame(s) after landing",
        hit: "D",
        guard: "",
        damage: "120",
        stan: "150",
        remarks: "",
        vtrigger: 2,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) →↓↘ + MK"
    },
    {
        name: "H Guardian Of The Sun",
        outbreak: "10",
        persistence: "15",
        rigidity: "21+30 frame(s) after landing",
        hit: "D",
        guard: "",
        damage: "140",
        stan: "200",
        remarks: "",
        vtrigger: 2,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) →↓↘ + HK"
    },
    {
        name: "EX Guardian Of The Sun",
        outbreak: "6",
        persistence: "15",
        rigidity: "21+30 frame(s) after landing",
        hit: "D",
        guard: "",
        damage: "150",
        stan: "200",
        remarks: "5F - 20F  full invincibility",
        vtrigger: 2,
        type: "special",
        command: "(WITH THE CRYSTAL BALL) →↓↘ + K K"
    },
    {
        name: "VL Judgement Of Thoth",
        outbreak: "11",
        persistence: "",
        rigidity: "37 total frames",
        hit: "23",
        guard: "12",
        damage: "120",
        stan: "120",
        remarks: "Uses 1000F V-Gauge Timer\n                                                                                                                                                                                Recovery value is based on contact with a standing Ryu\nCan be canceled from normal moves that are V-Trigger cancelable",
        vtrigger: 2,
        type: "special",
        command: "(DURING V-TRIGGER II) ↓↙← + LP"
    },
    {
        name: "VM Judgement Of Thoth",
        outbreak: "11",
        persistence: "",
        rigidity: "37 total frames",
        hit: "11",
        guard: "8",
        damage: "120",
        stan: "120",
        remarks: "Uses 1000F V-Gauge Timer\n                                                                                                                                                                                Recovery value is based on contact with a standing Ryu\nCan be canceled from normal moves that are V-Trigger cancelable",
        vtrigger: 2,
        type: "special",
        command: "(DURING V-TRIGGER II) ↓↙← + MP"
    },
    {
        name: "VH Judgement Of Thoth",
        outbreak: "11",
        persistence: "",
        rigidity: "37 total frames",
        hit: "8",
        guard: "2",
        damage: "120",
        stan: "120",
        remarks: "Uses 1000F V-Gauge Timer\n                                                                                                                                                                                Recovery value is based on contact with a standing Ryu\nCan be canceled from normal moves that are V-Trigger cancelable",
        vtrigger: 2,
        type: "special",
        command: "(DURING V-TRIGGER II) ↓↙← + HP"
    },
    {
        name: "VProphecy Of Thoth",
        outbreak: "",
        persistence: "",
        rigidity: "42 total frames",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "Can be canceled from normal moves that are V-Trigger cancelable",
        vtrigger: 2,
        type: "special",
        command: "(DURING V-TRIGGER II) HP HK"
    },
    {
        name: "The Nefertem",
        outbreak: "1+3",
        persistence: "16",
        rigidity: "65",
        hit: "D",
        guard: "-46",
        damage: "330",
        stan: "0",
        remarks: "1F - 20F  full invincibility",
        vtrigger: 2,
        type: "ca",
        command: "↓↘→ ↓↘→ + P"
    }
];
exports.menat = menat;
//# sourceMappingURL=menat.js.map