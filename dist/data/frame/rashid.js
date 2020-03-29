const rashid = [
    { name: "立ち弱P", outbreak: "4", persistence: "2", rigidity: "7", hit: "4", guard: "3", damage: "30", stan: "70", remarks: "連打キャンセル対応", command: "" },
    { name: "立ち中P", outbreak: "5", persistence: "2", rigidity: "14", hit: "6", guard: "3", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "立ち強P", outbreak: "8", persistence: "2", rigidity: "19", hit: "2", guard: "-3", damage: "80", stan: "150", remarks: "クラッシュカウンター対応(+17F)", command: "" },
    { name: "立ち弱K", outbreak: "3", persistence: "3", rigidity: "9", hit: "2", guard: "1", damage: "30", stan: "70", remarks: "", command: "" },
    { name: "立ち中K", outbreak: "8", persistence: "3", rigidity: "17", hit: "1", guard: "-4", damage: "60", stan: "100", remarks: "", command: "" },
    { name: "立ち強K", outbreak: "16", persistence: "2", rigidity: "22", hit: "2", guard: "-4", damage: "90", stan: "150", remarks: "クラッシュカウンター対応 (D)", command: "" },
    { name: "しゃがみ弱P", outbreak: "4", persistence: "3", rigidity: "5", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "連打キャンセル対応", command: "" },
    { name: "しゃがみ中P", outbreak: "6", persistence: "3", rigidity: "15", hit: "2", guard: "-2", damage: "60", stan: "100", remarks: "強制立ち効果", command: "" },
    {
        name: "しゃがみ強P",
        outbreak: "10",
        persistence: "4",
        rigidity: "22(※26)",
        hit: "6",
        guard: "-2",
        damage: "80",
        stan: "150",
        remarks: "2段目クラッシュカウンター対応(+20F)\n                                                                                                                                                                S※CA※VS※1段目のみ可能\n※空振り時",
        command: ""
    },
    { name: "しゃがみ弱K", outbreak: "4", persistence: "2", rigidity: "8", hit: "2", guard: "0", damage: "20", stan: "70", remarks: "連打キャンセル対応", command: "" },
    { name: "しゃがみ中K", outbreak: "6", persistence: "2", rigidity: "15", hit: "1", guard: "-3", damage: "50", stan: "100", remarks: "", command: "" },
    { name: "しゃがみ強K", outbreak: "7", persistence: "2", rigidity: "25", hit: "D", guard: "-12", damage: "90", stan: "150", remarks: "クラッシュカウンター対応 (D)", command: "" },
    { name: "ジャンプ弱P", outbreak: "4", persistence: "4", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", command: "" },
    { name: "ジャンプ中P", outbreak: "7", persistence: "6", rigidity: "", hit: "", guard: "", damage: "50", stan: "100", remarks: "空中ヒット時吹き飛びやられ\nVS※VS2のみキャンセル可能", command: "" },
    { name: "ジャンプ強P", outbreak: "7", persistence: "3", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
    { name: "ジャンプ弱K", outbreak: "4", persistence: "4", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", command: "" },
    { name: "ジャンプ中K", outbreak: "5", persistence: "5", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "めくり性能", command: "" },
    { name: "ジャンプ強K", outbreak: "8", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
    { name: "フラップ・スピン", outbreak: "8", persistence: "5", rigidity: "14", hit: "2", guard: "-2", damage: "70", stan: "100", remarks: "S※CA※V※VS※1段目のみ可能", command: "→ + 中P" },
    { name: "アサルト・ビーク", outbreak: "23", persistence: "2", rigidity: "18", hit: "0", guard: "-7", damage: "80", stan: "150", remarks: "7F～20F 投げ無敵", command: "→ + 強P" },
    { name: "三角跳び", outbreak: "", persistence: "", rigidity: "", hit: "", guard: "", damage: "", stan: "", remarks: "", command: "(ジャンプ中、壁付近で) ↗OR ↘" },
    { name: "ライディング・グライド", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "130", stan: "150", remarks: "", command: "" },
    { name: "ライジング・サン", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "140", stan: "150", remarks: "", command: "" },
    { name: "[VS1]フロント・フリップ", outbreak: "", persistence: "", rigidity: "42+着地後13", hit: "", guard: "", damage: "", stan: "", remarks: "", command: "" },
    {
        name: "[VS1]弱 派生空中イーグル・スパイク",
        outbreak: "18",
        persistence: "着地まで",
        rigidity: "着地後20",
        hit: "D",
        guard: "",
        damage: "120",
        stan: "200",
        remarks: "着地直前の攻撃判定をガードさせた場合の硬直差は+3F",
        command: ""
    },
    {
        name: "[VS1]中 派生空中イーグル・スパイク",
        outbreak: "20",
        persistence: "着地まで",
        rigidity: "着地後20",
        hit: "D",
        guard: "",
        damage: "120",
        stan: "200",
        remarks: "着地直前の攻撃判定をガードさせた場合の硬直差は+3F",
        command: ""
    },
    {
        name: "[VS1]強 派生空中イーグル・スパイク",
        outbreak: "22",
        persistence: "着地まで",
        rigidity: "着地後20",
        hit: "D",
        guard: "",
        damage: "120",
        stan: "200",
        remarks: "着地直前の攻撃判定をガードさせた場合の硬直差は+3F",
        command: ""
    },
    {
        name: "[VS1]EX 派生空中イーグル・スパイク",
        outbreak: "15",
        persistence: "着地まで/着地後11",
        rigidity: "31+着地後16",
        hit: "D",
        guard: "",
        damage: "140",
        stan: "200",
        remarks: "1F～着地まで, 着地後1F～29F 飛び道具無敵",
        command: ""
    },
    { name: "[VS1]アサルト・ロール", outbreak: "", persistence: "", rigidity: "全体32", hit: "", guard: "", damage: "", stan: "", remarks: "5F～18F 飛び道具無敵", command: "" },
    { name: "[VS1]アサルト・ネイル", outbreak: "6", persistence: "5", rigidity: "21", hit: "D", guard: "-6", damage: "80", stan: "100", remarks: "", command: "" },
    {
        name: "[VS2]ウイング・ストローク",
        outbreak: "",
        persistence: "",
        rigidity: "58+着地後6",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "各種ワールウインドショットからキャンセル可能\n動作中のジャンプ攻撃をヒット/ガードさせた場合、Vゲージが増加\n27F後～ウイングスパイクに移行可能\n48F後～各種ジャンプ攻撃に移行可能",
        command: ""
    },
    {
        name: "[VS2]ウイング・スパイク",
        outbreak: "6",
        persistence: "11",
        rigidity: "13+着地後19",
        hit: "D",
        guard: "-22",
        damage: "100",
        stan: "150",
        remarks: "しゃがみの相手にヒットしない\n                                                1F～29F 飛び道具無敵",
        command: ""
    },
    {
        name: "[VS2]EX ウイング・スパイク",
        outbreak: "6",
        persistence: "11",
        rigidity: "12+着地後19",
        hit: "D",
        guard: "-20",
        damage: "110",
        stan: "150",
        remarks: "しゃがみの相手にヒットしない\n                                                1F～28F 飛び道具無敵\n                                                初段ヒット時のみ2段目に派生",
        command: ""
    },
    {
        name: "[VS2]空中ウイング・ストローク",
        outbreak: "",
        persistence: "",
        rigidity: "着地後10",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "動作中のジャンプ攻撃をヒット/ガードさせた場合、Vゲージが増加\n24F後～ウイングスパイクに移行可能\n41F後～各種ジャンプ攻撃に移行可能",
        command: ""
    },
    {
        name: "[VS2]空中ウイング・スパイク",
        outbreak: "13",
        persistence: "着地まで",
        rigidity: "着地後20",
        hit: "D",
        guard: "",
        damage: "120",
        stan: "200",
        remarks: "着地直前の攻撃判定をガードさせた場合の硬直差は+3F",
        command: ""
    },
    {
        name: "[VS2]空中ウイング・スパイク",
        outbreak: "15",
        persistence: "着地まで",
        rigidity: "着地後20",
        hit: "D",
        guard: "",
        damage: "120",
        stan: "200",
        remarks: "着地直前の攻撃判定をガードさせた場合の硬直差は+3F",
        command: ""
    },
    {
        name: "[VS2]空中ウイング・スパイク",
        outbreak: "17",
        persistence: "着地まで",
        rigidity: "着地後20",
        hit: "D",
        guard: "",
        damage: "120",
        stan: "200",
        remarks: "着地直前の攻撃判定をガードさせた場合の硬直差は+3F",
        command: ""
    },
    {
        name: "[VS2]EX 空中ウイング・スパイク",
        outbreak: "10",
        persistence: "着地まで/着地後11",
        rigidity: "31+着地後16",
        hit: "D",
        guard: "",
        damage: "140",
        stan: "200",
        remarks: "1F～着地まで, 着地後1F～29F 飛び道具無敵",
        command: ""
    },
    {
        name: "イウサール",
        outbreak: "16",
        persistence: "250",
        rigidity: "全体26",
        hit: "D",
        guard: "32",
        damage: "120",
        stan: "150",
        remarks: "ラシードがVトリガーに接触する事で動きに慣性が付加される",
        command: ""
    },
    {
        name: "スライド・ロール",
        outbreak: "",
        persistence: "",
        rigidity: "全体33",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "1F～25F 打撃&飛び道具無敵\n                                                発動時スタン値200回復",
        command: ""
    },
    { name: "弱 スピニング・ミキサー", outbreak: "8", persistence: "4", rigidity: "26", hit: "0", guard: "-2", damage: "44", stan: "51", remarks: "CA※1、2段目のみ可能", command: "" },
    { name: "弱 スピニング・ミキサー(連打派生)", outbreak: "8", persistence: "6", rigidity: "21", hit: "1", guard: "-5", damage: "62", stan: "81", remarks: "CA※1、2段目のみ可能", command: "" },
    { name: "弱 スピニング・ミキサー(追加連打派生)", outbreak: "8", persistence: "8", rigidity: "29", hit: "D", guard: "-10", damage: "80", stan: "125", remarks: "CA※1、2段目のみ可能", command: "" },
    { name: "中 スピニング・ミキサー", outbreak: "8", persistence: "5", rigidity: "20+着地後13", hit: "D", guard: "-31", damage: "55", stan: "81", remarks: "CA※1、2段目のみ可能", command: "" },
    {
        name: "中 スピニング・ミキサー(連打派生)",
        outbreak: "8",
        persistence: "7",
        rigidity: "28+着地後13",
        hit: "D",
        guard: "",
        damage: "79",
        stan: "113",
        remarks: "CA※1、2段目と着地硬直のみ可能",
        command: ""
    },
    {
        name: "中 スピニング・ミキサー(追加連打派生)",
        outbreak: "8",
        persistence: "9",
        rigidity: "32+着地後13",
        hit: "D",
        guard: "",
        damage: "100",
        stan: "150",
        remarks: "CA※1、2段目のみ可能",
        command: ""
    },
    { name: "強 スピニング・ミキサー", outbreak: "5", persistence: "7", rigidity: "24+着地後18", hit: "D", guard: "-36", damage: "64", stan: "79", remarks: "", command: "" },
    { name: "強 スピニング・ミキサー(連打派生)", outbreak: "5", persistence: "13", rigidity: "28+着地後18", hit: "D", guard: "-50", damage: "100", stan: "137", remarks: "", command: "" },
    { name: "強 スピニング・ミキサー(追加連打派生)", outbreak: "5", persistence: "18", rigidity: "33+着地後18", hit: "D", guard: "-64", damage: "140", stan: "200", remarks: "", command: "" },
    { name: "ダッシュ・スピニング・ミキサー", outbreak: "8", persistence: "6", rigidity: "23", hit: "1", guard: "-2", damage: "83", stan: "89", remarks: "CA※1、2段目のみ可能", command: "" },
    {
        name: "ダッシュ・スピニング・ミキサー(連打派生)",
        outbreak: "8",
        persistence: "8",
        rigidity: "25",
        hit: "-1",
        guard: "-4",
        damage: "119",
        stan: "181",
        remarks: "CA※1、2段目のみ可能",
        command: ""
    },
    {
        name: "ダッシュ・スピニング・ミキサー(追加連打派生)",
        outbreak: "8",
        persistence: "10",
        rigidity: "30",
        hit: "D",
        guard: "-11",
        damage: "140",
        stan: "225",
        remarks: "CA※1、2段目のみ可能",
        command: ""
    },
    { name: "Vスピニング・ミキサー", outbreak: "8", persistence: "12", rigidity: "21", hit: "D", guard: "0", damage: "167", stan: "220", remarks: "CA※1、2段目のみ可能", command: "" },
    {
        name: "EX スピニング・ミキサー",
        outbreak: "8",
        persistence: "5",
        rigidity: "25+着地後16",
        hit: "D",
        guard: "-39",
        damage: "80",
        stan: "104",
        remarks: "1F～12F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)",
        command: ""
    },
    {
        name: "EX スピニング・ミキサー(連打派生)",
        outbreak: "8",
        persistence: "9",
        rigidity: "33+着地後16",
        hit: "D",
        guard: "",
        damage: "127",
        stan: "169",
        remarks: "1F～12F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)",
        command: ""
    },
    {
        name: "EX スピニング・ミキサー(追加連打派生)",
        outbreak: "8",
        persistence: "11",
        rigidity: "34+着地後16",
        hit: "D",
        guard: "",
        damage: "150",
        stan: "200",
        remarks: "1F～12F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)",
        command: ""
    },
    {
        name: "VEX スピニング・ミキサー",
        outbreak: "8",
        persistence: "12",
        rigidity: "26+着地後16",
        hit: "D",
        guard: "-57(※-19)",
        damage: "170",
        stan: "220",
        remarks: "1F～12F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)\n下降時に空中行動でキャンセル可能\n※空中行動でキャンセル時\nキャンセルせずに着地した場合の値は同キャラで密着立ちガードの場合",
        command: ""
    },
    { name: "弱 イーグル・スパイク", outbreak: "15(※11)", persistence: "8", rigidity: "5+着地後12", hit: "D", guard: "-20", damage: "100", stan: "150", remarks: "※近距離で発動時", command: "" },
    { name: "中 イーグル・スパイク", outbreak: "21", persistence: "9", rigidity: "6+着地後14", hit: "D", guard: "-20", damage: "120", stan: "150", remarks: "", command: "" },
    { name: "強 イーグル・スパイク", outbreak: "22", persistence: "16", rigidity: "6+着地後20", hit: "D", guard: "-20", damage: "130", stan: "200", remarks: "", command: "" },
    { name: "V弱 イーグル・スパイク", outbreak: "13", persistence: "8", rigidity: "5+着地後17", hit: "D", guard: "-20", damage: "150", stan: "200", remarks: "", command: "" },
    { name: "V中 イーグル・スパイク", outbreak: "21", persistence: "8", rigidity: "5+着地後9", hit: "D", guard: "-20", damage: "150", stan: "200", remarks: "", command: "" },
    { name: "V強 イーグル・スパイク", outbreak: "22", persistence: "8", rigidity: "5+着地後8", hit: "D", guard: "-20", damage: "150", stan: "200", remarks: "", command: "" },
    { name: "ダッシュ・イーグル・スパイク", outbreak: "13", persistence: "8", rigidity: "5+着地後19", hit: "D", guard: "-21", damage: "140", stan: "200", remarks: "", command: "" },
    { name: "EX イーグル・スパイク", outbreak: "19", persistence: "6", rigidity: "5+着地後19", hit: "D", guard: "-23", damage: "100", stan: "150", remarks: "", command: "" },
    { name: "VEX イーグル・スパイク", outbreak: "19", persistence: "6", rigidity: "5+着地後19", hit: "D", guard: "-3", damage: "160", stan: "200", remarks: "14F～27F 飛び道具無敵", command: "" },
    {
        name: "VEX 空中イーグル・スパイク",
        outbreak: "15",
        persistence: "着地まで/着地後11",
        rigidity: "31+着地後16",
        hit: "D",
        guard: "",
        damage: "170",
        stan: "200",
        remarks: "1F～着地まで, 着地後1F～29F 飛び道具無敵",
        command: ""
    },
    {
        name: "弱 空中イーグル・スパイク",
        outbreak: "18",
        persistence: "着地まで",
        rigidity: "着地後20",
        hit: "D",
        guard: "",
        damage: "120",
        stan: "200",
        remarks: "着地直前の攻撃判定をガードさせた場合の硬直差は+3F",
        command: ""
    },
    {
        name: "中 空中イーグル・スパイク",
        outbreak: "20",
        persistence: "着地まで",
        rigidity: "着地後20",
        hit: "D",
        guard: "",
        damage: "120",
        stan: "200",
        remarks: "着地直前の攻撃判定をガードさせた場合の硬直差は+3F",
        command: ""
    },
    {
        name: "強 空中イーグル・スパイク",
        outbreak: "22",
        persistence: "着地まで",
        rigidity: "着地後20",
        hit: "D",
        guard: "",
        damage: "120",
        stan: "200",
        remarks: "着地直前の攻撃判定をガードさせた場合の硬直差は+3F",
        command: ""
    },
    {
        name: "EX 空中イーグル・スパイク",
        outbreak: "15",
        persistence: "着地まで/着地後11",
        rigidity: "31+着地後16",
        hit: "D",
        guard: "",
        damage: "140",
        stan: "200",
        remarks: "1F～着地まで, 着地後1F～29F 飛び道具無敵",
        command: ""
    },
    { name: "弱 ワールウインド・ショット", outbreak: "17", persistence: "", rigidity: "全体52", hit: "-2", guard: "-5", damage: "60", stan: "100", remarks: "VS※VS2のみキャンセル可能", command: "" },
    { name: "中 ワールウインド・ショット", outbreak: "23", persistence: "", rigidity: "全体60", hit: "1", guard: "-2", damage: "60", stan: "140", remarks: "VS※VS2のみキャンセル可能", command: "" },
    { name: "強 ワールウインド・ショット", outbreak: "34", persistence: "", rigidity: "全体70", hit: "4", guard: "1", damage: "60", stan: "140", remarks: "", command: "" },
    { name: "EX ワールウインド・ショット", outbreak: "23", persistence: "", rigidity: "全体58", hit: "12", guard: "9", damage: "90", stan: "180", remarks: "", command: "" },
    { name: "アルタイル", outbreak: "1+7", persistence: "30", rigidity: "43", hit: "D", guard: "-51", damage: "340", stan: "0", remarks: "1F～17F 完全無敵", command: "" }
];
export { rashid };
//# sourceMappingURL=rashid.js.map