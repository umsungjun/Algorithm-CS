// 프로그래머스 - 명예의 전당 (1)
function solution(k, score) {
  const answer = [];
  const scoreArr = [];

  for (let i = 0; i < score.length; i++) {
    const currScore = score[i];

    if (scoreArr.length === k) {
      if (scoreArr[0] < currScore) {
        scoreArr.shift();
        scoreArr.push(currScore);
      }
    } else {
      scoreArr.push(currScore);
    }
    scoreArr.sort((a, b) => a - b);
    answer.push(Math.min(...scoreArr));
  }

  return answer;
}
