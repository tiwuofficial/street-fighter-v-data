import Character from "../../src/class/Character";
import { ryu } from "../../src/data/frame/ryu";

describe("constructor", (): void => {
  test("constructor", (): void => {
    const character = new Character("1", "リュウ", "ryu", ryu);
    expect(character.id).toBe("1");
    expect(character.name).toBe("リュウ");
    expect(character.enName).toBe("ryu");
  });
});

describe("getFrameById", (): void => {
  test("getFrameById 1", (): void => {
    const character = new Character("1", "リュウ", "ryu", ryu);
    const frame = character.getFrameById(1);
    expect(frame.outbreak).toBe("3");
    expect(frame.getCaluculationOutbreak()).toBe(3);
  });
});

describe("sortedFrameForEach", (): void => {
  test("filter empty, sort empty", (): void => {
    const character = new Character("1", "リュウ", "ryu", ryu);
    let cnt = 0;
    character.sortedFrameForEach(() => {
      cnt++;
    });

    expect(cnt).toBe(character.frame.length);
  });

  test("filter special, sort empty", (): void => {
    const character = new Character("1", "リュウ", "ryu", ryu);
    let cnt = 0;
    character.sortedFrameForEach(() => {
      cnt++;
    }, ["special"]);

    expect(cnt).toBe(29);
  });

  test("filter ca, sort empty", (): void => {
    const character = new Character("1", "リュウ", "ryu", ryu);
    let cnt = 0;
    character.sortedFrameForEach(() => {
      cnt++;
    }, ["ca"]);

    expect(cnt).toBe(2);
  });

  test("filter special and ca, sort empty", (): void => {
    const character = new Character("1", "リュウ", "ryu", ryu);
    let cnt = 0;
    character.sortedFrameForEach(() => {
      cnt++;
    }, ["special", "ca"]);

    expect(cnt).toBe(31);
  });
});
