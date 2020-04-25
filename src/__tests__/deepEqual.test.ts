import { deepEqual } from "../index";

describe("deepEqual", () => {
  const objA = {
    key1: "value1",
    key2: [null, 2, { key: null, key1: true }, undefined],
    key3: null,
    key4: undefined,
    key5: true || false,
    key6: 6 + 1,
    key7: {
      "key7.1": 1,
      "key7.2": 2,
      "key7.3": null,
      "key7.4": 4,
    },
    "8": "value8",
    9: "value9",
    "key/10": "value10",
    "key/11": {},
  };
  it("handles strictly equal arguments", () => {
    expect(deepEqual(objA, objA)).toBe(true);
  });
  it("handles deeply equal objects", () => {
    expect(deepEqual(objA, { ...objA })).toBe(true);
  });
  it("handles objects with circular references", () => {
    const objB = { ...objA };
    const objC = { ...objB };
    objB["key/11"] = objC;
    objC["key/11"] = objB;
    expect(deepEqual(objB, objC)).toBe(false);
  });
});
