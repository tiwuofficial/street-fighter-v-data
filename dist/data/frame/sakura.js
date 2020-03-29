"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sakura = [
    { name: "立ち弱P", outbreak: "4", persistence: "3", rigidity: "8", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "連打キャンセル対応", command: "" },
    { name: "立ち中P", outbreak: "5", persistence: "3", rigidity: "13", hit: "7", guard: "3", damage: "60", stan: "100", remarks: "VS※VS2のみキャンセル可能", command: "" },
    { name: "立ち強P", outbreak: "9", persistence: "3", rigidity: "21", hit: "3", guard: "-2", damage: "80", stan: "150", remarks: "", command: "" },
    { name: "立ち弱K", outbreak: "4", persistence: "3", rigidity: "12", hit: "-1", guard: "-2", damage: "30", stan: "70", remarks: "", command: "" },
    { name: "立ち中K", outbreak: "8", persistence: "3", rigidity: "17(※15)", hit: "3", guard: "1", damage: "60", stan: "100", remarks: "VS※VS2のみキャンセル可能\n※空振り時", command: "" },
    {
        name: "立ち強K",
        outbreak: "12",
        persistence: "2",
        rigidity: "26",
        hit: "1",
        guard: "-4",
        damage: "80",
        stan: "150",
        remarks: "クラッシュカウンター対応 (+20F)\n                                                                                                                                                                VS※VS2のみキャンセル可能",
        command: ""
    },
    { name: "しゃがみ弱P", outbreak: "3", persistence: "2", rigidity: "9", hit: "3", guard: "1", damage: "20", stan: "70", remarks: "連打キャンセル対応", command: "" },
    { name: "しゃがみ中P", outbreak: "6", persistence: "4", rigidity: "13", hit: "5", guard: "2", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "しゃがみ強P", outbreak: "8", persistence: "5", rigidity: "23", hit: "-2", guard: "-5", damage: "90", stan: "150", remarks: "強制立ち効果", command: "" },
    { name: "しゃがみ弱K", outbreak: "4", persistence: "2", rigidity: "8", hit: "3", guard: "0", damage: "20", stan: "70", remarks: "VS※VS2のみキャンセル可能", command: "" },
    { name: "しゃがみ中K", outbreak: "6", persistence: "2", rigidity: "14", hit: "2", guard: "-3", damage: "50", stan: "100", remarks: "", command: "" },
    {
        name: "しゃがみ強K",
        outbreak: "8",
        persistence: "2",
        rigidity: "25",
        hit: "D",
        guard: "-13",
        damage: "90",
        stan: "150",
        remarks: "クラッシュカウンター対応 (D)\n                                                                                                                                                                VS※VS2のみキャンセル可能",
        command: ""
    },
    { name: "ジャンプ弱P", outbreak: "4", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", command: "" },
    { name: "ジャンプ中P", outbreak: "6", persistence: "7", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "空中ヒット時吹き飛びやられ", command: "" },
    { name: "ジャンプ強P", outbreak: "8", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
    { name: "ジャンプ弱K", outbreak: "4", persistence: "8", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "めくり性能", command: "" },
    { name: "ジャンプ中K", outbreak: "7", persistence: "5", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "ジャンプ強K", outbreak: "10", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
    { name: "フラワーキック", outbreak: "21", persistence: "2", rigidity: "23", hit: "1", guard: "-7", damage: "70", stan: "100", remarks: "", command: "→ + 中K" },
    { name: "振り子アッパー", outbreak: "7", persistence: "3", rigidity: "26", hit: "-4", guard: "-7", damage: "80", stan: "150", remarks: "クラッシュカウンター対応 (D)", command: "← + 強P" },
    {
        name: "顎跳ね蹴り",
        outbreak: "12",
        persistence: "3",
        rigidity: "20",
        hit: "4",
        guard: "2",
        damage: "80",
        stan: "150",
        remarks: "強制立ち効果\n                                                                                                                VS※VS2のみキャンセル可能",
        command: "↘ + 強K"
    },
    { name: "花風", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "130", stan: "150", remarks: "", command: "" },
    { name: "さくら背負い", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "150", stan: "200", remarks: "", command: "" },
    { name: "セーラーフライ", outbreak: "5", persistence: "2", rigidity: "着地後6", hit: "", guard: "", damage: "160", stan: "200", remarks: "", command: "" },
    { name: "[VS1]春風", outbreak: "", persistence: "", rigidity: "54+着地後15", hit: "", guard: "", damage: "", stan: "", remarks: "", command: "" },
    {
        name: "[VS1]さくら落とし",
        outbreak: "11",
        persistence: "3",
        rigidity: "着地後6(※115)",
        hit: "D",
        guard: "-2",
        damage: "50 (※2100) (※3150)",
        stan: "40 (※2120) (※3240)",
        remarks: "ヒット時のみ3回まで連続入力可能。2、3段目は発生5F\n硬直差は立ち状態のリュウに対して最も高い位置でガードさせた場合の数値。\n最低空でガードさせた場合は+6F\n最高空でガードさせた場合は-9F\n3段目のみヒット時の着地硬直5F\n※1ヒット時\n※22段目までヒット\n※33段目までヒット",
        command: ""
    },
    {
        name: "[VS1]桜華脚",
        outbreak: "18",
        persistence: "着地まで",
        rigidity: "着地後11",
        hit: "3",
        guard: "-2",
        damage: "80",
        stan: "100",
        remarks: "硬直差は立ち状態のリュウに対して最速で派生した際の数値。\n最低空はヒット+12F/ガード+7F\n最高空はヒット+0F/ガード-5F",
        command: ""
    },
    { name: "[VS1]花信風", outbreak: "8", persistence: "3", rigidity: "着地後15", hit: "D", guard: "", damage: "150", stan: "200", remarks: "立ち状態のみ投げ可能", command: "" },
    { name: "[VS2]春疾風", outbreak: "", persistence: "", rigidity: "全体34", hit: "", guard: "", damage: "", stan: "", remarks: "", command: "" },
    { name: "[VS2]春疾風(攻撃)", outbreak: "26", persistence: "5", rigidity: "14+着地後11", hit: "D", guard: "-7", damage: "70", stan: "100", remarks: "", command: "" },
    {
        name: "春嵐",
        outbreak: "1",
        persistence: "",
        rigidity: "5",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "Vゲージタイマー+3000F\n                                                                                                                                                                                発動中波動拳、天仰波動拳、CAが強化される",
        command: ""
    },
    {
        name: "フラワースピン",
        outbreak: "17",
        persistence: "2",
        rigidity: "24(※27)",
        hit: "D",
        guard: "-2",
        damage: "60",
        stan: "0",
        remarks: "1F～30F 打撃&飛び道具無敵\n                                                発動時スタン値200回復\nヒット時",
        command: ""
    },
    { name: "弱 波動拳", outbreak: "15", persistence: "42", rigidity: "全体48", hit: "-2", guard: "-8", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "中 波動拳", outbreak: "15", persistence: "49", rigidity: "全体48", hit: "-2", guard: "-8", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "強 波動拳", outbreak: "15", persistence: "56", rigidity: "全体48", hit: "-2", guard: "-8", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "波動拳(溜め)", outbreak: "41", persistence: "", rigidity: "全体71", hit: "D", guard: "3", damage: "80", stan: "150", remarks: "", command: "" },
    {
        name: "V波動拳",
        outbreak: "14",
        persistence: "",
        rigidity: "全体42",
        hit: "D",
        guard: "1",
        damage: "80",
        stan: "150",
        remarks: "Vゲージタイマー800F消費\n                                                                                                                                                                                VS※VS2キャンセルはヒット・ガード時のみ可能",
        command: ""
    },
    { name: "V波動拳(溜め)", outbreak: "33", persistence: "", rigidity: "全体60", hit: "D", guard: "10", damage: "100", stan: "150", remarks: "Vゲージタイマー800F消費", command: "" },
    { name: "EX波動拳", outbreak: "14", persistence: "", rigidity: "全体45", hit: "D", guard: "1", damage: "100", stan: "150", remarks: "", command: "" },
    { name: "天仰波動拳", outbreak: "17", persistence: "27", rigidity: "全体45", hit: "D", guard: "4", damage: "60", stan: "100", remarks: "しゃがみの相手にヒットしない", command: "" },
    { name: "天仰波動拳(溜め)", outbreak: "39", persistence: "34", rigidity: "全体75", hit: "D", guard: "1", damage: "100", stan: "150", remarks: "しゃがみの相手にヒットしない", command: "" },
    {
        name: "V天仰波動拳",
        outbreak: "15",
        persistence: "34",
        rigidity: "全体45",
        hit: "D",
        guard: "9",
        damage: "80",
        stan: "150",
        remarks: "しゃがみの相手にヒットしない\n                                                                                                VS※VS2キャンセルはヒット・ガード時のみ可能",
        command: ""
    },
    { name: "V天仰波動拳(溜め)", outbreak: "31", persistence: "34", rigidity: "全体55", hit: "D", guard: "13", damage: "110", stan: "150", remarks: "しゃがみの相手にヒットしない", command: "" },
    { name: "EX天仰波動拳", outbreak: "15", persistence: "34", rigidity: "全体45", hit: "D", guard: "-1", damage: "100", stan: "150", remarks: "しゃがみの相手にヒットしない", command: "" },
    { name: "弱 咲桜拳", outbreak: "4", persistence: "7", rigidity: "26+着地後18", hit: "D", guard: "-31", damage: "100", stan: "150", remarks: "", command: "" },
    { name: "中 咲桜拳", outbreak: "9", persistence: "7", rigidity: "28+着地後18", hit: "D", guard: "-32", damage: "110", stan: "150", remarks: "", command: "" },
    { name: "強 咲桜拳", outbreak: "14", persistence: "12", rigidity: "34+着地後18", hit: "D", guard: "-37", damage: "120", stan: "150", remarks: "", command: "" },
    {
        name: "EX咲桜拳",
        outbreak: "4",
        persistence: "18",
        rigidity: "36+着地後21",
        hit: "D",
        guard: "-45",
        damage: "150",
        stan: "200",
        remarks: "1F～12F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)",
        command: ""
    },
    { name: "弱 春風脚", outbreak: "17", persistence: "2", rigidity: "13+着地後9", hit: "1", guard: "-2", damage: "60", stan: "150", remarks: "", command: "" },
    { name: "中 春風脚", outbreak: "21", persistence: "4", rigidity: "10+着地後14", hit: "3", guard: "-6", damage: "80", stan: "150", remarks: "", command: "" },
    { name: "強 春風脚", outbreak: "24", persistence: "6", rigidity: "8+着地後14", hit: "2", guard: "-2", damage: "100", stan: "150", remarks: "", command: "" },
    { name: "EX春風脚", outbreak: "15(※12)", persistence: "6", rigidity: "4+着地後18", hit: "", guard: "-2", damage: "", stan: "", remarks: "※立ち弱P、しゃがみ中Kキャンセル時", command: "" },
    { name: "EX春風脚（ヒット）", outbreak: "15", persistence: "11", rigidity: "22", hit: "D", guard: "", damage: "120", stan: "150", remarks: "", command: "" },
    { name: "空中春風脚", outbreak: "13", persistence: "4", rigidity: "着地後16", hit: "D", guard: "", damage: "100", stan: "150", remarks: "強度で飛距離が変化", command: "" },
    { name: "EX空中春風脚", outbreak: "12", persistence: "19", rigidity: "着地後16", hit: "D", guard: "", damage: "140", stan: "200", remarks: "", command: "" },
    {
        name: "萌芽掌",
        outbreak: "21",
        persistence: "7",
        rigidity: "22",
        hit: "9",
        guard: "5",
        damage: "80",
        stan: "150",
        remarks: "Vゲージタイマー500F消費\n                                                                                                                                                                                必殺技キャンセル可能な技からキャンセルして出せない\n※空振りすると硬直が5F伸びる",
        command: ""
    },
    {
        name: "桜の雨",
        outbreak: "1+5",
        persistence: "",
        rigidity: "全体77",
        hit: "D",
        guard: "-23",
        damage: "250（※330）",
        stan: "0",
        remarks: "1F～7F 完全無敵\n                                                ※根元ヒット時",
        command: ""
    },
    {
        name: "V桜の雨",
        outbreak: "1+5",
        persistence: "",
        rigidity: "全体77",
        hit: "D",
        guard: "-23",
        damage: "280（※350）",
        stan: "0",
        remarks: "1F～7F 完全無敵\n                                                ※根元ヒット時",
        command: ""
    }
];
exports.sakura = sakura;
//# sourceMappingURL=sakura.js.map