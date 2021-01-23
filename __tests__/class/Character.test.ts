import Character from "../../src/class/Character";
import { ryu } from "../../src/data/frame/ryu";
import { zeku } from "../../src/data/frame/zeku";

describe("constructor", (): void => {
  test("constructor", (): void => {
    const character = new Character("1", "リュウ", "ryu", ryu);
    expect(character.id).toBe("1");
    expect(character.name).toBe("リュウ");
    expect(character.enName).toBe("ryu");
  });
});

describe("getObject", (): void => {
  test("getObject", (): void => {
    const character = new Character("1", "リュウ", "ryu", ryu);
    const frame = character.frame.map(frame => {
      return frame.getObject();
    });
    expect(character.getObject()).toEqual({
      id: "1",
      name: "リュウ",
      enName: "ryu",
      frame: frame,
      words: []
    });
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
    character.sortedFrameForEach(1, () => {
      cnt++;
    });

    expect(cnt).toBe(75);
  });

  test("filter empty array, sort empty", (): void => {
    const character = new Character("1", "リュウ", "ryu", ryu);
    let cnt = 0;
    character.sortedFrameForEach(
      1,
      () => {
        cnt++;
      },
      []
    );

    expect(cnt).toBe(75);
  });

  test("filter empty string, sort empty", (): void => {
    const character = new Character("1", "リュウ", "ryu", ryu);
    let cnt = 0;
    character.sortedFrameForEach(
      1,
      () => {
        cnt++;
      },
      [""]
    );

    expect(cnt).toBe(75);
  });

  test("filter special, sort empty", (): void => {
    const character = new Character("1", "リュウ", "ryu", ryu);
    let cnt = 0;
    character.sortedFrameForEach(
      1,
      () => {
        cnt++;
      },
      ["special"]
    );

    expect(cnt).toBe(29);
  });

  test("filter ca, sort empty", (): void => {
    const character = new Character("1", "リュウ", "ryu", ryu);
    let cnt = 0;
    character.sortedFrameForEach(
      1,
      () => {
        cnt++;
      },
      ["ca"]
    );

    expect(cnt).toBe(2);
  });

  test("filter special and ca, sort empty", (): void => {
    const character = new Character("1", "リュウ", "ryu", ryu);
    let cnt = 0;
    character.sortedFrameForEach(
      1,
      () => {
        cnt++;
      },
      ["special", "ca"]
    );

    expect(cnt).toBe(31);
  });

  test("filter zeku", (): void => {
    const character = new Character("1", "リュウ", "zeku", zeku);
    let cnt = 0;
    character.sortedFrameForEach(
      1,
      () => {
        cnt++;
      },
      ["ca"],
      "",
      ""
    );

    expect(cnt).toBe(2);
  });

  test("filter zeku old", (): void => {
    const character = new Character("1", "リュウ", "zeku", zeku);
    let cnt = 0;
    character.sortedFrameForEach(
      1,
      () => {
        cnt++;
      },
      ["ca"],
      "",
      "",
      "old"
    );

    expect(cnt).toBe(1);
  });

  test("filter zeku young", (): void => {
    const character = new Character("1", "リュウ", "zeku", zeku);
    let cnt = 0;
    character.sortedFrameForEach(
      1,
      () => {
        cnt++;
      },
      ["ca"],
      "",
      "",
      "young"
    );

    expect(cnt).toBe(1);
  });
});
