"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cammy = [
    {
        name: "立ち弱P",
        outbreak: "4",
        persistence: "2",
        rigidity: "6",
        hit: "4",
        guard: "2",
        damage: "30",
        stan: "70",
        remarks: "連打キャンセル対応\n                                                                                                                                VS※VS2のみキャンセル可能",
        command: ""
    },
    { name: "立ち中P", outbreak: "6", persistence: "3", rigidity: "9", hit: "7", guard: "3", damage: "60", stan: "100", remarks: "VS※VS2のみキャンセル可能", command: "" },
    { name: "立ち強P", outbreak: "6", persistence: "2", rigidity: "20", hit: "1", guard: "-3", damage: "80", stan: "150", remarks: "VS※VS2のみキャンセル可能", command: "" },
    { name: "立ち弱K", outbreak: "4", persistence: "2", rigidity: "7", hit: "2", guard: "1", damage: "40", stan: "70", remarks: "", command: "" },
    { name: "立ち中K", outbreak: "8", persistence: "3", rigidity: "15", hit: "2", guard: "-2", damage: "60", stan: "100", remarks: "", command: "" },
    {
        name: "立ち強K",
        outbreak: "9",
        persistence: "4",
        rigidity: "17(※20)",
        hit: "4",
        guard: "-2",
        damage: "90",
        stan: "150",
        remarks: "クラッシュカウンター対応(+20F)\n                                                                しゃがみの相手にヒットしない\n                                                                                                ※空振り時",
        command: ""
    },
    {
        name: "しゃがみ弱P",
        outbreak: "3",
        persistence: "3",
        rigidity: "6",
        hit: "4",
        guard: "0",
        damage: "20",
        stan: "70",
        remarks: "連打キャンセル対応\n                                                                                                                                VS※VS2のみキャンセル可能",
        command: ""
    },
    { name: "しゃがみ中P", outbreak: "5", persistence: "3", rigidity: "10(※12)", hit: "5", guard: "1", damage: "60", stan: "100", remarks: "※空振り時\nVS※VS2のみキャンセル可能", command: "" },
    { name: "しゃがみ強P", outbreak: "9", persistence: "3", rigidity: "20", hit: "1", guard: "-2", damage: "80", stan: "150", remarks: "", command: "" },
    { name: "しゃがみ弱K", outbreak: "4", persistence: "2", rigidity: "9", hit: "1", guard: "-1", damage: "20", stan: "70", remarks: "連打キャンセル対応", command: "" },
    { name: "しゃがみ中K", outbreak: "7", persistence: "2", rigidity: "14", hit: "0", guard: "-3", damage: "50", stan: "100", remarks: "VS※VS2のみキャンセル可能", command: "" },
    { name: "しゃがみ強K", outbreak: "7", persistence: "2", rigidity: "22", hit: "D", guard: "-12", damage: "90", stan: "150", remarks: "クラッシュカウンター対応 (D)", command: "" },
    { name: "ジャンプ弱P", outbreak: "3", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", command: "" },
    { name: "ジャンプ中P", outbreak: "5", persistence: "5", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", command: "" },
    { name: "ジャンプ強P", outbreak: "7", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
    { name: "ジャンプ弱K", outbreak: "3", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "めくり性能", command: "" },
    { name: "ジャンプ中K", outbreak: "6", persistence: "5", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", command: "" },
    { name: "ジャンプ強K", outbreak: "7", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
    {
        name: "リフトアッパー",
        outbreak: "4",
        persistence: "4",
        rigidity: "14",
        hit: "4",
        guard: "1",
        damage: "60",
        stan: "100",
        remarks: "強制立ち効果\n                                                                                                                VS※VS2のみキャンセル可能",
        command: "← + 中P"
    },
    { name: "ニーバレット", outbreak: "12", persistence: "4", rigidity: "17", hit: "5", guard: "-2", damage: "80", stan: "150", remarks: "空中ヒット時吹き飛びやられ", command: "→ + 強K" },
    {
        name: "リフトコンビネーション",
        outbreak: "9",
        persistence: "4",
        rigidity: "27",
        hit: "D",
        guard: "-12",
        damage: "80",
        stan: "100",
        remarks: "しゃがみの相手にヒットしない\n                                                                                                S※CA※VS※ヒット時のみ可能\nVS※VS2のみキャンセル可能",
        command: "← + 中P ▶ 強K"
    },
    { name: "ジャイロニッパー", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "130", stan: "120", remarks: "", command: "" },
    { name: "デルタスルー", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "150", stan: "200", remarks: "", command: "" },
    { name: "ネックスパイラル", outbreak: "5", persistence: "2", rigidity: "着地後6", hit: "", guard: "", damage: "150", stan: "200", remarks: "", command: "" },
    {
        name: "[VS1]アクセルスピンナックル",
        outbreak: "35",
        persistence: "2",
        rigidity: "13",
        hit: "7",
        guard: "2",
        damage: "60",
        stan: "100",
        remarks: "強制立ち効果\n                                                                11F 投げ無敵\n25F～28F 飛び道具無敵\n12F～24F 飛び道具&投げ無敵",
        command: ""
    },
    {
        name: "[VS1]アクセルスピンナックル(裏回り時)",
        outbreak: "36",
        persistence: "2",
        rigidity: "16",
        hit: "7",
        guard: "2",
        damage: "60",
        stan: "100",
        remarks: "強制立ち効果\n                                                                11F 投げ無敵\n25F～28F 飛び道具無敵\n12F～24F 飛び道具&投げ無敵",
        command: ""
    },
    {
        name: "[VS2]スピニングアックス",
        outbreak: "15",
        persistence: "5",
        rigidity: "13+着地後15",
        hit: "D",
        guard: "-6",
        damage: "80",
        stan: "120",
        remarks: "クラッシュカウンター対応 (D)",
        command: ""
    },
    {
        name: "デルタドライブ",
        outbreak: "1",
        persistence: "",
        rigidity: "8",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "Vゲージタイマー+3000F\n                                                                                                                                                                                発動中対応した必殺技の性能が強化される",
        command: ""
    },
    {
        name: "ストライクバック",
        outbreak: "17",
        persistence: "2",
        rigidity: "24",
        hit: "2",
        guard: "-6",
        damage: "60",
        stan: "0",
        remarks: "1F～8F 打撃&飛び道具無敵\n                                                発動時スタン値200回復",
        command: ""
    },
    {
        name: "弱 スパイラルアロー",
        outbreak: "7",
        persistence: "11",
        rigidity: "25",
        hit: "D",
        guard: "-12",
        damage: "70",
        stan: "120",
        remarks: "9F～23F 投げ無敵\n                                                CA※根元ヒット時のみ可能",
        command: ""
    },
    {
        name: "中 スパイラルアロー",
        outbreak: "7",
        persistence: "13",
        rigidity: "24",
        hit: "D",
        guard: "-15",
        damage: "80",
        stan: "120",
        remarks: "9F～25F 投げ無敵\n                                                CA※根元ヒット時のみ可能",
        command: ""
    },
    {
        name: "強 スパイラルアロー",
        outbreak: "7",
        persistence: "14",
        rigidity: "26",
        hit: "D",
        guard: "-12",
        damage: "100",
        stan: "120",
        remarks: "9F～27F 投げ無敵\n                                                CA※1段目のみ可能",
        command: ""
    },
    {
        name: "Vスパイラルアロー",
        outbreak: "7",
        persistence: "12",
        rigidity: "23",
        hit: "D",
        guard: "-13",
        damage: "120",
        stan: "150",
        remarks: "Vゲージタイマー1500F消費\n                                                                                                                                16F～22F 投げ無敵\n5F～15F 飛び道具&投げ無敵",
        command: ""
    },
    {
        name: "EX スパイラルアロー",
        outbreak: "7",
        persistence: "12",
        rigidity: "23",
        hit: "D",
        guard: "-11",
        damage: "140",
        stan: "200",
        remarks: "16F～25F 投げ無敵\n1F～2F 飛び道具無敵\n3F～15F 飛び道具&投げ無敵",
        command: ""
    },
    {
        name: "弱 キャノンスパイク",
        outbreak: "4",
        persistence: "11",
        rigidity: "23+着地後14",
        hit: "D",
        guard: "-37",
        damage: "120(※80)",
        stan: "150",
        remarks: "1F～6F 投げ無敵\n                1F～6F 空中判定の攻撃に対して無敵\n                                動作中常に被カウンター判定\n※持続3F目以降",
        command: ""
    },
    {
        name: "中 キャノンスパイク",
        outbreak: "5",
        persistence: "11",
        rigidity: "25+着地後14",
        hit: "D",
        guard: "-37",
        damage: "120(※80)",
        stan: "150",
        remarks: "1F～6F 空中判定の攻撃に対して無敵\n                                動作中常に被カウンター判定\n※持続3F目以降",
        command: ""
    },
    {
        name: "強 キャノンスパイク",
        outbreak: "6",
        persistence: "11",
        rigidity: "25+着地後14",
        hit: "D",
        guard: "-37",
        damage: "120(※80)",
        stan: "150",
        remarks: "3F～6F 打撃&飛び道具無敵\n                                                動作中常に被カウンター判定\n※持続3F目以降",
        command: ""
    },
    {
        name: "Vキャノンスパイク",
        outbreak: "3",
        persistence: "12",
        rigidity: "25+着地後16",
        hit: "D",
        guard: "-37",
        damage: "160",
        stan: "200",
        remarks: "Vゲージタイマー1500F消費\n                                                                                                                                1F～7F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)\nCA※1段目のみ可能\nS※ヒット時Vキャノンストライクでキャンセル可",
        command: ""
    },
    {
        name: "Vキャノンスパイク(持続ヒット時)",
        outbreak: "",
        persistence: "10",
        rigidity: "25+着地後16",
        hit: "D",
        guard: "-37",
        damage: "150",
        stan: "120",
        remarks: "Vゲージタイマー1500F消費\n                                                                                                                                1F～7F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)",
        command: ""
    },
    {
        name: "EX キャノンスパイク",
        outbreak: "3",
        persistence: "11",
        rigidity: "24+着地後14",
        hit: "D",
        guard: "-37",
        damage: "160",
        stan: "200",
        remarks: "1F～10F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)",
        command: ""
    },
    { name: "キャノンストライク", outbreak: "13", persistence: "10", rigidity: "着地後9", hit: "0", guard: "-6", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "Vキャノンストライク", outbreak: "13", persistence: "11", rigidity: "着地後9", hit: "6", guard: "4", damage: "80", stan: "100", remarks: "Vゲージタイマー1500F消費", command: "" },
    { name: "EX キャノンストライク", outbreak: "13", persistence: "11", rigidity: "着地後13", hit: "D", guard: "-5", damage: "80", stan: "100", remarks: "", command: "" },
    { name: "フーリガンコンビネーション", outbreak: "", persistence: "", rigidity: "", hit: "", guard: "", damage: "0", stan: "0", remarks: "", command: "" },
    { name: "EX フーリガンコンビネーション", outbreak: "", persistence: "", rigidity: "", hit: "", guard: "", damage: "0", stan: "0", remarks: "1F～13F 飛び道具&投げ無敵", command: "" },
    { name: "派生キャノンストライク", outbreak: "15", persistence: "11", rigidity: "着地後9", hit: "", guard: "", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "V派生キャノンストライク", outbreak: "13", persistence: "11", rigidity: "着地後9", hit: "", guard: "", damage: "80", stan: "100", remarks: "Vゲージタイマー1500F消費", command: "" },
    { name: "EX 派生キャノンストライク", outbreak: "13", persistence: "11", rigidity: "着地後9", hit: "D", guard: "-2", damage: "80", stan: "100", remarks: "", command: "" },
    { name: "レイザーエッジスライサー", outbreak: "", persistence: "9", rigidity: "13", hit: "D", guard: "-2", damage: "100", stan: "150", remarks: "", command: "" },
    { name: "EX レイザーエッジスライサー", outbreak: "", persistence: "9", rigidity: "13", hit: "D", guard: "3", damage: "150", stan: "200", remarks: "", command: "" },
    { name: "フェイタルレッグツイスター", outbreak: "4", persistence: "2", rigidity: "着地後10", hit: "D", guard: "", damage: "150", stan: "250", remarks: "", command: "" },
    { name: "クロスシザースプレッシャー", outbreak: "4", persistence: "2", rigidity: "着地後10", hit: "D", guard: "", damage: "150", stan: "250", remarks: "", command: "" },
    {
        name: "クロススティンガーアサルト",
        outbreak: "1+2",
        persistence: "9",
        rigidity: "着地後39",
        hit: "D",
        guard: "-30",
        damage: "330",
        stan: "0",
        remarks: "3F～11F 飛び道具無敵\n1F～2F 完全無敵",
        command: ""
    }
];
exports.cammy = cammy;
//# sourceMappingURL=cammy.js.map