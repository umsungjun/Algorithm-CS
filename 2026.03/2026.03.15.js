// 프로그래머스 - 안전지대
function solution(board) {
  const newBoard = board.map((row) => [...row]);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        for (let a = -1; a <= 1; a++) {
          for (let b = -1; b <= 1; b++) {
            if (
              i + a >= 0 &&
              i + a < board.length &&
              j + b >= 0 &&
              j + b < board[i].length
            ) {
              newBoard[i + a][j + b] = 1;
            }
          }
        }
      } else {
        continue;
      }
    }
  }

  return newBoard.flatMap((row) => [...row]).filter((num) => num === 0).length;
}
