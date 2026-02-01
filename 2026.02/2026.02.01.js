// 프로그래머스 - n^2 배열 자르기
function solution(n, left, right) {
  const basicArr = Array.from({ length: n }, (_, i) => i + 1); // n의 길이만큼 1~ 배열
  const answerArr = [];

  for (let i = 1; i <= n; i++) {
    const arr = [...Array.from({ length: i }, (_) => i)];
    arr.push(...basicArr.slice(i));

    answerArr.push(...arr);
  }

  return answerArr.slice(left, right + 1);
}

/* 
    테스트는 통과하지만 효율성에서 실패
*/

// 최적화 방식
function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const col = i % n;

    answer.push(Math.max(row + 1, col + 1));
  }

  return answer;
}

// 1 2 3 4
// 2 2 3 4
// 3 3 3 4
// 4 4 4 4
