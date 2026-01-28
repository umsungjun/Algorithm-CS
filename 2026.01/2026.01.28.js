// 프로그래머스 - 합성수 찾기
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (i >= 4) {
      if (i % 2 === 0) {
        answer++;
      } else {
        let cnt = 0;

        for (let j = 1; j <= i; j++) {
          if (i % j === 0) {
            cnt++;
          }

          if (cnt >= 3) {
            answer++;
            break;
          }
        }
      }
    }
  }

  return answer;
}
