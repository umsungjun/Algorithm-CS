// 프로그래머스 - 직사각형 넓이 구하기
function solution(dots) {
  let highX = -256;
  let rowX = 256;
  let highY = -256;
  let rowY = 256;

  dots.forEach(([x, y]) => {
    if (x > highX) {
      highX = x;
    } else if (x < rowX) {
      rowX = x;
    }

    if (y > highY) {
      highY = y;
    } else if (y < rowY) {
      rowY = y;
    }
  });

  const x = Math.abs(rowX - highX);
  const y = Math.abs(rowY - highY);

  return x * y;
}

// 직사각형의 너비 구하기
// 가로 * 세로

// 프로그래머스 - 예산
function solution(d, budget) {
  d.sort((a, b) => a - b);
  let answer = 0;

  for (let n of d) {
    if (budget - n < 0) {
      break;
    }
    answer++;
    budget -= n;
  }

  return answer;
}
