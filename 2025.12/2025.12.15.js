// 프로그래머스 - 피보나치 수
function solution(n) {
  const pibo = [0, 1];

  for (let i = 2; i <= n; i++) {
    pibo[i] = (pibo[i - 1] + pibo[i - 2]) % 1234567;
  }

  return pibo[n];
}
