/* 기사단원의 무기 시간 초과 */
function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    // 1부터 number까지 순회
    let minNum = 0; // minNum 0으로 초기화
    for (let j = 1; j <= i; j++) {
      // 1부터 i까지 순회
      if (i % j === 0) {
        // i % j 값이 0이면 실행
        minNum++;
      }
    }
    if (minNum > limit) {
      // minNum이 limit보다 크다면 실행
      answer += power;
    } else {
      // minNum이 limit보다 작거나 같다면 실행
      answer += minNum;
    }
  }

  return answer;
}
