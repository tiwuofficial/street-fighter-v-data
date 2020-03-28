const abigail = [
  {
    name: "立ち弱P",
    outbreak: "5",
    persistence: "3",
    rigidity: "10",
    hit: "4",
    guard: "3",
    damage: "40",
    stan: "70",
    remarks: "",
    command: ""
  },
  {
    name: "立ち中P",
    outbreak: "9",
    persistence: "3",
    rigidity: "18",
    hit: "7",
    guard: "5",
    damage: "70",
    stan: "100",
    remarks: "",
    command: ""
  },
  {
    name: "立ち強P",
    outbreak: "20",
    persistence: "4",
    rigidity: "25",
    hit: "0",
    guard: "-3",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応 (膝)",
    command: ""
  },
  {
    name: "立ち弱K",
    outbreak: "6",
    persistence: "3",
    rigidity: "12",
    hit: "4",
    guard: "3",
    damage: "50",
    stan: "70",
    remarks: "",
    command: ""
  },
  {
    name: "立ち中K",
    outbreak: "11",
    persistence: "3",
    rigidity: "18",
    hit: "2",
    guard: "0",
    damage: "80",
    stan: "100",
    remarks: "",
    command: ""
  },
  {
    name: "立ち強K",
    outbreak: "18",
    persistence: "4",
    rigidity: "29",
    hit: "D",
    guard: "-8",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応 (D)",
    command: ""
  },
  {
    name: "しゃがみ弱P",
    outbreak: "6",
    persistence: "3",
    rigidity: "12",
    hit: "2",
    guard: "1",
    damage: "40",
    stan: "70",
    remarks: "",
    command: ""
  },
  {
    name: "しゃがみ中P",
    outbreak: "13",
    persistence: "4",
    rigidity: "18",
    hit: "3",
    guard: "-2",
    damage: "70",
    stan: "100",
    remarks: "",
    command: ""
  },
  {
    name: "しゃがみ強P",
    outbreak: "11",
    persistence: "5",
    rigidity: "35",
    hit: "-13",
    guard: "-18",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応 (D)\n                                                強制立ち効果",
    command: ""
  },
  {
    name: "しゃがみ弱K",
    outbreak: "4",
    persistence: "2",
    rigidity: "12",
    hit: "5",
    guard: "2",
    damage: "40",
    stan: "70",
    remarks: "",
    command: ""
  },
  {
    name: "しゃがみ中K",
    outbreak: "12",
    persistence: "2",
    rigidity: "21",
    hit: "0",
    guard: "-3",
    damage: "60",
    stan: "100",
    remarks: "",
    command: ""
  },
  {
    name: "しゃがみ強K",
    outbreak: "16",
    persistence: "6",
    rigidity: "32",
    hit: "D",
    guard: "-14",
    damage: "120",
    stan: "150",
    remarks:
      "クラッシュカウンター対応 (D)\n                                                                                                                                                                V※1段目のみ可能",
    command: ""
  },
  {
    name: "ジャンプ弱P",
    outbreak: "5",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "60",
    stan: "70",
    remarks: "",
    command: ""
  },
  {
    name: "ジャンプ中P",
    outbreak: "14",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "70",
    stan: "100",
    remarks: "しゃがみの相手にヒットしない",
    command: ""
  },
  {
    name: "ジャンプ強P",
    outbreak: "12",
    persistence: "6",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "110",
    stan: "150",
    remarks: "空中ヒット時、吹き飛びダウン",
    command: ""
  },
  {
    name: "ジャンプ弱K",
    outbreak: "4",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "60",
    stan: "70",
    remarks: "",
    command: ""
  },
  {
    name: "ジャンプ中K",
    outbreak: "10",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "70",
    stan: "100",
    remarks: "めくり性能",
    command: ""
  },
  {
    name: "ジャンプ強K",
    outbreak: "14",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "90",
    stan: "150",
    remarks: "空中ヒット時、叩きつけダウン",
    command: ""
  },
  {
    name: "V立ち強P(溜め無し)",
    outbreak: "20",
    persistence: "4",
    rigidity: "25",
    hit: "0",
    guard: "-3",
    damage: "103",
    stan: "150",
    remarks:
      "クラッシュカウンター対応 (膝)\n                                                                                                                                                                5F～14Fアーマー判定(1回)",
    command: ""
  },
  {
    name: "V立ち強P(溜めLV2)",
    outbreak: "30",
    persistence: "4",
    rigidity: "25",
    hit: "膝",
    guard: "-3",
    damage: "115",
    stan: "150",
    remarks:
      "Vゲージタイマー500F消費\n                                                                                                                                                                                24F～39Fの間にボタンを離すと派生する\n5F～派生後3Fアーマー判定(1回)",
    command: ""
  },
  {
    name: "V立ち強P(溜めLV3)",
    outbreak: "45",
    persistence: "4",
    rigidity: "25",
    hit: "膝",
    guard: "GB",
    damage: "115",
    stan: "150",
    remarks:
      "Vゲージタイマー500F消費\n                                                                                                                                                                                5F～39Fアーマー判定(1回)\n40F～44Fアーマー判定(100回)\nガードブレイク時 +18F",
    command: ""
  },
  {
    name: "Vしゃがみ強P(溜め無し)",
    outbreak: "11",
    persistence: "5",
    rigidity: "35",
    hit: "-13",
    guard: "-18",
    damage: "103",
    stan: "150",
    remarks:
      "クラッシュカウンター対応 (膝)\n                                                                                                                                                                5F～6Fアーマー判定(1回)",
    command: ""
  },
  {
    name: "Vしゃがみ強P(溜めLV2)",
    outbreak: "21",
    persistence: "5",
    rigidity: "35",
    hit: "D",
    guard: "-18",
    damage: "103",
    stan: "150",
    remarks:
      "Vゲージタイマー500F消費\n                                                                                                                                                                                16F～34Fの間にボタンを離すと派生する\n5F～派生後3Fアーマー判定(1回)",
    command: ""
  },
  {
    name: "Vしゃがみ強P(溜めLV3)",
    outbreak: "40",
    persistence: "5",
    rigidity: "35",
    hit: "D",
    guard: "GB",
    damage: "103",
    stan: "150",
    remarks:
      "Vゲージタイマー500F消費\n                                                                                                                                                                                5F～34Fアーマー判定(1回)\n35F～39Fアーマー判定(100回)\nガードブレイク時 +1F",
    command: ""
  },
  {
    name: "アビハンマー",
    outbreak: "21",
    persistence: "3",
    rigidity: "23",
    hit: "3",
    guard: "-8",
    damage: "70",
    stan: "100",
    remarks: "持続1Fのみ地上の相手にヒットしない\n                                                                                空中ヒット時、叩きつけダウン\n持続の3F目のみダウン追い打ち可能",
    command: "→ + 中P"
  },
  { name: "アビリフト", outbreak: "10", persistence: "5", rigidity: "18", hit: "4", guard: "1", damage: "90", stan: "150", remarks: "しゃがみの相手にヒットしない", command: "→ + 強P" },
  {
    name: "アビブラスター",
    outbreak: "7",
    persistence: "2",
    rigidity: "35",
    hit: "-3",
    guard: "-6",
    damage: "90",
    stan: "150",
    remarks: "飛び道具相殺可能(相殺時CAゲージ30増加)\n空中ヒット時、吹き飛びダウン",
    command: "← + 強P"
  },
  { name: "アビシザー", outbreak: "13", persistence: "2", rigidity: "30", hit: "D", guard: "-14", damage: "90", stan: "150", remarks: "", command: "↙ + 強K" },
  { name: "ブンブン", outbreak: "3", persistence: "2", rigidity: "11", hit: "4", guard: "3", damage: "30", stan: "70", remarks: "", command: "弱P ▶ 弱P" },
  { name: "バンバン", outbreak: "4", persistence: "3", rigidity: "9", hit: "4", guard: "3", damage: "30", stan: "70", remarks: "", command: "↓ + 弱P ▶ ↓ + 弱P" },
  { name: "アビスクリュー", outbreak: "17", persistence: "2", rigidity: "28", hit: "D", guard: "-9", damage: "90", stan: "150", remarks: "", command: "← + 強P ▶ 強P" },
  {
    name: "Vアビリフト",
    outbreak: "10",
    persistence: "5",
    rigidity: "18",
    hit: "4",
    guard: "1",
    damage: "103",
    stan: "150",
    remarks: "しゃがみの相手にヒットしない\n                                                                                                5F目のみアーマー判定(1回)",
    command: "→ + 強P"
  },
  {
    name: "Vアビリフト",
    outbreak: "22",
    persistence: "5",
    rigidity: "18",
    hit: "D",
    guard: "1",
    damage: "103",
    stan: "200",
    remarks:
      "Vゲージタイマー500F消費\n                                                                                しゃがみの相手にヒットしない\n                                                                                                17F～30Fの間にボタンを離すと派生する\n5F～派生Fアーマー判定(1回)",
    command: "→ + 強P(ボタンホールド)"
  },
  {
    name: "Vアビリフト",
    outbreak: "35",
    persistence: "5",
    rigidity: "18",
    hit: "D",
    guard: "GB",
    damage: "103",
    stan: "200",
    remarks:
      "Vゲージタイマー500F消費\n                                                                                しゃがみの相手にヒットしない\n                                                                                                5F～30Fアーマー判定(1回)\n31F～34Fアーマー判定(100回)\nガードブレイク時 +13F",
    command: "→ + 強P(ボタンホールド最大)"
  },
  {
    name: "Vアビブラスター",
    outbreak: "7",
    persistence: "2",
    rigidity: "35",
    hit: "-3",
    guard: "-6",
    damage: "103",
    stan: "150",
    remarks: "飛び道具相殺可能(2回)(飛び道具相殺時、CAゲージ30上昇)\n空中ヒット時、吹き飛びダウン",
    command: "← + 強P"
  },
  {
    name: "Vアビブラスター",
    outbreak: "17",
    persistence: "2",
    rigidity: "35",
    hit: "-3",
    guard: "-6",
    damage: "103",
    stan: "150",
    remarks:
      "Vゲージタイマー500F消費\n                                                                                                                                                                                飛び道具反射可能(EX技まで)\n空中ヒット時、吹き飛びダウン\n14F～29Fの間にボタンを離すと派生する\n5F～派生Fアーマー判定(1回)",
    command: "← + 強P(ボタンホールド)"
  },
  {
    name: "Vアビブラスター",
    outbreak: "32",
    persistence: "2",
    rigidity: "35",
    hit: "D",
    guard: "GB",
    damage: "103",
    stan: "150",
    remarks:
      "Vゲージタイマー500F消費\n                                                                                                                                                                                飛び道具反射可能(CAを含むすべての飛び道具)\nヒット時、吹き飛びダウン\n5F～29Fアーマー判定(1回)\n30F～31Fアーマー判定(100回)\nガードブレイク時 +9F",
    command: "← + 強P(ボタンホールド最大)"
  },
  {
    name: "Vアビスクリュー",
    outbreak: "17",
    persistence: "2",
    rigidity: "28",
    hit: "D",
    guard: "-9",
    damage: "103",
    stan: "150",
    remarks: "地上と空中でヒット時の吹き飛び量変化",
    command: "← + 強P(ボタンホールド)OR(ボタンホールド最大) ▶ 強P"
  },
  {
    name: "レッドリーフ",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "D",
    guard: "",
    damage: "140",
    stan: "170",
    remarks: "",
    command: ""
  },
  {
    name: "ヒット＆ラン",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "D",
    guard: "",
    damage: "130",
    stan: "170",
    remarks: "",
    command: ""
  },
  {
    name: "[VS1]ハンガビー・ハイ",
    outbreak: "3",
    persistence: "10",
    rigidity: "36",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "立ち・空中攻撃のみ当身可能",
    command: ""
  },
  {
    name: "[VS1]ハンガビー・ロー",
    outbreak: "3",
    persistence: "10",
    rigidity: "36",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "しゃがみ攻撃のみ当身可能",
    command: ""
  },
  {
    name: "[VS1]ハンガビー(当身成立時)",
    outbreak: "4",
    persistence: "8",
    rigidity: "20",
    hit: "22",
    guard: "-6",
    damage: "30",
    stan: "70",
    remarks: "1F～11F 打撃無敵",
    command: ""
  },
  {
    name: "[VS2]カモンスペアタイヤ",
    outbreak: "29",
    persistence: "",
    rigidity: "全体76",
    hit: "",
    guard: "",
    damage: "70(※100)",
    stan: "100(※150)",
    remarks:
      "タイアに攻撃をヒットさせると軌道が変化する\n(5回攻撃をヒットさせるとタイアが消失)\n※タイアに以下の攻撃をヒットさせた際の数値 Vゲージ増加も0/100に変化\n立ち強P/立ち強K/しゃがみ強K/ジャンプ強K/アビシザー/中・EXアビゲイルパンチ/ダイナマイトパンチ/アビゲイラー",
    command: ""
  },
  {
    name: "マックスパワー",
    outbreak: "1",
    persistence: "",
    rigidity: "5",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "Vゲージタイマー+2800F\n                                                                                                                                                                                通常技・特殊技のダメージUP\n5HP、2HP、6HP、4HPがホールド可能になる",
    command: ""
  },
  {
    name: "オンタリオドロップ",
    outbreak: "17",
    persistence: "2",
    rigidity: "24",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "0",
    remarks: "1F～29F 打撃&飛び道具無敵\n                                                発動時スタン値200回復",
    command: ""
  },
  {
    name: "弱 アビゲイルパンチ",
    outbreak: "14",
    persistence: "2",
    rigidity: "31",
    hit: "D",
    guard: "-12",
    damage: "100",
    stan: "120",
    remarks: "CA※1段目と最終段のみ可能",
    command: ""
  },
  {
    name: "弱 アビゲイルパンチ連打",
    outbreak: "",
    persistence: "",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "120",
    stan: "150",
    remarks: "弱アビゲイルパンチヒット時のみ派生可能\nCA※最終段のみ可能",
    command: ""
  },
  {
    name: "中 アビゲイルパンチ",
    outbreak: "20",
    persistence: "2",
    rigidity: "31",
    hit: "D",
    guard: "-19",
    damage: "110",
    stan: "120",
    remarks: "CA※1段目と最終段のみ可能",
    command: ""
  },
  {
    name: "中 アビゲイルパンチ連打",
    outbreak: "",
    persistence: "",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "130",
    stan: "150",
    remarks: "中アビゲイルパンチヒット時のみ派生可能\nCA※最終段のみ可能",
    command: ""
  },
  {
    name: "強 アビゲイルパンチ",
    outbreak: "16",
    persistence: "2",
    rigidity: "31",
    hit: "D",
    guard: "-16",
    damage: "120",
    stan: "120",
    remarks: "CA※1段目と最終段のみ可能",
    command: ""
  },
  {
    name: "強 アビゲイルパンチ連打",
    outbreak: "",
    persistence: "",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "140",
    stan: "150",
    remarks: "強アビゲイルパンチヒット時のみ派生可能\nCA※最終段のみ可能",
    command: ""
  },
  {
    name: "EXアビゲイルパンチ",
    outbreak: "14",
    persistence: "2",
    rigidity: "38",
    hit: "D",
    guard: "-23",
    damage: "140",
    stan: "150",
    remarks: "3F～13Fアーマー判定(1回)\nVS※VS2のみキャンセル可能",
    command: ""
  },
  {
    name: "EXアビゲイルパンチ連打",
    outbreak: "",
    persistence: "",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "160",
    stan: "200",
    remarks: "EXアビゲイルパンチヒット時のみ派生可能\nVS※VS2のみキャンセル可能",
    command: ""
  },
  {
    name: "弱 ギガントフープ",
    outbreak: "23",
    persistence: "7",
    rigidity: "22",
    hit: "D",
    guard: "0",
    damage: "70",
    stan: "100",
    remarks: "",
    command: ""
  },
  {
    name: "中 ギガントフープ",
    outbreak: "33",
    persistence: "6",
    rigidity: "22",
    hit: "D",
    guard: "1",
    damage: "80",
    stan: "100",
    remarks: "",
    command: ""
  },
  {
    name: "強 ギガントフープ",
    outbreak: "36",
    persistence: "6",
    rigidity: "23",
    hit: "D",
    guard: "2",
    damage: "100",
    stan: "150",
    remarks: "",
    command: ""
  },
  {
    name: "EXギガントフープ",
    outbreak: "9",
    persistence: "8",
    rigidity: "24",
    hit: "D",
    guard: "-2",
    damage: "80",
    stan: "150",
    remarks: "1F～37F 飛び道具無敵\n                                                ダウン追い打ち可能",
    command: ""
  },
  {
    name: "EXギガントフープ連打",
    outbreak: "30",
    persistence: "6",
    rigidity: "26",
    hit: "D",
    guard: "-8",
    damage: "70",
    stan: "100",
    remarks: "ダウン追い打ち可能",
    command: ""
  },
  {
    name: "弱 アビゲイルスマッシュ",
    outbreak: "6",
    persistence: "2",
    rigidity: "60",
    hit: "D",
    guard: "",
    damage: "180",
    stan: "250",
    remarks: "",
    command: ""
  },
  {
    name: "中 アビゲイルスマッシュ",
    outbreak: "6",
    persistence: "2",
    rigidity: "60",
    hit: "D",
    guard: "",
    damage: "200",
    stan: "250",
    remarks: "",
    command: ""
  },
  {
    name: "強 アビゲイルスマッシュ",
    outbreak: "6",
    persistence: "2",
    rigidity: "60",
    hit: "D",
    guard: "",
    damage: "220",
    stan: "250",
    remarks: "",
    command: ""
  },
  {
    name: "EXアビゲイルスマッシュ",
    outbreak: "6",
    persistence: "2",
    rigidity: "60",
    hit: "D",
    guard: "",
    damage: "80",
    stan: "100",
    remarks: "",
    command: ""
  },
  {
    name: "ナイトロチャージ",
    outbreak: "全体124",
    persistence: "",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    command: ""
  },
  {
    name: "ナイトロブリッツ",
    outbreak: "全体100",
    persistence: "",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "5F目から動作中アーマー判定(1回)\n100F後、ダイナマイトパンチに派生",
    command: ""
  },
  {
    name: "ダイナマイトパンチ",
    outbreak: "15",
    persistence: "3",
    rigidity: "29",
    hit: "D",
    guard: "-9",
    damage: "100",
    stan: "200",
    remarks: "",
    command: ""
  },
  {
    name: "アバランシュプレス",
    outbreak: "23",
    persistence: "7",
    rigidity: "32",
    hit: "D",
    guard: "-12",
    damage: "150",
    stan: "200",
    remarks:
      "8F～23F 飛び道具無敵\n                                                12F～22F アーマー判定(1回)\n空中の相手に対して裏当たりした際、吹き飛びダウン\n初段ヒット時、叩き付けダウン+受け身不可(攻撃判定の上部分が当たると吹き飛びダウン)\n2段目はダウン追い打ち可能\n2段目の持続2F目はダウン中の相手にしかヒットしない",
    command: ""
  },
  {
    name: "ベイエリアサンライズ",
    outbreak: "8",
    persistence: "2",
    rigidity: "60",
    hit: "D",
    guard: "",
    damage: "200",
    stan: "250",
    remarks: "1F～9F 投げ無敵",
    command: ""
  },
  {
    name: "ハンガビー・ハイ",
    outbreak: "3",
    persistence: "10",
    rigidity: "36",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "立ち・空中攻撃のみ当身可能",
    command: ""
  },
  {
    name: "ハンガビー・ロー",
    outbreak: "3",
    persistence: "10",
    rigidity: "36",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "しゃがみ攻撃のみ当身可能",
    command: ""
  },
  {
    name: "ハンガビー(当身成立時)",
    outbreak: "4",
    persistence: "8",
    rigidity: "20",
    hit: "22",
    guard: "-6",
    damage: "30",
    stan: "70",
    remarks: "1F～11F 打撃無敵",
    command: ""
  },
  {
    name: "ドロップバック",
    outbreak: "全体37",
    persistence: "",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    command: ""
  },
  {
    name: "EXナイトロチャージ",
    outbreak: "39",
    persistence: "8",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "10",
    stan: "20",
    remarks: "3Fから動作中アーマー判定(2回)\n100Ｆ後、EXダイナマイトパンチに派生",
    command: ""
  },
  {
    name: "EXダイナマイトパンチ",
    outbreak: "15",
    persistence: "3",
    rigidity: "29",
    hit: "膝",
    guard: "-9",
    damage: "100",
    stan: "200",
    remarks: "1F～14Fアーマー判定(1回)",
    command: ""
  },
  {
    name: "EXアバランシュプレス",
    outbreak: "21",
    persistence: "7",
    rigidity: "34",
    hit: "D",
    guard: "-11",
    damage: "170",
    stan: "200",
    remarks: "4F～25F 飛び道具無敵\n                                                5F～20Fアーマー判定(1回)\n空中の相手に対して裏当たりした際、吹き飛びダウン",
    command: ""
  },
  {
    name: "EXベイエリアサンライズ",
    outbreak: "8",
    persistence: "2",
    rigidity: "60",
    hit: "D",
    guard: "",
    damage: "240",
    stan: "300",
    remarks: "1F～9F 投げ無敵",
    command: ""
  },
  {
    name: "EXハンガビー",
    outbreak: "2",
    persistence: "10",
    rigidity: "36",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "アーマー・当身ブレイクを無視する",
    command: ""
  },
  {
    name: "EXハンガビー(当身成立時)",
    outbreak: "4",
    persistence: "8",
    rigidity: "20",
    hit: "27",
    guard: "-6",
    damage: "40",
    stan: "70",
    remarks: "1F～5F 完全無敵\n                                                上段と下段でモーション変化",
    command: ""
  },
  {
    name: "VEXナイトロチャージ",
    outbreak: "39",
    persistence: "8",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "11",
    stan: "20",
    remarks: "動作中アーマー判定(3回)\n100Ｆ後、EXダイナマイトパンチに派生",
    command: ""
  },
  {
    name: "アビゲイラー",
    outbreak: "1+3",
    persistence: "4",
    rigidity: "118",
    hit: "D",
    guard: "-95",
    damage: "350",
    stan: "0",
    remarks: "1F～7F 完全無敵\n                                                アビゲイルパンチからキャンセルした際は発生1+0F",
    command: ""
  }
];

export { abigail };