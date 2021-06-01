function getAverage(list) {
  const sum = list.reduce((total, element) => total + element, 0);
  return sum / list.length;
}

console.log(getAverage([1, 2, 3, 4, 5]));
