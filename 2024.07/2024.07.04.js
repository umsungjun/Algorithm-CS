const data = [[4, 9, 11, 2], 6];

function solution() {
  const result = [];
  data[0].forEach((v, i) => {
    // v = 4, 9, 11, 2
    for (let j = i + 1; j < data[0].length; j++) {
      if (v + data[0][j] === data[1]) {
        result.push(i, j);
      }
    }
  });
  return result;
}
