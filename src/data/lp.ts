import Lps from "../class/Lps";
import Lp from "../class/Lp";

const lps = new Lps();

lps.setLps(new Lp("1", 0, 499, "ルーキー", "ROOKIE"));
lps.setLps(new Lp("2", 500, 999, "ブロンズ", "BRONZE"));
lps.setLps(new Lp("3", 1000, 1499, "スーパー ブロンズ", "SUPER BRONZE"));
lps.setLps(new Lp("4", 1500, 1999, "ウルトラ ブロンズ", "ULTRA BRONZE"));
lps.setLps(new Lp("5", 2000, 2999, "シルバー", "SILVER"));
lps.setLps(new Lp("6", 3000, 3499, "スーパー シルバー", "SUPER SILVER"));
lps.setLps(new Lp("7", 3500, 3999, "ウルトラ シルバー", "ULTRA SILVER"));
lps.setLps(new Lp("8", 4000, 5499, "ゴールド", "GOLD"));
lps.setLps(new Lp("9", 5500, 6499, "スーパー ゴールド", "SUPER GOLD"));
lps.setLps(new Lp("10", 6500, 7499, "ウルトラ ゴールド", "ULTRA GOLD"));
lps.setLps(new Lp("11", 7500, 9999, "プラチナ", "PLATINUM"));
lps.setLps(new Lp("12", 10000, 11999, "スーパー プラチナ", "SUPER PLATINUM"));
lps.setLps(new Lp("13", 12000, 13999, "ウルトラ プラチナ", "ULTRA PLATINUM"));
lps.setLps(new Lp("14", 14000, 19999, "ダイヤモンド", "DIAMOND"));
lps.setLps(new Lp("15", 20000, 24999, "スーパー ダイヤモンド", "SUPER DIAMOND"));
lps.setLps(new Lp("16", 25000, 29999, "ウルトラ ダイヤモンド", "ULTRA DIAMOND"));
lps.setLps(new Lp("17", 30000, 34999, "マスター", "MASTER"));
lps.setLps(new Lp("18", 35000, 99999, "グランド マスター", "GRAND MASTER"));
lps.setLps(new Lp("19", 100000, 299999, "アルティメット グランド マスター", "ULTIMATE GRAND MASTER"));
lps.setLps(new Lp("20", 300000, null, "ウォーロード", "WARLOAD"));

export { lps };
