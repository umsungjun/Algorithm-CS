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
