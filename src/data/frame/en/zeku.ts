const zeku = [
  { name: "Standing LP", outbreak: "4", persistence: "2", rigidity: "9", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "Standing MP", outbreak: "6", persistence: "2", rigidity: "14", hit: "5", guard: "3", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  { name: "Standing HP", outbreak: "9", persistence: "2", rigidity: "30", hit: "-2", guard: "-5", damage: "80", stan: "150", remarks: "", type: "normal", command: "" },
  { name: "Standing LK", outbreak: "5", persistence: "4", rigidity: "6", hit: "4", guard: "2", damage: "40", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "Standing MK", outbreak: "7", persistence: "3", rigidity: "12", hit: "7", guard: "2", damage: "60", stan: "100", remarks: "Forces stand", type: "normal", command: "" },
  { name: "Standing HK", outbreak: "13", persistence: "2", rigidity: "24", hit: "5", guard: "-2", damage: "90", stan: "150", remarks: "Triggers Crush Counter (+21F)", type: "normal", command: "" },
  { name: "Crouching LP", outbreak: "4", persistence: "2", rigidity: "7", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
  { name: "Crouching MP", outbreak: "8", persistence: "2", rigidity: "14", hit: "5", guard: "1", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  {
    name: "Crouching HP",
    outbreak: "10",
    persistence: "4",
    rigidity: "16",
    hit: "7",
    guard: "2",
    damage: "80",
    stan: "150",
    remarks: "Triggers Crush Counter  (D)\n                                                Forces stand",
    type: "normal",
    command: ""
  },
  { name: "Crouching LK", outbreak: "5", persistence: "2", rigidity: "8", hit: "4", guard: "2", damage: "20", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "Crouching MK", outbreak: "8", persistence: "3", rigidity: "17", hit: "2", guard: "-2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  { name: "Crouching HK", outbreak: "10", persistence: "2", rigidity: "25", hit: "D", guard: "-8", damage: "90", stan: "150", remarks: "Triggers Crush Counter  (D)", type: "normal", command: "" },
  { name: "Jumping LP", outbreak: "4", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
  { name: "Jumping MP", outbreak: "7", persistence: "4", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "", type: "jump", command: "" },
  { name: "Jumping HP", outbreak: "8", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
  { name: "Jumping LK", outbreak: "4", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
  { name: "Jumping MK", outbreak: "7", persistence: "4", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "Can cross-up", type: "jump", command: "" },
  { name: "Jumping HK", outbreak: "10", persistence: "4", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
  { name: "Standing LP (from Idaten)", outbreak: "4", persistence: "2", rigidity: "11", hit: "2", guard: "0", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
  {
    name: "Standing MP (from Idaten)",
    outbreak: "6",
    persistence: "2",
    rigidity: "19",
    hit: "0",
    guard: "-3",
    damage: "50",
    stan: "80",
    remarks: "S*CA*Only when used from the 1st hit",
    type: "normal",
    command: ""
  },
  {
    name: "Standing HP (from Idaten)",
    outbreak: "8",
    persistence: "2",
    rigidity: "34",
    hit: "-8",
    guard: "-11",
    damage: "60",
    stan: "100",
    remarks: "S*CA*Only when used from the 1st hit",
    type: "normal",
    command: ""
  },
  {
    name: "Standing LK (from Idaten)",
    outbreak: "5",
    persistence: "4",
    rigidity: "9",
    hit: "1",
    guard: "-1",
    damage: "40",
    stan: "70",
    remarks: "S*CA*Only when used from the 1st hit",
    type: "normal",
    command: ""
  },
  {
    name: "Standing MK (from Idaten)",
    outbreak: "6",
    persistence: "2",
    rigidity: "18",
    hit: "1",
    guard: "-2",
    damage: "50",
    stan: "80",
    remarks: "Forces stand\n                                                                                                                S*CA*Only when used from the 1st hit",
    type: "normal",
    command: ""
  },
  {
    name: "Standing HK (from Idaten)",
    outbreak: "13",
    persistence: "2",
    rigidity: "30",
    hit: "-4",
    guard: "-11",
    damage: "60",
    stan: "100",
    remarks: "S*CA*Only when used from the 1st hit",
    type: "normal",
    command: ""
  },
  { name: "Crouching LP (from Idaten)", outbreak: "4", persistence: "2", rigidity: "9", hit: "2", guard: "-1", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
  {
    name: "Crouching MP (from Idaten)",
    outbreak: "8",
    persistence: "2",
    rigidity: "21",
    hit: "0",
    guard: "-4",
    damage: "50",
    stan: "80",
    remarks: "S*CA*Only when used from the 1st hit",
    type: "normal",
    command: ""
  },
  {
    name: "Crouching HP (from Idaten)",
    outbreak: "10",
    persistence: "4",
    rigidity: "22",
    hit: "1",
    guard: "-4",
    damage: "60",
    stan: "100",
    remarks: "Forces stand\n                                                                                                                S*CA*Only when used from the 1st hit",
    type: "normal",
    command: ""
  },
  {
    name: "Crouching LK (from Idaten)",
    outbreak: "5",
    persistence: "2",
    rigidity: "10",
    hit: "2",
    guard: "0",
    damage: "20",
    stan: "70",
    remarks: "S*CA*Only when used from the 1st hit",
    type: "normal",
    command: ""
  },
  {
    name: "Crouching MK (from Idaten)",
    outbreak: "8",
    persistence: "3",
    rigidity: "22",
    hit: "-7",
    guard: "-11",
    damage: "50",
    stan: "80",
    remarks: "S*CA*Only when used from the 1st hit",
    type: "normal",
    command: ""
  },
  {
    name: "Crouching HK (from Idaten)",
    outbreak: "12",
    persistence: "2",
    rigidity: "31",
    hit: "D",
    guard: "-14",
    damage: "60",
    stan: "100",
    remarks: "S*CA*Only when used from the 1st hit",
    type: "normal",
    command: ""
  },
  { name: "Nouten Wari", outbreak: "22", persistence: "4", rigidity: "20", hit: "1", guard: "-7", damage: "80", stan: "100", remarks: "", type: "unique", command: "→ + HP" },
  { name: "Tsurigane Otoshi", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "130", stan: "150", remarks: "", type: "throw", command: "" },
  { name: "Mikoshi", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "150", stan: "200", remarks: "", type: "throw", command: "" },
  {
    name: "[VS1] Fukuro",
    outbreak: "14",
    persistence: "4",
    rigidity: "29",
    hit: "D",
    guard: "-7",
    damage: "100",
    stan: "150",
    remarks: "On hit, transforms into Young Zeku and performs an additional strike\nHold forward on hit to switch sides",
    type: "vsystem",
    command: ""
  },
  {
    name: "[VS2] Kuchiyose - Shii",
    outbreak: "182*",
    persistence: "5",
    rigidity: "64 total frames",
    hit: "D",
    guard: "",
    damage: "80",
    stan: "80",
    remarks:
      "レバー入れで爆竹の設置位置を変更できる\n爆竹設置前に本体がダメージを受けると、爆竹を設置せずに蒔威(鷹)が消滅する\nS*宿命でキャンセル可能\n*数値はニュートラル時 後ろ入力時:151/前入力時:217",
    type: "vsystem",
    command: ""
  },
  {
    name: "Bushinryu Shingekiko",
    outbreak: "1",
    persistence: "",
    rigidity: "5",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "V-Gauge Timer + 1500F\n                                                                                                                                                                                Will be able to use Idaten",
    type: "vsystem",
    command: ""
  },
  {
    name: "Toushi",
    outbreak: "12",
    persistence: "2",
    rigidity: "24",
    hit: "2",
    guard: "-2",
    damage: "40",
    stan: "0",
    remarks: "1F - 25F  attack & projectile invincibility\n                                                Recover 200 stun upon activation",
    type: "vsystem",
    command: ""
  },
  {
    name: "L Bushin Gram - Koku (base hit)",
    outbreak: "14",
    persistence: "1",
    rigidity: "31",
    hit: "D",
    guard: "-6",
    damage: "90",
    stan: "150",
    remarks: "The ranged part of the attack will not be activated if the base hits\nS*Can be canceled into Shukumyo on hit only",
    type: "special",
    command: ""
  },
  {
    name: "M Bushin Gram - Koku (base hit)",
    outbreak: "20",
    persistence: "1",
    rigidity: "30",
    hit: "D",
    guard: "-4",
    damage: "100",
    stan: "150",
    remarks: "The ranged part of the attack will not be activated if the base hits\nS*Can be canceled into Shukumyo on hit only",
    type: "special",
    command: ""
  },
  {
    name: "H Bushin Gram - Koku (base hit)",
    outbreak: "25",
    persistence: "1",
    rigidity: "30",
    hit: "D",
    guard: "-2",
    damage: "120",
    stan: "200",
    remarks: "The ranged part of the attack will not be activated if the base hits\nS*Can be canceled into Shukumyo on hit only",
    type: "special",
    command: ""
  },
  {
    name: "EX Bushin Gram - Koku (base hit)",
    outbreak: "17",
    persistence: "1",
    rigidity: "40",
    hit: "D",
    guard: "1",
    damage: "140",
    stan: "150",
    remarks: "S*Can be canceled into Shukumyo on hit only",
    type: "special",
    command: ""
  },
  {
    name: "L Bushin Gram - Koku",
    outbreak: "15",
    persistence: "8",
    rigidity: "45 total frames",
    hit: "4",
    guard: "-3",
    damage: "60",
    stan: "100",
    remarks: "Has a separate projectile-nullifying hitbox (1 hit) at close-range\nS*Can be canceled into Shukumyo on hit only",
    type: "special",
    command: ""
  },
  {
    name: "M Bushin Gram - Koku",
    outbreak: "21",
    persistence: "9",
    rigidity: "48 total frames",
    hit: "2",
    guard: "-4",
    damage: "70",
    stan: "100",
    remarks: "Has a separate projectile-nullifying hitbox (1 hit) at close-range\nS*Can be canceled into Shukumyo on hit only",
    type: "special",
    command: ""
  },
  {
    name: "H Bushin Gram - Koku",
    outbreak: "26",
    persistence: "10",
    rigidity: "50 total frames",
    hit: "2",
    guard: "-5",
    damage: "90",
    stan: "100",
    remarks: "Has a separate projectile-nullifying hitbox (1 hit) at close-range\nS*Can be canceled into Shukumyo on hit only",
    type: "special",
    command: ""
  },
  {
    name: "EX Bushin Gram - Koku",
    outbreak: "18",
    persistence: "20",
    rigidity: "57 total frames",
    hit: "D",
    guard: "-1",
    damage: "110",
    stan: "100",
    remarks: "S*Can be canceled into Shukumyo on hit only",
    type: "special",
    command: ""
  },
  {
    name: "L Bushin Gram - Ban (base hit)",
    outbreak: "5",
    persistence: "2",
    rigidity: "18+22 frame(s) after landing",
    hit: "D",
    guard: "-23",
    damage: "100",
    stan: "200",
    remarks: "The ranged part of the attack will not be activated if the base hits\nSubject to counter hit during move duration\nS*Can be canceled into Shukumyo on hit only",
    type: "special",
    command: ""
  },
  {
    name: "M Bushin Gram - Ban (base hit)",
    outbreak: "7",
    persistence: "2",
    rigidity: "21+23 frame(s) after landing",
    hit: "D",
    guard: "-29",
    damage: "110",
    stan: "200",
    remarks:
      "1F - 7F  throw invincibility\n                                                The ranged part of the attack will not be activated if the base hits\nSubject to counter hit during move duration\nS*Can be canceled into Shukumyo on hit only",
    type: "special",
    command: ""
  },
  {
    name: "H Bushin Gram - Ban (base hit)",
    outbreak: "7",
    persistence: "2",
    rigidity: "31+20 frame(s) after landing",
    hit: "D",
    guard: "-33",
    damage: "120",
    stan: "200",
    remarks:
      "1F - 8F  invincible to mid-air attacks\n                                The ranged part of the attack will not be activated if the base hits\nSubject to counter hit during move duration\nS*Can be canceled into Shukumyo on hit only",
    type: "special",
    command: ""
  },
  {
    name: "EX Bushin Gram - Ban (base hit)",
    outbreak: "5",
    persistence: "1",
    rigidity: "32+31 frame(s) after landing",
    hit: "D",
    guard: "-33",
    damage: "150",
    stan: "200",
    remarks: "1F - 7F  full invincibility\n                                                Subject to counter hit during move duration (1.2x damage)\nS*Can be canceled into Shukumyo on hit only",
    type: "special",
    command: ""
  },
  {
    name: "L Bushin Gram - Ban",
    outbreak: "7",
    persistence: "10",
    rigidity: "46 total frames",
    hit: "D",
    guard: "",
    damage: "100",
    stan: "150",
    remarks: "Subject to counter hit during move duration\nS*Can be canceled into Shukumyo on hit only",
    type: "special",
    command: ""
  },
  {
    name: "M Bushin Gram - Ban",
    outbreak: "9",
    persistence: "13",
    rigidity: "51 total frames",
    hit: "D",
    guard: "",
    damage: "110",
    stan: "150",
    remarks: "1F - 7F  throw invincibility\n                                                Subject to counter hit during move duration\nS*Can be canceled into Shukumyo on hit only",
    type: "special",
    command: ""
  },
  {
    name: "H Bushin Gram - Ban",
    outbreak: "9",
    persistence: "14",
    rigidity: "59 total frames",
    hit: "D",
    guard: "",
    damage: "120",
    stan: "150",
    remarks: "1F - 8F  invincible to mid-air attacks\n                                Subject to counter hit during move duration\nS*Can be canceled into Shukumyo on hit only",
    type: "special",
    command: ""
  },
  {
    name: "EX Bushin Gram - Ban",
    outbreak: "7",
    persistence: "14",
    rigidity: "68 total frames",
    hit: "D",
    guard: "",
    damage: "120",
    stan: "100",
    remarks: "1F - 7F  full invincibility\n                                                Subject to counter hit during move duration (1.2x damage)\nS*Can be canceled into Shukumyo on hit only",
    type: "special",
    command: ""
  },
  {
    name: "L Bushin Gram - Teki (base hit)",
    outbreak: "15",
    persistence: "2",
    rigidity: "35",
    hit: "D",
    guard: "-14",
    damage: "70",
    stan: "150",
    remarks:
      "Will not hit crouching opponents\n                                                                                                The ranged part of the attack will not be activated if the base hits\nCan perform Bushin Gram - Koku and Bushin Gran - Ban from this move\nS*Can be canceled into Shukumyo, EX Bushin Gran - Teki on hit\nVS*on hit",
    type: "special",
    command: ""
  },
  {
    name: "M Bushin Gram - Teki (base hit)",
    outbreak: "23",
    persistence: "2",
    rigidity: "37",
    hit: "D",
    guard: "-14",
    damage: "80",
    stan: "150",
    remarks:
      "Will not hit crouching opponents\n                                                                                                The ranged part of the attack will not be activated if the base hits\nCan perform Bushin Gram - Koku and Bushin Gran - Ban from this move\nS*Can be canceled into Shukumyo, EX Bushin Gran - Teki on hit\nVS*on hit",
    type: "special",
    command: ""
  },
  {
    name: "H Bushin Gram - Teki (base hit)",
    outbreak: "30",
    persistence: "2",
    rigidity: "35",
    hit: "D",
    guard: "-14",
    damage: "120",
    stan: "200",
    remarks:
      "Will not hit crouching opponents\n                                                                                                The ranged part of the attack will not be activated if the base hits\nCan perform Bushin Gram - Koku and Bushin Gran - Ban from this move\nS*Can be canceled into Shukumyo, EX Bushin Gran - Teki on hit\nVS*on hit",
    type: "special",
    command: ""
  },
  {
    name: "EX Bushin Gram - Teki (base hit)",
    outbreak: "18",
    persistence: "2",
    rigidity: "35",
    hit: "D",
    guard: "-2",
    damage: "110",
    stan: "150",
    remarks:
      "Will not hit crouching opponents\n                                                                                                Can perform Bushin Gram - Koku and Bushin Gran - Ban from this move\nS*Can be canceled into Shukumyo on hit only",
    type: "special",
    command: ""
  },
  {
    name: "L Bushin Gram - Teki",
    outbreak: "17",
    persistence: "12",
    rigidity: "51 total frames",
    hit: "D",
    guard: "-2",
    damage: "70",
    stan: "100",
    remarks:
      "Will not hit crouching opponents\n                                                                                                Can perform Bushin Gram - Koku and Bushin Gran - Ban from this move\nS*Can be canceled into Shukumyo, EX Bushin Gran - Teki on hit\nVS*on hit",
    type: "special",
    command: ""
  },
  {
    name: "M Bushin Gram - Teki",
    outbreak: "25",
    persistence: "12",
    rigidity: "61 total frames",
    hit: "D",
    guard: "-4",
    damage: "70",
    stan: "100",
    remarks:
      "Will not hit crouching opponents\n                                                                                                Can perform Bushin Gram - Koku and Bushin Gran - Ban from this move\nS*Can be canceled into Shukumyo, EX Bushin Gran - Teki on hit\nVS*on hit",
    type: "special",
    command: ""
  },
  {
    name: "H Bushin Gram - Teki",
    outbreak: "32",
    persistence: "12",
    rigidity: "66 total frames",
    hit: "D",
    guard: "-2",
    damage: "100",
    stan: "100",
    remarks:
      "Will not hit crouching opponents\n                                                                                                Can perform Bushin Gram - Koku and Bushin Gran - Ban from this move\nS*Can be canceled into Shukumyo, EX Bushin Gran - Teki on hit\nVS*on hit",
    type: "special",
    command: ""
  },
  {
    name: "EX Bushin Gram - Teki",
    outbreak: "20",
    persistence: "18",
    rigidity: "54 total frames",
    hit: "D",
    guard: "5",
    damage: "90",
    stan: "100",
    remarks: "Can perform Bushin Gram - Koku and Bushin Gran - Ban from this move\nS*Can be canceled into Shukumyo on hit only",
    type: "special",
    command: ""
  },
  {
    name: "L Bushin Jakura",
    outbreak: "",
    persistence: "",
    rigidity: "49+8 frame(s) after landing",
    hit: "",
    guard: "",
    damage: "0",
    stan: "0",
    remarks: "Distance and general movement change depending on the strength used",
    type: "special",
    command: ""
  },
  {
    name: "M Bushin Jakura",
    outbreak: "",
    persistence: "",
    rigidity: "47+8 frame(s) after landing",
    hit: "",
    guard: "",
    damage: "0",
    stan: "0",
    remarks: "Distance and general movement change depending on the strength used",
    type: "special",
    command: ""
  },
  {
    name: "H Bushin Jakura",
    outbreak: "",
    persistence: "",
    rigidity: "47+8 frame(s) after landing",
    hit: "",
    guard: "",
    damage: "0",
    stan: "0",
    remarks: "Distance and general movement change depending on the strength used",
    type: "special",
    command: ""
  },
  {
    name: "EX Bushin Jakura",
    outbreak: "",
    persistence: "",
    rigidity: "46+7 frame(s) after landing",
    hit: "",
    guard: "",
    damage: "0",
    stan: "0",
    remarks: "Can control the travel distance with directional inputs\nProjectile invincible from startup until landing",
    type: "special",
    command: ""
  },
  {
    name: "Bushin Gekirinchu",
    outbreak: "9",
    persistence: "Until landing",
    rigidity: "15 frame(s) after landing",
    hit: "",
    guard: "",
    damage: "60",
    stan: "100",
    remarks: "Only hits as a cross-up",
    type: "special",
    command: ""
  },
  { name: "Bushin Kirinkyaku", outbreak: "6", persistence: "5", rigidity: "15 frame(s) after landing", hit: "", guard: "", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
  {
    name: "Bushin Tengen",
    outbreak: "5",
    persistence: "2",
    rigidity: "17 frame(s) after landing",
    hit: "D",
    guard: "",
    damage: "170",
    stan: "200",
    remarks: "Cannot throw airborne or crouching opponents",
    type: "special",
    command: ""
  },
  {
    name: "EX Bushin Gekirinchu",
    outbreak: "9",
    persistence: "Until landing",
    rigidity: "9 frame(s) after landing",
    hit: "",
    guard: "",
    damage: "80",
    stan: "150",
    remarks: "Only hits as a cross-up",
    type: "special",
    command: ""
  },
  { name: "EX Bushin Kirinkyaku", outbreak: "6", persistence: "5", rigidity: "9 frame(s) after landing", hit: "", guard: "", damage: "80", stan: "150", remarks: "", type: "special", command: "" },
  {
    name: "EX Bushin Tengen",
    outbreak: "5",
    persistence: "2",
    rigidity: "17 frame(s) after landing",
    hit: "D",
    guard: "",
    damage: "220",
    stan: "250",
    remarks: "Cannot throw airborne or crouching opponents",
    type: "special",
    command: ""
  },
  { name: "Shukumyo", outbreak: "", persistence: "", rigidity: "25 total frames", hit: "", guard: "", damage: "0", stan: "0", remarks: "Changes into Young Zeku", type: "special", command: "" },
  {
    name: "VIdaten",
    outbreak: "",
    persistence: "",
    rigidity: "25 total frames",
    hit: "",
    guard: "",
    damage: "0",
    stan: "0",
    remarks:
      "Uses all of the V-Gauge Timer\n                                                                                                                                16F - 17F  projectile & throw invincibility\n3F - 15F  full invincibility\n                                                Can be canceled from V-Trigger cancellable moves\nWhile active, Zeku can perform chain combos using unique moves, in the order of LP -> LK -> MP -> MK -> HP -> HK (standing or crouching)\nBushin Bakujasho can be performed during Idaten, or during the chain combo",
    type: "special",
    command: ""
  },
  { name: "Bushin Bakujasho", outbreak: "14", persistence: "6", rigidity: "18", hit: "D", guard: "-2", damage: "160", stan: "200", remarks: "", type: "special", command: "" },
  { name: "Batsuzan Gaisei", outbreak: "1+3", persistence: "8", rigidity: "47", hit: "D", guard: "-33", damage: "340", stan: "0", remarks: "1F - 11F  full invincibility", type: "ca", command: "" }
];
export { zeku };