const { getSixRandomNumber } = require("./index.js");
describe("Random Number Generator", () => {
  describe("get six unique random number", () => {
    it.each([
      [45, 6],
      [100, 6],
    ])("return six number out of %s", (length, expected) => {
      const result = getSixRandomNumber(length);

      expect(result.length).toBe(expected);
    });

    it.each([[6, [1, 2, 3, 4, 5, 6]]])("return in ascending order", (length, expected) => {
      const result = getSixRandomNumber(length);

      expect(result).toEqual(expected);
    });
  });
});
