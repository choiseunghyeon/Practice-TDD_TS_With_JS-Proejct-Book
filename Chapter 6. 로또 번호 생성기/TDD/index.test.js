describe("Random Number Generator", () => {
  describe("get six unique random number", () => {
    let randomNumbers;
    beforeEach(() => {
      randomNumbers = getSixRandomNumber(number);
    });

    it.each([
      [45, 6],
      [100, 6],
    ])("return six number out of %s", (number, expected) => {
      const result = getSixRandomNumber(number);

      expect(result.length).toBe(6);
    });

    it.each([
      [[1, 2, 6, 10], true],
      [[1, 1, 5, 2], false],
    ])("verdict unique random number", (number, expected) => {
      const result = isAllUnique(number);

      expect(result).toBe(expected);
    });

    it.each([])("return in ascending order");
  });
});
