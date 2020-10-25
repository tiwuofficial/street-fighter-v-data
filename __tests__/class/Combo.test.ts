import Combo from "../../src/class/Combo";
import Character from "../../src/class/Character";
import { ryu } from "../../src/data/frame/ryu";
import { startStatuses } from "../../src/data/startStatus";
import { positions } from "../../src/data/position";

describe("getDateFromat", (): void => {
  test("getDateFromat", (): void => {
    const character = new Character("1", "リュウ", "ryu", ryu);
    const startStatus = startStatuses.getStartStatusById("1");
    const position = positions.getPositionById("1");
    const combo = new Combo(
      1,
      "",
      character,
      [1, 2] as any,
      startStatus,
      position,
      1,
      2,
      "title",
      "memo",
      new Date("1995-12-17T03:24:00")
    );

    expect(combo.getDateFromat()).toBe("1995年12月17日03:24");
  });
});

describe("getDateFormatTimezone", (): void => {
  test("getDateFormatTimezone", (): void => {
    const character = new Character("1", "リュウ", "ryu", ryu);
    const startStatus = startStatuses.getStartStatusById("1");
    const position = positions.getPositionById("1");
    const combo = new Combo(
      1,
      "",
      character,
      [1, 2] as any,
      startStatus,
      position,
      1,
      2,
      "title",
      "memo",
      new Date("1995-12-17T03:24:00")
    );

    expect(combo.getDateFormatTimezone()).toBe("1995-12-17T03:24:00+09:00");
  });
});
