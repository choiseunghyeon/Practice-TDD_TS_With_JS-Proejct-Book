function getSixRandomNumber(length) {
  const arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(i);
  }

  const result = [];
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const selectedNumber = arr.splice(randomIndex, 1)[0];
    result.push(selectedNumber);
  }

  result.sort((a, b) => a - b);
  return result;
}

exports.getSixRandomNumber = getSixRandomNumber;
