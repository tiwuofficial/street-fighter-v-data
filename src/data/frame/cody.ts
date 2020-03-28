const cody = [
  { name: "立ち弱P", outbreak: "4", persistence: "3", rigidity: "7", hit: "3", guard: "1", damage: "30", stan: "70", remarks: "しゃがみ弱P・立ち弱K・しゃがみ弱Kに連打キャンセル可能", command: "" },
  { name: "立ち中P", outbreak: "7", persistence: "2", rigidity: "16", hit: "4", guard: "0", damage: "60", stan: "100", remarks: "", command: "" },
  { name: "立ち強P", outbreak: "6", persistence: "5", rigidity: "21", hit: "3", guard: "-7", damage: "120(※70)", stan: "170(※120)", remarks: "S※CA※1段目のみ可能\n※2段目だけヒット時", command: "" },
  { name: "立ち弱K", outbreak: "5", persistence: "3", rigidity: "10", hit: "4", guard: "3", damage: "40", stan: "70", remarks: "", command: "" },
  { name: "立ち中K", outbreak: "7", persistence: "3", rigidity: "12", hit: "7", guard: "3", damage: "60", stan: "100", remarks: "", command: "" },
  { name: "立ち強K", outbreak: "15", persistence: "3", rigidity: "21", hit: "2", guard: "-4", damage: "80", stan: "150", remarks: "クラッシュカウンター対応(+22F)", command: "" },
  { name: "しゃがみ弱P", outbreak: "4", persistence: "2", rigidity: "10", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "連打キャンセル対応", command: "" },
  { name: "しゃがみ中P", outbreak: "6", persistence: "3", rigidity: "15", hit: "5", guard: "2", damage: "60", stan: "100", remarks: "", command: "" },
  { name: "しゃがみ強P", outbreak: "9", persistence: "2", rigidity: "21", hit: "0", guard: "-4", damage: "90", stan: "150", remarks: "クラッシュカウンター対応(+19F)", command: "" },
  { name: "しゃがみ弱K", outbreak: "4", persistence: "3", rigidity: "8", hit: "3", guard: "1", damage: "20", stan: "70", remarks: "連打キャンセル対応", command: "" },
  { name: "しゃがみ中K", outbreak: "7", persistence: "3", rigidity: "15", hit: "3", guard: "1", damage: "60", stan: "100", remarks: "", command: "" },
  { name: "しゃがみ強K", outbreak: "9", persistence: "4", rigidity: "23", hit: "D", guard: "-14", damage: "90", stan: "150", remarks: "クラッシュカウンター対応 (D)", command: "" },
  { name: "ジャンプ弱P", outbreak: "4", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", command: "" },
  { name: "ジャンプ中P", outbreak: "7", persistence: "5", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "空中ヒット時吹き飛びやられ", command: "" },
  { name: "ジャンプ強P", outbreak: "9", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
  { name: "ジャンプ弱K", outbreak: "5", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", command: "" },
  { name: "ジャンプ中K", outbreak: "7", persistence: "5", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "めくり性能", command: "" },
  { name: "ジャンプ強K", outbreak: "10", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
  {
    name: "（ナイフ所持状態）立ち弱P",
    outbreak: "4",
    persistence: "3",
    rigidity: "8",
    hit: "6",
    guard: "2",
    damage: "30",
    stan: "70",
    remarks: "しゃがみ弱P・立ち弱K・しゃがみ弱Kに連打キャンセル可能\nヒット時Vタイマー50消費(ガード時は1/2)",
    command: ""
  },
  {
    name: "（ナイフ所持状態）立ち中P",
    outbreak: "8",
    persistence: "3",
    rigidity: "15",
    hit: "5",
    guard: "4",
    damage: "60",
    stan: "100",
    remarks: "ヒット時Vタイマー80消費(ガード時は1/2)\nS※スナイプショット・アンチエアスナイプショット・ラピッドファイアでキャンセル可能",
    command: ""
  },
  {
    name: "（ナイフ所持状態）立ち強P",
    outbreak: "13",
    persistence: "3",
    rigidity: "19(※20)",
    hit: "7",
    guard: "-2",
    damage: "90",
    stan: "150",
    remarks: "ヒット時Vタイマー150消費(ガード時は1/2)\n※空振り時",
    command: ""
  },
  {
    name: "（ナイフ所持状態）しゃがみ弱P",
    outbreak: "5",
    persistence: "3",
    rigidity: "7",
    hit: "5",
    guard: "3",
    damage: "30",
    stan: "70",
    remarks:
      "連打キャンセル対応\n                                                                                                                                ヒット時Vタイマー50消費(ガード時は1/2)",
    command: ""
  },
  {
    name: "（ナイフ所持状態）しゃがみ中P",
    outbreak: "6",
    persistence: "2",
    rigidity: "13",
    hit: "5",
    guard: "4",
    damage: "60",
    stan: "100",
    remarks: "ヒット時Vタイマー80消費(ガード時は1/2)\nS※スナイプショット・アンチエアスナイプショット・ラピッドファイアでキャンセル可能",
    command: ""
  },
  {
    name: "（ナイフ所持状態）しゃがみ強P",
    outbreak: "11",
    persistence: "5",
    rigidity: "20",
    hit: "4",
    guard: "-5",
    damage: "90",
    stan: "150",
    remarks: "ヒット時Vタイマー150消費(ガード時は1/2)",
    command: ""
  },
  {
    name: "（ナイフ所持状態）ジャンプ弱P",
    outbreak: "4",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "40",
    stan: "70",
    remarks: "ヒット時Vタイマー50消費(ガード時は1/2)",
    command: ""
  },
  {
    name: "（ナイフ所持状態）ジャンプ中P",
    outbreak: "6",
    persistence: "4",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "70",
    stan: "100",
    remarks: "ヒット時Vタイマー80消費(ガード時は1/2)\n空中ヒット時吹き飛びやられ",
    command: ""
  },
  {
    name: "（ナイフ所持状態）ジャンプ強P",
    outbreak: "9",
    persistence: "3",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "90",
    stan: "150",
    remarks: "ヒット時Vタイマー150消費(ガード時は1/2)",
    command: ""
  },
  { name: "アクセルナックル", outbreak: "25", persistence: "2", rigidity: "21", hit: "1", guard: "-7", damage: "80", stan: "150", remarks: "", command: "→ + 強P" },
  { name: "ハンマーキック", outbreak: "19", persistence: "3", rigidity: "21", hit: "2", guard: "-2", damage: "100", stan: "150", remarks: "S※CA※V※1段目のみ可能", command: "→ + 強K" },
  {
    name: "クラックコンビネーション",
    outbreak: "9",
    persistence: "6",
    rigidity: "10+着地後15",
    hit: "D",
    guard: "-18",
    damage: "80",
    stan: "70",
    remarks: "4F～15F 完全無敵\n                                                動作中常に被カウンター判定\nリカバリアブルダメージ40を受ける",
    command: "(VスキルⅠ選択時) → + 強K ▶ 中P 中K"
  },
  { name: "クライムコンビネーション", outbreak: "16", persistence: "3", rigidity: "26", hit: "D", guard: "-11", damage: "80", stan: "150", remarks: "", command: "(VスキルⅡ選択時) → + 強K ▶ 中P 中K" },
  {
    name: "エアレイドパンチ",
    outbreak: "9",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "70",
    stan: "120",
    remarks: "空中ヒット時、叩きつけダウン",
    command: "(ジャンプ中に) 中P ▶ 強P"
  },
  { name: "エアレイドキック", outbreak: "3", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", command: "(ジャンプ中に) 中K ▶ 弱K" },
  {
    name: "バーストショット",
    outbreak: "13",
    persistence: "4",
    rigidity: "27",
    hit: "-3",
    guard: "-14",
    damage: "80",
    stan: "120",
    remarks: "ヒット時Vタイマー300消費",
    command: "(VトリガーⅠ発動中)(ナイフ所持状態で) 中P ▶ 強P"
  },
  { name: "スリップジャブ", outbreak: "4", persistence: "2", rigidity: "17", hit: "-2", guard: "-6", damage: "30", stan: "50", remarks: "", command: "弱P ▶ 弱P" },
  { name: "クライムブロー", outbreak: "6", persistence: "3", rigidity: "26", hit: "-4", guard: "-7", damage: "50", stan: "80", remarks: "", command: "弱P ▶ 弱P ▶ 弱P" },
  { name: "ファイナルコンビネーション", outbreak: "9", persistence: "2", rigidity: "33", hit: "D", guard: "-13", damage: "80", stan: "120", remarks: "", command: "弱P ▶ 弱P ▶ 弱P ▶ 弱P" },
  {
    name: "ファイナルコンボスルー",
    outbreak: "5",
    persistence: "3",
    rigidity: "27",
    hit: "D",
    guard: "-16",
    damage: "110",
    stan: "150",
    remarks: "コンボ可能投げ判定",
    command: "弱P ▶ 弱P ▶ 弱P ▶ ↓ + 弱P"
  },
  { name: "バッドスプレー", outbreak: "3", persistence: "4", rigidity: "14", hit: "2", guard: "-2", damage: "40", stan: "50", remarks: "技強度設定が弱扱い", command: "(その場受け身発動時に) ↑ +" },
  { name: "トラッシュアウト", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "130", stan: "150", remarks: "", command: "" },
  { name: "クライムスルー", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "150", stan: "200", remarks: "", command: "" },
  {
    name: "[VS1]ダブルキック",
    outbreak: "14",
    persistence: "6",
    rigidity: "10+着地後15",
    hit: "D",
    guard: "-18",
    damage: "80",
    stan: "70",
    remarks: "3F～26F 完全無敵\n                                                動作中常に被カウンター判定\nリカバリアブルダメージ40を受ける",
    command: ""
  },
  {
    name: "[VS2]クライムスウェー・ハイ",
    outbreak: "",
    persistence: "",
    rigidity: "全体36",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "2～25F 立ち/空中状態の攻撃と飛び道具に対して無敵\n13F～レンチフィストに派生可能\n動作中常に被カウンター判定",
    command: ""
  },
  {
    name: "[VS2]クライムスウェー・ロー",
    outbreak: "",
    persistence: "",
    rigidity: "全体36",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "2～25F しゃがみ状態の攻撃と飛び道具に対して無敵\n15F～ランバースイープに派生可能\n動作中常に被カウンター判定",
    command: ""
  },
  {
    name: "[VS2]レンチフィスト",
    outbreak: "9",
    persistence: "2",
    rigidity: "23",
    hit: "D",
    guard: "-7",
    damage: "80",
    stan: "150",
    remarks: "1F～8F 飛び道具無敵\n                                                S※ヒット時のみ可能",
    command: ""
  },
  { name: "[VS2]ランバースイープ", outbreak: "11", persistence: "2", rigidity: "22", hit: "D", guard: "-6", damage: "80", stan: "150", remarks: "1F～10F 飛び道具無敵", command: "" },
  { name: "サイドアーム", outbreak: "1", persistence: "", rigidity: "4", hit: "", guard: "", damage: "", stan: "", remarks: "Vゲージタイマー+2000F", command: "" },
  {
    name: "プリズンブレイカー",
    outbreak: "17",
    persistence: "2",
    rigidity: "23(※33)",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "0",
    remarks: "1F～29F 打撃無敵\n                                                発動時スタン値200回復\nヒット時",
    command: ""
  },
  {
    name: "弱トルネードスイープ",
    outbreak: "18",
    persistence: "65",
    rigidity: "全体49",
    hit: "-2",
    guard: "-7",
    damage: "50",
    stan: "100",
    remarks: "VTで所持する武器を持っている状態で出せない\nS※リロードで空振りキャンセル可能",
    command: ""
  },
  {
    name: "中トルネードスイープ",
    outbreak: "18",
    persistence: "52",
    rigidity: "全体49",
    hit: "0",
    guard: "-7",
    damage: "50",
    stan: "100",
    remarks: "VTで所持する武器を持っている状態で出せない\nS※リロードで空振りキャンセル可能",
    command: ""
  },
  {
    name: "強トルネードスイープ",
    outbreak: "18",
    persistence: "39",
    rigidity: "全体49",
    hit: "2",
    guard: "-7",
    damage: "50",
    stan: "100",
    remarks: "VTで所持する武器を持っている状態で出せない\nS※リロードで空振りキャンセル可能",
    command: ""
  },
  {
    name: "EXトルネードスイープ",
    outbreak: "18",
    persistence: "",
    rigidity: "全体45",
    hit: "4",
    guard: "2",
    damage: "80",
    stan: "120",
    remarks: "VTで所持する武器を持っている状態で出せない\nS※リロードで空振りキャンセル可能",
    command: ""
  },
  { name: "弱ラフィアンキック", outbreak: "18", persistence: "5", rigidity: "23", hit: "D", guard: "-8", damage: "100", stan: "150", remarks: "", command: "" },
  { name: "中ラフィアンキック", outbreak: "12", persistence: "5", rigidity: "27", hit: "D", guard: "-8", damage: "120", stan: "150", remarks: "", command: "" },
  {
    name: "強ラフィアンキック",
    outbreak: "10",
    persistence: "7",
    rigidity: "23",
    hit: "D",
    guard: "-10",
    damage: "130",
    stan: "150",
    remarks: "しゃがみの相手にヒットしない\n                                                                                                8F目まで頭のやられ部分は空中状態の攻撃無効",
    command: ""
  },
  {
    name: "EXラフィアンキック",
    outbreak: "16",
    persistence: "5",
    rigidity: "25",
    hit: "D",
    guard: "-12",
    damage: "80",
    stan: "150",
    remarks: "空中の相手にヒットしない\n                                                                初段ヒットで自動派生",
    command: ""
  },
  { name: "ゾンクナックル", outbreak: "20", persistence: "3", rigidity: "21(※22)", hit: "3", guard: "-2", damage: "80", stan: "150", remarks: "※空振り時", command: "" },
  { name: "ゾンクナックル Lv.2", outbreak: "20", persistence: "3", rigidity: "20", hit: "5", guard: "-2", damage: "80", stan: "150", remarks: "", command: "" },
  { name: "EXゾンクナックル", outbreak: "15", persistence: "5", rigidity: "18(※23)", hit: "D", guard: "3", damage: "130", stan: "200", remarks: "※空振り時\nV※1段目のみ可能", command: "" },
  { name: "EX ゾンクナックル Lv.2", outbreak: "15", persistence: "5", rigidity: "18(※23)", hit: "D", guard: "5", damage: "130", stan: "200", remarks: "※空振り時\nV※1段目のみ可能", command: "" },
  {
    name: "スナイプショット",
    outbreak: "15",
    persistence: "",
    rigidity: "全体37",
    hit: "D",
    guard: "3",
    damage: "60",
    stan: "100",
    remarks: "打撃で落ちる\nS※リロードで空振りキャンセル可能",
    command: ""
  },
  {
    name: "アンチエアスナイプショット",
    outbreak: "14",
    persistence: "",
    rigidity: "全体35",
    hit: "D",
    guard: "0",
    damage: "60",
    stan: "100",
    remarks: "打撃で落ちる\nS※リロードで空振りキャンセル可能",
    command: ""
  },
  { name: "リロード", outbreak: "", persistence: "", rigidity: "全体29", hit: "", guard: "", damage: "", stan: "", remarks: "Vゲージタイマー300F消費", command: "" },
  {
    name: "ラピッドファイア",
    outbreak: "13",
    persistence: "2",
    rigidity: "20",
    hit: "D",
    guard: "3",
    damage: "140",
    stan: "180",
    remarks:
      "Vゲージタイマー900F消費\n                                                                                                                                                                                Vタイマー0では出せない\nフィニッシュ時にVタイマーが0の時、最終段の攻撃が変化",
    command: ""
  },
  {
    name: "クリミナルパニッシャー",
    outbreak: "7",
    persistence: "27",
    rigidity: "59",
    hit: "D",
    guard: "-35",
    damage: "330",
    stan: "0",
    remarks: "1F～11F 完全無敵\n                                                攻撃判定持続13F目まで実ダメージ判定外に引き込み能力",
    command: ""
  }
];

export { cody };