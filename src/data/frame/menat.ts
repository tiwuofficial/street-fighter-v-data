const menat = [
  {
    name: "立ち弱P",
    outbreak: "5",
    persistence: "4",
    rigidity: "8(※11)",
    hit: "5",
    guard: "3",
    damage: "30",
    stan: "70",
    remarks: "※空振り時",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち中P",
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
    name: "立ち強P",
    outbreak: "12",
    persistence: "9",
    rigidity: "19",
    hit: "-6",
    guard: "-10",
    damage: "80",
    stan: "150",
    remarks: "クラッシュカウンター対応 (D)",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち弱K",
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
    name: "立ち中K",
    outbreak: "8",
    persistence: "3",
    rigidity: "16",
    hit: "2",
    guard: "-2",
    damage: "60",
    stan: "100",
    remarks: "S※ソウルスフィア・アンク、ソウルスパークでのみキャンセル可能",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強K",
    outbreak: "11",
    persistence: "6",
    rigidity: "23",
    hit: "-4",
    guard: "-8",
    damage: "90",
    stan: "150",
    remarks:
      "クラッシュカウンター対応 (膝)\n                                                強制立ち効果",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱P",
    outbreak: "4",
    persistence: "4",
    rigidity: "8(※11)",
    hit: "4",
    guard: "2",
    damage: "30",
    stan: "70",
    remarks: "※空振り時",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中P",
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
    name: "しゃがみ強P",
    outbreak: "9",
    persistence: "5",
    rigidity: "19",
    hit: "-1",
    guard: "-5",
    damage: "80(※70)",
    stan: "150",
    remarks:
      "クラッシュカウンター対応 (D)\n                                                強制立ち効果\n                                                                                                                ※持続2F目以降",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱K",
    outbreak: "4",
    persistence: "2",
    rigidity: "9",
    hit: "4",
    guard: "1",
    damage: "20",
    stan: "70",
    remarks:
      "S※ソウルスフィア・アンク、ソウルスパークでのみキャンセル可能\n立ち弱P,しゃがみ弱Pに連打キャンセル可能",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中K",
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
    name: "しゃがみ強K",
    outbreak: "11",
    persistence: "3",
    rigidity: "33",
    hit: "D",
    guard: "-16",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応 (D)",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "ジャンプ弱P",
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
    name: "ジャンプ中P",
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
    name: "ジャンプ強P",
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
    name: "ジャンプ弱K",
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
    name: "ジャンプ中K",
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
    name: "ジャンプ強K",
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
    name: "罪人を喰らう顎",
    outbreak: "27",
    persistence: "2",
    rigidity: "23",
    hit: "1",
    guard: "-7",
    damage: "60",
    stan: "100",
    remarks: "S※初段かつソウルスフィア・アンク、ソウルスパークでのみキャンセル可能",
    vtrigger: 1,
    type: "unique",
    command: "→ + 中K"
  },
  {
    name: "黒犬の審判",
    outbreak: "11",
    persistence: "11",
    rigidity: "18",
    hit: "-6",
    guard: "-10",
    damage: "50",
    stan: "100",
    remarks: "11～35F頭付近に弾無敵",
    vtrigger: 1,
    type: "unique",
    command: "↘ + 中K"
  },
  {
    name: "カーメンキック",
    outbreak: "12",
    persistence: "着地まで",
    rigidity: "着地後9",
    hit: "",
    guard: "",
    damage: "60",
    stan: "70",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "(ジャンプ中に) ↓ + K"
  },
  {
    name: "ナイルの氾濫",
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
    command: "(近距離で) → OR + 弱P 弱K"
  },
  {
    name: "オーバーザピラミッド",
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
    command: "(近距離で) ← + 弱P 弱K"
  },
  {
    name: "[VS1]ソウルリフレクト・カマル",
    outbreak: "9",
    persistence: "3(※8)",
    rigidity: "37",
    hit: "D",
    guard: "-18",
    damage: "80",
    stan: "150",
    remarks: "※飛び道具反射判定の値\n飛び道具反射可能。EX以上は反射できない",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅠ選択時) 中P 中K"
  },
  {
    name: "[VS1]ソウルリフレクト・ステラ",
    outbreak: "14",
    persistence: "3(※15)",
    rigidity: "35",
    hit: "D",
    guard: "-16",
    damage: "80",
    stan: "150",
    remarks: "※飛び道具反射判定の値\n飛び道具反射可能。EX以上は反射できない",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅠ選択時) ↓ + 中P 中K"
  },
  {
    name: "[VS2]ソウルスパイラル",
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
    command: "(VスキルⅡ選択時) 中P 中K"
  },
  {
    name: "ジェフティの知恵",
    outbreak: "1",
    persistence: "",
    rigidity: "4",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "Vゲージタイマー+2000F",
    vtrigger: 1,
    type: "vsystem",
    command: "強P 強K"
  },
  {
    name: "ジェフティの知恵(飛び道具)",
    outbreak: "10",
    persistence: "",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "20",
    stan: "20",
    remarks:
      "ボタン放し時に各ボタンに対応した飛び道具が発生\n立ち・しゃがみ・空中で軌道が異なる\nガード・やられ・ダウン中・通常技の出始め等、特定の状況下では発動しない",
    vtrigger: 1,
    type: "vsystem",
    command: ""
  },
  {
    name: "獅子の左目",
    outbreak: "",
    persistence: "",
    rigidity: "全体43",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "1F～22F 打撃&飛び道具無敵\n23F～39F 完全無敵\n                                                距離問わず相手の裏に回る\n発動時スタン値200回復",
    vtrigger: 1,
    type: "vsystem",
    command: "(ガード中に) → + 弱P"
  },
  {
    name: "Vシフト",
    outbreak: "1",
    persistence: "9",
    rigidity: "22",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "1F～16F 投げ無敵\n                                                1～9F　相手の打撃と飛び道具を避ける判定（回避時Vゲージ150増加）\n硬直中は被カウンター判定\n攻撃回避時、硬直終了まで完全無敵、全体フレームが17Fになる\n攻撃回避時、Vシフトブレイクに移行可能",
    vtrigger: 1,
    type: "vsystem",
    command: "強P 中K"
  },
  {
    name: "豊穣のシストラム",
    outbreak: "8",
    persistence: "3",
    rigidity: "23",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "0",
    remarks: "1F～10F 完全無敵",
    vtrigger: 1,
    type: "vsystem",
    command: "強P 中K ▶ (V-シフトで攻撃回避後に) 強P 中K"
  },
  {
    name: "弱 ソウルスフィア",
    outbreak: "14",
    persistence: "26",
    rigidity: "全体38",
    hit: "2",
    guard: "-8",
    damage: "40",
    stan: "70",
    remarks: "CAキャンセルは根元付近のみ",
    vtrigger: 1,
    type: "special",
    command: "(水晶玉所持時に) ↓↘→ + 弱P"
  },
  {
    name: "中 ソウルスフィア",
    outbreak: "14",
    persistence: "33",
    rigidity: "全体43",
    hit: "1",
    guard: "-11",
    damage: "40",
    stan: "70",
    remarks: "CAキャンセルは根元付近のみ",
    vtrigger: 1,
    type: "special",
    command: "(水晶玉所持時に) ↓↘→ + 中P"
  },
  {
    name: "強 ソウルスフィア",
    outbreak: "14",
    persistence: "33",
    rigidity: "全体36",
    hit: "4",
    guard: "-4",
    damage: "40",
    stan: "70",
    remarks: "しゃがみの相手にヒットしない",
    vtrigger: 1,
    type: "special",
    command: "(水晶玉所持時に) ↓↘→ + 強P"
  },
  {
    name: "EX 弱 ソウルスフィア",
    outbreak: "19",
    persistence: "21",
    rigidity: "全体47",
    hit: "7",
    guard: "3",
    damage: "60",
    stan: "0",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(水晶玉所持時に) ↓↘→ + 弱P 中P"
  },
  {
    name: "EX 中 ソウルスフィア",
    outbreak: "10",
    persistence: "21",
    rigidity: "全体51",
    hit: "D",
    guard: "-10",
    damage: "150",
    stan: "200",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(水晶玉所持時に) ↓↘→ + 弱P 強P"
  },
  {
    name: "EX 強 ソウルスフィア",
    outbreak: "10",
    persistence: "21",
    rigidity: "全体40",
    hit: "0",
    guard: "-9",
    damage: "150(※40)",
    stan: "200(※70)",
    remarks: "空中の相手にヒットした場合、ロック技に移行\n※地上ヒット時",
    vtrigger: 1,
    type: "special",
    command: "(水晶玉所持時に) ↓↘→ + 中P 強P"
  },
  {
    name: "弱 太陽の守護者",
    outbreak: "6",
    persistence: "15",
    rigidity: "21+着地後30",
    hit: "D",
    guard: "",
    damage: "100",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(水晶玉所持時に) →↓↘ + 弱K"
  },
  {
    name: "中 太陽の守護者",
    outbreak: "8",
    persistence: "15",
    rigidity: "21+着地後30",
    hit: "D",
    guard: "",
    damage: "120",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(水晶玉所持時に) →↓↘ + 中K"
  },
  {
    name: "強 太陽の守護者",
    outbreak: "10",
    persistence: "15",
    rigidity: "21+着地後30",
    hit: "D",
    guard: "",
    damage: "140",
    stan: "200",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(水晶玉所持時に) →↓↘ + 強K"
  },
  {
    name: "EX 太陽の守護者",
    outbreak: "6",
    persistence: "15",
    rigidity: "21+着地後30",
    hit: "D",
    guard: "",
    damage: "150",
    stan: "200",
    remarks: "5F～20F 完全無敵",
    vtrigger: 1,
    type: "special",
    command: "(水晶玉所持時に) →↓↘ + K K"
  },
  {
    name: "ウン・ネフェル",
    outbreak: "1+3",
    persistence: "16",
    rigidity: "65",
    hit: "D",
    guard: "-46",
    damage: "330",
    stan: "0",
    remarks: "1F～20F 完全無敵",
    vtrigger: 1,
    type: "ca",
    command: "↓↘→ ↓↘→ + P"
  },
  {
    name: "立ち弱P",
    outbreak: "5",
    persistence: "4",
    rigidity: "8(※11)",
    hit: "5",
    guard: "3",
    damage: "30",
    stan: "70",
    remarks: "※空振り時",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち中P",
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
    name: "立ち強P",
    outbreak: "12",
    persistence: "9",
    rigidity: "19",
    hit: "-6",
    guard: "-10",
    damage: "80",
    stan: "150",
    remarks: "クラッシュカウンター対応 (D)",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち弱K",
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
    name: "立ち中K",
    outbreak: "8",
    persistence: "3",
    rigidity: "16",
    hit: "2",
    guard: "-2",
    damage: "60",
    stan: "100",
    remarks: "S※ソウルスフィア・アンク、ソウルスパークでのみキャンセル可能",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強K",
    outbreak: "11",
    persistence: "6",
    rigidity: "23",
    hit: "-4",
    guard: "-8",
    damage: "90",
    stan: "150",
    remarks:
      "クラッシュカウンター対応 (膝)\n                                                強制立ち効果",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱P",
    outbreak: "4",
    persistence: "4",
    rigidity: "8(※11)",
    hit: "4",
    guard: "2",
    damage: "30",
    stan: "70",
    remarks: "※空振り時",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中P",
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
    name: "しゃがみ強P",
    outbreak: "9",
    persistence: "5",
    rigidity: "19",
    hit: "-1",
    guard: "-5",
    damage: "80(※70)",
    stan: "150",
    remarks:
      "クラッシュカウンター対応 (D)\n                                                強制立ち効果\n                                                                                                                ※持続2F目以降",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱K",
    outbreak: "4",
    persistence: "2",
    rigidity: "9",
    hit: "4",
    guard: "1",
    damage: "20",
    stan: "70",
    remarks:
      "S※ソウルスフィア・アンク、ソウルスパークでのみキャンセル可能\n立ち弱P,しゃがみ弱Pに連打キャンセル可能",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中K",
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
    name: "しゃがみ強K",
    outbreak: "11",
    persistence: "3",
    rigidity: "33",
    hit: "D",
    guard: "-16",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応 (D)",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "ジャンプ弱P",
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
    name: "ジャンプ中P",
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
    name: "ジャンプ強P",
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
    name: "ジャンプ弱K",
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
    name: "ジャンプ中K",
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
    name: "ジャンプ強K",
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
    name: "罪人を喰らう顎",
    outbreak: "27",
    persistence: "2",
    rigidity: "23",
    hit: "1",
    guard: "-7",
    damage: "60",
    stan: "100",
    remarks: "S※初段かつソウルスフィア・アンク、ソウルスパークでのみキャンセル可能",
    vtrigger: 2,
    type: "unique",
    command: "→ + 中K"
  },
  {
    name: "黒犬の審判",
    outbreak: "11",
    persistence: "11",
    rigidity: "18",
    hit: "-6",
    guard: "-10",
    damage: "50",
    stan: "100",
    remarks: "11～35F頭付近に弾無敵",
    vtrigger: 2,
    type: "unique",
    command: "↘ + 中K"
  },
  {
    name: "カーメンキック",
    outbreak: "12",
    persistence: "着地まで",
    rigidity: "着地後9",
    hit: "",
    guard: "",
    damage: "60",
    stan: "70",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "(ジャンプ中に) ↓ + K"
  },
  {
    name: "ナイルの氾濫",
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
    command: "(近距離で) → OR + 弱P 弱K"
  },
  {
    name: "オーバーザピラミッド",
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
    command: "(近距離で) ← + 弱P 弱K"
  },
  {
    name: "[VS1]ソウルリフレクト・カマル",
    outbreak: "9",
    persistence: "3(※8)",
    rigidity: "37",
    hit: "D",
    guard: "-18",
    damage: "80",
    stan: "150",
    remarks:
      "※飛び道具反射判定の値\n飛び道具反射可能。EX以上は反射できない\nS※ジェフティの審判、ジェフティの預言でキャンセル可能",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅠ選択時) 中P 中K"
  },
  {
    name: "[VS1]ソウルリフレクト・ステラ",
    outbreak: "14",
    persistence: "3(※15)",
    rigidity: "35",
    hit: "D",
    guard: "-16",
    damage: "80",
    stan: "150",
    remarks:
      "※飛び道具反射判定の値\n飛び道具反射可能。EX以上は反射できない\nS※ジェフティの審判、ジェフティの預言でキャンセル可能",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅠ選択時) ↓ + 中P 中K"
  },
  {
    name: "[VS2]ソウルスパイラル",
    outbreak: "19",
    persistence: "10",
    rigidity: "24",
    hit: "D",
    guard: "-14",
    damage: "70",
    stan: "120",
    remarks: "S※ジェフティの審判、ジェフティの預言でキャンセル可能",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K"
  },
  {
    name: "ジェフティの預言",
    outbreak: "1",
    persistence: "",
    rigidity: "4",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "Vゲージタイマー+2000F\n                                                                                                                                                                                発動中、専用の必殺技が追加",
    vtrigger: 2,
    type: "vsystem",
    command: "強P 強K"
  },
  {
    name: "獅子の左目",
    outbreak: "",
    persistence: "",
    rigidity: "全体43",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "1F～22F 打撃&飛び道具無敵\n23F～39F 完全無敵\n                                                距離問わず相手の裏に回る\n発動時スタン値200回復",
    vtrigger: 2,
    type: "vsystem",
    command: "(ガード中に) → + 弱P"
  },
  {
    name: "Vシフト",
    outbreak: "1",
    persistence: "9",
    rigidity: "22",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "1F～16F 投げ無敵\n                                                1～9F　相手の打撃と飛び道具を避ける判定（回避時Vゲージ150増加）\n硬直中は被カウンター判定\n攻撃回避時、硬直終了まで完全無敵、全体フレームが17Fになる\n攻撃回避時、Vシフトブレイクに移行可能",
    vtrigger: 2,
    type: "vsystem",
    command: "強P 中K"
  },
  {
    name: "豊穣のシストラム",
    outbreak: "8",
    persistence: "3",
    rigidity: "23",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "0",
    remarks: "1F～10F 完全無敵",
    vtrigger: 2,
    type: "vsystem",
    command: "強P 中K ▶ (V-シフトで攻撃回避後に) 強P 中K"
  },
  {
    name: "弱 ソウルスフィア",
    outbreak: "14",
    persistence: "26",
    rigidity: "全体38",
    hit: "2",
    guard: "-8",
    damage: "40",
    stan: "70",
    remarks: "CAキャンセルは根元付近のみ\nS※ジェフティの審判、ジェフティの預言でキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "(水晶玉所持時に) ↓↘→ + 弱P"
  },
  {
    name: "中 ソウルスフィア",
    outbreak: "14",
    persistence: "33",
    rigidity: "全体43",
    hit: "1",
    guard: "-11",
    damage: "40",
    stan: "70",
    remarks: "CAキャンセルは根元付近のみ\nS※ジェフティの審判、ジェフティの預言でキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "(水晶玉所持時に) ↓↘→ + 中P"
  },
  {
    name: "強 ソウルスフィア",
    outbreak: "14",
    persistence: "33",
    rigidity: "全体36",
    hit: "4",
    guard: "-4",
    damage: "40",
    stan: "70",
    remarks:
      "しゃがみの相手にヒットしない\n                                                                                                S※ジェフティの審判、ジェフティの預言でキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "(水晶玉所持時に) ↓↘→ + 強P"
  },
  {
    name: "EX 弱 ソウルスフィア",
    outbreak: "19",
    persistence: "21",
    rigidity: "全体47",
    hit: "7",
    guard: "3",
    damage: "60",
    stan: "0",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "(水晶玉所持時に) ↓↘→ + 弱P 中P"
  },
  {
    name: "EX 中 ソウルスフィア",
    outbreak: "10",
    persistence: "21",
    rigidity: "全体51",
    hit: "D",
    guard: "-10",
    damage: "150",
    stan: "200",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "(水晶玉所持時に) ↓↘→ + 弱P 強P"
  },
  {
    name: "EX 強 ソウルスフィア",
    outbreak: "10",
    persistence: "21",
    rigidity: "全体40",
    hit: "0",
    guard: "-9",
    damage: "150(※40)",
    stan: "200(※70)",
    remarks:
      "空中の相手にヒットした場合、ロック技に移行\n※地上ヒット時\nS※地上ヒット・ガード時のみジェフティの審判、ジェフティの預言でキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "(水晶玉所持時に) ↓↘→ + 中P 強P"
  },
  {
    name: "弱 太陽の守護者",
    outbreak: "6",
    persistence: "15",
    rigidity: "21+着地後30",
    hit: "D",
    guard: "",
    damage: "100",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "(水晶玉所持時に) →↓↘ + 弱K"
  },
  {
    name: "中 太陽の守護者",
    outbreak: "8",
    persistence: "15",
    rigidity: "21+着地後30",
    hit: "D",
    guard: "",
    damage: "120",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "(水晶玉所持時に) →↓↘ + 中K"
  },
  {
    name: "強 太陽の守護者",
    outbreak: "10",
    persistence: "15",
    rigidity: "21+着地後30",
    hit: "D",
    guard: "",
    damage: "140",
    stan: "200",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "(水晶玉所持時に) →↓↘ + 強K"
  },
  {
    name: "EX 太陽の守護者",
    outbreak: "6",
    persistence: "15",
    rigidity: "21+着地後30",
    hit: "D",
    guard: "",
    damage: "150",
    stan: "200",
    remarks: "5F～20F 完全無敵",
    vtrigger: 2,
    type: "special",
    command: "(水晶玉所持時に) →↓↘ + K K"
  },
  {
    name: "V弱 ジェフティの審判",
    outbreak: "11",
    persistence: "",
    rigidity: "全体37",
    hit: "23",
    guard: "12",
    damage: "120",
    stan: "120",
    remarks:
      "Vゲージタイマー1000F消費\n                                                                                                                                                                                硬直差は立ち状態のリュウに密着で当てた場合の数値\nVトリガーキャンセルできる通常技からキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "(VトリガーⅡ発動中) ↓↙← + 弱P"
  },
  {
    name: "V中 ジェフティの審判",
    outbreak: "11",
    persistence: "",
    rigidity: "全体37",
    hit: "11",
    guard: "8",
    damage: "120",
    stan: "120",
    remarks:
      "Vゲージタイマー1000F消費\n                                                                                                                                                                                硬直差は立ち状態のリュウに密着で当てた場合の数値\nVトリガーキャンセルできる通常技からキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "(VトリガーⅡ発動中) ↓↙← + 中P"
  },
  {
    name: "V強 ジェフティの審判",
    outbreak: "11",
    persistence: "",
    rigidity: "全体37",
    hit: "8",
    guard: "2",
    damage: "120",
    stan: "120",
    remarks:
      "Vゲージタイマー1000F消費\n                                                                                                                                                                                硬直差は立ち状態のリュウに密着で当てた場合の数値\nVトリガーキャンセルできる通常技からキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "(VトリガーⅡ発動中) ↓↙← + 強P"
  },
  {
    name: "Vジェフティの預言",
    outbreak: "",
    persistence: "",
    rigidity: "全体42",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "Vトリガーキャンセルできる通常技からキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "(VトリガーⅡ発動中) 強P 強K"
  },
  {
    name: "ウン・ネフェル",
    outbreak: "1+3",
    persistence: "16",
    rigidity: "65",
    hit: "D",
    guard: "-46",
    damage: "330",
    stan: "0",
    remarks: "1F～20F 完全無敵",
    vtrigger: 2,
    type: "ca",
    command: "↓↘→ ↓↘→ + P"
  }
];

export { menat };
