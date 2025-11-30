// 프로그래머스 - 유한소수 판별하기
function solution(a, b) {
  let gong = 1; // 최대 공약수

  for (let i = 2; i <= a; i++) {
    if (a % i === 0 && b % i === 0) {
      gong = i; // 나눠지는 수 중 가장 큰 수 를 gong으로 초기화
    }
  }
  b /= gong; // 분모를 나눠서 가장 작은수로 만듬

  while (b % 2 === 0) b /= 2;

  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}
