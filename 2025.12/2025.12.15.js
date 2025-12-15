// 프로그래머스 - 피보나치 수
function solution(n) {
  const pibo = [0, 1];

  for (let i = 2; i <= n; i++) {
    pibo[i] = (pibo[i - 1] + pibo[i - 2]) % 1234567;
  }

  return pibo[n];
}

// 배열 필요없이 더 최적화 할 수 있는 방법
function solution(n) {
  const a = 0;
  const b = 1;

  for (let i = 2; i <= n; i++) {
    const next = (a + b) % 1234567;
    a = b;
    b = next;
  }

  return n === 0 ? 0 : b;
}
