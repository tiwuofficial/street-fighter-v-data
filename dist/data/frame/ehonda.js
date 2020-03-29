const ehonda = [
    { name: "立ち弱P", outbreak: "5", persistence: "3", rigidity: "9", hit: "5", guard: "3", damage: "40", stan: "90", remarks: "", command: "" },
    { name: "立ち中P", outbreak: "7", persistence: "4", rigidity: "13", hit: "5", guard: "2", damage: "70", stan: "120", remarks: "", command: "" },
    {
        name: "立ち強P",
        outbreak: "8",
        persistence: "6",
        rigidity: "22",
        hit: "-2",
        guard: "-7",
        damage: "90(※80)",
        stan: "150",
        remarks: "S※CA※持続の3F目までキャンセル可能\n※持続4F目以降",
        command: ""
    },
    { name: "立ち弱K", outbreak: "4", persistence: "3", rigidity: "8", hit: "4", guard: "2", damage: "40", stan: "90", remarks: "", command: "" },
    { name: "立ち中K", outbreak: "6", persistence: "2", rigidity: "14", hit: "7", guard: "4", damage: "60", stan: "120", remarks: "強制立ち効果", command: "" },
    {
        name: "立ち強K",
        outbreak: "8 ",
        persistence: "5",
        rigidity: "21",
        hit: "0/5",
        guard: "-4/2",
        damage: "90(※80)",
        stan: "150",
        remarks: "初段ヒット時のみ強制立ち効果\n                2段目はしゃがみの相手にヒットしない\n                                                                                                ※2段目のみヒット時",
        command: ""
    },
    {
        name: "しゃがみ弱P",
        outbreak: "5(※3)",
        persistence: "3",
        rigidity: "9",
        hit: "5",
        guard: "2",
        damage: "40",
        stan: "90",
        remarks: "連打キャンセル対応\n                                                                                                                                ※連打キャンセル時",
        command: ""
    },
    { name: "しゃがみ中P", outbreak: "6", persistence: "3", rigidity: "14", hit: "4", guard: "2", damage: "60", stan: "120", remarks: "", command: "" },
    { name: "しゃがみ強P", outbreak: "10", persistence: "2", rigidity: "21", hit: "4", guard: "-5", damage: "100", stan: "150", remarks: "クラッシュカウンター対応(+25F)", command: "" },
    {
        name: "しゃがみ弱K",
        outbreak: "4",
        persistence: "2",
        rigidity: "13",
        hit: "3",
        guard: "0",
        damage: "30",
        stan: "90",
        remarks: "しゃがみ弱Pに連打キャンセル可\nS※百裂張り手のみキャンセル可能",
        command: ""
    },
    { name: "しゃがみ中K", outbreak: "7", persistence: "3", rigidity: "14", hit: "4", guard: "-2", damage: "60", stan: "120", remarks: "", command: "" },
    {
        name: "しゃがみ強K",
        outbreak: "7",
        persistence: "4",
        rigidity: "17",
        hit: "D",
        guard: "-9",
        damage: "100",
        stan: "150",
        remarks: "クラッシュカウンター対応(D)\n                                                                                                                                                                V※表側のみキャンセル可能",
        command: ""
    },
    { name: "ジャンプ弱P", outbreak: "4", persistence: "5", rigidity: "", hit: "", guard: "", damage: "50", stan: "90", remarks: "", command: "" },
    { name: "ジャンプ中P", outbreak: "6", persistence: "7", rigidity: "", hit: "", guard: "", damage: "70", stan: "120", remarks: "", command: "" },
    { name: "ジャンプ強P", outbreak: "7", persistence: "3", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
    { name: "垂直ジャンプ強P", outbreak: "10", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "レバー入力で前後移動可能", command: "" },
    { name: "ジャンプ弱K", outbreak: "4", persistence: "9", rigidity: "", hit: "", guard: "", damage: "50", stan: "90", remarks: "", command: "" },
    { name: "ジャンプ中K", outbreak: "6", persistence: "4", rigidity: "", hit: "", guard: "", damage: "70", stan: "120", remarks: "", command: "" },
    { name: "ジャンプ強K", outbreak: "9", persistence: "6", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
    { name: "払い蹴り", outbreak: "12", persistence: "3", rigidity: "24", hit: "2", guard: "-7", damage: "80", stan: "150", remarks: "クラッシュカウンター対応(+20F)", command: "→ + 強K" },
    {
        name: "力足",
        outbreak: "20",
        persistence: "6",
        rigidity: "16",
        hit: "5",
        guard: "2",
        damage: "90",
        stan: "120",
        remarks: "ダウン追い討ち判定あり\nS※12F～攻撃判定発生までキャンセル可能",
        command: "↘ + 強K"
    },
    { name: "フライングスモウプレス", outbreak: "12", persistence: "9", rigidity: "", hit: "", guard: "", damage: "70", stan: "120", remarks: "", command: "(前ジャンプ中に) ↓ + 中K" },
    { name: "地鎮", outbreak: "20", persistence: "6", rigidity: "16", hit: "5", guard: "2", damage: "70", stan: "100", remarks: "S※12F～攻撃判定発生までキャンセル可能", command: "中P ▶ ↘ + 強K" },
    { name: "連ね張り手", outbreak: "7", persistence: "4", rigidity: "19", hit: "D", guard: "-6", damage: "50", stan: "100", remarks: "S※VS※ヒット時のみ可能", command: "弱P ▶ 中P" },
    { name: "開手", outbreak: "13", persistence: "4", rigidity: "24", hit: "D", guard: "", damage: "70", stan: "120", remarks: "", command: "弱P ▶ 中P ▶ 中P 中K" },
    { name: "さば折り", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "130", stan: "170", remarks: "", command: "" },
    { name: "俵投げ", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "140", stan: "170", remarks: "", command: "" },
    { name: "[VS1]猫だまし", outbreak: "15", persistence: "4", rigidity: "24", hit: "3", guard: "-6", damage: "60", stan: "120", remarks: "", command: "" },
    {
        name: "[VS2]肩屋入り",
        outbreak: "",
        persistence: "",
        rigidity: "全体50",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "発動後一回だけ百裂張り手が性質変化\nパラメータ変化・Vトリガーキャンセル可能な通常技/払い蹴り/力足/地鎮からキャンセル可能になる",
        command: ""
    },
    {
        name: "鬼瓦",
        outbreak: "1",
        persistence: "",
        rigidity: "5",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "Vゲージタイマー+3000F\n                                                                                                                                                                                専用技:「鬼大角」「鬼無双」が使用可能になる",
        command: ""
    },
    {
        name: "雷電砲",
        outbreak: "17",
        persistence: "2",
        rigidity: "24",
        hit: "D",
        guard: "-2",
        damage: "60",
        stan: "0",
        remarks: "1F～30F 打撃無敵\n                                                発動時スタン値200回復",
        command: ""
    },
    {
        name: "弱 スーパー頭突き",
        outbreak: "10",
        persistence: "17",
        rigidity: "10+着地後14",
        hit: "D",
        guard: "-4",
        damage: "120(※100)",
        stan: "180(※150)",
        remarks: "CA※根元のみ可能\n※持続判定部分",
        command: ""
    },
    {
        name: "中 スーパー頭突き",
        outbreak: "8",
        persistence: "22",
        rigidity: "9+着地後14",
        hit: "D",
        guard: "-7",
        damage: "140(※110)",
        stan: "180(※150)",
        remarks: "CA※根元のみ可能\n※持続判定部分",
        command: ""
    },
    {
        name: "強 スーパー頭突き",
        outbreak: "12",
        persistence: "28",
        rigidity: "11+着地後16",
        hit: "D",
        guard: "-12",
        damage: "160(※120)",
        stan: "180(※150)",
        remarks: "1F～14F 空中判定の攻撃に対して上半身が無敵\nCA※根元のみ可能\n※持続判定部分",
        command: ""
    },
    {
        name: "EX スーパー頭突き",
        outbreak: "7",
        persistence: "25",
        rigidity: "9+着地後23",
        hit: "D",
        guard: "-26",
        damage: "160(※130)",
        stan: "200(※180)",
        remarks: "3F～攻撃持続終了まで アーマー判定\n※持続判定部分",
        command: ""
    },
    { name: "弱 百裂張り手", outbreak: "7", persistence: "8", rigidity: "14", hit: "3", guard: "2", damage: "100", stan: "160", remarks: "V※CA※2段目のみ可能\nS※鬼大角でキャンセル可能", command: "" },
    { name: "中 百裂張り手", outbreak: "17", persistence: "10", rigidity: "14", hit: "3", guard: "1", damage: "110", stan: "170", remarks: "V※CA※3段目のみ可能\nS※鬼大角でキャンセル可能", command: "" },
    { name: "強 百裂張り手", outbreak: "19", persistence: "14", rigidity: "15", hit: "2", guard: "-2", damage: "120", stan: "180", remarks: "V※CA※3段目のみ可能\nS※鬼大角でキャンセル可能", command: "" },
    {
        name: "弱 百裂張り手(VS2版)",
        outbreak: "7",
        persistence: "8",
        rigidity: "14",
        hit: "4",
        guard: "2",
        damage: "110",
        stan: "170",
        remarks: "V※CA※2段目のみ可能\nS※鬼大角でキャンセル可能",
        command: ""
    },
    {
        name: "中 百裂張り手(VS2版)",
        outbreak: "17",
        persistence: "10",
        rigidity: "14",
        hit: "4",
        guard: "1",
        damage: "120",
        stan: "180",
        remarks: "V※CA※3段目のみ可能\nS※鬼大角でキャンセル可能",
        command: ""
    },
    {
        name: "強 百裂張り手(VS2版)",
        outbreak: "19",
        persistence: "14",
        rigidity: "15",
        hit: "4",
        guard: "-2",
        damage: "130",
        stan: "190",
        remarks: "V※CA※3段目のみ可能\nS※鬼大角でキャンセル可能",
        command: ""
    },
    { name: "EX 百裂張り手", outbreak: "16", persistence: "14", rigidity: "15", hit: "4", guard: "-2", damage: "100", stan: "150", remarks: "V※最終段のみ可能\nS※鬼大角でキャンセル可能", command: "" },
    {
        name: "EX 百裂張り手(VS2版)",
        outbreak: "16",
        persistence: "14",
        rigidity: "15",
        hit: "6",
        guard: "-2",
        damage: "110",
        stan: "160",
        remarks: "V※最終段のみ可能\nS※鬼大角でキャンセル可能",
        command: ""
    },
    {
        name: "弱 スーパー百貫落とし",
        outbreak: "11",
        persistence: "9",
        rigidity: "着地後24",
        hit: "D",
        guard: "-2",
        damage: "120(※100)",
        stan: "180(※160)",
        remarks: "※下降部分のみヒットした場合\n硬直差はリュウの立ち状態にガードさせた場合のもの",
        command: ""
    },
    {
        name: "中 スーパー百貫落とし",
        outbreak: "13",
        persistence: "10",
        rigidity: "着地後24",
        hit: "D",
        guard: "-2",
        damage: "120(※100)",
        stan: "180(※160)",
        remarks: "※下降部分のみヒットした場合\n硬直差はリュウの立ち状態にガードさせた場合のもの",
        command: ""
    },
    {
        name: "強 スーパー百貫落とし",
        outbreak: "16",
        persistence: "16",
        rigidity: "着地後24",
        hit: "D",
        guard: "-2",
        damage: "120(※100)",
        stan: "180(※160)",
        remarks: "※下降部分のみヒットした場合\n硬直差はリュウの立ち状態にガードさせた場合のもの",
        command: ""
    },
    {
        name: "スーパー百貫落とし(めくり)",
        outbreak: "",
        persistence: "",
        rigidity: "",
        hit: "D",
        guard: "-4",
        damage: "80",
        stan: "120",
        remarks: "硬直差はリュウの立ち状態にガードさせた場合のもの",
        command: ""
    },
    {
        name: "EX スーパー百貫落とし",
        outbreak: "8",
        persistence: "18",
        rigidity: "着地後19",
        hit: "D",
        guard: "5",
        damage: "160(※140)",
        stan: "200(※180)",
        remarks: "1F～20F 投げ無敵\n                                                ※下降部分のみヒットした場合\n上昇中前後移動可能\n硬直差はリュウの立ち状態にガードさせた場合のもの",
        command: ""
    },
    { name: "EX スーパー百貫落とし(めくり)", outbreak: "", persistence: "", rigidity: "", hit: "D", guard: "-2", damage: "100", stan: "150", remarks: "", command: "" },
    { name: "弱 大銀杏投げ", outbreak: "7", persistence: "2", rigidity: "60", hit: "D", guard: "", damage: "140", stan: "180", remarks: "", command: "" },
    { name: "中 大銀杏投げ", outbreak: "7", persistence: "2", rigidity: "60", hit: "D", guard: "", damage: "160", stan: "180", remarks: "", command: "" },
    { name: "強 大銀杏投げ", outbreak: "7", persistence: "2", rigidity: "60", hit: "D", guard: "", damage: "180", stan: "180", remarks: "", command: "" },
    { name: "EX 大銀杏投げ", outbreak: "5", persistence: "2", rigidity: "60", hit: "D", guard: "", damage: "200", stan: "200", remarks: "", command: "" },
    {
        name: "V鬼大角",
        outbreak: "10",
        persistence: "24",
        rigidity: "10+着地後10",
        hit: "D",
        guard: "-4",
        damage: "120(※100)",
        stan: "200",
        remarks: "Vゲージタイマー1000F消費\n                                                                                                                                                                                通常技・特殊技・百裂張り手からキャンセル可能\nS※ヒット時のみ鬼無双でキャンセル可能\nCA※根元のみ可能\n50Fまでボタンホールド可能(50F以上ホールドすると最大ホールド版に派生)\n4F～攻撃判定発生2F前までアーマー判定\n※持続判定部分",
        command: ""
    },
    {
        name: "V鬼大角(最大ホールド)",
        outbreak: "60",
        persistence: "24",
        rigidity: "10+着地後10",
        hit: "D",
        guard: "GB",
        damage: "180(※160)",
        stan: "200",
        remarks: "Vゲージタイマー1000F消費\n                                                                                                                                                                                通常技・特殊技・百裂張り手からキャンセル可能\nS※ヒット時のみ鬼無双でキャンセル可能\nCA※根元のみ可能\nガードブレイク時+27F\n4F～根元部分の攻撃持続終了までアーマー判定\n根元判定の持続終了から持続判定の持続終了後1フレーム目まで飛び道具無敵\n※持続判定部分",
        command: ""
    },
    {
        name: "V鬼無双",
        outbreak: "3",
        persistence: "24",
        rigidity: "10+着地後10",
        hit: "D",
        guard: "",
        damage: "120",
        stan: "200",
        remarks: "Vゲージタイマー1200F消費\n                                                                                                                                                                                鬼大角ヒット時のみ派生可能\nCA※根元のみ可能",
        command: ""
    },
    { name: "神ヶ島", outbreak: "9", persistence: "29", rigidity: "9+着地後28", hit: "D", guard: "-26", damage: "340", stan: "0", remarks: "14F～36F 飛び道具無敵\n1F～13F 完全無敵", command: "" }
];
export { ehonda };
//# sourceMappingURL=ehonda.js.map