// 프로그래머스 - 귤 고르기
// 귤 크기별 개수를 세고, 내림차순 정렬 후 k개 이상이 될 때까지 더하면서 종류 수를 세서 반환
function solution(k, tangerine) {
  const count = {};

  tangerine.forEach((size) => {
    count[size] = (count[size] || 0) + 1;
  });

  const sortedCount = Object.values(count).sort((a, b) => b - a);

  let answer = 0;
  let hap = 0;

  for (let i = 0; i < sortedCount.length; i++) {
    if (hap >= k) {
      break;
    } else {
      hap += sortedCount[i];
      answer++;
    }
  }

  return answer;
}
