import Lp from "../../src/class/Lp";

describe("existsLP", (): void => {
  test("ランク名", (): void => {
    const lp = new Lp("3", 1000, 1499, "スーパー ブロンズ", "SUPER BRONZE");
    const text = `
    【使用キャラ】ダルシム
    【Lp】スーパー ブロンズ 
    【ルール】3先
    `;
    expect(lp.existsLP(text)).toBe(true);
  });

  test("ランク名略称", (): void => {
    const lp = new Lp("6", 3000, 3499, "スーパー シルバー", "SUPER SILVER", ["スパシル"]);
    const text = `
    【使用キャラ】ダルシム
    【Lp】スパシル
    【ルール】3先
    `;
    expect(lp.existsLP(text)).toBe(true);
  });

  test("4桁 あり", (): void => {
    const lp = new Lp("3", 1000, 1499, "スーパー ブロンズ", "SUPER BRONZE");
    const text = `
    【使用キャラ】ダルシム
    【Lp】1200 
    【ルール】3先
    【パス】1111
    `;
    expect(lp.existsLP(text)).toBe(true);
  });

  test("4桁 なし", (): void => {
    const lp = new Lp("3", 1000, 1499, "スーパー ブロンズ", "SUPER BRONZE");
    const text = `
    【使用キャラ】ダルシム
    【Lp】1500 
    【ルール】3先
    【パス】1111
    `;
    expect(lp.existsLP(text)).toBe(false);
  });

  test("4桁 なし", (): void => {
    const lp = new Lp("3", 1000, 1499, "スーパー ブロンズ", "SUPER BRONZE");
    const text = `
    【使用キャラ】ダルシム
    【Lp】12000
    【ルール】3先
    【パス】1111
    `;
    expect(lp.existsLP(text)).toBe(false);
  });

  test("5桁 あり", (): void => {
    const lp = new Lp("13", 12000, 13999, "ウルトラ プラチナ", "ULTRA PLATINUM", ["ウルプラ"]);
    const text = `
    【使用キャラ】ダルシム
    【Lp】13000 
    【ルール】3先
    【パス】3333
    `;
    expect(lp.existsLP(text)).toBe(true);
  });

  test("なし", (): void => {
    const lp = new Lp("3", 1000, 1499, "スーパー ブロンズ", "SUPER BRONZE");
    const text = `
    【使用キャラ】ダルシム
    【Lp】1
    【ルール】3先
    `;
    expect(lp.existsLP(text)).toBe(false);
  });
});
