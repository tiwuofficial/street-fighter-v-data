import Character from '../../src/class/Character';
import { ryu } from "../../src/data/frame/ryu";

describe('constructor', (): void => {
  test('constructor', (): void => {
    const character = new Character("1", "リュウ", "ryu", ryu);
    expect(character.id).toBe("1");
    expect(character.name).toBe("リュウ");
    expect(character.enName).toBe("ryu");
  });
});

describe('getFrameById', (): void => {
  test('getFrameById 1', (): void => {
    const character = new Character("1", "リュウ", "ryu", ryu);
    const frame = character.getFrameById(1);
    expect(frame.outbreak).toBe("3");
    expect(frame.getCaluculationOutbreak()).toBe(3);
  });
});