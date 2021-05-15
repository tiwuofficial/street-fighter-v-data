/* eslint-disable @typescript-eslint/no-explicit-any */
import Combos from "../../src/class/Combos";
import Combo from "../../src/class/Combo";
import Character from "../../src/class/Character";
import { ryu } from "../../src/data/frame/ryu";
import { ken } from "../../src/data/frame/ken";
import { startStatuses } from "../../src/data/startStatus";
import { positions } from "../../src/data/position";

describe("getComboFromDocId", (): void => {
  test("getComboFromDocId", (): void => {
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
        2,
        "title",
        "memo",
        new Date()
      )
    );
    combos.pushCombo(
      new Combo(
        2,
        "aaa",
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

    const combo = combos.getComboFromDocId("aaa");

    expect(combo.id).toBe(2);
  });
});

describe("getComboFromId", (): void => {
  test("getComboFromId", (): void => {
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
        2,
        "title",
        "memo",
        new Date()
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
  test("empty", (): void => {
    const combos = new Combos();
    const nextId = combos.getNextId();
    expect(nextId).toBe(1);
  });

  test("getNextId", (): void => {
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
        2,
        "title",
        "memo",
        new Date()
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
        1,
        2,
        "title",
        "memo",
        new Date()
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
        1,
        2,
        "title",
        "memo",
        new Date()
      )
    );

    const nextId = combos.getNextId();

    expect(nextId).toBe(4);
  });
});

describe("updateComboById", (): void => {
  test("updateComboById", (): void => {
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
        2,
        "title",
        "memo",
        new Date()
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
        1,
        2,
        "title2",
        "memo",
        new Date()
      )
    );

    const combo = combos.getComboFromId(2);
    expect(combo.title).toBe("title2");

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

describe("getCharacterStartSkillMap", () => {
  const combos = new Combos();
  const character1 = new Character("1", "リュウ", "ryu", ryu);
  const character2 = new Character("2", "ケン", "ken", ken);
  const startStatus1 = startStatuses.getStartStatusById("1");
  const position1 = positions.getPositionById("1");

  combos.pushCombo(
    new Combo(
      1,
      "",
      character1,
      [character1.getFrameById(4), character1.getFrameById(2)],
      startStatus1,
      position1,
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
      character1,
      [character1.getFrameById(2), character1.getFrameById(1)],
      startStatus1,
      position1,
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
      character2,
      [character2.getFrameById(11), character2.getFrameById(2)],
      startStatus1,
      position1,
      2,
      3,
      "title2",
      "memo",
      new Date(2017, 0, 0, 0, 0, 0, 2)
    )
  );

  test("正常テスト", (): void => {
    const characterStartSkillMap = combos.getCharacterStartSkillMap();

    const character1Skills = characterStartSkillMap.get(character1);
    const skill1 = character1Skills.shift();
    expect(skill1.id).toBe(4);
    const skill2 = character1Skills.shift();
    expect(skill2.id).toBe(2);

    const character2Skills = characterStartSkillMap.get(character2);
    const skill3 = character2Skills.shift();
    expect(skill3.id).toBe(11);
  });
});

describe("sortedComboForEach", () => {
  const combos = new Combos();
  const character = new Character("1", "リュウ", "ryu", ryu);
  const startStatus1 = startStatuses.getStartStatusById("1");
  const startStatus2 = startStatuses.getStartStatusById("2");
  const startStatus3 = startStatuses.getStartStatusById("3");
  const position1 = positions.getPositionById("1");
  const position2 = positions.getPositionById("2");
  const position3 = positions.getPositionById("3");

  combos.pushCombo(
    new Combo(
      1,
      "",
      character,
      [1, 2] as any,
      startStatus1,
      position3,
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
      startStatus3,
      position1,
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
      startStatus2,
      position2,
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

  test("ダメージの低い順", (): void => {
    const sortedCombos: Combo[] = [];
    combos.sortedComboForEach(
      combo => {
        sortedCombos.push(combo);
      },
      "damage",
      "asc"
    );

    const combo1 = sortedCombos.shift();
    expect(combo1.id).toBe(1);
    const combo2 = sortedCombos.shift();
    expect(combo2.id).toBe(3);
    const combo3 = sortedCombos.shift();
    expect(combo3.id).toBe(2);
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

  test("開始状況(id=2)でのフィルタ", (): void => {
    const sortedCombos: Combo[] = [];
    const startStatus2 = startStatuses.getStartStatusById("2");
    combos.sortedComboForEach(
      combo => {
        sortedCombos.push(combo);
      },
      "create",
      "desc",
      [startStatus2]
    );

    const combo1 = sortedCombos.shift();
    expect(combo1.id).toBe(3);
  });

  test("開始状況(id=1,2)でのフィルタ", (): void => {
    const sortedCombos: Combo[] = [];
    const startStatus1 = startStatuses.getStartStatusById("1");
    const startStatus2 = startStatuses.getStartStatusById("2");
    combos.sortedComboForEach(
      combo => {
        sortedCombos.push(combo);
      },
      "create",
      "desc",
      [startStatus1, startStatus2]
    );

    const combo1 = sortedCombos.shift();
    expect(combo1.id).toBe(3);
    const combo2 = sortedCombos.shift();
    expect(combo2.id).toBe(1);
  });

  test("位置(id=2)でのフィルタ", (): void => {
    const sortedCombos: Combo[] = [];
    const position2 = positions.getPositionById("2");
    combos.sortedComboForEach(
      combo => {
        sortedCombos.push(combo);
      },
      "create",
      "asc",
      [],
      [position2]
    );

    const combo1 = sortedCombos.shift();
    expect(combo1.id).toBe(3);
  });

  test("位置(id=1,2)でのフィルタ", (): void => {
    const sortedCombos: Combo[] = [];
    const position1 = positions.getPositionById("1");
    const position2 = positions.getPositionById("2");
    combos.sortedComboForEach(
      combo => {
        sortedCombos.push(combo);
      },
      "create",
      "asc",
      [],
      [position1, position2]
    );

    const combo1 = sortedCombos.shift();
    expect(combo1.id).toBe(2);
    const combo2 = sortedCombos.shift();
    expect(combo2.id).toBe(3);
  });

  test("開始状況(id=2)と位置(id=2)でのフィルタ", (): void => {
    const sortedCombos: Combo[] = [];
    const startStatus2 = startStatuses.getStartStatusById("2");
    const position2 = positions.getPositionById("2");
    combos.sortedComboForEach(
      combo => {
        sortedCombos.push(combo);
      },
      "create",
      "desc",
      [startStatus2],
      [position2]
    );

    const combo1 = sortedCombos.shift();
    expect(combo1.id).toBe(3);
  });

  test("開始状況(id=1,2)と位置(id=1,2)でのフィルタ", (): void => {
    const sortedCombos: Combo[] = [];
    const startStatus1 = startStatuses.getStartStatusById("1");
    const startStatus2 = startStatuses.getStartStatusById("2");
    const position1 = positions.getPositionById("1");
    const position2 = positions.getPositionById("2");
    combos.sortedComboForEach(
      combo => {
        sortedCombos.push(combo);
      },
      "create",
      "desc",
      [startStatus1, startStatus2],
      [position1, position2]
    );

    const combo1 = sortedCombos.shift();
    expect(combo1.id).toBe(3);
  });
});
