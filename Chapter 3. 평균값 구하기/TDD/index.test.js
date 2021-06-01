const { expect, it } = require("@jest/globals");
const getAverage = require("./index.js");

describe("should return average", () => {
  it.each([
    [[1, 2, 3, 4, 5], 3],
    [[10, 11, 12, 13], 11.5],
  ])("%s's average is %d", (numbers, expected) => {
    const result = getAverage(numbers);

    expect(result).toBe(expected);
  });
});
