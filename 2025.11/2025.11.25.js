// 프로그래머스 - 숫자의 표현
// 해당 방법은 효율성 테스트를 통과하지 못함
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    // 1~15까지 순회
    let hap = 0;
    for (let j = i; i <= n; j++) {
      if (hap > n) {
        break;
      } else {
        hap += j;
      }
      if (hap === n) {
        answer++;
      }
    }
  }

  return answer;
}

// 연속된 수의 합이 n과 같은 경우를 구하려면
// n의 약수 중 홀수의 개수를 구하면 됨
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 !== 0) {
      answer++;
    }
  }
  return answer;
}
