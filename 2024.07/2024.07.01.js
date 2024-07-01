const data = [
  [0, 0, "#", "#"],
  ["#", "#", 0, "#"],
  [0, "#", "#", 0],
];

function solution() {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] === "#") {
        // 상
        if (i !== 0) {
          // 상일 때 i가 0이면 위에 행이 없기 떄문에 0과 같지 않을때만 실행
          if (data[i - 1][j] !== "#") {
            // 상 위치에 있는 값이 #이 아닐때만 실행
            data[i - 1][j] += 1;
          }
        }
        // 하
        if (i !== data.length - 1) {
          if (data[i + 1][j] !== "#") {
            data[i + 1][j] += 1;
          }
        }
        // 좌
        if (j !== 0) {
          if (data[i][j - 1] !== "#") {
            data[i][j - 1] += 1;
          }
        }
        // 우
        if (j !== data[0].length - 1) {
          if (data[i][j + 1] !== "#") {
            data[i][j + 1] += 1;
          }
        }
        // (왼쪽 대각선) 좌 대각선 상
        if (i !== 0 && j !== 0) {
          if (data[i - 1][j - 1] !== "#") {
            data[i - 1][j - 1] += 1;
          }
        }
        // (왼쪽 대각선) 우 대각선 하
        if (i !== data.length - 1 && j !== data[0].length - 1) {
          if (data[i + 1][j + 1] !== "#") {
            data[i + 1][j + 1] += 1;
          }
        }
        // (오른쪽 대각선) 우 대각선 상
        if (i !== 0 && j !== data[0].length - 1) {
          if (data[i - 1][j + 1] !== "#") {
            data[i - 1][j + 1] += 1;
          }
        }
        // (오른쪽 대각선) 좌 대각선 하
        if (i !== data.length - 1 && j !== 0) {
          if (data[i + 1][j - 1] !== "#") {
            data[i + 1][j - 1] += 1;
          }
        }
      }
    }
  }
  let 상한당근 = 0;
  let 상한당근둘레 = 0;
  data.flat().forEach((value) => {
    if (isNaN(value)) {
      // # 이라면
      상한당근 += 1;
    } else {
      상한당근둘레 += value;
    }
  });

  return [상한당근, 상한당근둘레];
}

solution();
