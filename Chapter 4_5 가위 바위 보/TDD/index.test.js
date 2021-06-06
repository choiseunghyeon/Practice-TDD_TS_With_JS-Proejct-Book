const { getOneOfRockScissorPaper, verdictRockScissorPaper, rock, scissor, paper } = require("./index");

describe("Rock Scissor Paper", () => {
  describe("Computer should return Rock Scissor Paper randomly", () => {
    it("return Rock, Scissor or Paper string value with a one-third chance", () => {
      const result = getOneOfRockScissorPaper();
      expect(result).toMatch(/(바위|가위|보)/);
    });
  });

  describe("Verdict Rock Scissor Paper Game", () => {
    it.each([
      [rock, scissor],
      [scissor, paper],
      [paper, rock],
    ])("computer's %s should win user's %s", (computerInput, userInput) => {
      const result = verdictRockScissorPaper(computerInput, userInput);
      expect(result).toBe("Computer Win!");
    });

    it.each([
      [scissor, rock],
      [paper, scissor],
      [rock, paper],
    ])("%s should loose %s", (computerInput, userInput) => {
      const result = verdictRockScissorPaper(computerInput, userInput);
      expect(result).toBe("User Win!");
    });

    it.each([
      [rock, rock],
      [scissor, scissor],
      [paper, paper],
    ])("%s should draw %s", (computerInput, userInput) => {
      const result = verdictRockScissorPaper(computerInput, userInput);
      expect(result).toBe("Draw!");
    });
  });
});
