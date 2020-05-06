const mbison = [
  { name: "立ち弱P", outbreak: "4", persistence: "2", rigidity: "7", hit: "5", guard: "3", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "立ち中P", outbreak: "5", persistence: "4", rigidity: "13", hit: "2", guard: "0", damage: "70", stan: "100", remarks: "", type: "normal", command: "" },
  { name: "立ち強P", outbreak: "12", persistence: "2", rigidity: "19", hit: "0", guard: "-3", damage: "80", stan: "150", remarks: "クラッシュカウンター対応 (D)", type: "normal", command: "" },
  { name: "立ち弱K", outbreak: "3", persistence: "2", rigidity: "8", hit: "2", guard: "1", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "立ち中K", outbreak: "6", persistence: "3", rigidity: "12", hit: "5", guard: "2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  { name: "立ち強K", outbreak: "9", persistence: "3", rigidity: "18", hit: "7", guard: "3", damage: "80", stan: "150", remarks: "クラッシュカウンター対応(+23F)", type: "normal", command: "" },
  { name: "しゃがみ弱P", outbreak: "4", persistence: "3", rigidity: "7", hit: "4", guard: "3", damage: "30", stan: "70", remarks: "連打キャンセル対応", type: "normal", command: "" },
  { name: "しゃがみ中P", outbreak: "6", persistence: "3", rigidity: "12", hit: "4", guard: "2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  {
    name: "しゃがみ強P",
    outbreak: "8",
    persistence: "5",
    rigidity: "22",
    hit: "-1",
    guard: "-5",
    damage: "90(※80)",
    stan: "150",
    remarks:
      "クラッシュカウンター対応 (D)\n                                                強制立ち効果\n                                                                                                                ※持続2F目以降",
    type: "normal",
    command: ""
  },
  { name: "しゃがみ弱K", outbreak: "4", persistence: "3", rigidity: "8", hit: "4", guard: "1", damage: "20", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "しゃがみ中K", outbreak: "7", persistence: "2", rigidity: "17", hit: "2", guard: "-2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  { name: "しゃがみ強K", outbreak: "8", persistence: "2", rigidity: "26", hit: "D", guard: "-14", damage: "100", stan: "150", remarks: "クラッシュカウンター対応 (D)", type: "normal", command: "" },
  { name: "ジャンプ弱P", outbreak: "4", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
  { name: "ジャンプ中P", outbreak: "5", persistence: "3", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", type: "jump", command: "" },
  { name: "ジャンプ強P", outbreak: "7", persistence: "4", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
  { name: "ジャンプ弱K", outbreak: "3", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
  { name: "ジャンプ中K", outbreak: "6", persistence: "5", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", type: "jump", command: "" },
  { name: "ジャンプ強K", outbreak: "9", persistence: "4", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
  { name: "ハードスマッシャー(2段目)", outbreak: "6", persistence: "4", rigidity: "20", hit: "D", guard: "-8", damage: "40", stan: "80", remarks: "", type: "unique", command: "中K ▶ 中P" },
  {
    name: "ハードスマッシャー(3段目)",
    outbreak: "",
    persistence: "",
    rigidity: "全体31",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    type: "unique",
    command: "(VスキルⅠ選択時) 中K ▶ 中P ▶ 中P 中K"
  },
  {
    name: "ハードスマッシャー(4段目)",
    outbreak: "21",
    persistence: "2",
    rigidity: "23",
    hit: "D",
    guard: "-8",
    damage: "60",
    stan: "120",
    remarks: "",
    type: "unique",
    command: "(VスキルⅠ選択時) 中K ▶ 中P ▶ 中P 中K ▶"
  },
  {
    name: "ハードプレッシャー(4段目)",
    outbreak: "26",
    persistence: "3",
    rigidity: "21",
    hit: "D",
    guard: "-8",
    damage: "60",
    stan: "120",
    remarks: "",
    type: "unique",
    command: "(VスキルⅠ選択時) 中K ▶ 中P ▶ 中P 中K ▶"
  },
  { name: "OTB", outbreak: "", persistence: "", rigidity: "全体50", hit: "", guard: "", damage: "", stan: "", remarks: "", type: "unique", command: "(VスキルⅡ選択時) 中K ▶ 中P ▶ 中P 中K" },
  { name: "アンダーインパクト(2段目)", outbreak: "6", persistence: "3", rigidity: "16", hit: "1", guard: "-7", damage: "40", stan: "70", remarks: "", type: "unique", command: "弱K ▶ 中K" },
  { name: "アンダーインパクト(3段目)", outbreak: "9", persistence: "2", rigidity: "21", hit: "D", guard: "-8", damage: "70", stan: "100", remarks: "", type: "unique", command: "弱K ▶ 中K ▶ 強K" },
  {
    name: "ストンピングコンボ(2段目)",
    outbreak: "9",
    persistence: "2",
    rigidity: "20",
    hit: "2",
    guard: "-7",
    damage: "40",
    stan: "80",
    remarks: "強制立ち効果",
    type: "unique",
    command: "(しゃがみ中に) 中K ▶ ↓ + 中K"
  },
  { name: "ダーティーボマー", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "140", stan: "150", remarks: "", type: "throw", command: "" },
  { name: "ダーティーショット", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "130", stan: "200", remarks: "", type: "throw", command: "" },
  { name: "[VS1] KKB", outbreak: "", persistence: "", rigidity: "全体29", hit: "", guard: "", damage: "", stan: "", remarks: "4F～22F 飛び道具無敵", type: "vsystem", command: "" },
  { name: "[VS1] KKB(キャンセル)", outbreak: "", persistence: "", rigidity: "全体25", hit: "", guard: "", damage: "", stan: "", remarks: "4F～22F 飛び道具無敵", type: "vsystem", command: "" },
  {
    name: "[VS1] バッファロースウィング",
    outbreak: "7",
    persistence: "2",
    rigidity: "21",
    hit: "2",
    guard: "-4",
    damage: "60",
    stan: "100",
    remarks: "1F～5F 飛び道具無敵",
    type: "vsystem",
    command: ""
  },
  {
    name: "[VS1] バッファロープレッシャー",
    outbreak: "17",
    persistence: "3",
    rigidity: "19",
    hit: "5",
    guard: "-7",
    damage: "50",
    stan: "100",
    remarks: "1F～14F 飛び道具無敵",
    type: "vsystem",
    command: ""
  },
  {
    name: "[VS2]FFB",
    outbreak: "",
    persistence: "",
    rigidity: "全体50",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "発動後一回だけダッシュストレート・チャージングバッファローの性質変化\n（VT1中のラッシュ時はすべてのストレートが強化される）",
    type: "vsystem",
    command: ""
  },
  {
    name: "クレイジーラッシュ",
    outbreak: "1",
    persistence: "",
    rigidity: "6",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "Vゲージタイマー+2000F\n                                                                                                                                                                                発動中チャージングバッファロー、バースティングバッファローが必殺技に追加",
    type: "vsystem",
    command: ""
  },
  {
    name: "バッファローヘッドバット",
    outbreak: "17",
    persistence: "3",
    rigidity: "23",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "0",
    remarks: "1F～30F 打撃&飛び道具無敵\n                                                発動時スタン値200回復",
    type: "vsystem",
    command: ""
  },
  {
    name: "弱 ダッシュストレート",
    outbreak: "12 (※10)",
    persistence: "4",
    rigidity: "22",
    hit: "2",
    guard: "-4",
    damage: "80",
    stan: "150",
    remarks: "※密着時\nVS※攻撃発生前のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "中 ダッシュストレート",
    outbreak: "16 (※12)",
    persistence: "4",
    rigidity: "22",
    hit: "3",
    guard: "-6",
    damage: "90",
    stan: "150",
    remarks: "※密着時\nVS※攻撃発生前のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "強 ダッシュストレート",
    outbreak: "25 (※19)",
    persistence: "4",
    rigidity: "22",
    hit: "2",
    guard: "-7",
    damage: "100",
    stan: "150",
    remarks: "※密着時\nVS※攻撃発生前のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  { name: "弱 ダッシュストレート(VS2版)", outbreak: "12 (※10)", persistence: "4", rigidity: "22", hit: "D", guard: "2", damage: "90", stan: "100", remarks: "※密着時", type: "special", command: "" },
  { name: "中 ダッシュストレート(VS2版)", outbreak: "16 (※12)", persistence: "4", rigidity: "22", hit: "D", guard: "2", damage: "100", stan: "100", remarks: "※密着時", type: "special", command: "" },
  { name: "強 ダッシュストレート(VS2版)", outbreak: "25 (※19)", persistence: "4", rigidity: "22", hit: "D", guard: "2", damage: "110", stan: "100", remarks: "※密着時", type: "special", command: "" },
  {
    name: "EX ダッシュストレート",
    outbreak: "22 (※9)",
    persistence: "6",
    rigidity: "29",
    hit: "D",
    guard: "1",
    damage: "150",
    stan: "200",
    remarks: "※密着時\nVS※1段目のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  { name: "EX ダッシュストレート(VS2版)", outbreak: "22 (※9)", persistence: "6", rigidity: "29", hit: "D", guard: "4", damage: "160", stan: "120", remarks: "※密着時", type: "special", command: "" },
  {
    name: "Vチャージングバッファロー(1段目)",
    outbreak: "12",
    persistence: "6",
    rigidity: "17",
    hit: "2",
    guard: "-2",
    damage: "30",
    stan: "100",
    remarks:
      "Vゲージタイマー500F消費\n                                                                                                                                                                                VS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "Vチャージングバッファロー(2段目)",
    outbreak: "12",
    persistence: "6",
    rigidity: "16",
    hit: "2",
    guard: "-2",
    damage: "40",
    stan: "100",
    remarks:
      "Vゲージタイマー300F消費\n                                                                                                                                                                                VS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "Vチャージングバッファロー(3段目)",
    outbreak: "12",
    persistence: "6",
    rigidity: "15",
    hit: "2",
    guard: "-2",
    damage: "50",
    stan: "100",
    remarks:
      "Vゲージタイマー300F消費\n                                                                                                                                                                                VS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "Vチャージングバッファロー(4段目)",
    outbreak: "17",
    persistence: "6",
    rigidity: "29",
    hit: "D",
    guard: "-13",
    damage: "90",
    stan: "100",
    remarks: "Vゲージタイマー300F消費",
    type: "special",
    command: ""
  },
  {
    name: "VEX チャージングバッファロー",
    outbreak: "11",
    persistence: "6",
    rigidity: "18",
    hit: "D",
    guard: "-2",
    damage: "70",
    stan: "100",
    remarks:
      "Vゲージタイマー500F消費\n                                                                                                                                                                                VS※1回目派生時のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "Vチャージングバッファロー(VS2版)(1段目)",
    outbreak: "12",
    persistence: "6",
    rigidity: "17",
    hit: "D",
    guard: "0",
    damage: "60",
    stan: "80",
    remarks: "Vゲージタイマー500F消費",
    type: "special",
    command: ""
  },
  {
    name: "Vチャージングバッファロー(VS2版)(2段目)",
    outbreak: "12",
    persistence: "6",
    rigidity: "16",
    hit: "D",
    guard: "1",
    damage: "60",
    stan: "80",
    remarks: "Vゲージタイマー300F消費",
    type: "special",
    command: ""
  },
  {
    name: "Vチャージングバッファロー(VS2版)(3段目)",
    outbreak: "12",
    persistence: "6",
    rigidity: "15",
    hit: "D",
    guard: "2",
    damage: "70",
    stan: "80",
    remarks: "Vゲージタイマー300F消費",
    type: "special",
    command: ""
  },
  {
    name: "Vチャージングバッファロー(VS2版)(4段目)",
    outbreak: "17",
    persistence: "6",
    rigidity: "29",
    hit: "D",
    guard: "-12",
    damage: "130",
    stan: "190",
    remarks: "Vゲージタイマー300F消費",
    type: "special",
    command: ""
  },
  {
    name: "VEX チャージングバッファロー(VS2版)(1段目)",
    outbreak: "11",
    persistence: "6",
    rigidity: "18",
    hit: "D",
    guard: "-1",
    damage: "70",
    stan: "100",
    remarks: "Vゲージタイマー500F消費",
    type: "special",
    command: ""
  },
  {
    name: "VEX チャージングバッファロー(VS2版)(2段目)",
    outbreak: "11",
    persistence: "6",
    rigidity: "18",
    hit: "D",
    guard: "-1",
    damage: "70",
    stan: "120",
    remarks: "Vゲージタイマー500F消費",
    type: "special",
    command: ""
  },
  {
    name: "弱 ダッシュグランドブロー",
    outbreak: "17",
    persistence: "2",
    rigidity: "26",
    hit: "D",
    guard: "-7",
    damage: "70",
    stan: "150",
    remarks: "※密着時\nVS※攻撃発生前のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "中 ダッシュグランドブロー",
    outbreak: "22 (※18)",
    persistence: "2",
    rigidity: "26",
    hit: "D",
    guard: "-7",
    damage: "80",
    stan: "150",
    remarks: "※密着時\nVS※攻撃発生前のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "強 ダッシュグランドブロー",
    outbreak: "25(※19)",
    persistence: "2",
    rigidity: "26",
    hit: "D",
    guard: "-7",
    damage: "90",
    stan: "150",
    remarks: "※密着時\nVS※攻撃発生前のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "EX ダッシュグランドブロー",
    outbreak: "19 (※11)",
    persistence: "2",
    rigidity: "23",
    hit: "D",
    guard: "-2",
    damage: "140",
    stan: "200",
    remarks: "※密着時\nVS※攻撃発生前のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "弱 スクリュースマッシュ",
    outbreak: "10",
    persistence: "5",
    rigidity: "25",
    hit: "D",
    guard: "-10",
    damage: "100",
    stan: "150",
    remarks: "しゃがみの相手にヒットしない",
    type: "special",
    command: ""
  },
  {
    name: "中 スクリュースマッシュ",
    outbreak: "13",
    persistence: "5",
    rigidity: "26",
    hit: "D",
    guard: "-10",
    damage: "100",
    stan: "150",
    remarks: "しゃがみの相手にヒットしない",
    type: "special",
    command: ""
  },
  {
    name: "強 スクリュースマッシュ",
    outbreak: "23",
    persistence: "5",
    rigidity: "23",
    hit: "D",
    guard: "-10",
    damage: "100",
    stan: "150",
    remarks: "しゃがみの相手にヒットしない",
    type: "special",
    command: ""
  },
  {
    name: "EX スクリュースマッシュ",
    outbreak: "12",
    persistence: "5",
    rigidity: "29",
    hit: "D",
    guard: "-17",
    damage: "160",
    stan: "200",
    remarks: "3F～16Fアーマー判定",
    type: "special",
    command: ""
  },
  {
    name: "Vバースティングバッファロー(1段目)",
    outbreak: "14",
    persistence: "5",
    rigidity: "21",
    hit: "D",
    guard: "-2",
    damage: "40",
    stan: "50",
    remarks:
      "Vゲージタイマー500F消費\n                                                                                                                                                                                VS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "Vバースティングバッファロー(2段目)",
    outbreak: "14",
    persistence: "5",
    rigidity: "21",
    hit: "D",
    guard: "-2",
    damage: "50",
    stan: "50",
    remarks:
      "Vゲージタイマー300F消費\n                                                                                                                                                                                VS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "Vバースティングバッファロー(3段目)",
    outbreak: "14",
    persistence: "5",
    rigidity: "21",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "50",
    remarks:
      "Vゲージタイマー300F消費\n                                                                                                                                                                                VS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "Vバースティングバッファロー(4段目)",
    outbreak: "17",
    persistence: "5",
    rigidity: "38",
    hit: "D",
    guard: "-21",
    damage: "100",
    stan: "50",
    remarks: "Vゲージタイマー300F消費",
    type: "special",
    command: ""
  },
  {
    name: "VEX バースティングバッファロー",
    outbreak: "12",
    persistence: "5",
    rigidity: "19",
    hit: "D",
    guard: "-2",
    damage: "80",
    stan: "70",
    remarks:
      "Vゲージタイマー450F消費\n                                                                                                                                                                                VS※1回目派生時のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "ターンパンチ(Lv1)",
    outbreak: "30",
    persistence: "2",
    rigidity: "22",
    hit: "2",
    guard: "-2",
    damage: "80",
    stan: "150",
    remarks: "3F～18F 飛び道具無敵\n                                                VS※攻撃発生前のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "ターンパンチ(Lv2)",
    outbreak: "30",
    persistence: "2",
    rigidity: "22",
    hit: "2",
    guard: "-2",
    damage: "100",
    stan: "150",
    remarks: "3F～18F 飛び道具無敵\n                                                VS※攻撃発生前のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "ターンパンチ(Lv3)",
    outbreak: "30",
    persistence: "2",
    rigidity: "22",
    hit: "2",
    guard: "-2",
    damage: "120",
    stan: "150",
    remarks: "3F～18F 飛び道具無敵\n                                                VS※攻撃発生前のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "ターンパンチ(Lv4)",
    outbreak: "30",
    persistence: "2",
    rigidity: "22",
    hit: "D",
    guard: "-2",
    damage: "140",
    stan: "200",
    remarks: "3F～18F 飛び道具無敵\n                                3F～18F 上半身無敵\n                VS※攻撃発生前のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "ターンパンチ(Lv5)",
    outbreak: "30",
    persistence: "2",
    rigidity: "22",
    hit: "D",
    guard: "-2",
    damage: "160",
    stan: "200",
    remarks: "3F～18F 飛び道具無敵\n                                3F～18F 上半身無敵\n                VS※攻撃発生前のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "ターンパンチ(Lv6)",
    outbreak: "30",
    persistence: "2",
    rigidity: "22",
    hit: "D",
    guard: "-2",
    damage: "180",
    stan: "200",
    remarks: "3F～18F 飛び道具無敵\n                                3F～18F 上半身無敵\n                VS※攻撃発生前のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "ターンパンチ(Lv7)",
    outbreak: "30",
    persistence: "2",
    rigidity: "22",
    hit: "D",
    guard: "-2",
    damage: "210",
    stan: "300",
    remarks: "1F～18F 飛び道具&投げ無敵\n                                1F～18F 上半身無敵\n                VS※攻撃発生前のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "ターンパンチ(Lv8)",
    outbreak: "30",
    persistence: "2",
    rigidity: "22",
    hit: "D",
    guard: "-2",
    damage: "240",
    stan: "300",
    remarks: "1F～18F 飛び道具&投げ無敵\n                                1F～18F 上半身無敵\n                VS※攻撃発生前のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "ターンパンチ(Lv9)",
    outbreak: "30",
    persistence: "2",
    rigidity: "22",
    hit: "D",
    guard: "-2",
    damage: "270",
    stan: "300",
    remarks: "1F～18F 飛び道具&投げ無敵\n                                1F～18F 上半身無敵\n                VS※攻撃発生前のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "ターンパンチ(FINAL)",
    outbreak: "30",
    persistence: "2",
    rigidity: "22",
    hit: "D",
    guard: "7",
    damage: "350",
    stan: "400",
    remarks: "1F～18F 完全無敵\n                                                VS※攻撃発生前のみ可能\nVS※VS1のみキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "ギガトンブロー",
    outbreak: "1+7",
    persistence: "10",
    rigidity: "60",
    hit: "D",
    guard: "-45",
    damage: "330",
    stan: "0",
    remarks: "14F～17F 飛び道具無敵\n11F～13F 飛び道具&投げ無敵\n1F～10F 完全無敵",
    type: "ca",
    command: ""
  }
];

export { mbison };
