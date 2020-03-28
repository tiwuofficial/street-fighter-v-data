function shuffle(a): number[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function getRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomArray(min: number, max: number, count: number): number[] {
  const randoms = [];

  /** 重複チェックしながら乱数作成 */
  for (let i = min; i <= max - 1; i++) {
    while (true) {
      const tmp = getRandom(min, max);
      // 0 を返すとフレームクイズで正解が2つになってしまうので除く
      if (!randoms.includes(tmp) && tmp !== 0) {
        randoms.push(tmp);
        break;
      }
    }
  }
  const tmp = randoms.slice(0, count);
  tmp.push(0);
  return shuffle(tmp);
}
