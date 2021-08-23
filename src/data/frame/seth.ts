const seth = [
  {
    name: "立ち弱P",
    outbreak: "4",
    persistence: "3",
    rigidity: "6",
    hit: "4",
    guard: "3",
    damage: "30",
    stan: "70",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち中P",
    outbreak: "5",
    persistence: "3",
    rigidity: "16 (※19)",
    hit: "2",
    guard: "-2",
    damage: "50",
    stan: "100",
    remarks: "※空振り時\nVS※ヒット/ガード時、[VS1]インストールアーツでキャンセル可能",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強P",
    outbreak: "7",
    persistence: "3",
    rigidity: "23 (※20)",
    hit: "2",
    guard: "-4",
    damage: "80",
    stan: "150",
    remarks: "※ガード時",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち弱K",
    outbreak: "4",
    persistence: "3",
    rigidity: "11",
    hit: "4",
    guard: "3",
    damage: "40",
    stan: "70",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち中K",
    outbreak: "7",
    persistence: "3",
    rigidity: "18",
    hit: "1",
    guard: "-2",
    damage: "70",
    stan: "100",
    remarks:
      "足先の部分はしゃがみ状態の相手に当たらない\nVS※ヒット/ガード時、[VS1]インストールアーツでキャンセル可能",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強K",
    outbreak: "10 ",
    persistence: "9",
    rigidity: "22",
    hit: "D",
    guard: "-6",
    damage: "80",
    stan: "150",
    remarks:
      "2段目はしゃがみの相手にヒットしない\n                                                                                                S※V※CA※2段目のみ可能\n初段地上ヒット時、強制立ち効果\n空中ヒット時吹き飛びやられ",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱P",
    outbreak: "3",
    persistence: "2",
    rigidity: "8",
    hit: "4",
    guard: "2",
    damage: "30",
    stan: "70",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中P",
    outbreak: "6",
    persistence: "3",
    rigidity: "14",
    hit: "5",
    guard: "2",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ強P",
    outbreak: "12",
    persistence: "4",
    rigidity: "26",
    hit: "D",
    guard: "-10",
    damage: "80",
    stan: "150",
    remarks:
      "クラッシュカウンター対応 (D)\n                                                                                                                                                                VS※ヒット/ガード時、[VS1]インストールアーツでキャンセル可能",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱K",
    outbreak: "4",
    persistence: "3",
    rigidity: "7",
    hit: "3",
    guard: "2",
    damage: "20",
    stan: "70",
    remarks: "VS※ヒット/ガード時、[VS1]インストールアーツでキャンセル可能",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中K",
    outbreak: "7",
    persistence: "3",
    rigidity: "13 (※12)",
    hit: "2",
    guard: "-2",
    damage: "60",
    stan: "100",
    remarks: "※ガード/空振り時",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ強K",
    outbreak: "11",
    persistence: "4",
    rigidity: "22",
    hit: "2",
    guard: "-4",
    damage: "80",
    stan: "150",
    remarks: "VS※ヒット/ガード時、[VS1]インストールアーツでキャンセル可能",
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
    outbreak: "7",
    persistence: "6",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "70",
    stan: "100",
    remarks: "空中ヒット時吹き飛びやられ",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ強P",
    outbreak: "9",
    persistence: "6",
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
    remarks: "めくり性能",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ中K",
    outbreak: "7",
    persistence: "7",
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
    outbreak: "10",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "80",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "ステップシュート",
    outbreak: "9",
    persistence: "3",
    rigidity: "17",
    hit: "2",
    guard: "-2",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "→ + 中P"
  },
  {
    name: "ハザードブロー",
    outbreak: "20",
    persistence: "3",
    rigidity: "23",
    hit: "1",
    guard: "-4",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応 (膝)",
    vtrigger: 1,
    type: "unique",
    command: "→ + 強P"
  },
  {
    name: "ヘッドハンター",
    outbreak: "23",
    persistence: "2",
    rigidity: "21",
    hit: "1",
    guard: "-7",
    damage: "80",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "→ + 強K"
  },
  {
    name: "ターニングスライサー",
    outbreak: "23",
    persistence: "3",
    rigidity: "15",
    hit: "4",
    guard: "-2",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応 (+14F)",
    vtrigger: 1,
    type: "unique",
    command: "↘ + 強K"
  },
  {
    name: "ツインクロー",
    outbreak: "10",
    persistence: "4",
    rigidity: "28",
    hit: "-5",
    guard: "-12",
    damage: "60",
    stan: "100",
    remarks:
      "強制立ち効果\n                                                                                                                S※VS※ヒット時のみ可能",
    vtrigger: 1,
    type: "unique",
    command: "中P ▶ 強P"
  },
  {
    name: "丹田コンビネーション",
    outbreak: "18",
    persistence: "25",
    rigidity: "19",
    hit: "2",
    guard: "-",
    damage: "10",
    stan: "0",
    remarks: "VS※ヒット/ガード時[VS1]丹田インストールに移行可",
    vtrigger: 1,
    type: "unique",
    command: "(VスキルⅠ選択時) 中P ▶ 強P ▶ ヒット時 中P 中K"
  },
  {
    name: "シュートスライサー",
    outbreak: "11",
    persistence: "3",
    rigidity: "21 (※26)",
    hit: "2",
    guard: "-8",
    damage: "60",
    stan: "80",
    remarks: "※ガード/空振り時",
    vtrigger: 1,
    type: "unique",
    command: "→ + 中P ▶ 強K"
  },
  {
    name: "フェイタルラッシュ",
    outbreak: "12",
    persistence: "3",
    rigidity: "29",
    hit: "D",
    guard: "-12",
    damage: "70",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "↗ + 中P ▶ 強K ▶ 強P"
  },
  {
    name: "デススルー",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "",
    guard: "",
    damage: "130",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "throw",
    command: "(近距離で) → OR + 弱P 弱K"
  },
  {
    name: "デススルー",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "",
    guard: "",
    damage: "130",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "throw",
    command: "(近距離で) ← + 弱P 弱K"
  },
  {
    name: "[VS1]丹田エンジン",
    outbreak: "20",
    persistence: "25",
    rigidity: "21",
    hit: "3",
    guard: "-2",
    damage: "10",
    stan: "0",
    remarks: "ヒット/ガード後28F間 飛び道具無敵",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅠ選択時) 中P 中K"
  },
  {
    name: "[VS1]丹田インストール",
    outbreak: "4",
    persistence: "9",
    rigidity: "25",
    hit: "D",
    guard: "-16",
    damage: "60",
    stan: "0",
    remarks: "1F～8F 飛び道具無敵",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅠ選択時) 中P 中K ▶ P"
  },
  {
    name: "[VS1]インストールアーツ",
    outbreak: "",
    persistence: "",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "※[VS1]インストールアーツにて使用可能となる必殺技については「インストールアーツ」にて記載",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅠ選択時) (丹田インストールヒット後に) 中P 中K"
  },
  {
    name: "[VS2]丹田ブースター",
    outbreak: "",
    persistence: "",
    rigidity: "全体49",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K"
  },
  {
    name: "[VS2]丹田ブースター(停止)",
    outbreak: "",
    persistence: "",
    rigidity: "全体19",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K ▶ 中P 中K"
  },
  {
    name: "[VS2]ヘカトンケイル・グライド",
    outbreak: "14",
    persistence: "16",
    rigidity: "22",
    hit: "2",
    guard: "-2",
    damage: "100",
    stan: "120",
    remarks: "",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K ▶ ↓↘→ + P"
  },
  {
    name: "[VS2]マッドスパイラル",
    outbreak: "7",
    persistence: "18",
    rigidity: "18+着地後29",
    hit: "D",
    guard: "-39",
    damage: "120",
    stan: "150",
    remarks: "1F～24F 飛び道具無敵",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K ▶ →↓↘ + P"
  },
  {
    name: "[VS2]スピンペンデュラム",
    outbreak: "5",
    persistence: "13",
    rigidity: "25",
    hit: "D",
    guard: "-9",
    damage: "80",
    stan: "120",
    remarks: "4F～24F 飛び道具無敵",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K ▶ ↓↙← + K"
  },
  {
    name: "丹田イグニッション",
    outbreak: "1",
    persistence: "",
    rigidity: "10",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "Vゲージタイマー+3000F\n                                                                                                                                                                                発動中、ヘカトンケイル/マッドクレイドル/クルーエルディザスター/アナイアレイトソードからそれぞれ専用の派生技が追加される",
    vtrigger: 1,
    type: "vsystem",
    command: "強P 強K"
  },
  {
    name: "カラミティシャッター",
    outbreak: "17",
    persistence: "2",
    rigidity: "24",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "0",
    remarks:
      "1F～31F 打撃&飛び道具無敵\n                                                発動時スタン値200回復",
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
    name: "ヘルアサルト",
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
    name: "弱 ヘカトンケイル",
    outbreak: "11",
    persistence: "8",
    rigidity: "20",
    hit: "2",
    guard: "-4",
    damage: "80",
    stan: "120",
    remarks:
      "CA※V※4段目のみ可能\nVS※ヒット/ガード時、2・4段目を[VS1]インストールアーツでキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 弱P"
  },
  {
    name: "中 ヘカトンケイル",
    outbreak: "17",
    persistence: "12",
    rigidity: "20",
    hit: "2",
    guard: "-4",
    damage: "90",
    stan: "120",
    remarks:
      "CA※V※6段目のみ可能\nVS※ヒット/ガード時、4・6段目を[VS1]インストールアーツでキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 中P"
  },
  {
    name: "強 ヘカトンケイル",
    outbreak: "25",
    persistence: "16",
    rigidity: "20",
    hit: "3",
    guard: "-2",
    damage: "100",
    stan: "120",
    remarks:
      "CA※V※8段目のみ可能\nVS※ヒット/ガード時、6・8段目を[VS1]インストールアーツでキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 強P"
  },
  {
    name: "EXヘカトンケイル",
    outbreak: "10",
    persistence: "16",
    rigidity: "24",
    hit: "D",
    guard: "-2",
    damage: "120",
    stan: "150",
    remarks:
      "ガード/空振り時は8段目で動作終了\nV※8、9段目のみ可能\nVS※ヒット時は9段目、ガード時は8段目を[VS1]インストールアーツでキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + P P"
  },
  {
    name: "弱 マッドクレイドル",
    outbreak: "4",
    persistence: "10",
    rigidity: "22+着地後11",
    hit: "D",
    guard: "-25",
    damage: "90(※60)",
    stan: "150 (※100)",
    remarks: "1F～3F 投げ無敵\n                                                ※持続3F目以降",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + 弱P"
  },
  {
    name: "中 マッドクレイドル",
    outbreak: "5",
    persistence: "10",
    rigidity: "28+着地後13",
    hit: "D",
    guard: "-33",
    damage: "110 (※60)",
    stan: "150 (※100)",
    remarks: "1F～6F 空中判定の攻撃に対して無敵\n                                ※持続3F目以降",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + 中P"
  },
  {
    name: "強 マッドクレイドル",
    outbreak: "10",
    persistence: "10",
    rigidity: "34+着地後15",
    hit: "D",
    guard: "-41",
    damage: "120 (※60)",
    stan: "150",
    remarks: "1F～10F 空中判定の攻撃に対して無敵\n                                ※持続3F目以降",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + 強P"
  },
  {
    name: "EXマッドクレイドル",
    outbreak: "4",
    persistence: "16",
    rigidity: "30+着地後15",
    hit: "D",
    guard: "-40",
    damage: "150",
    stan: "150",
    remarks: "1F～9F 完全無敵",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + P P"
  },
  {
    name: "弱 クルーエルディザスター",
    outbreak: "14",
    persistence: "3",
    rigidity: "26",
    hit: "D",
    guard: "-8",
    damage: "80",
    stan: "100",
    remarks:
      "4F～11F 飛び道具無敵\n                                                VS※ヒット/ガード時、[VS1]インストールアーツでキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 弱K"
  },
  {
    name: "中 クルーエルディザスター",
    outbreak: "21",
    persistence: "3",
    rigidity: "28(※26)",
    hit: "D",
    guard: "-4",
    damage: "90",
    stan: "120",
    remarks:
      "4F～18F 飛び道具無敵\n                                                ※ガード時\nVS※ヒット/ガード時、[VS1]インストールアーツでキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 中K"
  },
  {
    name: "強 クルーエルディザスター",
    outbreak: "27",
    persistence: "3",
    rigidity: "28(※21)",
    hit: "D",
    guard: "2",
    damage: "100",
    stan: "150",
    remarks:
      "4F～26F 飛び道具無敵\n                                                ※ガード時\nVS※ヒット/ガード時、[VS1]インストールアーツでキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 強K"
  },
  {
    name: "EXクルーエルディザスター",
    outbreak: "15",
    persistence: "3",
    rigidity: "33",
    hit: "D",
    guard: "-12",
    damage: "100",
    stan: "150",
    remarks:
      "4F～12F 飛び道具無敵\n                                                ガード/空振り時は初段で動作終了\nヒット時、ジャンプでキャンセル可能\nVS※ヒット時[VS1]インストールアーツ/[VS2]丹田ブースターでキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + K K"
  },
  {
    name: "弱 アナイアレイトソード",
    outbreak: "14",
    persistence: "6",
    rigidity: "着地後13",
    hit: "",
    guard: "",
    damage: "70",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(垂直・前ジャンプ中に) ↓↙← + 弱K"
  },
  {
    name: "中 アナイアレイトソード",
    outbreak: "23",
    persistence: "6",
    rigidity: "着地後13",
    hit: "",
    guard: "",
    damage: "80",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(垂直・前ジャンプ中に) ↓↙← + 中K"
  },
  {
    name: "強 アナイアレイトソード",
    outbreak: "27",
    persistence: "6",
    rigidity: "着地後20",
    hit: "D",
    guard: "",
    damage: "90",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(垂直・前ジャンプ中に) ↓↙← + 強K"
  },
  {
    name: "EXアナイアレイトソード",
    outbreak: "10",
    persistence: "12",
    rigidity: "着地後13",
    hit: "D",
    guard: "",
    damage: "130",
    stan: "200",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(垂直・前ジャンプ中に) ↓↙← + K K"
  },
  {
    name: "Vティタノマキア",
    outbreak: "14",
    persistence: "5",
    rigidity: "31",
    hit: "D",
    guard: "2",
    damage: "120",
    stan: "100",
    remarks:
      "Vゲージタイマー700F消費\n                                                                                                                                                                                ヘカトンケイル・特定のインストールアーツがヒット/ガード時にキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "(VトリガーⅠ発動中) ↓↘→ + P ▶ 強P 強K"
  },
  {
    name: "Vマッドスピン",
    outbreak: "7",
    persistence: "着地まで+2",
    rigidity: "着地後21",
    hit: "2",
    guard: "-2",
    damage: "※n×10",
    stan: "※n×10+20",
    remarks:
      "Vゲージタイマー700F消費\n                                                                                                                                                                                マッドクレイドルヒット時もしくは特定のインストールアーツがヒット/ガード時にキャンセル可能\n※着地までのヒット数",
    vtrigger: 1,
    type: "special",
    command: "(VトリガーⅠ発動中) →↓↘ + P ▶ 強P 強K"
  },
  {
    name: "Vマッドスピン（特別版）",
    outbreak: "11",
    persistence: "2",
    rigidity: "75",
    hit: "D",
    guard: "-2",
    damage: "80",
    stan: "100",
    remarks:
      "Vゲージタイマー700F消費\n                                                                                                                                                                                ガード時は硬直が52F短くなる",
    vtrigger: 1,
    type: "special",
    command: "(VトリガーⅠ発動中) (アレックスのインストールアーツから) 強P 強K"
  },
  {
    name: "Vサイクロンディザスター",
    outbreak: "11",
    persistence: "11",
    rigidity: "21",
    hit: "D",
    guard: "-4",
    damage: "70",
    stan: "100",
    remarks:
      "Vゲージタイマー700F消費\n                                                                                                                                                                                クルーエルディザスター・特定のインストールアーツがヒット/ガード時にキャンセル可能\nEXクルーエルディザスターはヒット時のみキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "(VトリガーⅠ発動中) ↓↙← + K ▶ 強P 強K"
  },
  {
    name: "Vヘルズゲイト",
    outbreak: "5",
    persistence: "8",
    rigidity: "17",
    hit: "D",
    guard: "-4",
    damage: "90",
    stan: "120",
    remarks:
      "Vゲージタイマー700F消費\n                                                                                                                                                                                アナイアレイトソード・特定のインストールアーツがヒット/ガード時にキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "(VトリガーⅠ発動中) (前ジャンプ中に) ↓↙← + K ▶ 強P 強K"
  },
  {
    name: "丹田ディストーション",
    outbreak: "6",
    persistence: "5",
    rigidity: "47",
    hit: "D",
    guard: "-30",
    damage: "330",
    stan: "0",
    remarks: "1F～10F 完全無敵",
    vtrigger: 1,
    type: "ca",
    command: "↓↘→ ↓↘→ + P"
  },
  {
    name: "V丹田エクストリーム",
    outbreak: "6",
    persistence: "5",
    rigidity: "47",
    hit: "D",
    guard: "-30",
    damage: "350",
    stan: "0",
    remarks: "1F～10F 完全無敵",
    vtrigger: 1,
    type: "ca",
    command: "(VトリガーⅠ発動中) ↓↘→ ↓↘→ + P"
  },
  {
    name: "立ち弱P",
    outbreak: "4",
    persistence: "3",
    rigidity: "6",
    hit: "4",
    guard: "3",
    damage: "30",
    stan: "70",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち中P",
    outbreak: "5",
    persistence: "3",
    rigidity: "16(※19)",
    hit: "2",
    guard: "-2",
    damage: "50",
    stan: "100",
    remarks: "※空振り時\nVS※ヒット/ガード時、[VS1]インストールアーツでキャンセル可能",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強P",
    outbreak: "7",
    persistence: "3",
    rigidity: "23(※20)",
    hit: "2",
    guard: "-4",
    damage: "80",
    stan: "150",
    remarks: "※ガード時",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち弱K",
    outbreak: "4",
    persistence: "3",
    rigidity: "11",
    hit: "4",
    guard: "3",
    damage: "40",
    stan: "70",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち中K",
    outbreak: "7",
    persistence: "3",
    rigidity: "18",
    hit: "1",
    guard: "-2",
    damage: "70",
    stan: "100",
    remarks:
      "足先の部分はしゃがみ状態の相手に当たらない\nVS※ヒット/ガード時、[VS1]インストールアーツでキャンセル可能",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強K",
    outbreak: "10 ",
    persistence: "9",
    rigidity: "22",
    hit: "D",
    guard: "-6",
    damage: "80",
    stan: "150",
    remarks:
      "2段目はしゃがみの相手にヒットしない\n                                                                                                S※V※CA※2段目のみ可能\n初段地上ヒット時、強制立ち効果\n空中ヒット時吹き飛びやられ",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱P",
    outbreak: "3",
    persistence: "2",
    rigidity: "8",
    hit: "4",
    guard: "2",
    damage: "30",
    stan: "70",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中P",
    outbreak: "6",
    persistence: "3",
    rigidity: "14",
    hit: "5",
    guard: "2",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ強P",
    outbreak: "12",
    persistence: "4",
    rigidity: "26",
    hit: "D",
    guard: "-10",
    damage: "80",
    stan: "150",
    remarks:
      "クラッシュカウンター対応 (D)\n                                                                                                                                                                VS※ヒット/ガード時、[VS1]インストールアーツでキャンセル可能",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱K",
    outbreak: "4",
    persistence: "3",
    rigidity: "7",
    hit: "3",
    guard: "2",
    damage: "20",
    stan: "70",
    remarks: "VS※ヒット/ガード時、[VS1]インストールアーツでキャンセル可能",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中K",
    outbreak: "7",
    persistence: "3",
    rigidity: "13(※12)",
    hit: "2",
    guard: "-2",
    damage: "60",
    stan: "100",
    remarks: "※ガード/空振り時",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ強K",
    outbreak: "11",
    persistence: "4",
    rigidity: "22",
    hit: "2",
    guard: "-4",
    damage: "80",
    stan: "150",
    remarks: "VS※ヒット/ガード時、[VS1]インストールアーツでキャンセル可能",
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
    outbreak: "7",
    persistence: "6",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "70",
    stan: "100",
    remarks: "空中ヒット時吹き飛びやられ",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ強P",
    outbreak: "9",
    persistence: "6",
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
    remarks: "めくり性能",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ中K",
    outbreak: "7",
    persistence: "7",
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
    outbreak: "10",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "80",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "ステップシュート",
    outbreak: "9",
    persistence: "3",
    rigidity: "17",
    hit: "2",
    guard: "-2",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "→ + 中P"
  },
  {
    name: "ハザードブロー",
    outbreak: "20",
    persistence: "3",
    rigidity: "23",
    hit: "1",
    guard: "-4",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応 (膝)",
    vtrigger: 2,
    type: "unique",
    command: "→ + 強P"
  },
  {
    name: "ヘッドハンター",
    outbreak: "23",
    persistence: "2",
    rigidity: "21",
    hit: "1",
    guard: "-7",
    damage: "80",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "→ + 強K"
  },
  {
    name: "ターニングスライサー",
    outbreak: "23",
    persistence: "3",
    rigidity: "15",
    hit: "4",
    guard: "-2",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応 (+14F)",
    vtrigger: 2,
    type: "unique",
    command: "↘ + 強K"
  },
  {
    name: "ツインクロー",
    outbreak: "10",
    persistence: "4",
    rigidity: "28",
    hit: "-5",
    guard: "-12",
    damage: "60",
    stan: "100",
    remarks:
      "強制立ち効果\n                                                                                                                S※VS※ヒット時のみ可能",
    vtrigger: 2,
    type: "unique",
    command: "中P ▶ 強P"
  },
  {
    name: "丹田コンビネーション",
    outbreak: "18",
    persistence: "25",
    rigidity: "19",
    hit: "2",
    guard: "",
    damage: "10",
    stan: "0",
    remarks: "VS※ヒット/ガード時[VS1]丹田インストールに移行可",
    vtrigger: 2,
    type: "unique",
    command: "(VスキルⅠ選択時) 中P ▶ 強P ▶ 中P 中K"
  },
  {
    name: "シュートスライサー",
    outbreak: "11",
    persistence: "3",
    rigidity: "21(※26)",
    hit: "2",
    guard: "-8",
    damage: "60",
    stan: "80",
    remarks: "※ガード/空振り時",
    vtrigger: 2,
    type: "unique",
    command: "→ + 中P ▶ 強K"
  },
  {
    name: "フェイタルラッシュ",
    outbreak: "12",
    persistence: "3",
    rigidity: "29",
    hit: "D",
    guard: "-12",
    damage: "70",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "↗ + 中P ▶ 強K ▶ 強P"
  },
  {
    name: "デススルー",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "",
    guard: "",
    damage: "130",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "throw",
    command: "(近距離で) → OR + 弱P 弱K"
  },
  {
    name: "デススルー",
    outbreak: "",
    persistence: "",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "130",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "throw",
    command: "(近距離で) ← + 弱P 弱K"
  },
  {
    name: "[VS1]丹田エンジン",
    outbreak: "20",
    persistence: "25",
    rigidity: "21",
    hit: "3",
    guard: "-2",
    damage: "10",
    stan: "0",
    remarks: "ヒット/ガード後28F間 飛び道具無敵",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅠ選択時) 中P 中K"
  },
  {
    name: "[VS1]丹田インストール",
    outbreak: "4",
    persistence: "9",
    rigidity: "25",
    hit: "D",
    guard: "-16",
    damage: "60",
    stan: "0",
    remarks: "1F～8F 飛び道具無敵",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅠ選択時) 中P 中K ▶ P"
  },
  {
    name: "[VS1]インストールアーツ",
    outbreak: "",
    persistence: "",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "※[VS1]インストールアーツにて使用可能となる必殺技については「インストールアーツ」にて記載",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅠ選択時) (丹田インストールヒット後に) 中P 中K"
  },
  {
    name: "[VS2]丹田ブースター",
    outbreak: "",
    persistence: "",
    rigidity: "全体49",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K"
  },
  {
    name: "[VS2]丹田ブースター(停止)",
    outbreak: "",
    persistence: "",
    rigidity: "全体19",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K ▶ 中P 中K"
  },
  {
    name: "[VS2]ヘカトンケイル・グライド",
    outbreak: "14",
    persistence: "16",
    rigidity: "22",
    hit: "2",
    guard: "-2",
    damage: "100",
    stan: "120",
    remarks: "",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K ▶ ↓↘→ + P"
  },
  {
    name: "[VS2]マッドスパイラル",
    outbreak: "7",
    persistence: "18",
    rigidity: "18+着地後29",
    hit: "D",
    guard: "-39",
    damage: "120",
    stan: "150",
    remarks: "1F～24F 飛び道具無敵",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K ▶ →↓↘ + P"
  },
  {
    name: "[VS2]スピンペンデュラム",
    outbreak: "5",
    persistence: "13",
    rigidity: "25",
    hit: "D",
    guard: "-9",
    damage: "80",
    stan: "120",
    remarks: "4F～24F 飛び道具無敵",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K ▶ ↓↙← + K"
  },
  {
    name: "丹田マニューバ",
    outbreak: "13",
    persistence: "150",
    rigidity: "全体45",
    hit: "3",
    guard: "-3",
    damage: "25",
    stan: "30",
    remarks: "",
    vtrigger: 2,
    type: "vsystem",
    command: "強P 強K"
  },
  {
    name: "丹田マニューバ 移動操作(前方向)",
    outbreak: "7",
    persistence: "150",
    rigidity: "全体40",
    hit: "3",
    guard: "-4",
    damage: "25",
    stan: "30",
    remarks: "",
    vtrigger: 2,
    type: "vsystem",
    command: "強P 強K ▶ → + P"
  },
  {
    name: "丹田マニューバ 移動操作(後方向)",
    outbreak: "7",
    persistence: "150",
    rigidity: "全体40",
    hit: "-4",
    guard: "-4",
    damage: "25",
    stan: "30",
    remarks: "",
    vtrigger: 2,
    type: "vsystem",
    command: "強P 強K ▶ ← + P"
  },
  {
    name: "丹田マニューバ 移動操作(上要素方向)",
    outbreak: "7",
    persistence: "150",
    rigidity: "全体40",
    hit: "D",
    guard: "-4",
    damage: "25",
    stan: "30",
    remarks: "",
    vtrigger: 2,
    type: "vsystem",
    command: "強P 強K ▶ ↖ OR ↑ OR ↗ + P"
  },
  {
    name: "丹田マニューバ 移動操作(下方向)",
    outbreak: "7",
    persistence: "150",
    rigidity: "全体40",
    hit: "D",
    guard: "-4",
    damage: "25",
    stan: "30",
    remarks: "",
    vtrigger: 2,
    type: "vsystem",
    command: "強P 強K ▶ ↓ + P"
  },
  {
    name: "丹田マニューバ 移動操作(斜め下前方向)",
    outbreak: "7",
    persistence: "150",
    rigidity: "全体40",
    hit: "3",
    guard: "-4",
    damage: "25",
    stan: "30",
    remarks: "",
    vtrigger: 2,
    type: "vsystem",
    command: "強P 強K ▶ ↘ + P"
  },
  {
    name: "丹田マニューバ 移動操作(斜め下後方向)",
    outbreak: "7",
    persistence: "150",
    rigidity: "全体40",
    hit: "-4",
    guard: "-4",
    damage: "25",
    stan: "30",
    remarks: "",
    vtrigger: 2,
    type: "vsystem",
    command: "強P 強K ▶ ↙ + P"
  },
  {
    name: "丹田マニューバ 移動操作(地面跳ね返り)",
    outbreak: "7",
    persistence: "150",
    rigidity: "全体40",
    hit: "D",
    guard: "",
    damage: "50",
    stan: "60",
    remarks: "",
    vtrigger: 2,
    type: "vsystem",
    command: "強P 強K ▶ ↙ OR ↓ OR ↘ + P (地面に接触)"
  },
  {
    name: "丹田マニューバ 移動操作(4回目)",
    outbreak: "7",
    persistence: "150",
    rigidity: "全体40",
    hit: "D",
    guard: "-6",
    damage: "30",
    stan: "40",
    remarks: "",
    vtrigger: 2,
    type: "vsystem",
    command: "強P 強K ▶ (任意の方向) + P"
  },
  {
    name: "カラミティシャッター",
    outbreak: "17",
    persistence: "2",
    rigidity: "24",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "0",
    remarks:
      "1F～31F 打撃&飛び道具無敵\n                                                発動時スタン値200回復",
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
    name: "ヘルアサルト",
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
    name: "弱 ヘカトンケイル",
    outbreak: "11",
    persistence: "8",
    rigidity: "20",
    hit: "2",
    guard: "-4",
    damage: "80",
    stan: "120",
    remarks:
      "CA※V※4段目のみ可能\nVS※ヒット/ガード時、2・4段目を[VS1]インストールアーツでキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 弱P"
  },
  {
    name: "中 ヘカトンケイル",
    outbreak: "17",
    persistence: "12",
    rigidity: "20",
    hit: "2",
    guard: "-4",
    damage: "90",
    stan: "120",
    remarks:
      "CA※V※6段目のみ可能\nVS※ヒット/ガード時、4・6段目を[VS1]インストールアーツでキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 中P"
  },
  {
    name: "強 ヘカトンケイル",
    outbreak: "25",
    persistence: "16",
    rigidity: "20",
    hit: "3",
    guard: "-2",
    damage: "100",
    stan: "120",
    remarks:
      "CA※V※8段目のみ可能\nVS※ヒット/ガード時、6・8段目を[VS1]インストールアーツでキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 強P"
  },
  {
    name: "EXヘカトンケイル",
    outbreak: "10",
    persistence: "16",
    rigidity: "24",
    hit: "D",
    guard: "-2",
    damage: "120",
    stan: "150",
    remarks:
      "ガード/空振り時は8段目で動作終了\nV※8、9段目のみ可能\nVS※ヒット時は9段目、ガード時は8段目を[VS1]インストールアーツでキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + P P"
  },
  {
    name: "弱 マッドクレイドル",
    outbreak: "4",
    persistence: "10",
    rigidity: "22+着地後11",
    hit: "D",
    guard: "-25",
    damage: "90(※60)",
    stan: "150(※100)",
    remarks: "1F～3F 投げ無敵\n                                                ※持続3F目以降",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ + 弱P"
  },
  {
    name: "中 マッドクレイドル",
    outbreak: "5",
    persistence: "10",
    rigidity: "28+着地後13",
    hit: "D",
    guard: "-33",
    damage: "110(※60)",
    stan: "150(※100)",
    remarks: "1F～6F 空中判定の攻撃に対して無敵\n                                ※持続3F目以降",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ + 中P"
  },
  {
    name: "強 マッドクレイドル",
    outbreak: "10",
    persistence: "10",
    rigidity: "34+着地後15",
    hit: "D",
    guard: "-41",
    damage: "120(※60)",
    stan: "150",
    remarks: "1F～10F 空中判定の攻撃に対して無敵\n                                ※持続3F目以降",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ + 強P"
  },
  {
    name: "EXマッドクレイドル",
    outbreak: "4",
    persistence: "16",
    rigidity: "30+着地後15",
    hit: "D",
    guard: "-40",
    damage: "150",
    stan: "150",
    remarks: "1F～9F 完全無敵",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ + P P"
  },
  {
    name: "弱 クルーエルディザスター",
    outbreak: "14",
    persistence: "3",
    rigidity: "26",
    hit: "D",
    guard: "-8",
    damage: "80",
    stan: "100",
    remarks:
      "4F～11F 飛び道具無敵\n                                                VS※ヒット/ガード時、[VS1]インストールアーツでキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 弱K"
  },
  {
    name: "中 クルーエルディザスター",
    outbreak: "21",
    persistence: "3",
    rigidity: "28(※26)",
    hit: "D",
    guard: "-4",
    damage: "90",
    stan: "120",
    remarks:
      "4F～18F 飛び道具無敵\n                                                ※ガード時\nVS※ヒット/ガード時、[VS1]インストールアーツでキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 中K"
  },
  {
    name: "強 クルーエルディザスター",
    outbreak: "27",
    persistence: "3",
    rigidity: "28(※21)",
    hit: "D",
    guard: "2",
    damage: "100",
    stan: "150",
    remarks:
      "4F～26F 飛び道具無敵\n                                                ※ガード時\nVS※ヒット/ガード時、[VS1]インストールアーツでキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 強K"
  },
  {
    name: "EXクルーエルディザスター",
    outbreak: "15",
    persistence: "3",
    rigidity: "33",
    hit: "D",
    guard: "-12",
    damage: "100",
    stan: "150",
    remarks:
      "4F～12F 飛び道具無敵\n                                                ガード/空振り時は初段で動作終了\nヒット時、ジャンプでキャンセル可能\nVS※ヒット時[VS1]インストールアーツ/[VS2]丹田ブースターでキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + K K"
  },
  {
    name: "弱 アナイアレイトソード",
    outbreak: "14",
    persistence: "6",
    rigidity: "着地後13",
    hit: "",
    guard: "",
    damage: "70",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "(垂直・前ジャンプ中に) ↓↙← + 弱K"
  },
  {
    name: "中 アナイアレイトソード",
    outbreak: "23",
    persistence: "6",
    rigidity: "着地後13",
    hit: "",
    guard: "",
    damage: "80",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "(垂直・前ジャンプ中に) ↓↙← + 中K"
  },
  {
    name: "強 アナイアレイトソード",
    outbreak: "27",
    persistence: "6",
    rigidity: "着地後20",
    hit: "D",
    guard: "",
    damage: "90",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "(垂直・前ジャンプ中に) ↓↙← + 強K"
  },
  {
    name: "EXアナイアレイトソード",
    outbreak: "10",
    persistence: "12",
    rigidity: "着地後13",
    hit: "D",
    guard: "",
    damage: "130",
    stan: "200",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "(垂直・前ジャンプ中に) ↓↙← + K K"
  },
  {
    name: "丹田マニューバ 追加操作(前方向)",
    outbreak: "7",
    persistence: "150",
    rigidity: "全体40",
    hit: "3",
    guard: "-4",
    damage: "25",
    stan: "30",
    remarks: "Vトリガーキャンセル可能な通常技/特殊技がヒット/ガード時にキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "(丹田マニューバ出現中に) 強P 強K ▶ → + 強P 強K"
  },
  {
    name: "丹田マニューバ 追加操作(後方向)",
    outbreak: "7",
    persistence: "150",
    rigidity: "全体40",
    hit: "-4",
    guard: "-4",
    damage: "25",
    stan: "30",
    remarks: "Vトリガーキャンセル可能な通常技/特殊技がヒット/ガード時にキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "(丹田マニューバ出現中に) 強P 強K ▶ ← + 強P 強K"
  },
  {
    name: "丹田マニューバ 追加操作(上要素方向)",
    outbreak: "7",
    persistence: "150",
    rigidity: "全体40",
    hit: "D",
    guard: "-4",
    damage: "25",
    stan: "30",
    remarks: "Vトリガーキャンセル可能な通常技/特殊技がヒット/ガード時にキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "(丹田マニューバ出現中に) 強P 強K ▶ ↖ OR ↑ OR ↗ + 強P 強K"
  },
  {
    name: "丹田マニューバ 追加操作(下方向)",
    outbreak: "7",
    persistence: "150",
    rigidity: "全体40",
    hit: "D",
    guard: "-4",
    damage: "25",
    stan: "30",
    remarks: "Vトリガーキャンセル可能な通常技/特殊技がヒット/ガード時にキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "(丹田マニューバ出現中に) 強P 強K ▶ ↓ + 強P 強K"
  },
  {
    name: "丹田マニューバ 追加操作(斜め下前方向)",
    outbreak: "7",
    persistence: "150",
    rigidity: "全体40",
    hit: "3",
    guard: "-4",
    damage: "25",
    stan: "30",
    remarks: "Vトリガーキャンセル可能な通常技/特殊技がヒット/ガード時にキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "(丹田マニューバ出現中に) 強P 強K ▶ ↘ + 強P 強K"
  },
  {
    name: "丹田マニューバ 追加操作(斜め下後方向)",
    outbreak: "7",
    persistence: "150",
    rigidity: "全体40",
    hit: "-4",
    guard: "-4",
    damage: "25",
    stan: "30",
    remarks: "Vトリガーキャンセル可能な通常技/特殊技がヒット/ガード時にキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "(丹田マニューバ出現中に) 強P 強K ▶ ↙ + 強P 強K"
  },
  {
    name: "丹田マニューバ 追加操作(地面跳ね返り)",
    outbreak: "7",
    persistence: "150",
    rigidity: "全体40",
    hit: "D",
    guard: "",
    damage: "50",
    stan: "60",
    remarks: "Vトリガーキャンセル可能な通常技/特殊技がヒット/ガード時にキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "(丹田マニューバ出現中に) 強P 強K ▶ ↙ OR ↓ OR ↘ + 強P 強K (地面に接触)"
  },
  {
    name: "丹田エクスプロード",
    outbreak: "9",
    persistence: "12",
    rigidity: "全体37",
    hit: "D",
    guard: "8",
    damage: "50",
    stan: "50",
    remarks:
      "Vトリガーキャンセル可能な通常技/特殊技がヒット/ガード時にキャンセル可能\n各種「丹田マニューバ」動作中にキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "(丹田マニューバ出現中に) 強P 強K"
  },
  {
    name: "丹田エクスプロード(自動爆破版)",
    outbreak: "",
    persistence: "12",
    rigidity: "",
    hit: "D",
    guard: "8",
    damage: "50",
    stan: "50",
    remarks: "各種丹田マニューバ(移動操作4回目時を除く)消滅時に派生",
    vtrigger: 2,
    type: "special",
    command: "(丹田マニューバ出現中に) 強P 強K"
  },
  {
    name: "丹田ディストーション",
    outbreak: "6",
    persistence: "5",
    rigidity: "47",
    hit: "D",
    guard: "30",
    damage: "330",
    stan: "0",
    remarks: "1F～10F 完全無敵",
    vtrigger: 2,
    type: "ca",
    command: "↓↘→ ↓↘→ + P"
  }
];

export { seth };
