"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sagat = [
    { name: "立ち弱P", outbreak: "4", persistence: "3", rigidity: "10", hit: "5", guard: "4", damage: "30", stan: "70", remarks: "先端はしゃがみ状態にヒットしない", command: "" },
    { name: "立ち中P", outbreak: "6", persistence: "2", rigidity: "15", hit: "7", guard: "3", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "立ち強P", outbreak: "13", persistence: "3", rigidity: "20(※18)", hit: "4", guard: "-2", damage: "90", stan: "150", remarks: "※空振り時", command: "" },
    { name: "立ち弱K", outbreak: "5", persistence: "3", rigidity: "10", hit: "2", guard: "1", damage: "40", stan: "70", remarks: "", command: "" },
    { name: "立ち中K", outbreak: "11", persistence: "3", rigidity: "16", hit: "2", guard: "-2", damage: "70", stan: "100", remarks: "", command: "" },
    {
        name: "立ち強K",
        outbreak: "8",
        persistence: "4",
        rigidity: "17(※21)",
        hit: "8",
        guard: "-1",
        damage: "90(※280)",
        stan: "150",
        remarks: "2段目クラッシュカウンター対応(D)\n                                                初段ヒット時のみ強制立ち効果\n                2段目はしゃがみの相手にヒットしない\n                                                                                                一段目空中ヒット時吹き飛びやられ\n※空振り時\n※22段目のみヒット時",
        command: ""
    },
    { name: "しゃがみ弱P", outbreak: "4", persistence: "2", rigidity: "11", hit: "3", guard: "1", damage: "30", stan: "70", remarks: "連打キャンセル対応", command: "" },
    { name: "しゃがみ中P", outbreak: "7", persistence: "3", rigidity: "15(※14)", hit: "3", guard: "1", damage: "65", stan: "100", remarks: "※空振り時", command: "" },
    { name: "しゃがみ強P", outbreak: "10", persistence: "4", rigidity: "18", hit: "2", guard: "-1", damage: "90", stan: "150", remarks: "クラッシュカウンター対応(D)", command: "" },
    { name: "しゃがみ弱K", outbreak: "5", persistence: "3", rigidity: "9", hit: "3", guard: "2", damage: "30", stan: "70", remarks: "しゃがみ弱Pに連打キャンセル可能", command: "" },
    { name: "しゃがみ中K", outbreak: "9", persistence: "3", rigidity: "16", hit: "1", guard: "-4", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "しゃがみ強K", outbreak: "12", persistence: "2", rigidity: "23", hit: "D", guard: "-14", damage: "100", stan: "150", remarks: "クラッシュカウンター対応(D)", command: "" },
    { name: "ジャンプ弱P", outbreak: "5", persistence: "4", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", command: "" },
    { name: "ジャンプ中P", outbreak: "5", persistence: "4", rigidity: "", hit: "", guard: "", damage: "60", stan: "80", remarks: "空中ヒット時吹き飛びやられ", command: "" },
    { name: "ジャンプ強P", outbreak: "9", persistence: "4", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
    { name: "ジャンプ弱K", outbreak: "4", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "めくり性能", command: "" },
    { name: "ジャンプ中K", outbreak: "6", persistence: "6", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "ジャンプ強K", outbreak: "12", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
    { name: "タイガーヘビーエルボー", outbreak: "24", persistence: "2", rigidity: "21", hit: "1", guard: "-7", damage: "80", stan: "150", remarks: "空中ヒット時、叩きつけダウン", command: "→ + 強P" },
    {
        name: "ステップハイキック",
        outbreak: "16",
        persistence: "3",
        rigidity: "22(※23)",
        hit: "5",
        guard: "3",
        damage: "90",
        stan: "150",
        remarks: "クラッシュカウンター対応(+26F)\n                                                                しゃがみの相手にヒットしない\n                                                                                                空中ヒット時吹き飛びやられ\nS※出がかりをキャンセル可能\n※空振り時",
        command: "→ + 強K"
    },
    { name: "ステップローキック", outbreak: "19", persistence: "2", rigidity: "23", hit: "3", guard: "-2", damage: "70", stan: "100", remarks: "S※出がかりをキャンセル可能", command: "→ + 中K" },
    { name: "タイガーハング", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "130", stan: "150", remarks: "", command: "" },
    { name: "タイガースイング", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "130", stan: "200", remarks: "", command: "" },
    {
        name: "[VS1]アングリーチャージ",
        outbreak: "",
        persistence: "",
        rigidity: "全体50",
        hit: "",
        guard: "",
        damage: "0",
        stan: "0",
        remarks: "次に発動するタイガーアッパーカットが強化される",
        command: ""
    },
    {
        name: "[VS2]ハヌマンチャージ",
        outbreak: "",
        persistence: "",
        rigidity: "全体50",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "次に発動するタイガーニークラッシュが強化される",
        command: ""
    },
    {
        name: "タイガーチャージ",
        outbreak: "1",
        persistence: "",
        rigidity: "4",
        hit: "",
        guard: "",
        damage: "0",
        stan: "0",
        remarks: "Vゲージタイマー+3000F\n                                                                                                                                                                                発動中、必殺技に「タイガーキャノン」が追加",
        command: ""
    },
    {
        name: "タイガーリベンジ",
        outbreak: "17",
        persistence: "2",
        rigidity: "24",
        hit: "D",
        guard: "-2",
        damage: "60",
        stan: "0",
        remarks: "1F～32F 打撃&飛び道具無敵\n                                                発動時スタン値200回復",
        command: ""
    },
    { name: "弱 タイガーショット", outbreak: "13", persistence: "", rigidity: "全体40", hit: "2", guard: "1", damage: "70", stan: "100", remarks: "しゃがみの相手にヒットしない", command: "" },
    { name: "中 タイガーショット", outbreak: "13", persistence: "", rigidity: "全体40", hit: "2", guard: "1", damage: "70", stan: "100", remarks: "しゃがみの相手にヒットしない", command: "" },
    { name: "強 タイガーショット", outbreak: "13", persistence: "", rigidity: "全体40", hit: "2", guard: "1", damage: "70", stan: "100", remarks: "しゃがみの相手にヒットしない", command: "" },
    { name: "EXタイガーショット", outbreak: "11", persistence: "", rigidity: "全体38", hit: "D", guard: "6", damage: "100", stan: "150", remarks: "しゃがみの相手にヒットしない", command: "" },
    { name: "弱 グランドタイガーショット", outbreak: "13", persistence: "", rigidity: "全体44", hit: "0", guard: "-4", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "中 グランドタイガーショット", outbreak: "13", persistence: "", rigidity: "全体44", hit: "0", guard: "-4", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "強 グランドタイガーショット", outbreak: "13", persistence: "", rigidity: "全体44", hit: "0", guard: "-4", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "EX グランドタイガーショット", outbreak: "11", persistence: "", rigidity: "全体42", hit: "D", guard: "-2", damage: "80", stan: "150", remarks: "", command: "" },
    {
        name: "弱 タイガーアッパーカット",
        outbreak: "4",
        persistence: "9",
        rigidity: "48",
        hit: "D",
        guard: "-39",
        damage: "130(※110)",
        stan: "150(※120)",
        remarks: "1F～12F 空中判定の攻撃に対して無敵\n                                動作中常に被カウンター判定\n※持続3F目以降",
        command: ""
    },
    {
        name: "中 タイガーアッパーカット",
        outbreak: "6",
        persistence: "9",
        rigidity: "48",
        hit: "D",
        guard: "-39",
        damage: "130(※110)",
        stan: "150(※120)",
        remarks: "3F～7F 打撃&飛び道具無敵\n                                                動作中常に被カウンター判定\n※持続3F目以降",
        command: ""
    },
    {
        name: "強 タイガーアッパーカット",
        outbreak: "8",
        persistence: "9",
        rigidity: "48",
        hit: "D",
        guard: "-39",
        damage: "130(※110)",
        stan: "150(※120)",
        remarks: "1F～9F 投げ無敵\n                1F～16F 空中判定の攻撃に対して無敵\n                                動作中常に被カウンター判定\n※持続3F目以降",
        command: ""
    },
    {
        name: "弱 タイガーアッパーカット(VS1版)",
        outbreak: "4",
        persistence: "9",
        rigidity: "43",
        hit: "D",
        guard: "-34",
        damage: "160(※140)",
        stan: "180(※150)",
        remarks: "1F～12F 空中判定の攻撃に対して無敵\n                                動作中常に被カウンター判定\n※持続3F目以降",
        command: ""
    },
    {
        name: "中 タイガーアッパーカット(VS1版)",
        outbreak: "6",
        persistence: "9",
        rigidity: "43",
        hit: "D",
        guard: "-34",
        damage: "160(※140)",
        stan: "180(※150)",
        remarks: "3F～7F 打撃&飛び道具無敵\n                                                動作中常に被カウンター判定\n※持続3F目以降",
        command: ""
    },
    {
        name: "強 タイガーアッパーカット(VS1版)",
        outbreak: "8",
        persistence: "9",
        rigidity: "43",
        hit: "D",
        guard: "-34",
        damage: "160(※140)",
        stan: "180(※150)",
        remarks: "1F～9F 投げ無敵\n                1F～16F 空中判定の攻撃に対して無敵\n                                動作中常に被カウンター判定\n※持続3F目以降",
        command: ""
    },
    {
        name: "EX タイガーアッパーカット",
        outbreak: "4",
        persistence: "9",
        rigidity: "52",
        hit: "D",
        guard: "-36",
        damage: "160",
        stan: "200",
        remarks: "1F～10F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)",
        command: ""
    },
    {
        name: "EX タイガーアッパーカット(VS1版)",
        outbreak: "4",
        persistence: "9",
        rigidity: "52",
        hit: "D",
        guard: "-36",
        damage: "180",
        stan: "230",
        remarks: "1F～10F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)",
        command: ""
    },
    { name: "弱 タイガーニークラッシュ", outbreak: "12", persistence: "7", rigidity: "21(※23)", hit: "D", guard: "-6", damage: "80", stan: "150", remarks: "※空振り時", command: "" },
    { name: "中 タイガーニークラッシュ", outbreak: "14", persistence: "9", rigidity: "18(※20)", hit: "D", guard: "-9", damage: "90", stan: "150", remarks: "※空振り時", command: "" },
    { name: "強 タイガーニークラッシュ", outbreak: "20", persistence: "11", rigidity: "17(※21)", hit: "D", guard: "-7", damage: "100", stan: "150", remarks: "※空振り時", command: "" },
    { name: "弱 タイガーニークラッシュ(VS2版)", outbreak: "12", persistence: "7", rigidity: "21(※23)", hit: "D", guard: "-2", damage: "80", stan: "150", remarks: "※空振り時", command: "" },
    { name: "中 タイガーニークラッシュ(VS2版)", outbreak: "14", persistence: "9", rigidity: "18(※20)", hit: "D", guard: "-6", damage: "90", stan: "150", remarks: "※空振り時", command: "" },
    { name: "強 タイガーニークラッシュ(VS2版)", outbreak: "20", persistence: "11", rigidity: "17(※21)", hit: "D", guard: "-4", damage: "100", stan: "150", remarks: "※空振り時", command: "" },
    { name: "EX タイガーニークラッシュ", outbreak: "14", persistence: "9", rigidity: "18", hit: "D", guard: "-4", damage: "160", stan: "200", remarks: "初段ヒットで自動派生", command: "" },
    { name: "EX タイガーニークラッシュ(VS2版)", outbreak: "14", persistence: "9", rigidity: "18", hit: "D", guard: "-2", damage: "160", stan: "200", remarks: "初段ヒットで自動派生", command: "" },
    {
        name: "タイガーキャノン",
        outbreak: "17",
        persistence: "",
        rigidity: "全体49",
        hit: "D",
        guard: "10",
        damage: "120",
        stan: "150",
        remarks: "Vゲージタイマー1500F消費\n                                                                                                                                                                                Vトリガーキャンセル可能な通常技と特殊技からキャンセル可",
        command: ""
    },
    { name: "タイガーランペイジ", outbreak: "1+6", persistence: "6", rigidity: "61", hit: "D", guard: "-42", damage: "340", stan: "0", remarks: "1F～13F 完全無敵", command: "" }
];
exports.sagat = sagat;
//# sourceMappingURL=sagat.js.map