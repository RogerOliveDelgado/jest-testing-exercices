test("1 is 1", () => {
  expect(1).toBe(1);
});

// Execute only this test by adding the .skip command
test("2 is not 1", () => {
  expect(2).not.toBe(1);
});

test("true is true", () => {
  expect(true).toBe(true);
});
