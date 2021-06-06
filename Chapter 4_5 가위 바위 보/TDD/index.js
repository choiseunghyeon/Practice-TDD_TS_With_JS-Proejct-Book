const [rock, scissor, paper] = ["바위", "가위", "보"];

function getRandomValueWithin(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getOneOfRockScissorPaper() {
  const value = getRandomValueWithin(3, 1);
  switch (value) {
    case 1:
      return rock;
    case 2:
      return scissor;
    case 3:
      return paper;
    default:
      throw new Error("잘못된 값입니다.");
  }
}

function verdictRockScissorPaper(computerInput, userInput) {
  if (computerInput === userInput) return "Draw!";

  if (computerInput === rock && userInput === scissor) return "Computer Win!";
  if (computerInput === scissor && userInput === paper) return "Computer Win!";
  if (computerInput === paper && userInput === rock) return "Computer Win!";

  return "User Win!";
}

exports.getOneOfRockScissorPaper = getOneOfRockScissorPaper;
exports.verdictRockScissorPaper = verdictRockScissorPaper;
exports.rock = rock;
exports.scissor = scissor;
exports.paper = paper;
