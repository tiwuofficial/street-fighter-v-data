const poison = [
  { name: "Standing LP", outbreak: "3", persistence: "3", rigidity: "7", hit: "3", guard: "2", damage: "20", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "Standing MP", outbreak: "6", persistence: "2", rigidity: "16", hit: "5", guard: "3", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  { name: "Standing HP", outbreak: "11", persistence: "3", rigidity: "24", hit: "5", guard: "-6", damage: "80", stan: "150", remarks: "", type: "normal", command: "" },
  { name: "Standing LK", outbreak: "4", persistence: "3", rigidity: "11", hit: "3", guard: "1", damage: "40", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "Standing MK", outbreak: "7", persistence: "3", rigidity: "16", hit: "2", guard: "-2", damage: "70", stan: "100", remarks: "", type: "normal", command: "" },
  {
    name: "Standing HK",
    outbreak: "8",
    persistence: "3",
    rigidity: "21",
    hit: "4",
    guard: "-4",
    damage: "80",
    stan: "150",
    remarks:
      "Triggers Crush Counter (+22F)\n                                                                                                                                                                VS*VS2のみキャンセル可能",
    type: "normal",
    command: ""
  },
  { name: "Crouching LP", outbreak: "4", persistence: "3", rigidity: "9", hit: "4", guard: "3", damage: "30", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
  { name: "Crouching MP", outbreak: "6", persistence: "5", rigidity: "13", hit: "6", guard: "4", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  { name: "Crouching HP", outbreak: "15", persistence: "3", rigidity: "22", hit: "-1", guard: "-11", damage: "80", stan: "150", remarks: "VS*VS2のみキャンセル可能", type: "normal", command: "" },
  {
    name: "Crouching LK",
    outbreak: "4",
    persistence: "2",
    rigidity: "12",
    hit: "1",
    guard: "-2",
    damage: "20",
    stan: "70",
    remarks: "Can be rapid canceled\n                                                                                                                                VS*VS2のみキャンセル可能",
    type: "normal",
    command: ""
  },
  { name: "Crouching MK", outbreak: "7", persistence: "3", rigidity: "15", hit: "4", guard: "-2", damage: "60", stan: "100", remarks: "VS*VS2のみキャンセル可能", type: "normal", command: "" },
  {
    name: "Crouching HK",
    outbreak: "10",
    persistence: "3",
    rigidity: "22",
    hit: "D",
    guard: "-14",
    damage: "90",
    stan: "150",
    remarks:
      "Triggers Crush Counter (D)\n                                                                                                                                                                VS*VS2のみキャンセル可能",
    type: "normal",
    command: ""
  },
  { name: "Jumping LP", outbreak: "4", persistence: "4", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
  { name: "Jumping MP", outbreak: "6", persistence: "3", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "Causes blowback knockdown on airborne hit", type: "jump", command: "" },
  { name: "Jumping HP", outbreak: "12", persistence: "3", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
  { name: "Jumping LK", outbreak: "3", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "Can cross-up", type: "jump", command: "" },
  { name: "Jumping MK", outbreak: "7", persistence: "5", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "Causes blowback knockdown on airborne hit", type: "jump", command: "" },
  { name: "Jumping HK", outbreak: "9", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
  { name: "Whiplash", outbreak: "13", persistence: "4", rigidity: "", hit: "", guard: "", damage: "80", stan: "150", remarks: "", type: "unique", command: "(DURING FORWARD JUMP) → + HP" },
  { name: "Slap & Smash", outbreak: "9", persistence: "3", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", type: "unique", command: "(DURING JUMP) MP ▶ HP" },
  { name: "Slap & Slash", outbreak: "9", persistence: "7", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", type: "unique", command: "(DURING JUMP) MP ▶ → + HP" },
  { name: "Slap Shot", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "130", stan: "150", remarks: "", type: "throw", command: "" },
  { name: "Frankensteiner", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "140", stan: "200", remarks: "", type: "throw", command: "" },
  {
    name: "[VS1] Perfume Swing",
    outbreak: "25",
    persistence: "18",
    rigidity: "24+4 frame(s) after landing",
    hit: "D",
    guard: "-21",
    damage: "60",
    stan: "80",
    remarks:
      "Will not hit crouching opponents\n                                                                                                Can perform jump attacks from 53F\nThe jump attacks cause knockback damage on mid-air hit, and increase V-Gauge on hit or block.",
    type: "vsystem",
    command: ""
  },
  {
    name: "[VS2] Cartwheel",
    outbreak: "",
    persistence: "",
    rigidity: "29 total frames",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "4～20F 押し合い判定が消える",
    type: "vsystem",
    command: ""
  },
  {
    name: "[VS2] Cartwheel (Attack)",
    outbreak: "33",
    persistence: "4",
    rigidity: "21+10 frame(s) after landing",
    hit: "D",
    guard: "-12",
    damage: "70",
    stan: "100",
    remarks: "S*Only on hit",
    type: "vsystem",
    command: ""
  },
  {
    name: "Poison Cocktail",
    outbreak: "1",
    persistence: "",
    rigidity: "5",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "V-Gauge Timer + 3000F\n                                                                                                                                                                                Gains an exclusive special move",
    type: "vsystem",
    command: ""
  },
  {
    name: "Power Cord",
    outbreak: "17",
    persistence: "2",
    rigidity: "24",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "0",
    remarks: "1F - 30F  attack & projectile invincibility\n                                                Recover 200 stun upon activation",
    type: "vsystem",
    command: ""
  },
  { name: "L Avant Line", outbreak: "15", persistence: "2", rigidity: "27", hit: "1", guard: "-7", damage: "70", stan: "100", remarks: "", type: "special", command: "" },
  {
    name: "M Avant Line",
    outbreak: "15",
    persistence: "2",
    rigidity: "27",
    hit: "2",
    guard: "-8",
    damage: "90",
    stan: "150",
    remarks: "Poison only performs the next attack on hit or block",
    type: "special",
    command: ""
  },
  {
    name: "H Avant Line",
    outbreak: "15",
    persistence: "2",
    rigidity: "27",
    hit: "D",
    guard: "-17",
    damage: "120",
    stan: "150",
    remarks: "Poison only performs the next attack on hit or block",
    type: "special",
    command: ""
  },
  {
    name: "EX Avant Line",
    outbreak: "12",
    persistence: "7",
    rigidity: "24",
    hit: "D",
    guard: "-2",
    damage: "120",
    stan: "150",
    remarks: "5段目～最終段はヒット時のみ派生する\nS*最終段のみVT専用必殺技でキャンセル可能(ガード時は4段目)",
    type: "special",
    command: ""
  },
  {
    name: "Heart Raid(Hold)",
    outbreak: "",
    persistence: "",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "-",
    stan: "-",
    remarks: "Can perform Heart Raid, Hold – Forward Movement, Hold – Backwards Movement, and Hold Cancel from 14F.",
    type: "special",
    command: ""
  },
  {
    name: "Heart Raid(Hold-Forward Movement)",
    outbreak: "",
    persistence: "",
    rigidity: "32 total frames",
    hit: "",
    guard: "",
    damage: "-",
    stan: "-",
    remarks: "Can perform Heart Raid and Hold Cancel during movement.\nAfter movement, Poison will return to the Hold state.",
    type: "special",
    command: ""
  },
  {
    name: "Heart Raid(Hold-Backwards Movement)",
    outbreak: "",
    persistence: "",
    rigidity: "32 total frames",
    hit: "",
    guard: "",
    damage: "-",
    stan: "-",
    remarks: "Can perform Heart Raid and Hold Cancel during movement.\nAfter movement, Poison will return to the Hold state.",
    type: "special",
    command: ""
  },
  { name: "Heart Raid(Hold Cancel)", outbreak: "", persistence: "", rigidity: "12 total frames", hit: "", guard: "", damage: "-", stan: "-", remarks: "", type: "special", command: "" },
  { name: "L Heart Raid", outbreak: "9", persistence: "2", rigidity: "26", hit: "2", guard: "-6", damage: "90", stan: "150", remarks: "", type: "special", command: "" },
  { name: "M Heart Raid", outbreak: "9", persistence: "2", rigidity: "26", hit: "2", guard: "-6", damage: "100", stan: "150", remarks: "", type: "special", command: "" },
  { name: "H Heart Raid", outbreak: "10", persistence: "2", rigidity: "17", hit: "D", guard: "", damage: "120", stan: "200", remarks: "Will not hit grounded opponents", type: "special", command: "" },
  {
    name: "EX Heart Raid L",
    outbreak: "18",
    persistence: "4",
    rigidity: "24",
    hit: "D",
    guard: "-2",
    damage: "120",
    stan: "100",
    remarks: "V*Only possible during 1st attack\nS*2nd hit can be canceled into Shocking Heel on hit only",
    type: "special",
    command: ""
  },
  {
    name: "EX Heart Raid M",
    outbreak: "19",
    persistence: "4",
    rigidity: "24",
    hit: "2",
    guard: "2",
    damage: "130",
    stan: "200",
    remarks: "V*Only possible during 1st attack",
    type: "special",
    command: ""
  },
  {
    name: "EX Heart Raid H",
    outbreak: "9",
    persistence: "4",
    rigidity: "29",
    hit: "D",
    guard: "",
    damage: "140",
    stan: "200",
    remarks: "Will not hit grounded opponents\n                                                                                V*Only possible during 1st attack",
    type: "special",
    command: ""
  },
  { name: "L Shocking Heel", outbreak: "8", persistence: "6", rigidity: "27", hit: "D", guard: "-12", damage: "80", stan: "150", remarks: "", type: "special", command: "" },
  { name: "M Shocking Heel", outbreak: "15", persistence: "6", rigidity: "27", hit: "D", guard: "-12", damage: "90", stan: "150", remarks: "", type: "special", command: "" },
  { name: "H Shocking Heel", outbreak: "25", persistence: "6", rigidity: "27", hit: "D", guard: "-12", damage: "110", stan: "150", remarks: "", type: "special", command: "" },
  {
    name: "EX Shocking Heel",
    outbreak: "18",
    persistence: "7",
    rigidity: "32",
    hit: "D",
    guard: "-17",
    damage: "80",
    stan: "150",
    remarks: "VS*Only on hit\nS*Can be canceled into Heart Raid on hit only",
    type: "special",
    command: ""
  },
  { name: "L Love Me Tender", outbreak: "21", persistence: "3", rigidity: "1+18", hit: "2", guard: "-4", damage: "70", stan: "120", remarks: "", type: "special", command: "" },
  { name: "M Love Me Tender", outbreak: "28", persistence: "3", rigidity: "2+17", hit: "3", guard: "-4", damage: "80", stan: "120", remarks: "", type: "special", command: "" },
  { name: "H Love Me Tender", outbreak: "30", persistence: "3", rigidity: "1+18", hit: "D", guard: "-2", damage: "100", stan: "150", remarks: "", type: "special", command: "" },
  {
    name: "EX Love Me Tender",
    outbreak: "24",
    persistence: "3",
    rigidity: "18",
    hit: "D",
    guard: "-4",
    damage: "120",
    stan: "200",
    remarks: "3F - 26F  projectile invincibility",
    type: "special",
    command: ""
  },
  {
    name: "VFire Squall",
    outbreak: "19",
    persistence: "",
    rigidity: "44 total frames",
    hit: "D",
    guard: "-2",
    damage: "60（*+51）",
    stan: "100",
    remarks:
      "Uses 1500F V-Gauge Timer\n                                                                                                                                                                                Can be canceled into from each normal and special move\nArea where the projectile hits causes fire damage\n*Value within the parenthesis is the fire damage\n*Effective value reduces if the fire damage is stacked\nVS*VS2のみキャンセル可能",
    type: "special",
    command: ""
  },
  { name: "Love Hurricane", outbreak: "1+9", persistence: "2", rigidity: "57", hit: "D", guard: "-37", damage: "340", stan: "0", remarks: "1F - 15F  full invincibility", type: "ca", command: "" }
];
export { poison };