import { frameCalculation } from '../src/module/frameCalculation';

describe('frameCalculation', (): void => {
  test('frameCalculation', (): void => {
    const result: number = frameCalculation("1");
    expect(result).toBe(1);
  });
});