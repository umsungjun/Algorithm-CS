function solution(k, m, score) {
  // 내림차순 정렬
  score.sort((a, b) => b - a);
  console.log(score);
  let answer = 0;
  for (let i = 0; i <= score.length - m; i += m) {
    const min = score[i + m - 1]; // m개씩 그룹의 최소값은 마지막 값
    answer += min * m; // 최소값 * m을 더함
  }

  return answer;
}
