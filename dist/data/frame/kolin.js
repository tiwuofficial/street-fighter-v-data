"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kolin = [
    { name: "立ち弱P", outbreak: "4", persistence: "3", rigidity: "6", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "立ち中P", outbreak: "6", persistence: "3", rigidity: "13", hit: "4", guard: "2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "立ち強P", outbreak: "8", persistence: "3", rigidity: "19", hit: "5", guard: "-4", damage: "80", stan: "150", remarks: "クラッシュカウンター対応(+18F)", type: "normal", command: "" },
    { name: "立ち弱K", outbreak: "5", persistence: "3", rigidity: "9", hit: "1", guard: "-2", damage: "40", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "立ち中K", outbreak: "5", persistence: "3", rigidity: "14", hit: "3", guard: "-2", damage: "50", stan: "100", remarks: "", type: "normal", command: "" },
    {
        name: "立ち強K",
        outbreak: "11",
        persistence: "3",
        rigidity: "20",
        hit: "6",
        guard: "-2",
        damage: "80",
        stan: "150",
        remarks: "クラッシュカウンター対応(+23F)\n                                                                しゃがみの相手にヒットしない",
        type: "normal",
        command: ""
    },
    { name: "しゃがみ弱P", outbreak: "3", persistence: "2", rigidity: "8", hit: "4", guard: "1", damage: "20", stan: "70", remarks: "", type: "normal", command: "" },
    { name: "しゃがみ中P", outbreak: "6", persistence: "3", rigidity: "13", hit: "5", guard: "2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
    { name: "しゃがみ強P", outbreak: "7", persistence: "3", rigidity: "23", hit: "0", guard: "-3", damage: "80", stan: "150", remarks: "", type: "normal", command: "" },
    { name: "しゃがみ弱K", outbreak: "4", persistence: "2", rigidity: "8", hit: "3", guard: "1", damage: "20", stan: "70", remarks: "連打キャンセル対応", type: "normal", command: "" },
    { name: "しゃがみ中K", outbreak: "8", persistence: "3", rigidity: "15", hit: "3", guard: "1", damage: "50", stan: "100", remarks: "", type: "normal", command: "" },
    {
        name: "しゃがみ強K",
        outbreak: "10",
        persistence: "4",
        rigidity: "24",
        hit: "D",
        guard: "-12",
        damage: "100",
        stan: "150",
        remarks: "クラッシュカウンター対応 (D)\n                                                                                                                                                                S※CA※1段目ヒット時のみ可能\nV※1段目のみ可能",
        type: "normal",
        command: ""
    },
    { name: "ジャンプ弱P", outbreak: "3", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
    { name: "ジャンプ中P", outbreak: "5", persistence: "6", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", type: "jump", command: "" },
    { name: "ジャンプ強P", outbreak: "7", persistence: "4", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
    { name: "ジャンプ弱K", outbreak: "4", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "めくり性能", type: "jump", command: "" },
    { name: "ジャンプ中K", outbreak: "6", persistence: "5", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", type: "jump", command: "" },
    { name: "ジャンプ強K", outbreak: "9", persistence: "4", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
    { name: "ブリザードヒール", outbreak: "23", persistence: "5", rigidity: "18", hit: "1", guard: "-7", damage: "60", stan: "100", remarks: "", type: "unique", command: "→ + 中K" },
    {
        name: "スナイピングキック",
        outbreak: "14",
        persistence: "3",
        rigidity: "19",
        hit: "3",
        guard: "-2",
        damage: "90",
        stan: "150",
        remarks: "クラッシュカウンター対応 (D)",
        type: "unique",
        command: "← + 強K"
    },
    {
        name: "アイシクルスタンプ",
        outbreak: "18",
        persistence: "着地まで",
        rigidity: "着地後4",
        hit: "",
        guard: "",
        damage: "30",
        stan: "70",
        remarks: "",
        type: "unique",
        command: "(ジャンプ中に) ↓ + 中K"
    },
    { name: "フロストスパイク(2段目)", outbreak: "6", persistence: "3", rigidity: "17", hit: "0", guard: "-6", damage: "40", stan: "60", remarks: "", type: "unique", command: "弱P ▶ 中P" },
    {
        name: "フロストスパイク(3段目)",
        outbreak: "8",
        persistence: "",
        rigidity: "",
        hit: "1",
        guard: "-9",
        damage: "60",
        stan: "80",
        remarks: "S※CA※ヒット時のみ可能",
        type: "unique",
        command: "弱P ▶ 中P ▶ 強P"
    },
    { name: "ホワイトアウト(2段目)", outbreak: "8", persistence: "3", rigidity: "23", hit: "-1", guard: "-9", damage: "50", stan: "70", remarks: "", type: "unique", command: "中K ▶ 強P" },
    {
        name: "ホワイトアウト(3段目)",
        outbreak: "10",
        persistence: "",
        rigidity: "",
        hit: "D",
        guard: "-12",
        damage: "60",
        stan: "100",
        remarks: "",
        type: "unique",
        command: "(VスキルⅠ選択時) 中K ▶ 強P ▶ 中P 中K"
    },
    {
        name: "ホワイトプレッシャー",
        outbreak: "14",
        persistence: "1",
        rigidity: "49",
        hit: "D",
        guard: "",
        damage: "100",
        stan: "150",
        remarks: "ヒット時、相手側に氷ダメージ効果",
        type: "unique",
        command: "(VスキルⅡ選択時) 中K ▶ 強P ▶ 中P 中K"
    },
    {
        name: "コールドロー(2段目)",
        outbreak: "4",
        persistence: "2",
        rigidity: "8",
        hit: "3",
        guard: "1",
        damage: "20",
        stan: "70",
        remarks: "",
        type: "unique",
        command: "(中バニティステップ中に) ↓ + 弱K"
    },
    {
        name: "コールドロー(3段目)",
        outbreak: "10",
        persistence: "4",
        rigidity: "24",
        hit: "D",
        guard: "-12",
        damage: "100",
        stan: "150",
        remarks: "S※CA※1段目ヒット時のみ可能\nV※1段目のみ可能",
        type: "unique",
        command: "(中バニティステップ中に) ↓ + 弱K ▶ ↓ + 強K"
    },
    {
        name: "ブライニクル(2段目)",
        outbreak: "4",
        persistence: "2",
        rigidity: "8",
        hit: "3",
        guard: "1",
        damage: "20",
        stan: "70",
        remarks: "",
        type: "unique",
        command: "(中バニティステップ中に) ↓ + 弱K"
    },
    {
        name: "ブライニクル(3段目)",
        outbreak: "8",
        persistence: "3",
        rigidity: "21",
        hit: "D",
        guard: "-2",
        damage: "90",
        stan: "150",
        remarks: "S※CA※ヒット時のみ可能",
        type: "unique",
        command: "(中バニティステップ中に) ↓ + 弱K ▶ ↓ + 強P"
    },
    {
        name: "スノウグレーン(2段目)",
        outbreak: "6",
        persistence: "3",
        rigidity: "13",
        hit: "5",
        guard: "2",
        damage: "60",
        stan: "100",
        remarks: "",
        type: "unique",
        command: "(中バニティステップ中に) ↓ + 中P"
    },
    {
        name: "スノウグレーン(3段目)",
        outbreak: "8",
        persistence: "3",
        rigidity: "19",
        hit: "5",
        guard: "-8",
        damage: "90",
        stan: "150",
        remarks: "S※CA※ヒット時のみ可能",
        type: "unique",
        command: "(中バニティステップ中に) ↓ + 中P ▶ 強P"
    },
    {
        name: "ホワイトスピア(2段目)",
        outbreak: "4",
        persistence: "5",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "40",
        stan: "70",
        remarks: "めくり性能",
        type: "unique",
        command: "(強バニティステップ中に)(ジャンプ中に) 弱K"
    },
    {
        name: "ホワイトスピア(3段目)",
        outbreak: "3",
        persistence: "5",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "70",
        stan: "100",
        remarks: "めくり性能",
        type: "unique",
        command: "(強バニティステップ中に)(ジャンプ中に) 弱K ▶ 中K"
    },
    { name: "プレッシャーリッジ", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "130", stan: "120", remarks: "", type: "throw", command: "" },
    { name: "サブリメーション", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "120", stan: "150", remarks: "", type: "throw", command: "" },
    { name: "アバランシュロック", outbreak: "5", persistence: "2", rigidity: "着地後6", hit: "D", guard: "", damage: "120", stan: "200", remarks: "", type: "throw", command: "" },
    {
        name: "[VS1]インサイドスラッシュ",
        outbreak: "15",
        persistence: "2",
        rigidity: "23",
        hit: "2",
        guard: "-8",
        damage: "50",
        stan: "100",
        remarks: "8F～16F全身当て身判定",
        type: "vsystem",
        command: ""
    },
    {
        name: "[VS1]インサイドスラッシュ(当て身成立時)",
        outbreak: "1",
        persistence: "5",
        rigidity: "31",
        hit: "D",
        guard: "",
        damage: "150",
        stan: "200",
        remarks: "1F～54F 完全無敵",
        type: "vsystem",
        command: ""
    },
    {
        name: "[VS2]グレイシャースルー",
        outbreak: "26",
        persistence: "3",
        rigidity: "47",
        hit: "D",
        guard: "",
        damage: "100",
        stan: "150",
        remarks: "ヒット時、相手側に氷ダメージ効果",
        type: "vsystem",
        command: ""
    },
    {
        name: "ダイヤモンドダスト",
        outbreak: "17",
        persistence: "24",
        rigidity: "全体30",
        hit: "D",
        guard: "32",
        damage: "120",
        stan: "360",
        remarks: "Vゲージタイマー+2000F\n                                                                                                                                                                                発動中ダイヤモンドダストが必殺技に追加\nヒット時、相手側に氷ダメージ効果\n効果中はスタンゲージが回復しない、コーリン側に攻撃をヒットさせる事で解除\nダウン追い打ち可能",
        type: "vsystem",
        command: ""
    },
    {
        name: "サードアイ",
        outbreak: "",
        persistence: "",
        rigidity: "全体33",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "1F～25F 打撃&飛び道具無敵\n                                                発動時スタン値200回復",
        type: "vsystem",
        command: ""
    },
    {
        name: "フロストタッチ・ロー",
        outbreak: "2",
        persistence: "11",
        rigidity: "34",
        hit: "D",
        guard: "",
        damage: "200",
        stan: "250",
        remarks: "下段判定の攻撃を当身可能",
        type: "special",
        command: ""
    },
    {
        name: "フロストタッチ・ミドル",
        outbreak: "2",
        persistence: "11",
        rigidity: "34",
        hit: "D",
        guard: "",
        damage: "180",
        stan: "250",
        remarks: "上、中段判定の地上攻撃を当身可能",
        type: "special",
        command: ""
    },
    {
        name: "フロストタッチ・ハイ",
        outbreak: "2",
        persistence: "11",
        rigidity: "34",
        hit: "D",
        guard: "",
        damage: "180",
        stan: "250",
        remarks: "空中判定の攻撃を当身可能",
        type: "special",
        command: ""
    },
    {
        name: "EXフロストタッチ・ロー",
        outbreak: "1",
        persistence: "12",
        rigidity: "29",
        hit: "D",
        guard: "",
        damage: "260",
        stan: "300",
        remarks: "下段判定の攻撃を当身可能",
        type: "special",
        command: ""
    },
    {
        name: "EXフロストタッチ・ミドル",
        outbreak: "1",
        persistence: "12",
        rigidity: "29",
        hit: "D",
        guard: "",
        damage: "240",
        stan: "300",
        remarks: "上、中段判定の地上攻撃を当身可能",
        type: "special",
        command: ""
    },
    {
        name: "EXフロストタッチ・ハイ",
        outbreak: "1",
        persistence: "12",
        rigidity: "29",
        hit: "D",
        guard: "",
        damage: "240",
        stan: "300",
        remarks: "空中判定の攻撃を当身可能",
        type: "special",
        command: ""
    },
    { name: "弱 パラベラム", outbreak: "9", persistence: "8", rigidity: "17", hit: "2", guard: "-4", damage: "70", stan: "150", remarks: "", type: "special", command: "" },
    { name: "中 パラベラム", outbreak: "14", persistence: "10", rigidity: "21", hit: "4", guard: "-6", damage: "80", stan: "150", remarks: "", type: "special", command: "" },
    { name: "強 パラベラム", outbreak: "18", persistence: "12", rigidity: "31", hit: "D", guard: "-9", damage: "100", stan: "150", remarks: "", type: "special", command: "" },
    {
        name: "EXパラベラム",
        outbreak: "9",
        persistence: "10",
        rigidity: "22",
        hit: "D",
        guard: "-7",
        damage: "100",
        stan: "150",
        remarks: "ガード、空振り時は5段目で動作終了\nS※最終段をバニティステップ、ヘイルストームでキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "弱 バニティステップ",
        outbreak: "",
        persistence: "",
        rigidity: "全体43",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "7F～14F 打撃&飛び道具無敵\n                                                VS※VS2のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "中 バニティステップ",
        outbreak: "",
        persistence: "",
        rigidity: "全体46",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "6F～14F 打撃&飛び道具無敵\n                                                39Fから通常技・特殊技にキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "強 バニティステップ",
        outbreak: "",
        persistence: "",
        rigidity: "着地後4",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "7F～14F 打撃&飛び道具無敵\n                                                ジャンプ中通常技・空中投げを使用可能",
        type: "special",
        command: ""
    },
    {
        name: "弱 EXバニティステップ",
        outbreak: "",
        persistence: "",
        rigidity: "全体32",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "17F～32F 飛び道具無敵\n1F～16F 打撃&飛び道具無敵\n                                                VS※VS2のみキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "中 EXバニティステップ",
        outbreak: "",
        persistence: "",
        rigidity: "全体38",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "15F～45F 飛び道具無敵\n1F～14F 打撃&飛び道具無敵\n                                                33Fから通常技・特殊技にキャンセル可能",
        type: "special",
        command: ""
    },
    {
        name: "強 EXバニティステップ",
        outbreak: "",
        persistence: "",
        rigidity: "着地後4",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "18F～55F 飛び道具無敵\n1F～17F 打撃&飛び道具無敵",
        type: "special",
        command: ""
    },
    { name: "シルバーエッジ", outbreak: "8", persistence: "9", rigidity: "23", hit: "D", guard: "-12", damage: "100", stan: "150", remarks: "1F～11F 飛び道具無敵", type: "special", command: "" },
    { name: "EXシルバーエッジ", outbreak: "5", persistence: "9", rigidity: "18", hit: "D", guard: "-9", damage: "160", stan: "200", remarks: "1F～13F 飛び道具無敵", type: "special", command: "" },
    {
        name: "弱 ヘイルストーム",
        outbreak: "12",
        persistence: "5/着地まで",
        rigidity: "25",
        hit: "D",
        guard: "-8",
        damage: "50",
        stan: "100",
        remarks: "根本・飛び道具部分共に相殺判定",
        type: "special",
        command: ""
    },
    {
        name: "中 ヘイルストーム",
        outbreak: "12",
        persistence: "5/着地まで",
        rigidity: "28",
        hit: "D",
        guard: "-11",
        damage: "50",
        stan: "100",
        remarks: "根本・飛び道具部分共に相殺判定",
        type: "special",
        command: ""
    },
    {
        name: "強 ヘイルストーム",
        outbreak: "12",
        persistence: "5/着地まで",
        rigidity: "28",
        hit: "D",
        guard: "-11",
        damage: "50",
        stan: "100",
        remarks: "根本・飛び道具部分共に相殺判定",
        type: "special",
        command: ""
    },
    {
        name: "EXヘイルストーム",
        outbreak: "12",
        persistence: "5/着地まで",
        rigidity: "25",
        hit: "D",
        guard: "-8",
        damage: "50+100",
        stan: "100+200",
        remarks: "根本・飛び道具部分共に相殺判定\n初段が空中の相手にヒットした場合飛び道具部分のスタン値が50になる",
        type: "special",
        command: ""
    },
    {
        name: "Vダイヤモンドダスト",
        outbreak: "17",
        persistence: "24",
        rigidity: "全体36",
        hit: "D",
        guard: "26",
        damage: "120",
        stan: "360",
        remarks: "Vゲージタイマー2000F消費\n                                                                                                                                                                                ヒット時、相手側に氷ダメージ効果\n効果中はスタンゲージが回復しない、コーリン側に攻撃をヒットさせる事で解除\nダウン追い打ち効果",
        type: "special",
        command: ""
    },
    { name: "フロストタワー", outbreak: "7", persistence: "3", rigidity: "52", hit: "D", guard: "-37", damage: "330", stan: "0", remarks: "1F～9F 完全無敵", type: "ca", command: "" }
];
exports.kolin = kolin;
//# sourceMappingURL=kolin.js.map