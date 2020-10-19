import Combos from "../../src/class/Combos";
import Combo from "../../src/class/Combo";
import Character from "../../src/class/Character";
import { ryu } from "../../src/data/frame/ryu";
import { startStatuses } from "../../src/data/startStatus";
import { positions } from "../../src/data/position";

describe("getComboFromId", (): void => {
  test("getComboFromId", (): void => {
    const combos = new Combos();
    const character = new Character("1", "リュウ", "ryu", ryu);
    const startStatus = startStatuses.getStartStatusById("1");
    const position = positions.getPositionById("1");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    combos.pushCombo(
      new Combo(
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
        new Date()
      )
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    combos.pushCombo(
      new Combo(
        2,
        "",
        character,
        [1, 2] as any,
        startStatus,
        position,
        1,
        2,
        "title",
        "memo",
        new Date()
      )
    );

    const combo = combos.getComboFromId(2);

    expect(combo.id).toBe(2);
  });
});

describe("getNextId", (): void => {
  test("getNextId", (): void => {
    const combos = new Combos();
    const character = new Character("1", "リュウ", "ryu", ryu);
    const startStatus = startStatuses.getStartStatusById("1");
    const position = positions.getPositionById("1");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    combos.pushCombo(
      new Combo(
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
        new Date()
      )
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    combos.pushCombo(
      new Combo(
        2,
        "",
        character,
        [1, 2] as any,
        startStatus,
        position,
        1,
        2,
        "title",
        "memo",
        new Date()
      )
    );

    const nextId = combos.getNextId();

    expect(nextId).toBe(3);
  });
});

describe("updateComboById", (): void => {
  test("updateComboById", (): void => {
    const combos = new Combos();
    const character = new Character("1", "リュウ", "ryu", ryu);
    const startStatus = startStatuses.getStartStatusById("1");
    const position = positions.getPositionById("1");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    combos.pushCombo(
      new Combo(
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
        new Date()
      )
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    combos.pushCombo(
      new Combo(
        2,
        "",
        character,
        [1, 2] as any,
        startStatus,
        position,
        1,
        2,
        "title2",
        "memo",
        new Date()
      )
    );

    const combo = combos.getComboFromId(2);
    expect(combo.title).toBe("title2");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    combos.updateComboById(
      2,
      new Combo(
        2,
        "",
        character,
        [1, 2] as any,
        startStatus,
        position,
        1,
        2,
        "title2-1",
        "memo",
        new Date()
      )
    );

    const combo2 = combos.getComboFromId(2);
    expect(combo2.title).toBe("title2-1");
  });
});

describe("sortedComboForEach", () => {
  const combos = new Combos();
  const character = new Character("1", "リュウ", "ryu", ryu);
  const startStatus = startStatuses.getStartStatusById("1");
  const position = positions.getPositionById("1");

  combos.pushCombo(
    new Combo(
      1,
      "",
      character,
      [1, 2] as any,
      startStatus,
      position,
      1,
      10,
      "title",
      "memo",
      new Date(2017, 0, 0, 0, 0, 0, 0)
    )
  );
  combos.pushCombo(
    new Combo(
      2,
      "",
      character,
      [1, 2] as any,
      startStatus,
      position,
      10,
      2,
      "title2",
      "memo",
      new Date(2017, 0, 0, 0, 0, 0, 1)
    )
  );
  combos.pushCombo(
    new Combo(
      3,
      "",
      character,
      [1, 2] as any,
      startStatus,
      position,
      2,
      3,
      "title2",
      "memo",
      new Date(2017, 0, 0, 0, 0, 0, 2)
    )
  );

  test("引数なし", (): void => {
    const sortedCombos: Combo[] = [];
    combos.sortedComboForEach(combo => {
      sortedCombos.push(combo);
    });

    const combo1 = sortedCombos.shift();
    expect(combo1.id).toBe(3);
    const combo2 = sortedCombos.shift();
    expect(combo2.id).toBe(2);
    const combo3 = sortedCombos.shift();
    expect(combo3.id).toBe(1);
  });

  test("ダメージの高い順", (): void => {
    const sortedCombos: Combo[] = [];
    combos.sortedComboForEach(combo => {
      sortedCombos.push(combo);
    }, "damage");

    const combo1 = sortedCombos.shift();
    expect(combo1.id).toBe(2);
    const combo2 = sortedCombos.shift();
    expect(combo2.id).toBe(3);
    const combo3 = sortedCombos.shift();
    expect(combo3.id).toBe(1);
  });

  test("スタンの高い順", (): void => {
    const sortedCombos: Combo[] = [];
    combos.sortedComboForEach(combo => {
      sortedCombos.push(combo);
    }, "stun");

    const combo1 = sortedCombos.shift();
    expect(combo1.id).toBe(1);
    const combo2 = sortedCombos.shift();
    expect(combo2.id).toBe(3);
    const combo3 = sortedCombos.shift();
    expect(combo3.id).toBe(2);
  });
});
