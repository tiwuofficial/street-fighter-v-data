import Frame from "../../src/class/Frame";

describe("getCaluculationOutbreak", (): void => {
  test("getCaluculationOutbreak 4", (): void => {
    const frame = new Frame(1, "name", "1", "2", "3", "4", "5", "6", "7", "8", "ca", 1, "command");
    expect(frame.getCaluculationOutbreak()).toBe(4);
  });

  test("getCaluculationOutbreak empty", (): void => {
    const frame = new Frame(1, "name", "1", "2", "3", "", "5", "6", "7", "8", "ca", 1, "command");
    expect(frame.getCaluculationOutbreak()).toBe(null);
  });
});

describe("getCaluculationGuard", (): void => {
  test("getCaluculationGuard 3", (): void => {
    const frame = new Frame(1, "name", "1", "2", "3", "4", "5", "6", "7", "8", "ca", 1, "command");
    expect(frame.getCaluculationGuard()).toBe(3);
  });

  test("getCaluculationGuard empty", (): void => {
    const frame = new Frame(1, "name", "1", "2", "", "4", "5", "6", "7", "8", "ca", 1, "command");
    expect(frame.getCaluculationGuard()).toBe(null);
  });
});
