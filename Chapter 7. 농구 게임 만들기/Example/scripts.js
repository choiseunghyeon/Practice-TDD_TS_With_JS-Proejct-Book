let comScore = 0;
let userScore = 0;
let isCoumpterTurn = true;
let shotsLeft = 15;

function onComputerShoot() {
  if (!isCoumpterTurn) return;
  const shootType = Math.random() < 0.5 ? 2 : 3;

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      // 1/2 확률
      showText("컴퓨터가 2점 슛을 성공시켰습니다!");

      updateComputerScore(2);
    } else {
      //실패
      showText("컴퓨터가 2점 슛을 실패했습니다.");
    }
  } else {
    if (Math.random() < 0.33) {
      // 1/3 확률
      updateComputerScore(3);
      showText("컴퓨터가 3점 슛을 성공시켰습니다!");
    } else {
      // 실패
      showText("컴퓨터가 3점 슛을 실패했습니다.");
    }
  }

  disableComputerButtons(true);
  disableUserButtons(false);

  isCoumpterTurn = false;
}

function disableComputerButtons(flag) {
  const computerButtons = document.getElementsByClassName("btn-computer");
  Array.from(computerButtons).forEach(btn => (btn.disabled = flag));
}
function disableUserButtons(flag) {
  const userButtons = document.getElementsByClassName("btn-user");
  Array.from(userButtons).forEach(btn => (btn.disabled = flag));
}

function onUserShoot(shootType) {
  if (isCoumpterTurn) return;

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      // 1/2 확률
      showText("2점 슛이 성공했습니다!");

      updateUserScore(2);
    } else {
      //실패
      showText("2점 슛이 실패했습니다.");
    }
  } else {
    if (Math.random() < 0.33) {
      // 1/3 확률
      updateUserScore(3);
      showText("3점 슛이 성공했습니다!");
    } else {
      // 실패
      showText("3점 슛이 실패했습니다.");
    }
  }

  disableComputerButtons(false);
  disableUserButtons(true);
  isCoumpterTurn = true;

  shotsLeft--;
  const shotsLeftElem = document.getElementById("shots-left");
  shotsLeftElem.innerHTML = shotsLeft;

  if (shotsLeft === 0) {
    if (userScore > comScore) {
      showText("승리했습니다!");
    } else if (userScore < comScore) {
      showText("아쉽게도 졌습니다....");
    } else {
      showText("비겼습니다.");
    }

    disableComputerButtons(true);
    disableUserButtons(true);
  }
}

function showText(message) {
  const textElem = document.getElementById("text");
  textElem.innerHTML = message;
}

function updateComputerScore(score) {
  const comScoreElem = document.getElementById("computer-score");
  comScore += score;
  comScoreElem.innerHTML = comScore;
}

function updateUserScore(score) {
  const userScoreElem = document.getElementById("user-score");
  userScore += score;
  userScoreElem.innerHTML = userScore;
}
