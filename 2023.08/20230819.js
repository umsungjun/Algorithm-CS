// 이차원 배열 대각선 순회하기
// 문제 설명
// 2차원 정수 배열 board와 정수 k가 주어집니다.

// i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ board의 길이 ≤ 100
// 1 ≤ board[i]의 길이 ≤ 100
// 1 ≤ board[i][j] ≤ 10,000
// 모든 board[i]의 길이는 같습니다.
// 0 ≤ k < board의 길이 + board[i]의 길이
// 입출력 예
// board	k	result
// [[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]]	2	8

function solution(board, k) {
  let answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) {
        answer += board[i][j];
      }
    }
  }
  return answer;
}

// 글자 지우기
// 문제 설명
// 문자열 my_string과 정수 배열 indices가 주어질 때, my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ indices의 길이 < my_string의 길이 ≤ 100
// my_string은 영소문자로만 이루어져 있습니다
// 0 ≤ indices의 원소 < my_string의 길이
// indices의 원소는 모두 서로 다릅니다.
// 입출력 예
// my_string	indices	result
// "apporoograpemmemprs"	[1, 16, 6, 15, 0, 10, 11, 3]	"programmers

function solution(my_string, indices) {
  let answer = "";

  my_string.split("").forEach((str, i) => {
    if (!indices.includes(i)) {
      answer += str;
    }
  });
  return answer;
}
