module.exports = function getAverage(numbers) {
  const sum = numbers.reduce((total, number) => total + number, 0);
  return sum / numbers.length;
};
