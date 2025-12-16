// 프로그래머스 - 특이한 정렬
function solution(numlist, n) {
  numlist.sort((a, b) => {
    const diff1 = Math.abs(n - a);
    const diff2 = Math.abs(n - b);

    if (diff1 === diff2) {
      return b - a; // 동일한 차이 값이라면 큰 수가 먼저(내림차순)
    }

    return diff1 - diff2; // 거리 작은 순
  });

  return numlist;
}
