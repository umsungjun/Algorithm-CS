// 프로그래머스 - 팩토리얼
function solution(n) {
  let gob = 1;
  let x = 1;

  while (1) {
    if (gob > n) {
      break;
    }
    x++;
    gob *= x;
  }

  return x - 1;
}
