"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ed = [
    {
        name: "立ち弱P",
        outbreak: "4",
        persistence: "2",
        rigidity: "8",
        hit: "5",
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
        rigidity: "16",
        hit: "10",
        guard: "3",
        damage: "60",
        stan: "100",
        remarks: "",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "立ち強P",
        outbreak: "11",
        persistence: "3",
        rigidity: "21",
        hit: "2",
        guard: "-2",
        damage: "90",
        stan: "150",
        remarks: "クラッシュカウンター対応 (D)\n                                                                                                                                                                発生は最速での数値",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "立ち弱K",
        outbreak: "3",
        persistence: "3",
        rigidity: "8",
        hit: "2",
        guard: "1",
        damage: "30",
        stan: "70",
        remarks: "連打キャンセル対応",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "立ち中K",
        outbreak: "7",
        persistence: "3",
        rigidity: "15",
        hit: "4",
        guard: "2",
        damage: "70",
        stan: "100",
        remarks: "",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "立ち強K",
        outbreak: "14",
        persistence: "4",
        rigidity: "22",
        hit: "2",
        guard: "-4",
        damage: "80",
        stan: "150",
        remarks: "クラッシュカウンター対応(+20F)",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "しゃがみ弱P",
        outbreak: "4",
        persistence: "2",
        rigidity: "8",
        hit: "5",
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
        rigidity: "12",
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
        outbreak: "8",
        persistence: "6",
        rigidity: "21",
        hit: "1",
        guard: "-5",
        damage: "80(※70)",
        stan: "150",
        remarks: "クラッシュカウンター対応 (D)\n                                                強制立ち効果\n                                                                                                                ※持続2F目以降",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "しゃがみ弱K",
        outbreak: "4",
        persistence: "2",
        rigidity: "8",
        hit: "2",
        guard: "0",
        damage: "20",
        stan: "70",
        remarks: "",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "しゃがみ中K",
        outbreak: "7",
        persistence: "2",
        rigidity: "17",
        hit: "1",
        guard: "-3",
        damage: "50",
        stan: "100",
        remarks: "",
        vtrigger: 1,
        type: "normal",
        command: ""
    },
    {
        name: "しゃがみ強K",
        outbreak: "10",
        persistence: "5",
        rigidity: "24(※22)",
        hit: "D",
        guard: "-10",
        damage: "90",
        stan: "150",
        remarks: "クラッシュカウンター対応 (D)\n                                                                                                                                                                ※空振り時",
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
        persistence: "4",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "70",
        stan: "100",
        remarks: "空中ヒット時ダウン",
        vtrigger: 1,
        type: "jump",
        command: ""
    },
    {
        name: "ジャンプ強P",
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
        name: "ジャンプ弱K",
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
        name: "サイコブロー",
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
        command: "OR → + 弱P 弱K"
    },
    {
        name: "チート＆スマッシュ",
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
        command: "← + 弱P 弱K"
    },
    {
        name: "サイコアンカー・グランド",
        outbreak: "21",
        persistence: "6",
        rigidity: "40",
        hit: "D",
        guard: "-2",
        damage: "80",
        stan: "200",
        remarks: "空中の相手にヒットしない\n                                                                発生は最速での数値\nアンカーが当たると自動で接近してボディブローを出す",
        vtrigger: 1,
        type: "vsystem",
        command: "(VスキルⅠ選択時) 中P 中K"
    },
    {
        name: "サイコアンカー・グランド(ボタンホールド)",
        outbreak: "35",
        persistence: "6",
        rigidity: "40",
        hit: "D",
        guard: "3",
        damage: "120",
        stan: "0",
        remarks: "空中の相手にヒットしない\n                                                                アンカーがヒットした場合は浮かせてこちらに寄せ、ガードの場合は地上で寄せる",
        vtrigger: 1,
        type: "vsystem",
        command: "(VスキルⅠ選択時) 中P 中K (ボタンホールド)"
    },
    {
        name: "サイコアンカー・エア",
        outbreak: "9",
        persistence: "4",
        rigidity: "47",
        hit: "D",
        guard: "",
        damage: "100",
        stan: "150",
        remarks: "地上の相手にヒットしない\n                                                                                発生は最速での数値\nアンカーが当たると自動で追尾して殴り付ける",
        vtrigger: 1,
        type: "vsystem",
        command: "(VスキルⅠ選択時) ↓ + 中P 中K"
    },
    {
        name: "サイコアンカー・エア(ボタンホールド)",
        outbreak: "26",
        persistence: "6",
        rigidity: "40",
        hit: "D",
        guard: "",
        damage: "80",
        stan: "100",
        remarks: "地上の相手にヒットしない\n                                                                                アンカーがヒットした場合、地面に叩き付けてバウンドさせる",
        vtrigger: 1,
        type: "vsystem",
        command: "(VスキルⅠ選択時) ↓ + 中P 中K (ボタンホールド)"
    },
    {
        name: "[VS2]サイコスウィング",
        outbreak: "22",
        persistence: "3",
        rigidity: "20",
        hit: "D",
        guard: "-6",
        damage: "70",
        stan: "100",
        remarks: "5F～24F 飛び道具無敵",
        vtrigger: 1,
        type: "vsystem",
        command: "(VスキルⅡ選択時) 中P 中K"
    },
    {
        name: "[VS2]サイコスウィング(ボタンホールド)",
        outbreak: "38",
        persistence: "3",
        rigidity: "19",
        hit: "D",
        guard: "-2",
        damage: "80",
        stan: "120",
        remarks: "5F～37F 飛び道具無敵",
        vtrigger: 1,
        type: "vsystem",
        command: "(VスキルⅡ選択時) 中P 中K (ボタンホールド)"
    },
    {
        name: "[VS2]サイコスマッシュ",
        outbreak: "11",
        persistence: "5",
        rigidity: "21",
        hit: "D",
        guard: "-6",
        damage: "70",
        stan: "100",
        remarks: "",
        vtrigger: 1,
        type: "vsystem",
        command: "(VスキルⅡ選択時) ↓ + 中P 中K"
    },
    {
        name: "[VS2]サイコスマッシュ(ボタンホールド)",
        outbreak: "31",
        persistence: "5",
        rigidity: "17(※19)",
        hit: "D",
        guard: "3",
        damage: "90",
        stan: "120",
        remarks: "※空振り時",
        vtrigger: 1,
        type: "vsystem",
        command: "(VスキルⅡ選択時) ↓ + 中P 中K (ボタンホールド)"
    },
    {
        name: "サイコキャノン",
        outbreak: "1+15(※12)",
        persistence: "",
        rigidity: "全体25(※21)",
        hit: "D",
        guard: "",
        damage: "140",
        stan: "175",
        remarks: "※レバーを前に入れることで飛び道具速度が変化",
        vtrigger: 1,
        type: "vsystem",
        command: "強P 強K"
    },
    {
        name: "キルステップ",
        outbreak: "",
        persistence: "",
        rigidity: "全体31",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "1F～25F 打撃無敵\n                                                発動時スタン値200回復",
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
        remarks: "1F～16F 投げ無敵\n                                                1～9F　相手の打撃と飛び道具を避ける判定（回避時Vゲージ150増加）\n硬直中は被カウンター判定\n攻撃回避時、硬直終了まで完全無敵、全体フレームが17Fになる\n攻撃回避時、Vシフトブレイクに移行可能",
        vtrigger: 1,
        type: "vsystem",
        command: "強P 中K"
    },
    {
        name: "サイコスプリット",
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
        name: "サイコフリッカー",
        outbreak: "6",
        persistence: "6",
        rigidity: "22",
        hit: "3",
        guard: "-2",
        damage: "80",
        stan: "150",
        remarks: "ボタン強度による変化なし",
        vtrigger: 1,
        type: "special",
        command: "P (ボタン連打)"
    },
    {
        name: "サイコスパーク",
        outbreak: "11",
        persistence: "8",
        rigidity: "16",
        hit: "1",
        guard: "-2",
        damage: "50",
        stan: "80",
        remarks: "飛び道具判定",
        vtrigger: 1,
        type: "special",
        command: "→ + 中P"
    },
    {
        name: "サイコシュート",
        outbreak: "13",
        persistence: "",
        rigidity: "全体39",
        hit: "4",
        guard: "-4",
        damage: "50",
        stan: "70",
        remarks: "強度で弾速変化",
        vtrigger: 1,
        type: "special",
        command: "(サイコスパーク中に) P"
    },
    {
        name: "EXサイコシュート",
        outbreak: "13",
        persistence: "",
        rigidity: "全体36",
        hit: "D",
        guard: "8",
        damage: "100",
        stan: "150",
        remarks: "",
        vtrigger: 1,
        type: "special",
        command: "(サイコスパーク中に) P P"
    },
    {
        name: "サイコナックル",
        outbreak: "30",
        persistence: "12",
        rigidity: "27",
        hit: "膝",
        guard: "-2",
        damage: "100",
        stan: "150",
        remarks: "ヒット・ガードで背後周りに移行\n近距離で当てた方が崩れ時間が長い\nVS※VS2のみキャンセル可能",
        vtrigger: 1,
        type: "special",
        command: "強P (ボタンホールド)"
    },
    {
        name: "サイコアッパー",
        outbreak: "16",
        persistence: "5",
        rigidity: "33",
        hit: "D",
        guard: "-16",
        damage: "120",
        stan: "150",
        remarks: "",
        vtrigger: 1,
        type: "special",
        command: "P P"
    },
    {
        name: "EXサイコアッパー",
        outbreak: "16(※13)",
        persistence: "11",
        rigidity: "32",
        hit: "D",
        guard: "-20",
        damage: "140",
        stan: "200",
        remarks: "1F～18F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)\n※キャンセル発動時",
        vtrigger: 1,
        type: "special",
        command: "弱P"
    },
    {
        name: "サイコライジング",
        outbreak: "12",
        persistence: "18",
        rigidity: "着地後26",
        hit: "D",
        guard: "-38",
        damage: "50",
        stan: "100",
        remarks: "3F～9F 飛び道具無敵\n10F～13F 完全無敵\n                                                動作中常に被カウンター判定",
        vtrigger: 1,
        type: "special",
        command: "K K"
    },
    {
        name: "サイコスプラッシュ",
        outbreak: "14",
        persistence: "着地まで",
        rigidity: "着地後26",
        hit: "D",
        guard: "",
        damage: "70",
        stan: "100",
        remarks: "ヒット時のみ派生可",
        vtrigger: 1,
        type: "special",
        command: "(サイコライジングヒット時に) P"
    },
    {
        name: "EXサイコスプラッシュ",
        outbreak: "14",
        persistence: "着地まで",
        rigidity: "着地後13",
        hit: "D",
        guard: "",
        damage: "80",
        stan: "100",
        remarks: "ヒット時のみ派生可\n動作中飛び道具無敵",
        vtrigger: 1,
        type: "special",
        command: "(サイコライジングヒット時に) P P"
    },
    {
        name: "サイコバラージ",
        outbreak: "1+9",
        persistence: "14",
        rigidity: "49",
        hit: "D",
        guard: "-21",
        damage: "340",
        stan: "0",
        remarks: "1F～19F 完全無敵\n                                                持続フレームは空振り時の物",
        vtrigger: 1,
        type: "ca",
        command: "↓↘→ ↓↘→ + P"
    },
    {
        name: "立ち弱P",
        outbreak: "4",
        persistence: "2",
        rigidity: "8",
        hit: "5",
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
        rigidity: "16",
        hit: "10",
        guard: "3",
        damage: "60",
        stan: "100",
        remarks: "",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "立ち強P",
        outbreak: "11",
        persistence: "3",
        rigidity: "21",
        hit: "2",
        guard: "-2",
        damage: "90",
        stan: "150",
        remarks: "クラッシュカウンター対応 (D)\n                                                                                                                                                                発生は最速での数値",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "立ち弱K",
        outbreak: "3",
        persistence: "3",
        rigidity: "8",
        hit: "2",
        guard: "1",
        damage: "30",
        stan: "70",
        remarks: "連打キャンセル対応",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "立ち中K",
        outbreak: "7",
        persistence: "3",
        rigidity: "15",
        hit: "4",
        guard: "2",
        damage: "70",
        stan: "100",
        remarks: "",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "立ち強K",
        outbreak: "14",
        persistence: "4",
        rigidity: "22",
        hit: "2",
        guard: "-4",
        damage: "80",
        stan: "150",
        remarks: "クラッシュカウンター対応(+20F)",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "しゃがみ弱P",
        outbreak: "4",
        persistence: "2",
        rigidity: "8",
        hit: "5",
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
        rigidity: "12",
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
        outbreak: "8",
        persistence: "6",
        rigidity: "21",
        hit: "1",
        guard: "-5",
        damage: "80(※70)",
        stan: "150",
        remarks: "クラッシュカウンター対応 (D)\n                                                強制立ち効果\n                                                                                                                ※持続2F目以降",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "しゃがみ弱K",
        outbreak: "4",
        persistence: "2",
        rigidity: "8",
        hit: "2",
        guard: "0",
        damage: "20",
        stan: "70",
        remarks: "",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "しゃがみ中K",
        outbreak: "7",
        persistence: "2",
        rigidity: "17",
        hit: "1",
        guard: "-3",
        damage: "50",
        stan: "100",
        remarks: "",
        vtrigger: 2,
        type: "normal",
        command: ""
    },
    {
        name: "しゃがみ強K",
        outbreak: "10",
        persistence: "5",
        rigidity: "24(※22)",
        hit: "D",
        guard: "-10",
        damage: "90",
        stan: "150",
        remarks: "クラッシュカウンター対応 (D)\n                                                                                                                                                                ※空振り時",
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
        persistence: "4",
        rigidity: "",
        hit: "",
        guard: "",
        damage: "70",
        stan: "100",
        remarks: "空中ヒット時ダウン",
        vtrigger: 2,
        type: "jump",
        command: ""
    },
    {
        name: "ジャンプ強P",
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
        name: "ジャンプ弱K",
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
        name: "サイコブロー",
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
        command: "OR → + 弱P 弱K"
    },
    {
        name: "チート＆スマッシュ",
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
        command: "← + 弱P 弱K"
    },
    {
        name: "サイコアンカー",
        outbreak: "21",
        persistence: "6",
        rigidity: "40",
        hit: "D",
        guard: "-2",
        damage: "80",
        stan: "200",
        remarks: "空中の相手にヒットしない\n                                                                発生は最速での数値\nアンカーが当たると自動で接近してボディブローを出す",
        vtrigger: 2,
        type: "vsystem",
        command: "(VスキルⅠ選択時) 中P 中K"
    },
    {
        name: "サイコアンカー",
        outbreak: "35",
        persistence: "6",
        rigidity: "40",
        hit: "D",
        guard: "3",
        damage: "120",
        stan: "0",
        remarks: "空中の相手にヒットしない\n                                                                アンカーがヒットした場合は浮かせてこちらに寄せ、ガードの場合は地上で寄せる",
        vtrigger: 2,
        type: "vsystem",
        command: "(VスキルⅠ選択時) 中P 中K (ボタンホールド)"
    },
    {
        name: "サイコアンカー",
        outbreak: "9",
        persistence: "4",
        rigidity: "47",
        hit: "D",
        guard: "",
        damage: "100",
        stan: "150",
        remarks: "地上の相手にヒットしない\n                                                                                発生は最速での数値\nアンカーが当たると自動で追尾して殴り付ける",
        vtrigger: 2,
        type: "vsystem",
        command: "(VスキルⅠ選択時) ↓ + 中P 中K"
    },
    {
        name: "サイコアンカー",
        outbreak: "26",
        persistence: "6",
        rigidity: "40",
        hit: "D",
        guard: "",
        damage: "80",
        stan: "100",
        remarks: "地上の相手にヒットしない\n                                                                                アンカーがヒットした場合、地面に叩き付けてバウンドさせる",
        vtrigger: 2,
        type: "vsystem",
        command: "(VスキルⅠ選択時) ↓ + 中P 中K (ボタンホールド)"
    },
    {
        name: "[VS2]サイコスウィング",
        outbreak: "22",
        persistence: "3",
        rigidity: "20",
        hit: "D",
        guard: "-6",
        damage: "70",
        stan: "100",
        remarks: "5F～24F 飛び道具無敵",
        vtrigger: 2,
        type: "vsystem",
        command: "(VスキルⅡ選択時) 中P 中K"
    },
    {
        name: "[VS2]サイコスウィング(ボタンホールド)",
        outbreak: "38",
        persistence: "3",
        rigidity: "19",
        hit: "D",
        guard: "-2",
        damage: "80",
        stan: "120",
        remarks: "5F～37F 飛び道具無敵",
        vtrigger: 2,
        type: "vsystem",
        command: "(VスキルⅡ選択時) 中P 中K (ボタンホールド)"
    },
    {
        name: "[VS2]サイコスマッシュ",
        outbreak: "11",
        persistence: "5",
        rigidity: "21",
        hit: "D",
        guard: "-6",
        damage: "70",
        stan: "100",
        remarks: "",
        vtrigger: 2,
        type: "vsystem",
        command: "(VスキルⅡ選択時) ↓ + 中P 中K"
    },
    {
        name: "[VS2]サイコスマッシュ(ボタンホールド)",
        outbreak: "31",
        persistence: "5",
        rigidity: "17(※19)",
        hit: "D",
        guard: "3",
        damage: "90",
        stan: "120",
        remarks: "※空振り時",
        vtrigger: 2,
        type: "vsystem",
        command: "(VスキルⅡ選択時) ↓ + 中P 中K (ボタンホールド)"
    },
    {
        name: "アンカーブースト",
        outbreak: "1",
        persistence: "",
        rigidity: "5",
        hit: "",
        guard: "",
        damage: "0",
        stan: "0",
        remarks: "Vゲージタイマー+4000F\n                                                                                                                                                                                発動中ガイストアンカー・グランド　ガイストアンカー・エアが必殺技に追加",
        vtrigger: 2,
        type: "vsystem",
        command: "強P 強K"
    },
    {
        name: "キルステップ",
        outbreak: "",
        persistence: "",
        rigidity: "全体31",
        hit: "",
        guard: "",
        damage: "",
        stan: "",
        remarks: "1F～25F 打撃無敵\n                                                発動時スタン値200回復",
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
        remarks: "1F～16F 投げ無敵\n                                                1～9F　相手の打撃と飛び道具を避ける判定（回避時Vゲージ150増加）\n硬直中は被カウンター判定\n攻撃回避時、硬直終了まで完全無敵、全体フレームが17Fになる\n攻撃回避時、Vシフトブレイクに移行可能",
        vtrigger: 2,
        type: "vsystem",
        command: "強P 中K"
    },
    {
        name: "サイコスプリット",
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
        name: "サイコフリッカー",
        outbreak: "6",
        persistence: "6",
        rigidity: "22",
        hit: "3",
        guard: "-2",
        damage: "80",
        stan: "150",
        remarks: "ボタン強度による変化なし",
        vtrigger: 2,
        type: "special",
        command: "P (ボタン連打)"
    },
    {
        name: "サイコスパーク",
        outbreak: "11",
        persistence: "8",
        rigidity: "16",
        hit: "1",
        guard: "-2",
        damage: "50",
        stan: "80",
        remarks: "飛び道具判定",
        vtrigger: 2,
        type: "special",
        command: "→ + 中P"
    },
    {
        name: "サイコシュート",
        outbreak: "13",
        persistence: "",
        rigidity: "全体39",
        hit: "4",
        guard: "-4",
        damage: "50",
        stan: "70",
        remarks: "強度で弾速変化",
        vtrigger: 2,
        type: "special",
        command: "(サイコスパーク中に) P"
    },
    {
        name: "EXサイコシュート",
        outbreak: "13",
        persistence: "",
        rigidity: "全体36",
        hit: "D",
        guard: "8",
        damage: "100",
        stan: "150",
        remarks: "",
        vtrigger: 2,
        type: "special",
        command: "(サイコスパーク中に) P P"
    },
    {
        name: "サイコナックル",
        outbreak: "30",
        persistence: "12",
        rigidity: "27",
        hit: "膝",
        guard: "-2",
        damage: "100",
        stan: "150",
        remarks: "ヒット・ガードで背後周りに移行\n近距離で当てた方が崩れ時間が長い\nVS※VS2のみキャンセル可能",
        vtrigger: 2,
        type: "special",
        command: "強P (ボタンホールド)"
    },
    {
        name: "サイコアッパー",
        outbreak: "16",
        persistence: "5",
        rigidity: "33",
        hit: "D",
        guard: "-16",
        damage: "120",
        stan: "150",
        remarks: "",
        vtrigger: 2,
        type: "special",
        command: "P P"
    },
    {
        name: "EXサイコアッパー",
        outbreak: "16(※13)",
        persistence: "11",
        rigidity: "32",
        hit: "D",
        guard: "-20",
        damage: "140",
        stan: "200",
        remarks: "1F～18F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)\n※キャンセル発動時",
        vtrigger: 2,
        type: "special",
        command: "弱P"
    },
    {
        name: "サイコライジング",
        outbreak: "12",
        persistence: "18",
        rigidity: "着地後26",
        hit: "D",
        guard: "-38",
        damage: "50",
        stan: "100",
        remarks: "3F～9F 飛び道具無敵\n10F～13F 完全無敵\n                                                動作中常に被カウンター判定",
        vtrigger: 2,
        type: "special",
        command: "K K"
    },
    {
        name: "サイコスプラッシュ",
        outbreak: "14",
        persistence: "着地まで",
        rigidity: "着地後26",
        hit: "D",
        guard: "",
        damage: "70",
        stan: "100",
        remarks: "ヒット時のみ派生可",
        vtrigger: 2,
        type: "special",
        command: "(サイコライジングヒット時に) P"
    },
    {
        name: "EXサイコスプラッシュ",
        outbreak: "14",
        persistence: "着地まで",
        rigidity: "着地後13",
        hit: "D",
        guard: "",
        damage: "80",
        stan: "100",
        remarks: "ヒット時のみ派生可\n動作中飛び道具無敵",
        vtrigger: 2,
        type: "special",
        command: "(サイコライジングヒット時に) P P"
    },
    {
        name: "Vガイストアンカー・グランド",
        outbreak: "26",
        persistence: "8",
        rigidity: "37",
        hit: "6",
        guard: "GB+3",
        damage: "80",
        stan: "100",
        remarks: "Vゲージタイマー1300F消費\n                                                                                                                空中の相手にヒットしない\n                                                                アンカーが当たると自動で接近して攻撃\nサイコライジング、通常版サイコスプラッシュ以外の必殺技からキャンセル可能",
        vtrigger: 2,
        type: "special",
        command: "(VトリガーⅡ発動中) 強P 強K"
    },
    {
        name: "Vガイストアンカー・エア",
        outbreak: "16",
        persistence: "7",
        rigidity: "32",
        hit: "D",
        guard: "",
        damage: "100",
        stan: "150",
        remarks: "Vゲージタイマー1300F消費\n                                                                                                地上の相手にヒットしない\n                                                                                アンカーが当たると自動で相手を引き寄せ攻撃\nサイコライジング、通常版サイコスプラッシュ以外の必殺技からキャンセル可能",
        vtrigger: 2,
        type: "special",
        command: "(VトリガーⅡ発動中) ↓ + 強P 強K"
    },
    {
        name: "サイコバラージ ",
        outbreak: "1+9",
        persistence: "14",
        rigidity: "49",
        hit: "D",
        guard: "-21",
        damage: "340",
        stan: "0",
        remarks: "1F～19F 完全無敵\n                                                持続フレームは空振り時の物",
        vtrigger: 2,
        type: "ca",
        command: "↓↘→ ↓↘→ + P"
    }
];
exports.ed = ed;
//# sourceMappingURL=ed.js.map