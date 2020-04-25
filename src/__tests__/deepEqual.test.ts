import { deepEqual } from "..";

describe("deepEqual", () => {
  const objA = {
    key1: "value1",
  };
  it("handles strictly equal arguments", () => {
    expect(deepEqual(objA, objA)).toBe(true);
  });
});
