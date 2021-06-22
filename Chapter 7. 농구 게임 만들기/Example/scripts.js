let comScore = 0;
let userScore = 0;
let isCoumpterTurn = true;
let shotsLeft = 15;

function onComputerShoot() {
  if (!isCoumpterTurn) return;

  const textElem = document.getElementById("text");
  const comScoreElem = document.getElementById("computer-score");
  const shootType = Math.random() < 0.5 ? 2 : 3;

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      // 1/2 확률
      textElem.innerHTML = "컴퓨터가 2점 슛을 성공시켰습니다!";

      comScore += 2;
      comScoreElem.innerHTML = comScore;
    } else {
      //실패
      textElem.innerHTML = "컴퓨터가 2점 슛을 실패했습니다.";
    }
  } else {
    if (Math.random() < 0.33) {
      // 1/3 확률
      comScore += 3;
      comScoreElem.innerHTML = comScore;
      textElem.innerHTML = "컴퓨터가 3점 슛을 성공시켰습니다!";
    } else {
      // 실패
      textElem.innerHTML = "컴퓨터가 3점 슛을 실패했습니다.";
    }
  }

  disabledComputerButtons(true);
  disabledUserButtons(false);

  isCoumpterTurn = false;
}

function disabledComputerButtons(flag) {
  const computerButtons = document.getElementsByClassName("btn-computer");
  Array.from(computerButtons).forEach(btn => (btn.disabled = flag));
}
function disabledUserButtons(flag) {
  const userButtons = document.getElementsByClassName("btn-user");
  Array.from(userButtons).forEach(btn => (btn.disabled = flag));
}

function onUserShoot(shootType) {
  if (isCoumpterTurn) return;

  const textElem = document.getElementById("text");
  const userScoreElem = document.getElementById("user-score");

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      // 1/2 확률
      textElem.innerHTML = "2점 슛이 성공했습니다!";

      userScore += 2;
      userScoreElem.innerHTML = userScore;
    } else {
      //실패
      textElem.innerHTML = "2점 슛이 실패했습니다.";
    }
  } else {
    if (Math.random() < 0.33) {
      // 1/3 확률
      userScore += 3;
      userScoreElem.innerHTML = userScore;
      textElem.innerHTML = "3점 슛이 성공했습니다!";
    } else {
      // 실패
      textElem.innerHTML = "3점 슛이 실패했습니다.";
    }
  }

  disabledComputerButtons(false);
  disabledUserButtons(true);
  isCoumpterTurn = true;

  shotsLeft--;
  const shotsLeftElem = document.getElementById("shots-left");
  shotsLeftElem.innerHTML = shotsLeft;

  if (shotsLeft === 0) {
    if (userScore > comScore) {
      textElem.innerHTML = "승리했습니다!";
    } else if (userScore < comScore) {
      textElem.innerHTML = "아쉽게도 졌습니다....";
    } else {
      textElem.innerHTML = "비겼습니다.";
    }

    disabledComputerButtons(true);
    disabledUserButtons(true);
  }
}
