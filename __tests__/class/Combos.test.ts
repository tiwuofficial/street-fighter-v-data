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
    combos.pushCombo(new Combo(1, "", character, [1, 2] as any, startStatus, position, 1, 2, "title", "memo", new Date()));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    combos.pushCombo(new Combo(2, "", character, [1, 2] as any, startStatus, position, 1, 2, "title", "memo", new Date()));

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
    combos.pushCombo(new Combo(1, "", character, [1, 2] as any, startStatus, position, 1, 2, "title", "memo", new Date()));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    combos.pushCombo(new Combo(2, "", character, [1, 2] as any, startStatus, position, 1, 2, "title", "memo", new Date()));

    const nextId = combos.getNextId();

    expect(nextId).toBe(3);
  });
});

describe("deleteComboById", (): void => {
  test("deleteComboById", (): void => {
    const combos = new Combos();
    const character = new Character("1", "リュウ", "ryu", ryu);
    const startStatus = startStatuses.getStartStatusById("1");
    const position = positions.getPositionById("1");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    combos.pushCombo(new Combo(1, "", character, [1, 2] as any, startStatus, position, 1, 2, "title", "memo", new Date()));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    combos.pushCombo(new Combo(2, "", character, [1, 2] as any, startStatus, position, 1, 2, "title", "memo", new Date()));

    const combo = combos.getComboFromId(2);

    expect(combo.id).toBe(2);

    combos.deleteComboById(2);

    const combo2 = combos.getComboFromId(2);

    expect(combo2).toBe(undefined);
  });
});
