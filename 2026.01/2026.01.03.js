// 프로그래머스 - 콜라문제
function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    let returnN = parseInt(n / a) * b;
    let remainN = n % a;
    answer += returnN;
    n %= a;
    n += returnN;
  }

  return answer;
}
