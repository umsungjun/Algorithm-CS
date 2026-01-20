// 프로그래머스 - 최빈값 구하기
function solution(array) {
  const obj = {};

  array.forEach((num) => {
    obj[num] = (obj[num] || 0) + 1;
  });

  const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  if (sorted.length > 1 && sorted[0][1] === sorted[1][1]) {
    return -1;
  }

  return Number(sorted[0][0]);
}
