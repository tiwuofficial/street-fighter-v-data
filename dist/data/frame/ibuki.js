const ibuki = [
    { name: "立ち弱P", outbreak: "3", persistence: "2", rigidity: "8", hit: "2", guard: "1", damage: "30", stan: "70", remarks: "", command: "" },
    { name: "立ち中P", outbreak: "5", persistence: "3", rigidity: "10", hit: "4", guard: "2", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "立ち強P", outbreak: "12", persistence: "2", rigidity: "19", hit: "0", guard: "-5", damage: "80", stan: "150", remarks: "", command: "" },
    { name: "立ち弱K", outbreak: "4", persistence: "3", rigidity: "9", hit: "0", guard: "-2", damage: "30", stan: "70", remarks: "", command: "" },
    { name: "立ち中K", outbreak: "6", persistence: "2", rigidity: "14", hit: "5", guard: "2", damage: "60", stan: "100", remarks: "", command: "" },
    {
        name: "立ち強K",
        outbreak: "10",
        persistence: "3",
        rigidity: "16(※19)",
        hit: "3",
        guard: "-2",
        damage: "90",
        stan: "150",
        remarks: "クラッシュカウンター対応(+22F)\n                                                                しゃがみの相手にヒットしない\n                                                                                                ※空振り時",
        command: ""
    },
    { name: "しゃがみ弱P", outbreak: "4", persistence: "3", rigidity: "7", hit: "3", guard: "2", damage: "30", stan: "70", remarks: "立ち弱P・しゃがみ弱Pに連打キャンセル可能", command: "" },
    { name: "しゃがみ中P", outbreak: "6", persistence: "3", rigidity: "16", hit: "3", guard: "-1", damage: "60", stan: "100", remarks: "", command: "" },
    {
        name: "しゃがみ強P",
        outbreak: "9",
        persistence: "4",
        rigidity: "16",
        hit: "2",
        guard: "-3",
        damage: "90(※70)",
        stan: "150",
        remarks: "強制立ち効果\n                                                                                                                ※空中ヒット時",
        command: ""
    },
    { name: "しゃがみ弱K", outbreak: "4", persistence: "2", rigidity: "8", hit: "3", guard: "1", damage: "20", stan: "70", remarks: "しゃがみ弱Pに連打キャンセル可能", command: "" },
    { name: "しゃがみ中K", outbreak: "6", persistence: "3", rigidity: "16", hit: "3", guard: "-2", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "しゃがみ強K", outbreak: "8", persistence: "2", rigidity: "24", hit: "D", guard: "-12", damage: "100", stan: "150", remarks: "クラッシュカウンター対応 (D)", command: "" },
    { name: "ジャンプ弱P", outbreak: "3", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", command: "" },
    { name: "ジャンプ弱P(強霞駆け派生時)", outbreak: "4", persistence: "4", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "空中ヒット時ダウン効果", command: "" },
    { name: "ジャンプ中P", outbreak: "5", persistence: "6", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "ジャンプ強P", outbreak: "9", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
    { name: "ジャンプ強P(強霞駆け派生時)", outbreak: "9", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "空中ヒット時ダウン効果", command: "" },
    { name: "ジャンプ弱K", outbreak: "3", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "めくり性能", command: "" },
    { name: "ジャンプ中K", outbreak: "6", persistence: "6", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "めくり性能", command: "" },
    { name: "ジャンプ強K", outbreak: "8", persistence: "4", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
    { name: "揚面", outbreak: "7", persistence: "3", rigidity: "11", hit: "4", guard: "0", damage: "70", stan: "120", remarks: "S※CA※1段目のみ可能", command: "← + 中P" },
    { name: "頭砕き", outbreak: "28", persistence: "2", rigidity: "16", hit: "3", guard: "-2", damage: "70", stan: "100", remarks: "", command: "→ + 中K" },
    { name: "砂斬", outbreak: "7", persistence: "11", rigidity: "14", hit: "-6", guard: "-10", damage: "50", stan: "100", remarks: "", command: "↘ + 中K" },
    { name: "梵鐘蹴り", outbreak: "14", persistence: "4", rigidity: "19", hit: "2", guard: "-3", damage: "90", stan: "150", remarks: "クラッシュカウンター対応 (D)", command: "→ + 強K" },
    { name: "野衾", outbreak: "", persistence: "", rigidity: "", hit: "", guard: "", damage: "", stan: "", remarks: "", command: "(垂直・前ジャンプ中に) +" },
    { name: "震天(2段目)", outbreak: "5", persistence: "3", rigidity: "15", hit: "-5", guard: "-8", damage: "40", stan: "50", remarks: "", command: "弱P ▶ 中P" },
    { name: "震天(3段目)", outbreak: "6", persistence: "3", rigidity: "20", hit: "-4", guard: "-9", damage: "50", stan: "70", remarks: "S※CA※ヒット時のみ可能", command: "弱P ▶ 中P ▶ 強P" },
    { name: "櫓崩し", outbreak: "4", persistence: "2", rigidity: "15", hit: "1", guard: "-2", damage: "30", stan: "50", remarks: "", command: "弱P ▶ 中P ▶ 弱K" },
    { name: "恒河沙(2段目)", outbreak: "7", persistence: "2", rigidity: "23", hit: "D", guard: "-12", damage: "60", stan: "60", remarks: "", command: "中K ▶ ↓ + 強K" },
    {
        name: "恒河沙(3段目)",
        outbreak: "7",
        persistence: "2",
        rigidity: "17",
        hit: "1",
        guard: "-4",
        damage: "40",
        stan: "60",
        remarks: "クラッシュカウンター対応(+15F)\n                                                                しゃがみの相手にヒットしない",
        command: "中K ▶ ↓ + 強K ▶ 強K"
    },
    {
        name: "石楠",
        outbreak: "14",
        persistence: "2",
        rigidity: "23",
        hit: "2",
        guard: "-5",
        damage: "70",
        stan: "100",
        remarks: "クラッシュカウンター対応 (D)",
        command: "(しゃがみ中に) 中P ▶ → + 中K"
    },
    { name: "笹鳴", outbreak: "27", persistence: "2", rigidity: "13", hit: "6", guard: "-2", damage: "70", stan: "100", remarks: "", command: "中P ▶ → + 中K" },
    { name: "飛倉", outbreak: "4", persistence: "6", rigidity: "", hit: "", guard: "", damage: "70", stan: "50", remarks: "", command: "(ジャンプ中に) 弱P ▶ 中K" },
    { name: "蒿雀", outbreak: "5", persistence: "4", rigidity: "", hit: "", guard: "", damage: "50", stan: "80", remarks: "", command: "(ジャンプ中に) 強P ▶ 強K" },
    { name: "闇葛", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "130", stan: "120", remarks: "", command: "" },
    { name: "首折り", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "150", stan: "200", remarks: "", command: "" },
    { name: "翔び猿", outbreak: "5", persistence: "2", rigidity: "着地後6", hit: "D", guard: "", damage: "140", stan: "200", remarks: "", command: "" },
    { name: "[VS1]天雷", outbreak: "15", persistence: "5", rigidity: "20", hit: "D", guard: "-7", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "[VS1]天雷(ボタンホールド)", outbreak: "25", persistence: "7", rigidity: "18", hit: "D", guard: "-2", damage: "80", stan: "150", remarks: "", command: "" },
    {
        name: "[VS2]撒菱",
        outbreak: "78",
        persistence: "240",
        rigidity: "全体102",
        hit: "1",
        guard: "-3",
        damage: "60",
        stan: "0",
        remarks: "ヒット/ガード時に各種苦無(地上)・苦無一気投げ(地上)からキャンセル可能",
        command: ""
    },
    {
        name: "[VS2]撒菱",
        outbreak: "39",
        persistence: "240",
        rigidity: "全体64",
        hit: "0",
        guard: "-4",
        damage: "20",
        stan: "0",
        remarks: "コマンド入力時のボタン強度によって設置位置が変化\nヒット/ガード時に各種苦無(地上)・苦無一気投げ(地上)からキャンセル可能",
        command: ""
    },
    { name: "風魔手裏剣・白雨", outbreak: "1+6", persistence: "", rigidity: "全体43", hit: "8", guard: "-4", damage: "40 + 40", stan: "80 + 80", remarks: "", command: "" },
    { name: "風魔手裏剣・黒風", outbreak: "1+6", persistence: "", rigidity: "全体51", hit: "0", guard: "-6", damage: "50 + 50", stan: "80 + 80", remarks: "しゃがみの相手にヒットしない", command: "" },
    {
        name: "花霞",
        outbreak: "17",
        persistence: "4",
        rigidity: "全体52",
        hit: "D",
        guard: "-2",
        damage: "60",
        stan: "0",
        remarks: "1F～13F, 38F～41F 打撃&飛び道具無敵\n14F～37F 完全無敵\n                                                発動時スタン値200回復",
        command: ""
    },
    { name: "弱 風斬り", outbreak: "3", persistence: "13", rigidity: "34", hit: "D", guard: "-27", damage: "120(※70)", stan: "150", remarks: "CA※2段目のみ可能\n※最終段のみヒット時", command: "" },
    { name: "中 風斬り", outbreak: "4", persistence: "13", rigidity: "34", hit: "D", guard: "-27", damage: "120(※70)", stan: "150", remarks: "CA※2段目のみ可能\n※最終段のみヒット時", command: "" },
    { name: "強 風斬り", outbreak: "5", persistence: "13", rigidity: "34", hit: "D", guard: "-27", damage: "120(※70)", stan: "150", remarks: "CA※2段目のみ可能\n※最終段のみヒット時", command: "" },
    {
        name: "EX 風斬り",
        outbreak: "4",
        persistence: "12(※13)",
        rigidity: "37",
        hit: "D",
        guard: "-31",
        damage: "140",
        stan: "200",
        remarks: "1F～8F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)\n2段目の持続3F目までに相手にヒットした場合は追加動作に移行\nS※※ヒット時は攻撃持続終了後7～17FをEX空中苦無、空中苦無一気投げでキャンセル可能\n※ガード/空振り時",
        command: ""
    },
    { name: "弱 雷打", outbreak: "7", persistence: "2", rigidity: "30", hit: "D", guard: "-12", damage: "100", stan: "200", remarks: "", command: "" },
    { name: "中 雷打", outbreak: "7", persistence: "2", rigidity: "30", hit: "D", guard: "-12", damage: "110", stan: "200", remarks: "", command: "" },
    { name: "強 雷打", outbreak: "7", persistence: "2", rigidity: "30", hit: "D", guard: "-12", damage: "120", stan: "200", remarks: "", command: "" },
    { name: "EX 雷打", outbreak: "7", persistence: "3", rigidity: "27", hit: "D", guard: "-11", damage: "150", stan: "200", remarks: "1F～9F 飛び道具無敵", command: "" },
    { name: "弱 苦無", outbreak: "10", persistence: "11", rigidity: "全体33", hit: "2", guard: "-2", damage: "40", stan: "50", remarks: "VS※VS2のみキャンセル可能", command: "" },
    { name: "中 苦無", outbreak: "10", persistence: "16", rigidity: "全体33", hit: "2", guard: "-2", damage: "40", stan: "50", remarks: "VS※VS2のみキャンセル可能", command: "" },
    { name: "強 苦無", outbreak: "10", persistence: "21", rigidity: "全体33", hit: "2", guard: "-2", damage: "40", stan: "50", remarks: "VS※VS2のみキャンセル可能", command: "" },
    {
        name: "EX 弱 苦無",
        outbreak: "10",
        persistence: "14",
        rigidity: "全体44",
        hit: "D",
        guard: "14",
        damage: "60",
        stan: "100",
        remarks: "硬直差は密着時のもの\nVS※VS2のみキャンセル可能",
        command: ""
    },
    {
        name: "EX 中 苦無",
        outbreak: "10",
        persistence: "18",
        rigidity: "全体44",
        hit: "-4",
        guard: "-2",
        damage: "60",
        stan: "100",
        remarks: "硬直差は密着時のもの\n二段目の爆発が当たらない\nVS※VS2のみキャンセル可能",
        command: ""
    },
    {
        name: "EX 強 苦無",
        outbreak: "10",
        persistence: "22",
        rigidity: "全体44",
        hit: "-4",
        guard: "-2",
        damage: "60",
        stan: "100",
        remarks: "硬直差は密着時のもの\n二段目の爆発が当たらない\nVS※VS2のみキャンセル可能",
        command: ""
    },
    { name: "空中苦無", outbreak: "7", persistence: "", rigidity: "着地後13", hit: "", guard: "", damage: "40", stan: "50", remarks: "", command: "" },
    { name: "EX 空中苦無", outbreak: "7", persistence: "-/3", rigidity: "着地後13", hit: "", guard: "", damage: "70", stan: "100", remarks: "", command: "" },
    {
        name: "苦無一気投げ",
        outbreak: "11",
        persistence: "",
        rigidity: "全体37",
        hit: "D",
        guard: "※9",
        damage: "※120",
        stan: "※120",
        remarks: "苦無の所持数でヒット数が変化(1～6ヒット)\nS※苦無・EX苦無以外の必殺技でキャンセル可能\nVS※VS2のみキャンセル可能\n※苦無所持数が6本の時の数値(所持数が一本減るたびに硬直差-2F,ダメージ-20、スタン-20、ヒット時ゲージ増加量-10)\nVキャン時は6→5本の場合だけ硬直差-3F、残りは硬直差-2F",
        command: ""
    },
    {
        name: "空中苦無一気投げ",
        outbreak: "16",
        persistence: "",
        rigidity: "着地後13",
        hit: "D",
        guard: "",
        damage: "※120",
        stan: "※120",
        remarks: "苦無の所持数でヒット数が変化(1～6ヒット)\n※苦無所持数が6本の時の数値(所持数が一本減るたびにダメージ-20、スタン-20、ヒット時ゲージ増加量-10)",
        command: ""
    },
    { name: "弱 霞駆け", outbreak: "", persistence: "", rigidity: "全体23", hit: "", guard: "", damage: "", stan: "", remarks: "", command: "" },
    { name: "中 霞駆け", outbreak: "", persistence: "", rigidity: "全体26", hit: "", guard: "", damage: "", stan: "", remarks: "", command: "" },
    { name: "強 霞駆け", outbreak: "", persistence: "", rigidity: "全体57", hit: "", guard: "", damage: "", stan: "", remarks: "動作途中から通常技・空中苦無・野衾を出せる", command: "" },
    {
        name: "苦無補充",
        outbreak: "",
        persistence: "",
        rigidity: "※全体51",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "ボタンホールドで補充本数増加(1～6本)\n※最小時の値。最大補充時は109F",
        command: ""
    },
    {
        name: "EX 苦無補充",
        outbreak: "",
        persistence: "",
        rigidity: "※全体51",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "ボタンホールドで補充本数増加(3～6本)\n※最小時の値。最大補充時は87F",
        command: ""
    },
    { name: "花鳥風月", outbreak: "1+4", persistence: "17", rigidity: "17", hit: "D", guard: "-20", damage: "340", stan: "0", remarks: "1F～6F 完全無敵", command: "" }
];
export { ibuki };
//# sourceMappingURL=ibuki.js.map