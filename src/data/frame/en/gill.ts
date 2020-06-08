const gill = [
  { name: "Standing LP", outbreak: "4", persistence: "3", rigidity: "9", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "Standing MP", outbreak: "7", persistence: "3", rigidity: "13", hit: "6", guard: "3", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  {
    name: "Standing HP",
    outbreak: "13",
    persistence: "3",
    rigidity: "17",
    hit: "6(*10)",
    guard: "-2",
    damage: "90",
    stan: "120",
    remarks: "反属性ダメージ対応技\n*反属性ダメージ中の相手に攻撃をヒットさせた際の数値",
    type: "normal",
    command: ""
  },
  { name: "Standing LK", outbreak: "4", persistence: "3", rigidity: "8", hit: "5", guard: "3", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "Standing MK", outbreak: "9", persistence: "3", rigidity: "16", hit: "3", guard: "-4", damage: "70", stan: "100", remarks: "", type: "normal", command: "" },
  {
    name: "Standing HK",
    outbreak: "11",
    persistence: "3",
    rigidity: "23",
    hit: "2(*D)",
    guard: "-4",
    damage: "80",
    stan: "150",
    remarks: "反属性ダメージ対応技\n*反属性ダメージ中の相手に攻撃をヒットさせた際の数値",
    type: "normal",
    command: ""
  },
  { name: "Crouching LP", outbreak: "3", persistence: "2", rigidity: "9", hit: "3", guard: "1", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "Crouching MP", outbreak: "6", persistence: "2", rigidity: "16", hit: "2", guard: "-2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  {
    name: "Crouching HP",
    outbreak: "7",
    persistence: "5",
    rigidity: "21",
    hit: "D",
    guard: "-9",
    damage: "80(*70)",
    stan: "150",
    remarks: "反属性ダメージ対応技\nCA*S*V*Only possible during 2nd attack\n*For the 2nd hit",
    type: "normal",
    command: ""
  },
  { name: "Crouching LK", outbreak: "4", persistence: "2", rigidity: "8", hit: "3", guard: "0", damage: "20", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "Crouching MK", outbreak: "8", persistence: "2", rigidity: "17", hit: "2", guard: "-2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  {
    name: "Crouching HK",
    outbreak: "12",
    persistence: "2",
    rigidity: "26",
    hit: "D",
    guard: "-13",
    damage: "90",
    stan: "120",
    remarks: "反属性ダメージ対応技\n反属性成立時受身不可",
    type: "normal",
    command: ""
  },
  { name: "Jumping LP", outbreak: "3", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
  { name: "Jumping MP", outbreak: "6", persistence: "3", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "", type: "jump", command: "" },
  { name: "Jumping HP", outbreak: "10", persistence: "4", rigidity: "", hit: "", guard: "", damage: "80", stan: "150", remarks: "反属性ダメージ対応技", type: "jump", command: "" },
  { name: "Jumping LK", outbreak: "3", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "Can cross-up", type: "jump", command: "" },
  { name: "Jumping MK", outbreak: "6", persistence: "5", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", type: "jump", command: "" },
  { name: "Jumping HK", outbreak: "10", persistence: "3", rigidity: "", hit: "", guard: "", damage: "90", stan: "120", remarks: "反属性ダメージ対応技", type: "jump", command: "" },
  {
    name: "Cryo Drop Elbow",
    outbreak: "22",
    persistence: "3",
    rigidity: "19",
    hit: "1(*D)",
    guard: "-8",
    damage: "80",
    stan: "150",
    remarks: "反属性ダメージ対応技\n反属性成立時受身不可\n*反属性ダメージ中の相手に攻撃をヒットさせた際の数値",
    type: "unique",
    command: "→ + HP"
  },
  {
    name: "Pyro Quarrel Kick",
    outbreak: "15",
    persistence: "4",
    rigidity: "21(*127)",
    hit: "4(*2D)",
    guard: "-6",
    damage: "90",
    stan: "120",
    remarks: "反属性ダメージ対応技\n*1On whiff\n*2反属性ダメージ中の相手に攻撃をヒットさせた際の数値",
    type: "unique",
    command: "→ + HK"
  },
  {
    name: "Cryo Rise Kick",
    outbreak: "9",
    persistence: "4",
    rigidity: "21",
    hit: "3(*13)",
    guard: "-7",
    damage: "80",
    stan: "150",
    remarks: "反属性ダメージ対応技\n*反属性ダメージ中の相手に攻撃をヒットさせた際の数値",
    type: "unique",
    command: "← + HK"
  },
  { name: "Guilty Straight", outbreak: "7", persistence: "3", rigidity: "20", hit: "-2", guard: "-5", damage: "60", stan: "100", remarks: "", type: "unique", command: "LP ▶ MP" },
  { name: "Penalty Break", outbreak: "7", persistence: "3", rigidity: "17", hit: "-3", guard: "-8", damage: "50", stan: "100", remarks: "", type: "unique", command: "↓ + LK ▶ ↓ + MK" },
  { name: "Impact Claw", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "130", stan: "150", remarks: "", type: "throw", command: "" },
  { name: "Guilty Bomb", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "130", stan: "150", remarks: "", type: "throw", command: "" },
  {
    name: "[VS1] Meteor Strike",
    outbreak: "44",
    persistence: "Until landing",
    rigidity: "53 total frames",
    hit: "",
    guard: "",
    damage: "60",
    stan: "80",
    remarks: "反属性ダメージ対応技\n反属性ダメージ付与",
    type: "vsystem",
    command: ""
  },
  {
    name: "V[VS1] Meteor Strike",
    outbreak: "44",
    persistence: "Until landing",
    rigidity: "53 total frames",
    hit: "",
    guard: "",
    damage: "70",
    stan: "100",
    remarks: "反属性ダメージ対応技\n反属性ダメージ付与",
    type: "vsystem",
    command: ""
  },
  {
    name: "[VS2] Blocking (Standing)",
    outbreak: "2",
    persistence: "9",
    rigidity: "30",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "ブロッキング成立後に出すキャンセルブロッキングは発生1F\nNo counter hit while the move is active (does not apply to cancel Blocking)",
    type: "vsystem",
    command: ""
  },
  {
    name: "[VS2] Blocking (Crouching)",
    outbreak: "2",
    persistence: "9",
    rigidity: "30",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "ブロッキング成立後に出すキャンセルブロッキングは発生1F\nNo counter hit while the move is active (does not apply to cancel Blocking)",
    type: "vsystem",
    command: ""
  },
  {
    name: "Primal Fire",
    outbreak: "1",
    persistence: "",
    rigidity: "5",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "V-Gauge Timer + 3000F\n                                                                                                                                                                                発動中、パイロキネシスとパイロサイバーラリアットが強化され、専用技「バーンストーム」「フレイムジャベリン」「ヴォルカニックストーム」が使用可能になる",
    type: "vsystem",
    command: ""
  },
  {
    name: "Pryo Reverse Kick",
    outbreak: "17",
    persistence: "2",
    rigidity: "24",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "0",
    remarks: "1F - 31F  attack & projectile invincibility\n                                                Recover 200 stun upon activation",
    type: "vsystem",
    command: ""
  },
  {
    name: "L Pyrokinesis",
    outbreak: "14",
    persistence: "",
    rigidity: "49 total frames",
    hit: "-2",
    guard: "-6",
    damage: "70",
    stan: "80",
    remarks: "反属性ダメージ対応技",
    type: "special",
    command: ""
  },
  {
    name: "M Pyrokinesis",
    outbreak: "14",
    persistence: "",
    rigidity: "49 total frames",
    hit: "-2",
    guard: "-6",
    damage: "70",
    stan: "80",
    remarks: "反属性ダメージ対応技",
    type: "special",
    command: ""
  },
  {
    name: "H Pyrokinesis",
    outbreak: "14",
    persistence: "",
    rigidity: "49 total frames",
    hit: "",
    guard: "",
    damage: "70",
    stan: "80",
    remarks: "Will not hit grounded opponents\n                                                                                反属性ダメージ対応技",
    type: "special",
    command: ""
  },
  {
    name: "EX Pyrokinesis L",
    outbreak: "14",
    persistence: "",
    rigidity: "45 total frames",
    hit: "2",
    guard: "1",
    damage: "90",
    stan: "80",
    remarks: "反属性ダメージ対応技\n反属性ダメージ付与",
    type: "special",
    command: ""
  },
  {
    name: "EX Pyrokinesis M",
    outbreak: "14",
    persistence: "",
    rigidity: "45 total frames",
    hit: "2",
    guard: "1",
    damage: "90",
    stan: "80",
    remarks: "反属性ダメージ対応技\n反属性ダメージ付与",
    type: "special",
    command: ""
  },
  {
    name: "EX Pyrokinesis H",
    outbreak: "14",
    persistence: "",
    rigidity: "43 total frames",
    hit: "",
    guard: "",
    damage: "90",
    stan: "80",
    remarks: "Will not hit grounded opponents\n                                                                                反属性ダメージ対応技\n反属性ダメージ付与",
    type: "special",
    command: ""
  },
  {
    name: "VL Pyrokinesis",
    outbreak: "14",
    persistence: "",
    rigidity: "49 total frames",
    hit: "0",
    guard: "-4",
    damage: "70",
    stan: "80",
    remarks:
      "Uses 300F V-Gauge Timer\n                                                                                                                                                                                反属性ダメージ対応技\n反属性ダメージ付与\nVS*ヒット/ガード時、メテオストライクでキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "VM Pyrokinesis",
    outbreak: "14",
    persistence: "",
    rigidity: "49 total frames",
    hit: "0",
    guard: "-4",
    damage: "70",
    stan: "80",
    remarks:
      "Uses 300F V-Gauge Timer\n                                                                                                                                                                                反属性ダメージ対応技\n反属性ダメージ付与\nVS*ヒット/ガード時、メテオストライクでキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "VH Pyrokinesis",
    outbreak: "14",
    persistence: "",
    rigidity: "49 total frames",
    hit: "",
    guard: "",
    damage: "70",
    stan: "80",
    remarks:
      "Uses 300F V-Gauge Timer\n                                                                                                                                                                                反属性ダメージ対応技\n反属性ダメージ付与\nVS*ヒット/ガード時、メテオストライクでキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "L Cryokinesis",
    outbreak: "22",
    persistence: "",
    rigidity: "51 total frames",
    hit: "1",
    guard: "-4",
    damage: "50",
    stan: "120",
    remarks: "反属性ダメージ対応技",
    type: "special",
    command: ""
  },
  {
    name: "M Cryokinesis",
    outbreak: "22",
    persistence: "",
    rigidity: "51 total frames",
    hit: "1",
    guard: "-4",
    damage: "50",
    stan: "120",
    remarks: "反属性ダメージ対応技",
    type: "special",
    command: ""
  },
  {
    name: "H Cryokinesis",
    outbreak: "22",
    persistence: "",
    rigidity: "51 total frames",
    hit: "",
    guard: "",
    damage: "50",
    stan: "120",
    remarks: "Will not hit grounded opponents\n                                                                                反属性ダメージ対応技",
    type: "special",
    command: ""
  },
  {
    name: "EX Cryokinesis L",
    outbreak: "22",
    persistence: "",
    rigidity: "51 total frames",
    hit: "2",
    guard: "3",
    damage: "50",
    stan: "140",
    remarks: "反属性ダメージ対応技\n反属性ダメージ付与",
    type: "special",
    command: ""
  },
  {
    name: "EX Cryokinesis M",
    outbreak: "22",
    persistence: "",
    rigidity: "51 total frames",
    hit: "2",
    guard: "3",
    damage: "50",
    stan: "140",
    remarks: "反属性ダメージ対応技\n反属性ダメージ付与",
    type: "special",
    command: ""
  },
  {
    name: "EX Cryokinesis H",
    outbreak: "22",
    persistence: "",
    rigidity: "51 total frames",
    hit: "",
    guard: "",
    damage: "50",
    stan: "140",
    remarks: "Will not hit grounded opponents\n                                                                                反属性ダメージ対応技\n反属性ダメージ付与",
    type: "special",
    command: ""
  },
  {
    name: "L Pyro Cyber Lariat",
    outbreak: "12(*9)",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-6",
    damage: "80",
    stan: "80",
    remarks: "反属性ダメージ対応技\n*When in contact",
    type: "special",
    command: ""
  },
  {
    name: "M Pyro Cyber Lariat",
    outbreak: "22(*15)",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-6",
    damage: "100",
    stan: "80",
    remarks: "反属性ダメージ対応技\n*When in contact",
    type: "special",
    command: ""
  },
  {
    name: "H Pyro Cyber Lariat",
    outbreak: "31(*21)",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-6",
    damage: "120",
    stan: "80",
    remarks: "反属性ダメージ対応技\n*When in contact",
    type: "special",
    command: ""
  },
  {
    name: "EX Pyro Cyber Lariat",
    outbreak: "22(*12)",
    persistence: "4",
    rigidity: "22",
    hit: "D",
    guard: "-12",
    damage: "120",
    stan: "80",
    remarks: "反属性ダメージ対応技\n反属性ダメージ付与\n*When in contact\nHas armor from 3F until the end of the attack active frames of the base hit",
    type: "special",
    command: ""
  },
  {
    name: "VL Pyro Cyber Lariat",
    outbreak: "12(*9)",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-6",
    damage: "80",
    stan: "80",
    remarks:
      "Uses 300F V-Gauge Timer\n                                                                                                                                                                                反属性ダメージ対応技\n反属性ダメージ付与\n*When in contact\nVS*ヒット/ガード時、メテオストライクでキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "VM Pyro Cyber Lariat",
    outbreak: "22(*15)",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-6",
    damage: "100",
    stan: "80",
    remarks:
      "Uses 300F V-Gauge Timer\n                                                                                                                                                                                反属性ダメージ対応技\n反属性ダメージ付与\n*When in contact\nVS*ヒット/ガード時、メテオストライクでキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "VH Pyro Cyber Lariat",
    outbreak: "31(*21)",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-6",
    damage: "120",
    stan: "80",
    remarks:
      "Uses 300F V-Gauge Timer\n                                                                                                                                                                                反属性ダメージ対応技\n反属性ダメージ付与\n*When in contact\nVS*ヒット/ガード時、メテオストライクでキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "L Cryo Cyber Lariat",
    outbreak: "12(*9)",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-6",
    damage: "60",
    stan: "120",
    remarks: "反属性ダメージ対応技\n*When in contact",
    type: "special",
    command: ""
  },
  {
    name: "M Cryo Cyber Lariat",
    outbreak: "22(*15)",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-6",
    damage: "60",
    stan: "140",
    remarks: "反属性ダメージ対応技\n*When in contact",
    type: "special",
    command: ""
  },
  {
    name: "H Cryo Cyber Lariat",
    outbreak: "31(*21)",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-6",
    damage: "60",
    stan: "160",
    remarks: "反属性ダメージ対応技\n*When in contact",
    type: "special",
    command: ""
  },
  {
    name: "EX Cryo Cyber Lariat",
    outbreak: "22(*12)",
    persistence: "4",
    rigidity: "22",
    hit: "D",
    guard: "-12",
    damage: "60",
    stan: "160",
    remarks: "反属性ダメージ対応技\n反属性ダメージ付与\n*When in contact\nHas armor from 3F until the end of the attack active frames of the base hit",
    type: "special",
    command: ""
  },
  {
    name: "L Moonsault Knee Drop",
    outbreak: "33",
    persistence: "5",
    rigidity: "11 frame(s) after landing",
    hit: "D",
    guard: "-2",
    damage: "100",
    stan: "120",
    remarks: "Recovery value is against a standing block Ryu",
    type: "special",
    command: ""
  },
  {
    name: "M Moonsault Knee Drop",
    outbreak: "35",
    persistence: "5",
    rigidity: "11 frame(s) after landing",
    hit: "D",
    guard: "-2",
    damage: "100",
    stan: "120",
    remarks: "Recovery value is against a standing block Ryu",
    type: "special",
    command: ""
  },
  {
    name: "H Moonsault Knee Drop",
    outbreak: "37",
    persistence: "3",
    rigidity: "11 frame(s) after landing",
    hit: "D",
    guard: "-2",
    damage: "100",
    stan: "120",
    remarks: "Recovery value is against a standing block Ryu",
    type: "special",
    command: ""
  },
  {
    name: "EX Moonsault Knee Drop",
    outbreak: "10",
    persistence: "14",
    rigidity: "10 frame(s) after landing",
    hit: "D",
    guard: "-2",
    damage: "120",
    stan: "160",
    remarks: "Forward movement distance can be controlled with directional input\nRecovery value is against a standing block Ryu",
    type: "special",
    command: ""
  },
  {
    name: "VBurn Storm",
    outbreak: "12",
    persistence: "14",
    rigidity: "17",
    hit: "D",
    guard: "-9",
    damage: "120",
    stan: "80",
    remarks:
      "Uses 800F V-Gauge Timer\n                                                                                                                                                                                反属性ダメージ対応技\n通常技/特殊技(クリオドロップエルボー以外)からキャンセル可能\nヴォルカニックストームに派生可能\n反属性ダメージ付与",
    type: "special",
    command: ""
  },
  {
    name: "VFlame Javelin",
    outbreak: "22",
    persistence: "",
    rigidity: "62 total frames",
    hit: "D",
    guard: "-2",
    damage: "90",
    stan: "100",
    remarks:
      "Uses 700F V-Gauge Timer\n                                                                                                                                                                                反属性ダメージ対応技\n通常技/特殊技(クリオドロップエルボー以外)からキャンセル可能\n反属性ダメージ付与\n硬直差は1入力版を近距離でガードさせた際のもの",
    type: "special",
    command: ""
  },
  {
    name: "VVolcanic Storm",
    outbreak: "19",
    persistence: "",
    rigidity: "62 total frames",
    hit: "D",
    guard: "-4",
    damage: "90",
    stan: "100",
    remarks:
      "Uses 300F V-Gauge Timer\n                                                                                                                                                                                反属性ダメージ対応技\n反属性ダメージ付与\n硬直差は4入力版を近距離でガードさせた際のもの",
    type: "special",
    command: ""
  },
  { name: "Seraphic Wing）", outbreak: "5", persistence: "29", rigidity: "39", hit: "D", guard: "-32", damage: "340", stan: "0", remarks: "1F - 8F  full invincibility", type: "ca", command: "" }
];
export { gill };