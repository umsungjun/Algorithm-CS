// 프로그래머스 - 카펫
// 테스트 케이스 전체 통과 못함
function solution(brown, yellow) {
  const hap = brown + yellow;
  const yaksu = [];

  for (let i = 1; i <= hap; i++) {
    if (hap % i === 0) {
      yaksu.push(i);
    }
  }

  const yLenth = yaksu.length;
  const middleI = parseInt(yLenth / 2);

  return yLenth % 2 === 0
    ? [yaksu[middleI], yaksu[middleI - 1]]
    : [yaksu[middleI], yaksu[middleI]];
}
