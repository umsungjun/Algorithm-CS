const data = [
  ["A", 25, 25, 25, 25] /* 100 */,
  ["B", 10, 12, 13, 11] /* 46 */,
  ["C", 24, 22, 23, 21] /* 90 */,
  ["D", 13, 22, 16, 14] /* 65 */,
];

function solution() {
  /* sort a - b => 오름차순, b - a 내림차순 */

  /* 상위 30% */
  const top30 = parseInt(data.length * 0.3);

  /* 문자열을 제외한 배열들의 합 기준으로 내림차순 정렬 */
  data.sort((a, b) => {
    return (
      b.slice(1).reduce((acc, cur) => (acc += cur), 0) -
      a.slice(1).reduce((acc, cur) => (acc += cur), 0)
    );
  });

  /* 상위 값들의 배열 */
  const topArr = [];
  /* 배열을 돌면서 비교할 최고 점수 */
  let topTotal = 0;

  data.forEach((arr) => {
    const total = arr.slice(1).reduce((acc, cur) => (acc += cur), 0);
    if (topTotal <= total) {
      topTotal = total;
      topArr.push(arr[0]);
    }
  });

  if (topArr.length > top30) return [];

  return topArr.sort((a, b) => (a > b ? -1 : 1));
}

solution();
