// 프로그래머스 - 최댓값과 최솟값
function solution(s) {
  const numSarr = s.split(" ").map(Number);

  return `${Math.min(...numSarr)} ${Math.max(...numSarr)}`;
}
