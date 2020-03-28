export default class {
  /* eslint @typescript-eslint/no-empty-function: 0 */
  constructor() {}

  getMemoByEnName(enName: string): string {
    const memo = JSON.parse(localStorage.getItem(`memo_${enName}`));
    if (memo && memo.character) {
      return memo.character;
    }
    return "";
  }

  setMemoByEnName(enName: string, memo: string): void {
    // 保存
    localStorage.setItem(
      `memo_${enName}`,
      JSON.stringify({
        character: memo
      })
    );
  }
}
