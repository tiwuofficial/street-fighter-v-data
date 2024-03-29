const nash = [
  {
    name: "立ち弱P",
    outbreak: "4",
    persistence: "2",
    rigidity: "6",
    hit: "4",
    guard: "3",
    damage: "30",
    stan: "70",
    remarks: "連打キャンセル対応",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち中P",
    outbreak: "6",
    persistence: "3",
    rigidity: "15",
    hit: "2",
    guard: "0",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強P",
    outbreak: "8",
    persistence: "3",
    rigidity: "22",
    hit: "0",
    guard: "-5",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応(+14F)",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち弱K",
    outbreak: "3",
    persistence: "3",
    rigidity: "7",
    hit: "3",
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
    outbreak: "7",
    persistence: "4",
    rigidity: "15",
    hit: "2",
    guard: "0",
    damage: "70",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強K",
    outbreak: "9",
    persistence: "4",
    rigidity: "14(※15)",
    hit: "2",
    guard: "-2",
    damage: "90",
    stan: "150",
    remarks: "※空振り時",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱P",
    outbreak: "4",
    persistence: "3",
    rigidity: "6",
    hit: "4",
    guard: "3",
    damage: "30",
    stan: "70",
    remarks: "連打キャンセル対応",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中P",
    outbreak: "6",
    persistence: "3",
    rigidity: "13",
    hit: "6",
    guard: "3",
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
    persistence: "2",
    rigidity: "17",
    hit: "7",
    guard: "3",
    damage: "80",
    stan: "150",
    remarks: "強制立ち効果",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱K",
    outbreak: "4",
    persistence: "3",
    rigidity: "6",
    hit: "4",
    guard: "1",
    damage: "20",
    stan: "70",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中K",
    outbreak: "8",
    persistence: "3",
    rigidity: "16",
    hit: "4",
    guard: "-4",
    damage: "50",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ強K",
    outbreak: "8",
    persistence: "2",
    rigidity: "24",
    hit: "D",
    guard: "-12",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応 (D)",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "ジャンプ弱P",
    outbreak: "3",
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
    name: "ジャンプ中P",
    outbreak: "5",
    persistence: "5",
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
    outbreak: "7",
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
    damage: "40",
    stan: "70",
    remarks: "",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ中K",
    outbreak: "6",
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
    name: "斜めジャンプ強K",
    outbreak: "9",
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
    name: "垂直ジャンプ強K",
    outbreak: "8",
    persistence: "6",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "90",
    stan: "150",
    remarks:
      "めくり性能\n                                                                                                                                                空中ヒット時吹き飛びやられ",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "チョッピングアサルト",
    outbreak: "22",
    persistence: "3",
    rigidity: "16",
    hit: "0",
    guard: "-7",
    damage: "60",
    stan: "100",
    remarks: "9F～22F 投げ無敵",
    vtrigger: 1,
    type: "unique",
    command: "→ + 中P"
  },
  {
    name: "スピニングバックナックル",
    outbreak: "15",
    persistence: "3",
    rigidity: "30",
    hit: "-3",
    guard: "-13",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応 (膝)",
    vtrigger: 1,
    type: "unique",
    command: "→ + 強P"
  },
  {
    name: "ニーバズーカ",
    outbreak: "7",
    persistence: "6",
    rigidity: "18",
    hit: "-1",
    guard: "-5",
    damage: "60",
    stan: "70",
    remarks: "7F～22F 投げ無敵",
    vtrigger: 1,
    type: "unique",
    command: "→ + 弱K"
  },
  {
    name: "ジャンピングソバット",
    outbreak: "11",
    persistence: "2",
    rigidity: "18",
    hit: "2",
    guard: "-3",
    damage: "70",
    stan: "100",
    remarks: "8F～17F 投げ無敵",
    vtrigger: 1,
    type: "unique",
    command: "→ + 中K"
  },
  {
    name: "サイドニーアタック",
    outbreak: "5",
    persistence: "4",
    rigidity: "14",
    hit: "4",
    guard: "2",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "← + 中K"
  },
  {
    name: "ステップキック",
    outbreak: "14",
    persistence: "4",
    rigidity: "17",
    hit: "3",
    guard: "-3",
    damage: "90",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "→ + 強K"
  },
  {
    name: "ラピッドパンチ",
    outbreak: "6",
    persistence: "3",
    rigidity: "14",
    hit: "1",
    guard: "-6",
    damage: "50",
    stan: "80",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "弱P ▶ 中P"
  },
  {
    name: "ラピッドキック",
    outbreak: "5",
    persistence: "4",
    rigidity: "15",
    hit: "D",
    guard: "-6",
    damage: "60",
    stan: "80",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "弱K ▶ 中K"
  },
  {
    name: "ウインドシアー(2段目)",
    outbreak: "9",
    persistence: "4",
    rigidity: "22",
    hit: "2",
    guard: "-7",
    damage: "40",
    stan: "50",
    remarks: "8F～23F 投げ無敵",
    vtrigger: 1,
    type: "unique",
    command: "中P ▶ 弱K"
  },
  {
    name: "ウインドシアー(3段目)",
    outbreak: "6",
    persistence: "3",
    rigidity: "24",
    hit: "D",
    guard: "",
    damage: "70",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "中P ▶ 弱K ▶ 強P"
  },
  {
    name: "ダウンバースト",
    outbreak: "18",
    persistence: "3",
    rigidity: "16",
    hit: "1",
    guard: "-7",
    damage: "60",
    stan: "100",
    remarks: "5F～18F 投げ無敵",
    vtrigger: 1,
    type: "unique",
    command: "↓ + 中P ▶ → + 中P"
  },
  {
    name: "ラプター(バレット)コンビネーション(2段目)",
    outbreak: "9",
    persistence: "3",
    rigidity: "26",
    hit: "D",
    guard: "-10",
    damage: "55",
    stan: "80",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "中K ▶ 強K"
  },
  {
    name: "ラプターコンビネーション(3段目)",
    outbreak: "14",
    persistence: "4",
    rigidity: "17",
    hit: "D",
    guard: "",
    damage: "55",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "中K ▶ 強K ▶ 中K"
  },
  {
    name: "バレットコンビネーション(3段目)",
    outbreak: "8",
    persistence: "2",
    rigidity: "23",
    hit: "D",
    guard: "",
    damage: "55",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "(VスキルⅠ選択時) 中K ▶ 強K ▶ 中P 中K"
  },
  {
    name: "ドラゴンスープレックス",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "D",
    guard: "",
    damage: "140",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "throw",
    command: "(近距離で) → OR + 弱P 弱K"
  },
  {
    name: "ターゲットダウン",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "D",
    guard: "",
    damage: "150",
    stan: "200",
    remarks: "",
    vtrigger: 1,
    type: "throw",
    command: "(近距離で) ← + 弱P 弱K"
  },
  {
    name: "エアジャック",
    outbreak: "5",
    persistence: "2",
    rigidity: "着地後6",
    hit: "D",
    guard: "",
    damage: "140",
    stan: "200",
    remarks: "",
    vtrigger: 1,
    type: "throw",
    command: "(空中の相手に対して近距離で) + 弱P 弱K"
  },
  {
    name: "[VS1]バレットクリア",
    outbreak: "8 (※6)",
    persistence: "4(※8)",
    rigidity: "21",
    hit: "5",
    guard: "-5",
    damage: "70",
    stan: "100",
    remarks: "※飛び道具吸収判定の値\n飛び道具吸収成立時Vゲージ80増加",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅠ選択時) 中P 中K"
  },
  {
    name: "[VS2]サイレントシャープネス",
    outbreak: "",
    persistence: "",
    rigidity: "全体53",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "次に発動するソニックサイスが強化される",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K"
  },
  {
    name: "ソニックムーブ・ハイド",
    outbreak: "",
    persistence: "",
    rigidity: "9",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "1F～3F 飛び道具&投げ無敵\n4F 完全無敵\n                                                出現後2F間投げ無敵",
    vtrigger: 1,
    type: "vsystem",
    command: "OR ↓ + 強P 強K"
  },
  {
    name: "ソニックムーブ・ブリッツエア",
    outbreak: "",
    persistence: "",
    rigidity: "24+着地後4",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "4F 完全無敵",
    vtrigger: 1,
    type: "vsystem",
    command: "← + 強P 強K"
  },
  {
    name: "ソニックムーブ・スティールエア",
    outbreak: "",
    persistence: "",
    rigidity: "24+着地後4",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "4F 完全無敵",
    vtrigger: 1,
    type: "vsystem",
    command: "→ + 強P 強K"
  },
  {
    name: "ソニックムーブ・アヴォイド",
    outbreak: "",
    persistence: "",
    rigidity: "44",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "1F～15F, 42F～45F 打撃&飛び道具無敵\n16F～41F 完全無敵\n                                                発動時スタン値200回復",
    vtrigger: 1,
    type: "vsystem",
    command: "(ガード中に) → + 弱K"
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
    name: "リベンジャーバレット",
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
    name: "弱 ソニックブーム",
    outbreak: "15",
    persistence: "",
    rigidity: "全体47",
    hit: "-2",
    guard: "-6",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 弱P"
  },
  {
    name: "中 ソニックブーム",
    outbreak: "17",
    persistence: "",
    rigidity: "全体47",
    hit: "0",
    guard: "-4",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 中P"
  },
  {
    name: "強 ソニックブーム",
    outbreak: "22",
    persistence: "",
    rigidity: "全体45",
    hit: "4",
    guard: "-2",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 強P"
  },
  {
    name: "EX ソニックブーム",
    outbreak: "11",
    persistence: "",
    rigidity: "全体37",
    hit: "4",
    guard: "2",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + P P"
  },
  {
    name: "EX ソニックブーム(2段目)",
    outbreak: "10",
    persistence: "",
    rigidity: "全体36",
    hit: "3",
    guard: "2",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + P P ▶ P"
  },
  {
    name: "弱 ムーンサルトスラッシュ",
    outbreak: "37",
    persistence: "3",
    rigidity: "11",
    hit: "4",
    guard: "1",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 弱K"
  },
  {
    name: "中 ムーンサルトスラッシュ",
    outbreak: "37",
    persistence: "3",
    rigidity: "12",
    hit: "4",
    guard: "2",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 中K"
  },
  {
    name: "強 ムーンサルトスラッシュ",
    outbreak: "37",
    persistence: "3",
    rigidity: "14",
    hit: "4",
    guard: "3",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 強K"
  },
  {
    name: "EX ムーンサルトスラッシュ",
    outbreak: "39",
    persistence: "9",
    rigidity: "10",
    hit: "7",
    guard: "3",
    damage: "120",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + K K"
  },
  {
    name: "弱 トラジディアサルト",
    outbreak: "17",
    persistence: "2",
    rigidity: "23",
    hit: "D",
    guard: "-5",
    damage: "100",
    stan: "150",
    remarks: "ヒット時相手のEXゲージ50減少",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + 弱P"
  },
  {
    name: "中 トラジディアサルト",
    outbreak: "22",
    persistence: "2",
    rigidity: "26",
    hit: "D",
    guard: "-6",
    damage: "120",
    stan: "150",
    remarks: "ヒット時相手のEXゲージ100減少",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + 中P"
  },
  {
    name: "強 トラジディアサルト",
    outbreak: "34",
    persistence: "2",
    rigidity: "28",
    hit: "D",
    guard: "-8",
    damage: "160",
    stan: "200",
    remarks: "ヒット時相手のEXゲージ150減少",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + 強P"
  },
  {
    name: "EX トラジディアサルト",
    outbreak: "8",
    persistence: "5",
    rigidity: "48",
    hit: "D",
    guard: "-23",
    damage: "120",
    stan: "150",
    remarks: "ヒット時ナッシュ側の体力30回復\nV※ヒット時のみ可能",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + P P"
  },
  {
    name: "弱 ソニックサイス",
    outbreak: "10",
    persistence: "3",
    rigidity: "24",
    hit: "D",
    guard: "-7",
    damage: "100",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 弱K"
  },
  {
    name: "中 ソニックサイス",
    outbreak: "15",
    persistence: "3",
    rigidity: "22",
    hit: "D",
    guard: "-10",
    damage: "110",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 中K"
  },
  {
    name: "強 ソニックサイス",
    outbreak: "13",
    persistence: "5",
    rigidity: "21",
    hit: "D",
    guard: "-15",
    damage: "120",
    stan: "150",
    remarks: "13F～20F 空中判定の攻撃に対して無敵\n                                V※1段目のみ可能",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 強K"
  },
  {
    name: "弱 ソニックサイス(VS2版)",
    outbreak: "10",
    persistence: "8",
    rigidity: "19",
    hit: "D",
    guard: "2",
    damage: "100",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(VスキルⅡ発動中) ↓↙← + 弱K"
  },
  {
    name: "中 ソニックサイス(VS2版)",
    outbreak: "15",
    persistence: "6",
    rigidity: "22",
    hit: "D",
    guard: "-5",
    damage: "120",
    stan: "120",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(VスキルⅡ発動中) ↓↙← + 中K"
  },
  {
    name: "強 ソニックサイス(VS2版)",
    outbreak: "13",
    persistence: "5",
    rigidity: "21",
    hit: "D",
    guard: "-15",
    damage: "120",
    stan: "150",
    remarks: "13F～20F 空中判定の攻撃に対して無敵\n                                V※1段目のみ可能",
    vtrigger: 1,
    type: "special",
    command: "(VスキルⅡ発動中) ↓↙← + 強K"
  },
  {
    name: "EX ソニックサイス",
    outbreak: "6",
    persistence: "13",
    rigidity: "34",
    hit: "D",
    guard: "-19",
    damage: "160",
    stan: "200",
    remarks:
      "1F～6F 投げ無敵\n                6F～14F 空中判定の攻撃に対して無敵\n                                V※1、3、4段目のみ可能",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + K K"
  },
  {
    name: "EX ソニックサイス(VS2版)",
    outbreak: "6",
    persistence: "16",
    rigidity: "34",
    hit: "D",
    guard: "-19",
    damage: "180",
    stan: "200",
    remarks:
      "1F～6F 投げ無敵\n                6F～14F 空中判定の攻撃に対して無敵\n                                V※1、4、5段目のみ可能",
    vtrigger: 1,
    type: "special",
    command: "(VスキルⅡ発動中) ↓↙← + K K"
  },
  {
    name: "ジャッジメント・セイバー",
    outbreak: "1+9",
    persistence: "3",
    rigidity: "40",
    hit: "D",
    guard: "-31",
    damage: "330",
    stan: "0",
    remarks: "11F～12F 飛び道具無敵\n1F～10F 完全無敵",
    vtrigger: 1,
    type: "ca",
    command: "↓↙← ↓↙← + P"
  },
  {
    name: "立ち弱P",
    outbreak: "4",
    persistence: "2",
    rigidity: "6",
    hit: "4",
    guard: "3",
    damage: "30",
    stan: "70",
    remarks: "連打キャンセル対応",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち中P",
    outbreak: "6",
    persistence: "3",
    rigidity: "15",
    hit: "2",
    guard: "0",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強P",
    outbreak: "8",
    persistence: "3",
    rigidity: "22",
    hit: "0",
    guard: "-5",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応(+14F)",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち弱K",
    outbreak: "3",
    persistence: "3",
    rigidity: "7",
    hit: "3",
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
    outbreak: "7",
    persistence: "4",
    rigidity: "15",
    hit: "2",
    guard: "0",
    damage: "70",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強K",
    outbreak: "9",
    persistence: "4",
    rigidity: "14(※15)",
    hit: "2",
    guard: "-2",
    damage: "90",
    stan: "150",
    remarks: "※空振り時",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱P",
    outbreak: "4",
    persistence: "3",
    rigidity: "7",
    hit: "4",
    guard: "3",
    damage: "30",
    stan: "70",
    remarks: "連打キャンセル対応",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中P",
    outbreak: "6",
    persistence: "3",
    rigidity: "13",
    hit: "6",
    guard: "3",
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
    persistence: "2",
    rigidity: "17",
    hit: "7",
    guard: "3",
    damage: "80",
    stan: "150",
    remarks: "強制立ち効果",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱K",
    outbreak: "4",
    persistence: "3",
    rigidity: "6",
    hit: "4",
    guard: "1",
    damage: "20",
    stan: "70",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中K",
    outbreak: "8",
    persistence: "3",
    rigidity: "16",
    hit: "4",
    guard: "-4",
    damage: "50",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ強K",
    outbreak: "8",
    persistence: "2",
    rigidity: "24",
    hit: "D",
    guard: "-12",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応 (D)",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "ジャンプ弱P",
    outbreak: "3",
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
    name: "ジャンプ中P",
    outbreak: "5",
    persistence: "5",
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
    outbreak: "7",
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
    damage: "40",
    stan: "70",
    remarks: "",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ中K",
    outbreak: "6",
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
    name: "斜めジャンプ強K",
    outbreak: "9",
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
    name: "垂直ジャンプ強K",
    outbreak: "8",
    persistence: "6",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "90",
    stan: "150",
    remarks:
      "めくり性能\n                                                                                                                                                空中ヒット時吹き飛びやられ",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "チョッピングアサルト",
    outbreak: "22",
    persistence: "3",
    rigidity: "16",
    hit: "0",
    guard: "-7",
    damage: "60",
    stan: "100",
    remarks: "9F～22F 投げ無敵",
    vtrigger: 2,
    type: "unique",
    command: "→ + 中P"
  },
  {
    name: "スピニングバックナックル",
    outbreak: "15",
    persistence: "3",
    rigidity: "30",
    hit: "-3",
    guard: "-13",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応 (膝)",
    vtrigger: 2,
    type: "unique",
    command: "→ + 強P"
  },
  {
    name: "ニーバズーカ",
    outbreak: "7",
    persistence: "6",
    rigidity: "18",
    hit: "-1",
    guard: "-5",
    damage: "60",
    stan: "70",
    remarks: "7F～22F 投げ無敵",
    vtrigger: 2,
    type: "unique",
    command: "→ + 弱K"
  },
  {
    name: "ジャンピングソバット",
    outbreak: "11",
    persistence: "2",
    rigidity: "18",
    hit: "2",
    guard: "-3",
    damage: "70",
    stan: "100",
    remarks: "10F～19F 投げ無敵",
    vtrigger: 2,
    type: "unique",
    command: "→ + 中K"
  },
  {
    name: "サイドニーアタック",
    outbreak: "5",
    persistence: "4",
    rigidity: "14",
    hit: "4",
    guard: "2",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "← + 中K"
  },
  {
    name: "ステップキック",
    outbreak: "14",
    persistence: "4",
    rigidity: "17",
    hit: "3",
    guard: "-3",
    damage: "90",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "→ + 強K"
  },
  {
    name: "ラピッドパンチ",
    outbreak: "6",
    persistence: "3",
    rigidity: "14",
    hit: "1",
    guard: "-6",
    damage: "50",
    stan: "80",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "弱P ▶ 中P"
  },
  {
    name: "ラピッドキック",
    outbreak: "5",
    persistence: "4",
    rigidity: "15",
    hit: "D",
    guard: "-6",
    damage: "60",
    stan: "80",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "弱K ▶ 中K"
  },
  {
    name: "ウインドシアー(2段目)",
    outbreak: "9",
    persistence: "4",
    rigidity: "22",
    hit: "2",
    guard: "-7",
    damage: "40",
    stan: "50",
    remarks: "8F～23F 投げ無敵",
    vtrigger: 2,
    type: "unique",
    command: "中P ▶ 弱K"
  },
  {
    name: "ウインドシアー(3段目)",
    outbreak: "6",
    persistence: "3",
    rigidity: "24",
    hit: "D",
    guard: "",
    damage: "70",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "中P ▶ 弱K ▶ 強P"
  },
  {
    name: "ダウンバースト",
    outbreak: "18",
    persistence: "3",
    rigidity: "16",
    hit: "1",
    guard: "-7",
    damage: "60",
    stan: "100",
    remarks: "5F～18F 投げ無敵",
    vtrigger: 2,
    type: "unique",
    command: "↓ + 中P ▶ → + 中P"
  },
  {
    name: "ラプター(バレット)コンビネーション(2段目)",
    outbreak: "9",
    persistence: "3",
    rigidity: "26",
    hit: "D",
    guard: "-10",
    damage: "55",
    stan: "80",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "中K ▶ 強K"
  },
  {
    name: "ラプターコンビネーション(3段目)",
    outbreak: "14",
    persistence: "4",
    rigidity: "17",
    hit: "D",
    guard: "",
    damage: "55",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "中K ▶ 強K ▶ 中K"
  },
  {
    name: "バレットコンビネーション(3段目)",
    outbreak: "8",
    persistence: "2",
    rigidity: "23",
    hit: "D",
    guard: "",
    damage: "55",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "(VスキルⅠ選択時) 中K ▶ 強K ▶ 中P 中K"
  },
  {
    name: "ドラゴンスープレックス",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "D",
    guard: "",
    damage: "140",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "throw",
    command: "(近距離で) → OR + 弱P 弱K"
  },
  {
    name: "ターゲットダウン",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "D",
    guard: "",
    damage: "150",
    stan: "200",
    remarks: "",
    vtrigger: 2,
    type: "throw",
    command: "(近距離で) ← + 弱P 弱K"
  },
  {
    name: "エアジャック",
    outbreak: "5",
    persistence: "2",
    rigidity: "着地後6",
    hit: "D",
    guard: "",
    damage: "140",
    stan: "200",
    remarks: "",
    vtrigger: 2,
    type: "throw",
    command: "(空中の相手に対して近距離で) + 弱P 弱K"
  },
  {
    name: "[VS1]バレットクリア",
    outbreak: "8 (※6)",
    persistence: "4(※8)",
    rigidity: "21",
    hit: "5",
    guard: "-5",
    damage: "70",
    stan: "100",
    remarks: "※飛び道具吸収判定の値\n飛び道具吸収成立時Vゲージ80増加",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅠ選択時) 中P 中K"
  },
  {
    name: "[VS2]サイレントシャープネス",
    outbreak: "",
    persistence: "",
    rigidity: "全体53",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "次に発動するソニックサイスが強化される",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K"
  },
  {
    name: "ステルスダッシュ",
    outbreak: "4",
    persistence: "",
    rigidity: "全体39",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "Vゲージタイマー+4000F\n                                                                                                                                4F～28F 飛び道具無敵\n3F 完全無敵\n                                                発動中、専用の必殺技が追加",
    vtrigger: 2,
    type: "vsystem",
    command: "強P 強K"
  },
  {
    name: "ステルスダッシュ(ストップ)",
    outbreak: "",
    persistence: "",
    rigidity: "11",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    vtrigger: 2,
    type: "vsystem",
    command: "(ステルスダッシュ中に) ←"
  },
  {
    name: "ジャスティスコレダー",
    outbreak: "29",
    persistence: "7",
    rigidity: "29",
    hit: "D",
    guard: "2",
    damage: "100",
    stan: "200",
    remarks:
      "Vゲージタイマー500F消費\n                                                                                                                                3F～7F, 15F～32F 飛び道具無敵\n8F～14F 完全無敵\n                                                S※動作硬直を「ステルスダッシュ」でキャンセル可能\n(ステルスダッシュにキャンセルした場合ジャスティスコレダーに派生不可)",
    vtrigger: 2,
    type: "vsystem",
    command: "(ステルスダッシュ中に) P"
  },
  {
    name: "ジャスティスシェル",
    outbreak: "10",
    persistence: "8",
    rigidity: "32",
    hit: "D",
    guard: "-16",
    damage: "100",
    stan: "150",
    remarks:
      "Vゲージタイマー500F消費\n                                                                                                                                1F～19F 飛び道具無敵\n                                                S※動作硬直を「ステルスダッシュ」でキャンセル可能\n(ステルスダッシュにキャンセルした場合ジャスティスシェルに派生不可)",
    vtrigger: 2,
    type: "vsystem",
    command: "(ステルスダッシュ中に) K"
  },
  {
    name: "ソニックムーブ・アヴォイド",
    outbreak: "",
    persistence: "",
    rigidity: "44",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "1F～15F, 42F～45F 打撃&飛び道具無敵\n16F～41F 完全無敵\n                                                発動時スタン値200回復",
    vtrigger: 2,
    type: "vsystem",
    command: "(ガード中に) → + 弱K"
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
    name: "リベンジャーバレット",
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
    name: "弱 ソニックブーム",
    outbreak: "15",
    persistence: "",
    rigidity: "全体47",
    hit: "-2",
    guard: "-6",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 弱P"
  },
  {
    name: "中 ソニックブーム",
    outbreak: "17",
    persistence: "",
    rigidity: "全体47",
    hit: "0",
    guard: "-4",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 中P"
  },
  {
    name: "強 ソニックブーム",
    outbreak: "22",
    persistence: "",
    rigidity: "全体45",
    hit: "4",
    guard: "-2",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 強P"
  },
  {
    name: "EX ソニックブーム",
    outbreak: "11",
    persistence: "",
    rigidity: "全体37",
    hit: "4",
    guard: "2",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + P P"
  },
  {
    name: "EX ソニックブーム(2段目)",
    outbreak: "10",
    persistence: "",
    rigidity: "全体36",
    hit: "3",
    guard: "2",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + P P ▶ P"
  },
  {
    name: "弱 ムーンサルトスラッシュ",
    outbreak: "37",
    persistence: "3",
    rigidity: "11",
    hit: "4",
    guard: "1",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 弱K"
  },
  {
    name: "中 ムーンサルトスラッシュ",
    outbreak: "37",
    persistence: "3",
    rigidity: "12",
    hit: "4",
    guard: "2",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 中K"
  },
  {
    name: "強 ムーンサルトスラッシュ",
    outbreak: "37",
    persistence: "3",
    rigidity: "14",
    hit: "4",
    guard: "3",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 強K"
  },
  {
    name: "EX ムーンサルトスラッシュ",
    outbreak: "39",
    persistence: "9",
    rigidity: "10",
    hit: "7",
    guard: "3",
    damage: "120",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + K K"
  },
  {
    name: "弱 トラジディアサルト",
    outbreak: "17",
    persistence: "2",
    rigidity: "23",
    hit: "D",
    guard: "-5",
    damage: "100",
    stan: "150",
    remarks: "ヒット時相手のEXゲージ50減少",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ + 弱P"
  },
  {
    name: "中 トラジディアサルト",
    outbreak: "22",
    persistence: "2",
    rigidity: "26",
    hit: "D",
    guard: "-6",
    damage: "120",
    stan: "150",
    remarks: "ヒット時相手のEXゲージ100減少",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ + 中P"
  },
  {
    name: "強 トラジディアサルト",
    outbreak: "34",
    persistence: "2",
    rigidity: "28",
    hit: "D",
    guard: "-8",
    damage: "160",
    stan: "200",
    remarks: "ヒット時相手のEXゲージ150減少",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ + 強P"
  },
  {
    name: "EX トラジディアサルト",
    outbreak: "8",
    persistence: "5",
    rigidity: "48",
    hit: "D",
    guard: "-23",
    damage: "120",
    stan: "150",
    remarks: "ヒット時ナッシュ側の体力30回復\nV※ヒット時のみ可能",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ + P P"
  },
  {
    name: "弱 ソニックサイス",
    outbreak: "10",
    persistence: "3",
    rigidity: "24",
    hit: "D",
    guard: "-7",
    damage: "100",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 弱K"
  },
  {
    name: "中 ソニックサイス",
    outbreak: "15",
    persistence: "3",
    rigidity: "22",
    hit: "D",
    guard: "-10",
    damage: "110",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 中K"
  },
  {
    name: "強 ソニックサイス",
    outbreak: "13",
    persistence: "5",
    rigidity: "21",
    hit: "D",
    guard: "-15",
    damage: "120",
    stan: "150",
    remarks: "13F～20F 空中判定の攻撃に対して無敵\n                                V※1段目のみ可能",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 強K"
  },
  {
    name: "弱 ソニックサイス(VS2版)",
    outbreak: "10",
    persistence: "8",
    rigidity: "19",
    hit: "D",
    guard: "2",
    damage: "100",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "(VスキルⅡ発動中) ↓↙← + 弱K"
  },
  {
    name: "中 ソニックサイス(VS2版)",
    outbreak: "15",
    persistence: "6",
    rigidity: "22",
    hit: "D",
    guard: "-5",
    damage: "120",
    stan: "120",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "(VスキルⅡ発動中) ↓↙← + 中K"
  },
  {
    name: "強 ソニックサイス(VS2版)",
    outbreak: "13",
    persistence: "5",
    rigidity: "21",
    hit: "D",
    guard: "-15",
    damage: "120",
    stan: "150",
    remarks: "13F～20F 空中判定の攻撃に対して無敵\n                                V※1段目のみ可能",
    vtrigger: 2,
    type: "special",
    command: "(VスキルⅡ発動中) ↓↙← + 強K"
  },
  {
    name: "EX ソニックサイス",
    outbreak: "6",
    persistence: "13",
    rigidity: "34",
    hit: "D",
    guard: "-19",
    damage: "160",
    stan: "200",
    remarks:
      "1F～6F 投げ無敵\n                6F～14F 空中判定の攻撃に対して無敵\n                                V※1、3、4段目のみ可能",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + K K"
  },
  {
    name: "EX ソニックサイス(VS2版)",
    outbreak: "6",
    persistence: "16",
    rigidity: "34",
    hit: "D",
    guard: "-19",
    damage: "180",
    stan: "200",
    remarks:
      "1F～6F 投げ無敵\n                6F～14F 空中判定の攻撃に対して無敵\n                                V※1、4、5段目のみ可能",
    vtrigger: 2,
    type: "special",
    command: "(VスキルⅡ発動中) ↓↙← + K K"
  },
  {
    name: "ステルスダッシュ",
    outbreak: "",
    persistence: "",
    rigidity: "全体63",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "Vゲージタイマー1000F消費\n                                                                                                                                3F～32F 飛び道具無敵\n                                                Vトリガーキャンセル可能な技からキャンセル発動可能",
    vtrigger: 2,
    type: "special",
    command: "強P 強K"
  },
  {
    name: "ステルスダッシュ(ストップ)",
    outbreak: "",
    persistence: "",
    rigidity: "13",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "(ステルスダッシュ中に) ←"
  },
  {
    name: "ジャスティスコレダー",
    outbreak: "29",
    persistence: "7",
    rigidity: "29",
    hit: "D",
    guard: "2",
    damage: "100",
    stan: "200",
    remarks:
      "Vゲージタイマー500F消費\n                                                                                                                                3F～7F, 15F～32F 飛び道具無敵\n8F～14F 完全無敵\n                                                S※動作硬直を「ステルスダッシュ」でキャンセル可能\n(ステルスダッシュにキャンセルした場合ジャスティスコレダーに派生不可)",
    vtrigger: 2,
    type: "special",
    command: "(ステルスダッシュ中に) P"
  },
  {
    name: "ジャスティスシェル",
    outbreak: "10",
    persistence: "8",
    rigidity: "32",
    hit: "D",
    guard: "-16",
    damage: "100",
    stan: "150",
    remarks:
      "Vゲージタイマー500F消費\n                                                                                                                                1F～19F 飛び道具無敵\n                                                S※動作硬直を「ステルスダッシュ」でキャンセル可能\n(ステルスダッシュにキャンセルした場合ジャスティスシェルに派生不可)",
    vtrigger: 2,
    type: "special",
    command: "(ステルスダッシュ中に) K"
  },
  {
    name: "ジャッジメント・セイバー",
    outbreak: "1+9",
    persistence: "3",
    rigidity: "40",
    hit: "D",
    guard: "-31",
    damage: "330",
    stan: "0",
    remarks: "11F～12F 飛び道具無敵\n1F～10F 完全無敵",
    vtrigger: 2,
    type: "ca",
    command: "↓↙← ↓↙← + P"
  }
];

export { nash };
