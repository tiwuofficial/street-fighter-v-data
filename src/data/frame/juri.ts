const juri = [
  { name: "立ち弱P", outbreak: "3", persistence: "2", rigidity: "7", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "連打キャンセル対応", command: "" },
  { name: "V立ち弱P", outbreak: "3", persistence: "2", rigidity: "7", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "連打キャンセル対応", command: "" },
  {
    name: "V立ち弱P(チェーンコンボ)",
    outbreak: "3",
    persistence: "2",
    rigidity: "7",
    hit: "4",
    guard: "2",
    damage: "20",
    stan: "40",
    remarks:
      "Vゲージタイマー250F消費\n                                                                                                                                                                                S※風破連脚のみ可能",
    command: ""
  },
  { name: "立ち中P", outbreak: "5", persistence: "3", rigidity: "11", hit: "5", guard: "2", damage: "60", stan: "100", remarks: "", command: "" },
  { name: "V立ち中P", outbreak: "5", persistence: "3", rigidity: "11", hit: "5", guard: "2", damage: "60", stan: "100", remarks: "", command: "" },
  {
    name: "V立ち中P(チェーンコンボ)",
    outbreak: "5",
    persistence: "3",
    rigidity: "11",
    hit: "5",
    guard: "-1",
    damage: "50",
    stan: "60",
    remarks:
      "Vゲージタイマー250F消費\n                                                                                                                                                                                S※風破連脚のみ可能",
    command: ""
  },
  { name: "立ち強P", outbreak: "8", persistence: "3", rigidity: "17", hit: "4", guard: "-3", damage: "80", stan: "150", remarks: "", command: "" },
  { name: "V立ち強P", outbreak: "8", persistence: "3", rigidity: "17", hit: "4", guard: "-3", damage: "80", stan: "150", remarks: "", command: "" },
  {
    name: "V立ち強P(チェーンコンボ)",
    outbreak: "8",
    persistence: "3",
    rigidity: "17",
    hit: "D",
    guard: "-6",
    damage: "65",
    stan: "80",
    remarks:
      "Vゲージタイマー250F消費\n                                                                                                                                                                                S※風破連脚のみ可能",
    command: ""
  },
  { name: "立ち弱K", outbreak: "4", persistence: "4", rigidity: "8", hit: "4", guard: "1", damage: "30", stan: "70", remarks: "", command: "" },
  { name: "V立ち弱K", outbreak: "4", persistence: "4", rigidity: "8", hit: "4", guard: "1", damage: "30", stan: "70", remarks: "", command: "" },
  {
    name: "V立ち弱K(チェーンコンボ)",
    outbreak: "4",
    persistence: "4",
    rigidity: "8",
    hit: "4",
    guard: "1",
    damage: "20",
    stan: "40",
    remarks:
      "Vゲージタイマー250F消費\n                                                                                                                                                                                S※風破連脚のみ可能",
    command: ""
  },
  {
    name: "立ち中K",
    outbreak: "5",
    persistence: "4",
    rigidity: "15",
    hit: "1",
    guard: "-4",
    damage: "70(※60)",
    stan: "100(※100)",
    remarks: "S※CA※VS※1段目のみ可能\nV※2段目のみ可能\n※先端ヒット時",
    command: ""
  },
  {
    name: "V立ち中K",
    outbreak: "5",
    persistence: "4",
    rigidity: "15",
    hit: "1",
    guard: "-4",
    damage: "70(※60)",
    stan: "100(※100)",
    remarks: "S※VS※1段目のみ可能\n(風破連脚のみ２段目も可能)\nCA※2段目のみ可能\n※先端ヒット時",
    command: ""
  },
  {
    name: "V立ち中K(チェーンコンボ)",
    outbreak: "6",
    persistence: "4",
    rigidity: "15",
    hit: "1",
    guard: "-7",
    damage: "60(※50)",
    stan: "60(※60)",
    remarks:
      "Vゲージタイマー250F消費\n                                                                                                                                                                                S※風破連脚のみ可能\n※先端ヒット時",
    command: ""
  },
  { name: "立ち強K", outbreak: "14", persistence: "3", rigidity: "20", hit: "1", guard: "-4", damage: "80", stan: "150", remarks: "クラッシュカウンター対応(+20F)", command: "" },
  {
    name: "V立ち強K",
    outbreak: "14",
    persistence: "3",
    rigidity: "20",
    hit: "1",
    guard: "-4",
    damage: "80",
    stan: "150",
    remarks:
      "クラッシュカウンター対応(+20F)\n                                                                                                                                                                S※風破連脚のみ可能",
    command: ""
  },
  {
    name: "V立ち強K(チェーンコンボ)",
    outbreak: "14",
    persistence: "3",
    rigidity: "20",
    hit: "1",
    guard: "-7",
    damage: "65",
    stan: "80",
    remarks:
      "Vゲージタイマー250F消費\n                クラッシュカウンター対応(+20F)\n                                                                                                                                                                S※風破連脚のみ可能",
    command: ""
  },
  { name: "しゃがみ弱P", outbreak: "4", persistence: "3", rigidity: "6", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "連打キャンセル対応", command: "" },
  { name: "Vしゃがみ弱P", outbreak: "4", persistence: "3", rigidity: "6", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "連打キャンセル対応", command: "" },
  {
    name: "Vしゃがみ弱P(チェーンコンボ)",
    outbreak: "4",
    persistence: "3",
    rigidity: "6",
    hit: "4",
    guard: "2",
    damage: "20",
    stan: "40",
    remarks:
      "Vゲージタイマー250F消費\n                                                                                                                                                                                S※風破連脚のみ可能",
    command: ""
  },
  { name: "しゃがみ中P", outbreak: "6", persistence: "3", rigidity: "16", hit: "2", guard: "0", damage: "60", stan: "100", remarks: "", command: "" },
  { name: "Vしゃがみ中P", outbreak: "6", persistence: "3", rigidity: "16", hit: "2", guard: "0", damage: "60", stan: "100", remarks: "", command: "" },
  {
    name: "Vしゃがみ中P(チェーンコンボ)",
    outbreak: "6",
    persistence: "3",
    rigidity: "16",
    hit: "4",
    guard: "-1",
    damage: "50",
    stan: "60",
    remarks:
      "Vゲージタイマー250F消費\n                                                                                                                                                                                S※風破連脚のみ可能",
    command: ""
  },
  {
    name: "しゃがみ強P",
    outbreak: "10",
    persistence: "2",
    rigidity: "21",
    hit: "3",
    guard: "-5",
    damage: "90(※70)",
    stan: "150",
    remarks:
      "クラッシュカウンター対応(+21F)\n                                                強制立ち効果\n                                                                                                                ※空中ヒット時",
    command: ""
  },
  {
    name: "Vしゃがみ強P",
    outbreak: "10",
    persistence: "2",
    rigidity: "21",
    hit: "3",
    guard: "-5",
    damage: "90(※70)",
    stan: "150",
    remarks:
      "クラッシュカウンター対応(+21F)\n                                                強制立ち効果\n                                                                                                                ※空中ヒット時",
    command: ""
  },
  {
    name: "Vしゃがみ強P(チェーンコンボ)",
    outbreak: "10",
    persistence: "2",
    rigidity: "21",
    hit: "D",
    guard: "-8",
    damage: "75",
    stan: "80",
    remarks:
      "Vゲージタイマー250F消費\n                クラッシュカウンター対応(+21F)\n                                                                                                                                                                ※クラッシュカウンター時のみダウンしない\nS※風破連脚のみ可能",
    command: ""
  },
  { name: "しゃがみ弱K", outbreak: "3", persistence: "2", rigidity: "10", hit: "2", guard: "0", damage: "20", stan: "70", remarks: "連打キャンセル対応", command: "" },
  {
    name: "Vしゃがみ弱K",
    outbreak: "3",
    persistence: "2",
    rigidity: "10",
    hit: "2",
    guard: "0",
    damage: "20",
    stan: "70",
    remarks: "連打キャンセル対応\n                                                                                                                                S※風破連脚のみ可能",
    command: ""
  },
  {
    name: "Vしゃがみ弱K(チェーンコンボ)",
    outbreak: "3",
    persistence: "2",
    rigidity: "10",
    hit: "2",
    guard: "0",
    damage: "10",
    stan: "40",
    remarks:
      "Vゲージタイマー250F消費\n                                                                                                                                                                                S※風破連脚のみ可能",
    command: ""
  },
  { name: "しゃがみ中K", outbreak: "6", persistence: "2", rigidity: "14", hit: "2", guard: "-2", damage: "50", stan: "100", remarks: "", command: "" },
  { name: "Vしゃがみ中K", outbreak: "6", persistence: "2", rigidity: "14", hit: "2", guard: "-2", damage: "50", stan: "100", remarks: "", command: "" },
  {
    name: "Vしゃがみ中K(チェーンコンボ)",
    outbreak: "6",
    persistence: "2",
    rigidity: "14",
    hit: "2",
    guard: "-5",
    damage: "40",
    stan: "60",
    remarks:
      "Vゲージタイマー250F消費\n                                                                                                                                                                                S※風破連脚のみ可能",
    command: ""
  },
  { name: "しゃがみ強K", outbreak: "8", persistence: "2", rigidity: "23", hit: "D", guard: "-12", damage: "100", stan: "150", remarks: "クラッシュカウンター対応 (D)", command: "" },
  {
    name: "Vしゃがみ強K",
    outbreak: "8",
    persistence: "2",
    rigidity: "23",
    hit: "D",
    guard: "-12",
    damage: "100",
    stan: "150",
    remarks:
      "クラッシュカウンター対応 (D)\n                                                                                                                                                                S※風破連脚のみ可能",
    command: ""
  },
  {
    name: "Vしゃがみ強K(チェーンコンボ)",
    outbreak: "8",
    persistence: "2",
    rigidity: "23",
    hit: "D",
    guard: "-15",
    damage: "85",
    stan: "80",
    remarks:
      "Vゲージタイマー250F消費\n                クラッシュカウンター対応 (D)\n                                                                                                                                                                S※風破連脚のみ可能",
    command: ""
  },
  { name: "ジャンプ弱P", outbreak: "4", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", command: "" },
  { name: "Vジャンプ弱P", outbreak: "4", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "空中ヒット時吹き飛びやられ", command: "" },
  { name: "ジャンプ中P", outbreak: "6", persistence: "4", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "空中ヒット時吹き飛びやられ", command: "" },
  { name: "Vジャンプ中P", outbreak: "6", persistence: "4", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "空中ヒット時吹き飛びやられ", command: "" },
  {
    name: "Vジャンプ中P(チェーンコンボ)",
    outbreak: "6",
    persistence: "4",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "45",
    stan: "60",
    remarks:
      "Vゲージタイマー250F消費\n                                                                                                                                                                                空中ヒット時吹き飛びやられ",
    command: ""
  },
  { name: "ジャンプ強P", outbreak: "9", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
  { name: "Vジャンプ強P", outbreak: "9", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "空中ヒット時吹き飛びやられ", command: "" },
  {
    name: "Vジャンプ強P(チェーンコンボ)",
    outbreak: "9",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "75",
    stan: "80",
    remarks:
      "Vゲージタイマー250F消費\n                                                                                                                                                                                空中ヒット時吹き飛びやられ",
    command: ""
  },
  { name: "ジャンプ弱K", outbreak: "4", persistence: "7", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "めくり性能", command: "" },
  {
    name: "Vジャンプ弱K",
    outbreak: "4",
    persistence: "7",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "40",
    stan: "70",
    remarks: "めくり性能\n                                                                                                                                                空中ヒット時吹き飛びやられ",
    command: ""
  },
  { name: "ジャンプ中K", outbreak: "7", persistence: "5", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "めくり性能", command: "" },
  {
    name: "Vジャンプ中K",
    outbreak: "7",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "60",
    stan: "100",
    remarks: "めくり性能\n                                                                                                                                                空中ヒット時吹き飛びやられ",
    command: ""
  },
  {
    name: "Vジャンプ中K(チェーンコンボ)",
    outbreak: "7",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "50",
    stan: "60",
    remarks:
      "Vゲージタイマー250F消費\n                                めくり性能\n                                                                                                                                                空中ヒット時吹き飛びやられ",
    command: ""
  },
  { name: "ジャンプ強K", outbreak: "8", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
  { name: "Vジャンプ強K", outbreak: "8", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "空中ヒット時吹き飛びやられ", command: "" },
  {
    name: "Vジャンプ強K(チェーンコンボ)",
    outbreak: "8",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "75",
    stan: "80",
    remarks:
      "Vゲージタイマー250F消費\n                                                                                                                                                                                空中ヒット時吹き飛びやられ",
    command: ""
  },
  { name: "殲廻脚", outbreak: "22", persistence: "2", rigidity: "19", hit: "0", guard: "-7", damage: "60", stan: "100", remarks: "16F～21F 投げ無敵", command: "→ + 中K" },
  {
    name: "鉤鎌斬",
    outbreak: "7",
    persistence: "5",
    rigidity: "15",
    hit: "4",
    guard: "-2",
    damage: "80",
    stan: "150",
    remarks: "初段ヒット時のみ強制立ち効果\n                                                                                                                V※2段目のみ可能",
    command: "← + 強K"
  },
  { name: "虚裂蹴", outbreak: "8", persistence: "3", rigidity: "25", hit: "D", guard: "-12", damage: "60", stan: "100", remarks: "S※CA※VS※ヒット時のみ可能", command: "中P ▶ ←OR → + 強P" },
  { name: "奄空襲", outbreak: "5", persistence: "5", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", command: "(ジャンプ中に) 中P ▶ 強K" },
  { name: "蜘穿脚", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "120", stan: "120", remarks: "", command: "" },
  { name: "苛影脚", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "140", stan: "200", remarks: "", command: "" },
  { name: "斬架閃", outbreak: "5", persistence: "2", rigidity: "着地後8", hit: "D", guard: "", damage: "140", stan: "200", remarks: "", command: "" },
  { name: "[VS1]化殺襲(空振り)", outbreak: "46", persistence: "2", rigidity: "25", hit: "D", guard: "-10", damage: "", stan: "", remarks: "", command: "" },
  {
    name: "[VS1]化殺襲Lv.1",
    outbreak: "※37",
    persistence: "2",
    rigidity: "25",
    hit: "D",
    guard: "-10",
    damage: "80",
    stan: "150",
    remarks:
      "※密着時\n32F以上ボタンホールドを続けることにより攻撃がLV2に変化\nホールド中は22F以降、前方ステップ・後方ステップでキャンセル可能\nLV2状態までホールドを続けた後に各種ステップでキャンセルした場合、ホールド無しで即時LV2を発動できるようになる",
    command: ""
  },
  {
    name: "[VS1]化殺襲Lv.2",
    outbreak: "※39-80",
    persistence: "突進中+2",
    rigidity: "33",
    hit: "D",
    guard: "-18",
    damage: "100",
    stan: "200",
    remarks:
      "※ホールド時間で変化\n39F目から突進中飛び道具無敵\nホールド中は前方ステップ・後方ステップでキャンセル可能\nホールド中を各種ステップでキャンセルした場合、ホールド無しで即時LV2を発動できるようになる",
    command: ""
  },
  {
    name: "[VS1]化殺襲Lv.2(即時発動版)",
    outbreak: "※10-61",
    persistence: "突進中+2",
    rigidity: "33",
    hit: "D",
    guard: "-18",
    damage: "100",
    stan: "200",
    remarks: "※ホールド時間で変化\n6F目から突進中飛び道具無敵\nホールド中は22F以降、前方ステップ・後方ステップでキャンセル可能",
    command: ""
  },
  {
    name: "[VS2]風波円斬(溜め)",
    outbreak: "",
    persistence: "",
    rigidity: "全体53",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "溜め動作成立後に再度入力で「風波円斬」(攻撃)が発動",
    command: ""
  },
  { name: "[VS2]風波円斬(攻撃)", outbreak: "19", persistence: "74", rigidity: "全体47", hit: "D", guard: "-2", damage: "50", stan: "80", remarks: "", command: "" },
  {
    name: "風水エンジン type alpha",
    outbreak: "1",
    persistence: "",
    rigidity: "5",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "Vゲージタイマー+2700F\n                                                                                                                                                                                ①蹴り上げ動作無しで風破連脚が発動可能+性能強化\n②地上、空中でチェーンコンボが可能\n地上：同じ強度のPorKもしくは1つ以上上の強度のPorKに移行可能、逆走は出来ない\n空中：1つ以上上の強度のPorKに移行可能（同じ強度での移行は不可）\n③全ての通常技をキャンセルして風破連脚が発動可能",
    command: ""
  },
  {
    name: "回旋連脚",
    outbreak: "17",
    persistence: "2",
    rigidity: "24",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "0",
    remarks: "1F～29F 打撃&飛び道具無敵\n                                                発動時スタン値200回復\nヒット時は専用動作に移行",
    command: ""
  },
  { name: "風破連脚(蹴り上げ)", outbreak: "10", persistence: "3", rigidity: "18", hit: "D", guard: "-2", damage: "30", stan: "30", remarks: "10F目に各強度の風破連脚をストックできる", command: "" },
  {
    name: "弱 風破連脚",
    outbreak: "14",
    persistence: "80",
    rigidity: "全体37",
    hit: "2",
    guard: "-2",
    damage: "50",
    stan: "80",
    remarks: "VS※VS1はヒット時のみ可能 \nS※別強度の風破連脚でキャンセル可能",
    command: ""
  },
  {
    name: "中 風破連脚",
    outbreak: "23",
    persistence: "2",
    rigidity: "19",
    hit: "6",
    guard: "-4",
    damage: "70",
    stan: "80",
    remarks: "VS※VS1はヒット時のみ可能 \nS※別強度の風破連脚でキャンセル可能",
    command: ""
  },
  {
    name: "強 風破連脚",
    outbreak: "10",
    persistence: "4",
    rigidity: "21",
    hit: "D",
    guard: "-6",
    damage: "90",
    stan: "150",
    remarks: "VS※VS1は2段目ヒット時のみ可能 \nS※別強度の風破連脚でキャンセル可能",
    command: ""
  },
  {
    name: "V弱 風破連脚",
    outbreak: "14",
    persistence: "80",
    rigidity: "全体39",
    hit: "D",
    guard: "-1",
    damage: "60",
    stan: "100",
    remarks:
      "Vゲージタイマー800F消費\n                                                                                                                                                                                VS※VS1はヒット時のみ可能\nS※別強度の風破連脚でキャンセル可能\n(同じ強度は２回使えない)",
    command: ""
  },
  {
    name: "V中 風破連脚",
    outbreak: "23",
    persistence: "2",
    rigidity: "19",
    hit: "6",
    guard: "-4",
    damage: "70",
    stan: "100",
    remarks:
      "Vゲージタイマー600F消費\n                                                                                                                                                                                VS※VS1はヒット時のみ可能\nS※別強度の風破連脚でキャンセル可能\n(同じ強度は２回使えない)",
    command: ""
  },
  {
    name: "V強 風破連脚",
    outbreak: "10",
    persistence: "4",
    rigidity: "21",
    hit: "D",
    guard: "-6",
    damage: "90",
    stan: "170",
    remarks:
      "Vゲージタイマー600F消費\n                                                                                                                                                                                VS※VS1は2段目ヒット時のみ可能\nS※別強度の風破連脚でキャンセル可能\n(同じ強度は２回使えない)",
    command: ""
  },
  { name: "EX 風破連脚", outbreak: "7", persistence: "8", rigidity: "15", hit: "D", guard: "-2", damage: "140", stan: "150", remarks: "V※2段目と最終段のみ可能", command: "" },
  {
    name: "弱 天穿輪",
    outbreak: "7",
    persistence: "5",
    rigidity: "22",
    hit: "2",
    guard: "-3 (※-8)",
    damage: "80",
    stan: "150",
    remarks:
      "初段ヒット時のみ強制立ち効果\n                2段目はしゃがみの相手にヒットしない\n                                                1F～8F 投げ無敵\n                                                ※相手しゃがみ時\nCA※2段目のみ可能",
    command: ""
  },
  {
    name: "中 天穿輪",
    outbreak: "6",
    persistence: "7",
    rigidity: "22+着地後16",
    hit: "D",
    guard: "-29",
    damage: "120",
    stan: "150",
    remarks: "1F～8F 空中判定の攻撃に対して無敵\n                                三段目地上の相手に当たらない\n動作中常に被カウンター判定",
    command: ""
  },
  {
    name: "強 天穿輪",
    outbreak: "7",
    persistence: "8",
    rigidity: "22+着地後16",
    hit: "D",
    guard: "-32",
    damage: "120",
    stan: "150",
    remarks: "3F～8F 打撃&飛び道具無敵\n                                                三段目以降地上の相手に当たらない",
    command: ""
  },
  {
    name: "EX 天穿輪",
    outbreak: "7",
    persistence: "8",
    rigidity: "22+着地後18",
    hit: "D",
    guard: "-31",
    damage: "150",
    stan: "200",
    remarks:
      "1F～12F 完全無敵\n                                                四段目までがヒットした場合のみフィニッシュの蹴り落としに移行\n三段目以降地上の相手に当たらない\n動作中常に被カウンター判定(被ダメージ1.2倍)",
    command: ""
  },
  { name: "弱 両断殺", outbreak: "19", persistence: "3", rigidity: "24", hit: "D", guard: "-6", damage: "70", stan: "150", remarks: "", command: "" },
  { name: "中 両断殺", outbreak: "20", persistence: "3", rigidity: "24", hit: "D", guard: "-6", damage: "80", stan: "150", remarks: "", command: "" },
  { name: "強 両断殺", outbreak: "25", persistence: "3", rigidity: "24", hit: "D", guard: "-6", damage: "100", stan: "200", remarks: "", command: "" },
  { name: "EX 両断殺", outbreak: "25", persistence: "3", rigidity: "20", hit: "D", guard: "-2", damage: "80", stan: "150", remarks: "1F～27F 飛び道具無敵", command: "" },
  { name: "殺界風破斬", outbreak: "1+8", persistence: "", rigidity: "全体67", hit: "D", guard: "-15", damage: "330", stan: "0", remarks: "1F～8F 完全無敵", command: "" }
];

export { juri };
