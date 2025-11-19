// 프로그래머스 - 캐릭터의 좌표
function solution(keyinput, board) {
  const maxW = Math.floor((board[0] - 1) / 2);
  const maxH = Math.floor((board[1] - 1) / 2);
  const answer = [0, 0];

  keyinput.forEach((key) => {
    const [x, y] = answer;
    switch (key) {
      case "left":
        if (x - 1 >= -maxW) answer[0] -= 1;
        break;
      case "right":
        if (x + 1 <= maxW) answer[0] += 1;
        break;
      case "up":
        if (y + 1 <= maxH) answer[1] += 1;
        break;
      case "down":
        if (y - 1 >= -maxH) answer[1] -= 1;
        break;
    }
  });

  return answer;
}

// 프로그래머스 - 대공약수와 최소공배수
function solution(n, m) {
  const minValue = Math.min(n, m); // 작은 수
  const maxValue = Math.max(n, m); // 큰 수

  let maxYak = minValue; // 최대 공약수
  let minGong = maxValue; // 최소 공배수

  for (let i = 1; i <= minValue; i++) {
    if (n % i === 0 && m % i === 0) {
      maxYak = i;
    }
  }

  for (let i = maxValue; i <= minValue * maxValue; i++) {
    if (i % n === 0 && i % m === 0) {
      minGong = i;
      break;
    }
  }

  return [maxYak, minGong];
}

// 프로그래머스 - 종이 자르기
function solution(M, N) {
  return M * N - 1;
}
