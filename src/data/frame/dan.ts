const dan = [
  {
    name: "立ち弱P",
    outbreak: "4",
    persistence: "3",
    rigidity: "5",
    hit: "4",
    guard: "3",
    damage: "30",
    stan: "50",
    remarks:
      "連打キャンセル対応\n                                                                                                                                VS※VS2のみキャンセル可能",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち中P",
    outbreak: "6",
    persistence: "3",
    rigidity: "13",
    hit: "6",
    guard: "3",
    damage: "60",
    stan: "80",
    remarks: "VS※VS2のみキャンセル可能",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強P",
    outbreak: "10",
    persistence: "3",
    rigidity: "20",
    hit: "4",
    guard: "-2",
    damage: "70",
    stan: "120",
    remarks:
      "クラッシュカウンター対応 (+9F)\n                                                                                                                                                                VS※VS2のみキャンセル可能",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち弱K",
    outbreak: "5",
    persistence: "3",
    rigidity: "9",
    hit: "1",
    guard: "0",
    damage: "30",
    stan: "50",
    remarks: "VS※VS2のみキャンセル可能",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち中K",
    outbreak: "8",
    persistence: "3",
    rigidity: "16(※18)",
    hit: "1",
    guard: "-2",
    damage: "60",
    stan: "80",
    remarks: "VS※VS2のみキャンセル可能\n※空振り時",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強K",
    outbreak: "13 ",
    persistence: "3",
    rigidity: "22(※32)",
    hit: "2",
    guard: "-4",
    damage: "90",
    stan: "120",
    remarks: "VS※VS2のみキャンセル可能\n※空振り時",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱P",
    outbreak: "4",
    persistence: "2",
    rigidity: "6",
    hit: "4",
    guard: "2",
    damage: "30",
    stan: "50",
    remarks:
      "連打キャンセル対応\n                                                                                                                                VS※VS2のみキャンセル可能",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中P",
    outbreak: "6",
    persistence: "3",
    rigidity: "11(※13)",
    hit: "5",
    guard: "1",
    damage: "60",
    stan: "80",
    remarks: "VS※VS2のみキャンセル可能\n※空振り時",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ強P",
    outbreak: "8",
    persistence: "5",
    rigidity: "21",
    hit: "3",
    guard: "-4",
    damage: "80",
    stan: "120",
    remarks: "VS※VS2のみキャンセル可能\n持続の2F目までキャンセル可能",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱K",
    outbreak: "4",
    persistence: "2",
    rigidity: "7",
    hit: "3",
    guard: "1",
    damage: "20",
    stan: "50",
    remarks:
      "連打キャンセル対応\n                                                                                                                                VS※VS2のみキャンセル可能",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中K",
    outbreak: "7",
    persistence: "2",
    rigidity: "14",
    hit: "1",
    guard: "-1",
    damage: "50",
    stan: "80",
    remarks: "VS※VS2のみキャンセル可能",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ強K",
    outbreak: "9",
    persistence: "2",
    rigidity: "22",
    hit: "D",
    guard: "-12",
    damage: "90",
    stan: "120",
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
    damage: "30",
    stan: "70",
    remarks: "",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ中P",
    outbreak: "6",
    persistence: "3",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "60",
    stan: "100",
    remarks: "VS※VS1のみキャンセル可能\n空中ヒット時吹き飛びやられ",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ強P",
    outbreak: "8",
    persistence: "5",
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
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "30",
    stan: "70",
    remarks: "",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ中K",
    outbreak: "8",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "60",
    stan: "100",
    remarks: "めくり性能",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ強K",
    outbreak: "10",
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
    name: "カチ割り手刀",
    outbreak: "22",
    persistence: "3",
    rigidity: "24",
    hit: "1",
    guard: "-7",
    damage: "80",
    stan: "120",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "→ + 強P"
  },
  {
    name: "サイキョー顎砕き蹴り",
    outbreak: "11",
    persistence: "4",
    rigidity: "20",
    hit: "5",
    guard: "3",
    damage: "80",
    stan: "120",
    remarks: "クラッシュカウンター対応 (膝)",
    vtrigger: 1,
    type: "unique",
    command: "← + 強K"
  },
  {
    name: "サイキョー体崩し",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "D",
    guard: "",
    damage: "120",
    stan: "130",
    remarks: "",
    vtrigger: 1,
    type: "throw",
    command: "(近距離で) → OR + 弱P 弱K"
  },
  {
    name: "サイキョー払い腰",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "D",
    guard: "",
    damage: "130",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "throw",
    command: "(近距離で) ← + 弱P 弱K"
  },
  {
    name: "[VS1]サイキョー流無頼流転の構え・壱式",
    outbreak: "27",
    persistence: "5",
    rigidity: "18",
    hit: "2",
    guard: "-2",
    damage: "10",
    stan: "10",
    remarks: "攻撃判定発生時に相手のVゲージが20増加する\n動作中常に被カウンター判定",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅠ選択時) 中P 中K"
  },
  {
    name: "[VS1]サイキョー流無頼流転の構え・弐式",
    outbreak: "",
    persistence: "",
    rigidity: "全体55",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "29F目に相手のVゲージが20増加する\n動作中常に被カウンター判定",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅠ選択時) ← + 中P 中K"
  },
  {
    name: "[VS1]サイキョー流無頼流転の構え・参式",
    outbreak: "11",
    persistence: "4",
    rigidity: "着地後8",
    hit: "",
    guard: "",
    damage: "10",
    stan: "10",
    remarks: "攻撃判定発生時に相手のVゲージが20増加する\n動作中特殊被カウンター判定",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅠ選択時) (ジャンプ中に) 中P 中K"
  },
  {
    name: "[VS2]サイキョー流漢吼え・壱式",
    outbreak: "14",
    persistence: "2",
    rigidity: "25（※34）",
    hit: "-2",
    guard: "-6",
    damage: "30",
    stan: "50",
    remarks:
      "発動時に相手のVゲージが20増加する\nしゃがみ強K以外の通常技からキャンセル発動可能\n通常技キャンセルから発動した場合、11F目を更に通常技・必殺技でキャンセル可能\nキャンセル版VS2から発動した通常技はパラメータが通常の半分になる\nキャンセル版VS2から立ち強Pはクラッシュカウンターの効果が吹き飛びダウンになる\n動作中常に被カウンター判定",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K"
  },
  {
    name: "[VS2]サイキョー流漢吼え・弐式",
    outbreak: "14",
    persistence: "2",
    rigidity: "25（※34）",
    hit: "-2",
    guard: "-6",
    damage: "30",
    stan: "50",
    remarks:
      "発動時に相手のVゲージが20増加する\nしゃがみ強K以外の通常技からキャンセル発動可能\n通常技キャンセルから発動した場合、11F目を更に通常技・必殺技でキャンセル可能\nキャンセル版VS2から発動した通常技はパラメータが通常の半分になる\nキャンセル版VS2から立ち強Pはクラッシュカウンターの効果が吹き飛びダウンになる\n動作中常に被カウンター判定",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅡ選択時) ↓ + 中P 中K"
  },
  {
    name: "覇王我道拳",
    outbreak: "13",
    persistence: "50",
    rigidity: "全体82",
    hit: "D",
    guard: "3",
    damage: "100",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "vsystem",
    command: "強P 強K"
  },
  {
    name: "覇王我道拳(ボタンホールド)",
    outbreak: "94",
    persistence: "",
    rigidity: "全体156",
    hit: "D",
    guard: "GB",
    damage: "220",
    stan: "150",
    remarks: "ヒット時壁バウンド効果",
    vtrigger: 1,
    type: "vsystem",
    command: "強P 強K (ボタンホールド)"
  },
  {
    name: "サイキョー流回避術",
    outbreak: "",
    persistence: "",
    rigidity: "全体45",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "1F～40F 打撃&飛び道具無敵\n                                                発動時スタン値200回復",
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
    name: "サイキョー胴貫き蹴り",
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
    name: "弱 我道拳",
    outbreak: "14",
    persistence: "10",
    rigidity: "全体43",
    hit: "2",
    guard: "-2",
    damage: "50",
    stan: "80",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 弱P"
  },
  {
    name: "中 我道拳",
    outbreak: "14",
    persistence: "9",
    rigidity: "全体43",
    hit: "1",
    guard: "-2",
    damage: "50",
    stan: "80",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 中P"
  },
  {
    name: "強 我道拳",
    outbreak: "14",
    persistence: "8",
    rigidity: "全体43",
    hit: "0",
    guard: "-2",
    damage: "50",
    stan: "80",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 強P"
  },
  {
    name: "弱 我道拳(強化版)",
    outbreak: "12",
    persistence: "20",
    rigidity: "全体39",
    hit: "D",
    guard: "1",
    damage: "60",
    stan: "150",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 弱P (発動時に確率で発生)"
  },
  {
    name: "中 我道拳(強化版)",
    outbreak: "12",
    persistence: "18",
    rigidity: "全体39",
    hit: "D",
    guard: "1",
    damage: "60",
    stan: "150",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 弱P (発動時に確率で発生)"
  },
  {
    name: "強 我道拳(強化版)",
    outbreak: "12",
    persistence: "16",
    rigidity: "全体39",
    hit: "D",
    guard: "1",
    damage: "60",
    stan: "150",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 弱P (発動時に確率で発生)"
  },
  {
    name: "弱 我道拳(ボタンホールド)",
    outbreak: "32",
    persistence: "30",
    rigidity: "全体59",
    hit: "10",
    guard: "4",
    damage: "80",
    stan: "100",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 弱P (ボタンホールド)"
  },
  {
    name: "中 我道拳(ボタンホールド)",
    outbreak: "32",
    persistence: "28",
    rigidity: "全体59",
    hit: "10",
    guard: "4",
    damage: "80",
    stan: "100",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 中P (ボタンホールド)"
  },
  {
    name: "強 我道拳(ボタンホールド)",
    outbreak: "32",
    persistence: "26",
    rigidity: "全体59",
    hit: "10",
    guard: "4",
    damage: "80",
    stan: "100",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 強P (ボタンホールド)"
  },
  {
    name: "EX我道拳",
    outbreak: "16",
    persistence: "10",
    rigidity: "全体44",
    hit: "5",
    guard: "2",
    damage: "70",
    stan: "100",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + P P"
  },
  {
    name: "弱 晃龍拳",
    outbreak: "4",
    persistence: "8",
    rigidity: "24+着地後15",
    hit: "D",
    guard: "-29",
    damage: "100(※50)",
    stan: "120(※80)",
    remarks:
      "1F～5F 投げ無敵\n                                                VS※VS1のみキャンセル可能\n※持続3F目以降",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + 弱P"
  },
  {
    name: "中 晃龍拳",
    outbreak: "5",
    persistence: "8",
    rigidity: "26+着地後15",
    hit: "D",
    guard: "-31",
    damage: "110(※50)",
    stan: "120(※80)",
    remarks:
      "1F～6F 空中判定の攻撃に対して無敵\n                                VS※VS1のみキャンセル可能\n※持続3F目以降",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + 中P"
  },
  {
    name: "強 晃龍拳",
    outbreak: "6",
    persistence: "8",
    rigidity: "30+着地後15",
    hit: "D",
    guard: "-35",
    damage: "120(※50)",
    stan: "120(※80)",
    remarks:
      "6F～9F 打撃&飛び道具無敵\n                                                VS※VS1のみキャンセル可能\n※持続3F目以降",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + 強P"
  },
  {
    name: "EX晃龍拳",
    outbreak: "4",
    persistence: "8",
    rigidity: "32+着地後16",
    hit: "D",
    guard: "-38",
    damage: "140(※60)",
    stan: "150(※100)",
    remarks:
      "1F～5F 完全無敵\n                                                VS※VS1のみキャンセル可能\n※持続3F目以降",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + P P"
  },
  {
    name: "弱 断空脚",
    outbreak: "19",
    persistence: "9",
    rigidity: "7+着地後7",
    hit: "-1",
    guard: "-5",
    damage: "50",
    stan: "80",
    remarks: "VS※VS1のみキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 弱K"
  },
  {
    name: "中 断空脚",
    outbreak: "12",
    persistence: "6",
    rigidity: "10+着地後10",
    hit: "2",
    guard: "-2",
    damage: "70",
    stan: "100",
    remarks: "VS※VS1のみキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 中K"
  },
  {
    name: "強 断空脚",
    outbreak: "16",
    persistence: "3/（9）/3/（10）/3",
    rigidity: "12+着地後11",
    hit: "D",
    guard: "-4",
    damage: "90",
    stan: "120",
    remarks: "VS※VS1のみキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 強K"
  },
  {
    name: "EX断空脚",
    outbreak: "10",
    persistence: "6",
    rigidity: "12+着地後6",
    hit: "D",
    guard: "-2",
    damage: "140",
    stan: "150",
    remarks: "VS※VS1のみキャンセル可能\n初段ヒット時のみ2段目に派生",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + K K"
  },
  {
    name: "弱 弾烈拳",
    outbreak: "10",
    persistence: "2/（4）/2/（5）/2",
    rigidity: "27",
    hit: "D",
    guard: "-10",
    damage: "80(※60)",
    stan: "80(※60)",
    remarks: "VS※VS1のみキャンセル可能\n初段ヒット時ロック演出\n※初段がヒットしなかった場合",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 弱P"
  },
  {
    name: "中 弾烈拳",
    outbreak: "14",
    persistence: "2/（4）/2/（5）/2",
    rigidity: "27",
    hit: "D",
    guard: "-10",
    damage: "90(※60)",
    stan: "100(※60)",
    remarks: "VS※VS1のみキャンセル可能\n初段ヒット時ロック演出\n※初段がヒットしなかった場合",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 中P"
  },
  {
    name: "強 弾烈拳",
    outbreak: "18",
    persistence: "2/（4）/2/（5）/2",
    rigidity: "27",
    hit: "D",
    guard: "-10",
    damage: "100(※60)",
    stan: "120(※60)",
    remarks: "VS※VS1のみキャンセル可能\n初段ヒット時ロック演出\n※初段がヒットしなかった場合",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 強P"
  },
  {
    name: "EX弾烈拳",
    outbreak: "12",
    persistence: "2/（4）/2/（6）/2",
    rigidity: "27",
    hit: "D",
    guard: "-10",
    damage: "80(※60)",
    stan: "150(※60)",
    remarks: "VS※VS1のみキャンセル可能\n初段ヒット時ロック演出\n※初段がヒットしなかった場合",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + P P"
  },
  {
    name: "必勝無頼拳",
    outbreak: "6",
    persistence: "5",
    rigidity: "47",
    hit: "D",
    guard: "-30",
    damage: "340",
    stan: "0",
    remarks:
      "1F～10F 完全無敵\n                                                初段ヒット時ロック演出",
    vtrigger: 1,
    type: "ca",
    command: "↓↘→ ↓↘→ + P"
  },
  {
    name: "立ち弱P",
    outbreak: "4",
    persistence: "3",
    rigidity: "5",
    hit: "4",
    guard: "3",
    damage: "30",
    stan: "50",
    remarks:
      "連打キャンセル対応\n                                                                                                                                VS※VS2のみキャンセル可能",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち中P",
    outbreak: "6",
    persistence: "3",
    rigidity: "13",
    hit: "6",
    guard: "3",
    damage: "60",
    stan: "80",
    remarks: "VS※VS2のみキャンセル可能",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強P",
    outbreak: "10",
    persistence: "3",
    rigidity: "20",
    hit: "4",
    guard: "-2",
    damage: "70",
    stan: "120",
    remarks:
      "クラッシュカウンター対応 (+9F)\n                                                                                                                                                                VS※VS2のみキャンセル可能",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち弱K",
    outbreak: "5",
    persistence: "3",
    rigidity: "9",
    hit: "1",
    guard: "0",
    damage: "30",
    stan: "50",
    remarks: "VS※VS2のみキャンセル可能",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち中K",
    outbreak: "8",
    persistence: "3",
    rigidity: "16(※18)",
    hit: "1",
    guard: "-2",
    damage: "60",
    stan: "80",
    remarks: "VS※VS2のみキャンセル可能\n※空振り時",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強K",
    outbreak: "13 ",
    persistence: "3",
    rigidity: "22(※32)",
    hit: "2",
    guard: "-4",
    damage: "90",
    stan: "120",
    remarks: "VS※VS2のみキャンセル可能\n※空振り時",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱P",
    outbreak: "4",
    persistence: "2",
    rigidity: "6",
    hit: "4",
    guard: "2",
    damage: "30",
    stan: "50",
    remarks: "VS※VS2のみキャンセル可能",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中P",
    outbreak: "6",
    persistence: "3",
    rigidity: "11(※13)",
    hit: "5",
    guard: "1",
    damage: "60",
    stan: "80",
    remarks: "VS※VS2のみキャンセル可能\n※空振り時",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ強P",
    outbreak: "8",
    persistence: "5",
    rigidity: "21",
    hit: "3",
    guard: "-4",
    damage: "80",
    stan: "120",
    remarks:
      "連打キャンセル対応\n                                                                                                                                VS※VS2のみキャンセル可能\n持続の2F目までキャンセル可能",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱K",
    outbreak: "4",
    persistence: "2",
    rigidity: "7",
    hit: "3",
    guard: "1",
    damage: "20",
    stan: "50",
    remarks: "VS※VS2のみキャンセル可能",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中K",
    outbreak: "7",
    persistence: "2",
    rigidity: "14",
    hit: "1",
    guard: "-1",
    damage: "50",
    stan: "80",
    remarks: "VS※VS2のみキャンセル可能",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ強K",
    outbreak: "9",
    persistence: "2",
    rigidity: "22",
    hit: "D",
    guard: "-12",
    damage: "90",
    stan: "120",
    remarks: "クラッシュカウンター対応 (D)\n                                連打キャンセル対応",
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
    damage: "30",
    stan: "70",
    remarks: "",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ中P",
    outbreak: "6",
    persistence: "3",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "60",
    stan: "100",
    remarks: "VS※VS1のみキャンセル可能\n空中ヒット時吹き飛びやられ",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ強P",
    outbreak: "8",
    persistence: "5",
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
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "30",
    stan: "70",
    remarks: "",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ中K",
    outbreak: "8",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "60",
    stan: "100",
    remarks: "めくり性能",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ強K",
    outbreak: "10",
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
    name: "カチ割り手刀",
    outbreak: "22",
    persistence: "3",
    rigidity: "24",
    hit: "1",
    guard: "-7",
    damage: "80",
    stan: "120",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "→ + 強P"
  },
  {
    name: "サイキョー顎砕き蹴り",
    outbreak: "11",
    persistence: "4",
    rigidity: "20",
    hit: "5",
    guard: "3",
    damage: "80",
    stan: "120",
    remarks: "クラッシュカウンター対応 (膝)",
    vtrigger: 2,
    type: "unique",
    command: "← + 強K"
  },
  {
    name: "サイキョー体崩し",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "D",
    guard: "",
    damage: "120",
    stan: "130",
    remarks: "",
    vtrigger: 2,
    type: "throw",
    command: "(近距離で) → OR + 弱P 弱K"
  },
  {
    name: "サイキョー払い腰",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "D",
    guard: "",
    damage: "130",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "throw",
    command: "(近距離で) ← + 弱P 弱K"
  },
  {
    name: "[VS1]サイキョー流無頼流転の構え・壱式",
    outbreak: "27",
    persistence: "5",
    rigidity: "18",
    hit: "2",
    guard: "-2",
    damage: "10",
    stan: "10",
    remarks: "攻撃判定発生時に相手のVゲージが20増加する\n動作中常に被カウンター判定",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅠ選択時) 中P 中K"
  },
  {
    name: "[VS1]サイキョー流無頼流転の構え・弐式",
    outbreak: "",
    persistence: "",
    rigidity: "全体55",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "29F目に相手のVゲージが20増加する\n動作中常に被カウンター判定",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅠ選択時) ← + 中P 中K"
  },
  {
    name: "[VS1]サイキョー流無頼流転の構え・参式",
    outbreak: "11",
    persistence: "4",
    rigidity: "着地後8",
    hit: "",
    guard: "",
    damage: "10",
    stan: "10",
    remarks: "攻撃判定発生時に相手のVゲージが20増加する\n動作中特殊被カウンター判定",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅠ選択時) (ジャンプ中に) 中P 中K"
  },
  {
    name: "[VS2]サイキョー流漢吼え・壱式",
    outbreak: "14",
    persistence: "2",
    rigidity: "25（※34）",
    hit: "-2",
    guard: "-6",
    damage: "30",
    stan: "50",
    remarks:
      "発動時に相手のVゲージが20増加する\nしゃがみ強K以外の通常技からキャンセル発動可能\n通常技キャンセルから発動した場合、11F目を更に通常技・必殺技でキャンセル可能\nキャンセル版VS2から発動した通常技はパラメータが通常の半分になる\nキャンセル版VS2から立ち強Pはクラッシュカウンターの効果が吹き飛びダウンになる\n動作中常に被カウンター判定",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K"
  },
  {
    name: "[VS2]サイキョー流漢吼え・弐式",
    outbreak: "14",
    persistence: "2",
    rigidity: "25（※34）",
    hit: "-2",
    guard: "-6",
    damage: "30",
    stan: "50",
    remarks:
      "発動時に相手のVゲージが20増加する\nしゃがみ強K以外の通常技からキャンセル発動可能\n通常技キャンセルから発動した場合、11F目を更に通常技・必殺技でキャンセル可能\nキャンセル版VS2から発動した通常技はパラメータが通常の半分になる\nキャンセル版VS2から立ち強Pはクラッシュカウンターの効果が吹き飛びダウンになる\n動作中常に被カウンター判定",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅡ選択時) ↓ + 中P 中K"
  },
  {
    name: "天地サイキョーの型",
    outbreak: "",
    persistence: "",
    rigidity: "全体5",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "Vゲージタイマー+3000F\n                                                                                                                                                                                発動中、破天我道拳と轟晃龍拳が使用可能になる",
    vtrigger: 2,
    type: "vsystem",
    command: "強P 強K"
  },
  {
    name: "サイキョー流回避術",
    outbreak: "",
    persistence: "",
    rigidity: "全体45",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "1F～40F 打撃&飛び道具無敵\n                                                発動時スタン値200回復",
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
    name: "サイキョー胴貫き蹴り",
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
    name: "弱 我道拳",
    outbreak: "14",
    persistence: "10",
    rigidity: "全体43",
    hit: "2",
    guard: "-2",
    damage: "50",
    stan: "80",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 弱P"
  },
  {
    name: "中 我道拳",
    outbreak: "14",
    persistence: "9",
    rigidity: "全体43",
    hit: "1",
    guard: "-2",
    damage: "50",
    stan: "80",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 中P"
  },
  {
    name: "強 我道拳",
    outbreak: "14",
    persistence: "8",
    rigidity: "全体43",
    hit: "0",
    guard: "-2",
    damage: "50",
    stan: "80",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 強P"
  },
  {
    name: "弱 我道拳(強化版)",
    outbreak: "12",
    persistence: "20",
    rigidity: "全体39",
    hit: "D",
    guard: "1",
    damage: "60",
    stan: "150",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 弱P (発動時に確率で発生)"
  },
  {
    name: "中 我道拳(強化版)",
    outbreak: "12",
    persistence: "18",
    rigidity: "全体39",
    hit: "D",
    guard: "1",
    damage: "60",
    stan: "150",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 弱P (発動時に確率で発生)"
  },
  {
    name: "強 我道拳(強化版)",
    outbreak: "12",
    persistence: "16",
    rigidity: "全体39",
    hit: "D",
    guard: "1",
    damage: "60",
    stan: "150",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 弱P (発動時に確率で発生)"
  },
  {
    name: "弱 我道拳(ボタンホールド)",
    outbreak: "32",
    persistence: "30",
    rigidity: "全体59",
    hit: "10",
    guard: "4",
    damage: "80",
    stan: "100",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 弱P (ボタンホールド)"
  },
  {
    name: "中 我道拳(ボタンホールド)",
    outbreak: "32",
    persistence: "28",
    rigidity: "全体59",
    hit: "10",
    guard: "4",
    damage: "80",
    stan: "100",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 中P (ボタンホールド)"
  },
  {
    name: "強 我道拳(ボタンホールド)",
    outbreak: "32",
    persistence: "26",
    rigidity: "全体59",
    hit: "10",
    guard: "4",
    damage: "80",
    stan: "100",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 強P (ボタンホールド)"
  },
  {
    name: "EX我道拳",
    outbreak: "16",
    persistence: "10",
    rigidity: "全体44",
    hit: "5",
    guard: "2",
    damage: "70",
    stan: "100",
    remarks: "VS※VS1のみキャンセル可能\nVS1は空振りキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + P P"
  },
  {
    name: "弱 晃龍拳",
    outbreak: "4",
    persistence: "8",
    rigidity: "24+着地後15",
    hit: "D",
    guard: "-29",
    damage: "100(※50)",
    stan: "120(※80)",
    remarks:
      "1F～5F 投げ無敵\n                                                VS※VS1のみキャンセル可能\n※持続3F目以降",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ + 弱P"
  },
  {
    name: "中 晃龍拳",
    outbreak: "5",
    persistence: "8",
    rigidity: "26+着地後15",
    hit: "D",
    guard: "-31",
    damage: "110(※50)",
    stan: "120(※80)",
    remarks:
      "1F～6F 空中判定の攻撃に対して無敵\n                                VS※VS1のみキャンセル可能\n※持続3F目以降",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ + 中P"
  },
  {
    name: "強 晃龍拳",
    outbreak: "6",
    persistence: "8",
    rigidity: "30+着地後15",
    hit: "D",
    guard: "-35",
    damage: "120(※50)",
    stan: "120(※80)",
    remarks:
      "6F～9F 打撃&飛び道具無敵\n                                                VS※VS1のみキャンセル可能\n※持続3F目以降",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ + 強P"
  },
  {
    name: "EX晃龍拳",
    outbreak: "4",
    persistence: "8",
    rigidity: "32+着地後16",
    hit: "D",
    guard: "-38",
    damage: "140(※60)",
    stan: "150(※100)",
    remarks:
      "1F～5F 完全無敵\n                                                VS※VS1のみキャンセル可能\n※持続3F目以降",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ + P P"
  },
  {
    name: "弱 断空脚",
    outbreak: "19",
    persistence: "9",
    rigidity: "7+着地後7",
    hit: "-1",
    guard: "-5",
    damage: "50",
    stan: "80",
    remarks: "VS※VS1のみキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 弱K"
  },
  {
    name: "中 断空脚",
    outbreak: "12",
    persistence: "6",
    rigidity: "10+着地後10",
    hit: "2",
    guard: "-2",
    damage: "70",
    stan: "100",
    remarks: "VS※VS1のみキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 中K"
  },
  {
    name: "強 断空脚",
    outbreak: "16",
    persistence: "3/（9）/3/（10）/3",
    rigidity: "12+着地後11",
    hit: "D",
    guard: "-4",
    damage: "90",
    stan: "120",
    remarks: "VS※VS1のみキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 強K"
  },
  {
    name: "EX断空脚",
    outbreak: "10",
    persistence: "6",
    rigidity: "12+着地後6",
    hit: "D",
    guard: "-2",
    damage: "140",
    stan: "150",
    remarks: "VS※VS1のみキャンセル可能\n初段ヒット時のみ2段目に派生",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + K K"
  },
  {
    name: "弱 弾烈拳",
    outbreak: "10",
    persistence: "2/（4）/2/（5）/2",
    rigidity: "27",
    hit: "D",
    guard: "-10",
    damage: "80(※60)",
    stan: "80(※60)",
    remarks: "VS※VS1のみキャンセル可能\n初段ヒット時ロック演出\n※初段がヒットしなかった場合",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 弱P"
  },
  {
    name: "中 弾烈拳",
    outbreak: "14",
    persistence: "2/（4）/2/（5）/2",
    rigidity: "27",
    hit: "D",
    guard: "-10",
    damage: "90(※60)",
    stan: "100(※60)",
    remarks: "VS※VS1のみキャンセル可能\n初段ヒット時ロック演出\n※初段がヒットしなかった場合",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 中P"
  },
  {
    name: "強 弾烈拳",
    outbreak: "18",
    persistence: "2/（4）/2/（5）/2",
    rigidity: "27",
    hit: "D",
    guard: "-10",
    damage: "100(※60)",
    stan: "120(※60)",
    remarks: "VS※VS1のみキャンセル可能\n初段ヒット時ロック演出\n※初段がヒットしなかった場合",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 強P"
  },
  {
    name: "EX弾烈拳",
    outbreak: "12",
    persistence: "2/（4）/2/（6）/2",
    rigidity: "27",
    hit: "D",
    guard: "-10",
    damage: "80(※60)",
    stan: "150(※60)",
    remarks: "VS※VS1のみキャンセル可能\n初段ヒット時ロック演出\n※初段がヒットしなかった場合",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + P P"
  },
  {
    name: "V破天我道拳",
    outbreak: "16",
    persistence: "30",
    rigidity: "全体44",
    hit: "D",
    guard: "4",
    damage: "80",
    stan: "150",
    remarks:
      "Vゲージタイマー1000F消費\n                                                                                                                                                                                VS※VS1のみキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + P"
  },
  {
    name: "V破天我道拳（ジャスト入力失敗版）",
    outbreak: "16",
    persistence: "10",
    rigidity: "全体44",
    hit: "5",
    guard: "2",
    damage: "70",
    stan: "100",
    remarks:
      "Vゲージタイマー1000F消費\n                                                                                                                                                                                VS※VS1のみキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + P"
  },
  {
    name: "V轟晃龍拳",
    outbreak: "3",
    persistence: "28",
    rigidity: "35+着地後13",
    hit: "D",
    guard: "-39",
    damage: "160",
    stan: "200",
    remarks:
      "Vゲージタイマー1000F消費\n                                                                                                                                1F～15F 完全無敵\n                                                VS※VS1のみキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ + P"
  },
  {
    name: "V轟晃龍拳（ジャスト入力失敗版）",
    outbreak: "4",
    persistence: "8",
    rigidity: "29+着地後13",
    hit: "D",
    guard: "-32",
    damage: "140（※60）",
    stan: "150（※100）",
    remarks:
      "Vゲージタイマー1000F消費\n                                                                                                                                1F～5F 完全無敵\n                                                VS※VS1のみキャンセル可能\n※持続3F目以降",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ + P"
  },
  {
    name: "必勝無頼拳",
    outbreak: "6",
    persistence: "5",
    rigidity: "47",
    hit: "D",
    guard: "-30",
    damage: "340",
    stan: "0",
    remarks:
      "1F～10F 完全無敵\n                                                初段ヒット時ロック演出",
    vtrigger: 2,
    type: "ca",
    command: "↓↘→ ↓↘→ + P"
  }
];

export { dan };
