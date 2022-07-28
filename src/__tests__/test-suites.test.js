describe("testing numbers", () => {
  test("1 is 1", () => {
    expect(1).toBe(1);
  });

  test("1 is not 2", () => {
    expect(1).not.toBe(2);
  });
});

describe("testing booleans", () => {
  test("true is true", () => {
    expect(true).toBe(true);
  });
});
