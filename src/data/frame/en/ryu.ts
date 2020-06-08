const ryu = [
  { name: "Standing LP", outbreak: "3", persistence: "2", rigidity: "7", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "VStanding LP", outbreak: "3", persistence: "2", rigidity: "7", hit: "4", guard: "2", damage: "30", stan: "100", remarks: "", type: "normal", command: "" },
  { name: "Standing MP", outbreak: "5", persistence: "3", rigidity: "10", hit: "7", guard: "1", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  { name: "VStanding MP", outbreak: "5", persistence: "3", rigidity: "10", hit: "7", guard: "1", damage: "60", stan: "130", remarks: "", type: "normal", command: "" },
  { name: "Standing HP", outbreak: "8", persistence: "3", rigidity: "20", hit: "3", guard: "-1", damage: "90", stan: "150", remarks: "Triggers Crush Counter  (D)", type: "normal", command: "" },
  { name: "VStanding HP", outbreak: "8", persistence: "3", rigidity: "20", hit: "3", guard: "-1", damage: "90", stan: "180", remarks: "Triggers Crush Counter  (D)", type: "normal", command: "" },
  { name: "Standing LK", outbreak: "4", persistence: "3", rigidity: "11", hit: "-1", guard: "-2", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "Standing MK", outbreak: "8", persistence: "3", rigidity: "16", hit: "2", guard: "-2", damage: "70", stan: "100", remarks: "", type: "normal", command: "" },
  {
    name: "Standing HK",
    outbreak: "10",
    persistence: "2",
    rigidity: "20",
    hit: "4",
    guard: "-1",
    damage: "90",
    stan: "150",
    remarks:
      "Triggers Crush Counter (+16F)\n                                                                Will not hit crouching opponents\n                                                                                                Cannot be rapid canceled into V-Trigger on block",
    type: "normal",
    command: ""
  },
  { name: "Crouching LP", outbreak: "4", persistence: "3", rigidity: "5", hit: "3", guard: "2", damage: "30", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
  { name: "VCrouching LP", outbreak: "4", persistence: "3", rigidity: "5", hit: "3", guard: "2", damage: "30", stan: "100", remarks: "Can be rapid canceled", type: "normal", command: "" },
  { name: "Crouching MP", outbreak: "6", persistence: "3", rigidity: "12", hit: "4", guard: "2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  { name: "VCrouching MP", outbreak: "6", persistence: "3", rigidity: "12", hit: "4", guard: "3", damage: "60", stan: "130", remarks: "", type: "normal", command: "" },
  {
    name: "Crouching HP",
    outbreak: "6",
    persistence: "4",
    rigidity: "24",
    hit: "-7",
    guard: "-10",
    damage: "90(*70)",
    stan: "150",
    remarks: "Forces stand\n                                                                                                                Active frames cannot be canceled\n*From active frame 2F",
    type: "normal",
    command: ""
  },
  {
    name: "VCrouching HP",
    outbreak: "6",
    persistence: "4",
    rigidity: "24",
    hit: "-7",
    guard: "-10",
    damage: "90(*70)",
    stan: "180",
    remarks: "Forces stand\n                                                                                                                Active frames cannot be canceled\n*From active frame 2F",
    type: "normal",
    command: ""
  },
  { name: "Crouching LK", outbreak: "4", persistence: "2", rigidity: "7", hit: "2", guard: "1", damage: "20", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
  { name: "Crouching MK", outbreak: "7", persistence: "3", rigidity: "13", hit: "2", guard: "-1", damage: "50", stan: "100", remarks: "", type: "normal", command: "" },
  { name: "Crouching HK", outbreak: "8", persistence: "2", rigidity: "22", hit: "D", guard: "-11", damage: "90", stan: "150", remarks: "Triggers Crush Counter  (D)", type: "normal", command: "" },
  { name: "Jumping LP", outbreak: "3", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
  { name: "VJumping LP", outbreak: "3", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "100", remarks: "", type: "jump", command: "" },
  { name: "Jumping MP", outbreak: "7", persistence: "6", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "Causes blowback knockdown on airborne hit", type: "jump", command: "" },
  {
    name: "VJumping MP",
    outbreak: "7",
    persistence: "6",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "60",
    stan: "130",
    remarks: "Causes blowback knockdown on airborne hit",
    type: "jump",
    command: ""
  },
  { name: "Jumping HP", outbreak: "7", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
  { name: "VJumping HP", outbreak: "7", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "180", remarks: "", type: "jump", command: "" },
  { name: "Jumping LK", outbreak: "4", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "Can cross-up", type: "jump", command: "" },
  { name: "Jumping MK", outbreak: "6", persistence: "4", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "Can cross-up", type: "jump", command: "" },
  { name: "Jumping HK", outbreak: "9", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
  { name: "Collarbone Breaker", outbreak: "22", persistence: "4", rigidity: "17", hit: "1", guard: "-7", damage: "60", stan: "100", remarks: "", type: "unique", command: "→ + MP" },
  { name: "VCollarbone Breaker", outbreak: "22", persistence: "4", rigidity: "17", hit: "1", guard: "-7", damage: "60", stan: "130", remarks: "", type: "unique", command: "→ + MP" },
  {
    name: "Solar Plexus Strike",
    outbreak: "17",
    persistence: "4",
    rigidity: "18",
    hit: "8",
    guard: "-2",
    damage: "80",
    stan: "150",
    remarks: "S*Only Shoryuken and EX Shoryuken can be canceled",
    type: "unique",
    command: "→ + HP"
  },
  {
    name: "VSolar Plexus Strike",
    outbreak: "17",
    persistence: "4",
    rigidity: "18",
    hit: "8",
    guard: "-2",
    damage: "90",
    stan: "180",
    remarks: "S*Only Shoryuken and EX Shoryuken can be canceled",
    type: "unique",
    command: "→ + HP"
  },
  { name: "Axe Kick", outbreak: "9", persistence: "7", rigidity: "16", hit: "4", guard: "-2", damage: "80", stan: "150", remarks: "Forces stand", type: "unique", command: "← + HK" },
  { name: "Jodan Nirengeki", outbreak: "9", persistence: "2", rigidity: "28", hit: "-2", guard: "-9", damage: "70", stan: "100", remarks: "", type: "unique", command: "MP ▶ HP" },
  { name: "VJodan Nirengeki", outbreak: "9", persistence: "2", rigidity: "28", hit: "-2", guard: "-9", damage: "80", stan: "130", remarks: "", type: "unique", command: "MP ▶ HP" },
  { name: "Jodan Sanrengeki", outbreak: "9", persistence: "2", rigidity: "26", hit: "D", guard: "-7", damage: "70", stan: "100", remarks: "", type: "unique", command: "MP ▶ HP ▶ HK" },
  { name: "Shoulder Throw", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "130", stan: "150", remarks: "", type: "throw", command: "" },
  { name: "Somersault Throw", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "150", stan: "200", remarks: "", type: "throw", command: "" },
  {
    name: "[VS1] Mind's Eye",
    outbreak: "3",
    persistence: "7",
    rigidity: "32",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "The startup for a Mind's Eye canceled from a successful Mind's Eye is 1F\nNo counter hit while the move is active (does not apply to cancel Mind's Eye)",
    type: "vsystem",
    command: ""
  },
  {
    name: "[VS2] Thust Strike",
    outbreak: "25",
    persistence: "2",
    rigidity: "26",
    hit: "D",
    guard: "-4",
    damage: "60",
    stan: "100",
    remarks: "Counter for all hit levels from 10F to 19F",
    type: "vsystem",
    command: ""
  },
  {
    name: "[VS2] Thust Strike (upon successful parry)",
    outbreak: "1",
    persistence: "4(*2)",
    rigidity: "37(*21)",
    hit: "D",
    guard: "4",
    damage: "120",
    stan: "200",
    remarks: "1F - 23F  full invincibility\n                                                (初段空振り時は1～11F完全無敵)\n*When the first hit whiffs",
    type: "vsystem",
    command: ""
  },
  {
    name: "V[VS2] Thust Strike",
    outbreak: "25",
    persistence: "2",
    rigidity: "26",
    hit: "D",
    guard: "-4",
    damage: "60",
    stan: "130",
    remarks: "Counter for all hit levels from 10F to 19F",
    type: "vsystem",
    command: ""
  },
  {
    name: "V[VS2] Thust Strike (upon successful parry)",
    outbreak: "1",
    persistence: "4(*2)",
    rigidity: "37(*21)",
    hit: "D",
    guard: "4",
    damage: "120",
    stan: "250",
    remarks: "1F - 23F  full invincibility\n                                                (初段空振り時は1～11F完全無敵)\n*When the first hit whiffs",
    type: "vsystem",
    command: ""
  },
  {
    name: "Denjin Renki",
    outbreak: "1",
    persistence: "",
    rigidity: "4",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "V-Gauge Timer + 800F\n                                                                                                                                                                                While active, all punch-type Normal/Unique/Special moves and CA will be strenghtened",
    type: "vsystem",
    command: ""
  },
  {
    name: "Hashogeki",
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
  { name: "L Hadoken", outbreak: "14", persistence: "", rigidity: "45 total frames", hit: "-1", guard: "-6", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
  { name: "M Hadoken", outbreak: "14", persistence: "", rigidity: "45 total frames", hit: "-1", guard: "-6", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
  { name: "H Hadoken", outbreak: "14", persistence: "", rigidity: "45 total frames", hit: "-1", guard: "-6", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
  { name: "VL Hadoken", outbreak: "14", persistence: "", rigidity: "42 total frames", hit: "D", guard: "-2", damage: "70", stan: "150", remarks: "", type: "special", command: "" },
  { name: "VM Hadoken", outbreak: "14", persistence: "", rigidity: "42 total frames", hit: "D", guard: "-2", damage: "70", stan: "150", remarks: "", type: "special", command: "" },
  { name: "VH Hadoken", outbreak: "14", persistence: "", rigidity: "42 total frames", hit: "D", guard: "-2", damage: "70", stan: "150", remarks: "", type: "special", command: "" },
  { name: "VHadoken (Lv2)", outbreak: "5", persistence: "", rigidity: "", hit: "D", guard: "0", damage: "100", stan: "200", remarks: "", type: "special", command: "" },
  { name: "VHadoken (Lv3)", outbreak: "6", persistence: "", rigidity: "", hit: "D", guard: "GB", damage: "130", stan: "300", remarks: "During guard break+32F", type: "special", command: "" },
  { name: "EX Hadoken", outbreak: "11", persistence: "", rigidity: "42 total frames", hit: "D", guard: "2", damage: "100", stan: "150", remarks: "", type: "special", command: "" },
  { name: "VEX Hadoken (Lv1)", outbreak: "11", persistence: "", rigidity: "40 total frames", hit: "D", guard: "2", damage: "120", stan: "200", remarks: "", type: "special", command: "" },
  { name: "VEX Hadoken (Lv2)", outbreak: "5", persistence: "", rigidity: "", hit: "D", guard: "GB", damage: "150", stan: "300", remarks: "During guard break+32F", type: "special", command: "" },
  {
    name: "L Shoryuken",
    outbreak: "3",
    persistence: "12",
    rigidity: "19+11 frame(s) after landing",
    hit: "D",
    guard: "-24",
    damage: "100(*60)",
    stan: "150(*100)",
    remarks: "1F - 3F  throw invincibility\n                                                Subject to counter hit during move duration\n*From active frame 2F",
    type: "special",
    command: ""
  },
  {
    name: "M Shoryuken",
    outbreak: "4",
    persistence: "11",
    rigidity: "26+13 frame(s) after landing",
    hit: "D",
    guard: "-32",
    damage: "120(*60)",
    stan: "150(*100)",
    remarks: "1F - 6F  invincible to mid-air attacks\n                                Subject to counter hit during move duration\n*From active frame 3F",
    type: "special",
    command: ""
  },
  {
    name: "H Shoryuken",
    outbreak: "5",
    persistence: "10",
    rigidity: "29+15 frame(s) after landing",
    hit: "D",
    guard: "-36",
    damage: "130(*60)",
    stan: "150",
    remarks: "3F - 6F  attack & projectile invincibility\n                                                Subject to counter hit during move duration\n*From active frame 2F",
    type: "special",
    command: ""
  },
  {
    name: "VL Shoryuken",
    outbreak: "3",
    persistence: "12",
    rigidity: "19+11 frame(s) after landing",
    hit: "D",
    guard: "-24",
    damage: "110(*80)",
    stan: "200(*150)",
    remarks: "1F - 3F  throw invincibility\n                                                Subject to counter hit during move duration\n*From active frame 2F",
    type: "special",
    command: ""
  },
  {
    name: "VM Shoryuken",
    outbreak: "4",
    persistence: "11",
    rigidity: "26+13 frame(s) after landing",
    hit: "D",
    guard: "-32",
    damage: "130(*80)",
    stan: "200(*150)",
    remarks: "1F - 6F  invincible to mid-air attacks\n                                Subject to counter hit during move duration\n*From active frame 3F",
    type: "special",
    command: ""
  },
  {
    name: "VH Shoryuken",
    outbreak: "5",
    persistence: "10",
    rigidity: "29+15 frame(s) after landing",
    hit: "D",
    guard: "-36",
    damage: "140(*80)",
    stan: "200",
    remarks: "3F - 6F  attack & projectile invincibility\n                                                Subject to counter hit during move duration\n*From active frame 2F",
    type: "special",
    command: ""
  },
  {
    name: "EX Shoryuken",
    outbreak: "3",
    persistence: "12",
    rigidity: "29+15 frame(s) after landing",
    hit: "D",
    guard: "-37",
    damage: "160(*80)",
    stan: "200(*100)",
    remarks: "1F - 15F  full invincibility\n                                                Subject to counter hit during move duration (1.2x damage)\n*From active frame 2F",
    type: "special",
    command: ""
  },
  {
    name: "VEX Shoryuken",
    outbreak: "3",
    persistence: "12",
    rigidity: "29+15 frame(s) after landing",
    hit: "D",
    guard: "-37",
    damage: "180(*100)",
    stan: "200",
    remarks: "1F - 15F  full invincibility\n                                                Subject to counter hit during move duration (1.2x damage)\n*From active frame 2F",
    type: "special",
    command: ""
  },
  {
    name: "L Tatsumaki Senpukyaku",
    outbreak: "10",
    persistence: "2",
    rigidity: "18+12 frame(s) after landing",
    hit: "D",
    guard: "-10",
    damage: "90",
    stan: "150",
    remarks: "",
    type: "special",
    command: ""
  },
  {
    name: "M Tatsumaki Senpukyaku",
    outbreak: "12",
    persistence: "4",
    rigidity: "16+14 frame(s) after landing",
    hit: "D",
    guard: "-12",
    damage: "100",
    stan: "150",
    remarks: "6F - 45F  projectile invincibility\n                                                Chip damage is 1/6ths the hit damage",
    type: "special",
    command: ""
  },
  {
    name: "H Tatsumaki Senpukyaku",
    outbreak: "14",
    persistence: "6",
    rigidity: "16+15 frame(s) after landing",
    hit: "D",
    guard: "-13",
    damage: "110",
    stan: "150",
    remarks: "9F - 61F  projectile invincibility\n                                                Chip damage is 1/6ths the hit damage",
    type: "special",
    command: ""
  },
  {
    name: "EX Tatsumaki Senpukyaku",
    outbreak: "10",
    persistence: "11",
    rigidity: "11+15 frame(s) after landing",
    hit: "D",
    guard: "-19",
    damage: "140",
    stan: "150",
    remarks: "7F - 36F  projectile invincibility\n                                                S*Only Shoryuken and EX Shoryuken can be canceled",
    type: "special",
    command: ""
  },
  {
    name: "Airborne Tatsumaki Senpukyaku",
    outbreak: "9",
    persistence: "6",
    rigidity: "14 frame(s) after landing",
    hit: "D",
    guard: "",
    damage: "100",
    stan: "200",
    remarks: "",
    type: "special",
    command: ""
  },
  {
    name: "EX Airborne Tatsumaki Senpukyaku",
    outbreak: "8",
    persistence: "10",
    rigidity: "14 frame(s) after landing",
    hit: "D",
    guard: "",
    damage: "170",
    stan: "250",
    remarks: "Can cross-up",
    type: "special",
    command: ""
  },
  { name: "L Jodan Sokutou Geri", outbreak: "10", persistence: "2", rigidity: "28", hit: "D", guard: "-16", damage: "70", stan: "150", remarks: "", type: "special", command: "" },
  { name: "M Jodan Sokutou Geri", outbreak: "16", persistence: "2", rigidity: "28", hit: "D", guard: "-16", damage: "80", stan: "150", remarks: "", type: "special", command: "" },
  { name: "H Jodan Sokutou Geri", outbreak: "18", persistence: "2", rigidity: "28", hit: "D", guard: "-16", damage: "100", stan: "150", remarks: "", type: "special", command: "" },
  {
    name: "EX Jodan Sokutou Geri",
    outbreak: "18",
    persistence: "2",
    rigidity: "36",
    hit: "D",
    guard: "-16",
    damage: "80",
    stan: "150",
    remarks: "S*Only Tatsumaki Senpukyaku and EX Tatsumaki Senpukyaku can be canceled",
    type: "special",
    command: ""
  },
  {
    name: "Shinku Hadoken",
    outbreak: "1+3",
    persistence: "",
    rigidity: "65 total frames",
    hit: "D",
    guard: "-17",
    damage: "320",
    stan: "0",
    remarks: "1F - 3F  full invincibility",
    type: "ca",
    command: ""
  },
  {
    name: "VDenjin Hadoken",
    outbreak: "1+3",
    persistence: "",
    rigidity: "65 total frames",
    hit: "D",
    guard: "GB",
    damage: "350",
    stan: "300",
    remarks:
      "Uses 800F V-Gauge Timer\n                                                                                                                                1F - 3F  full invincibility\n                                                During guard break+9F",
    type: "ca",
    command: ""
  }
];

export { ryu };