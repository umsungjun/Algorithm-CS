// 프로그래머스 - 기능개발
function solution(progresses, speeds) {
  let popCnt = 0;
  const answer = [];

  while (progresses.length > 0) {
    if (progresses[0] >= 100) {
      // 100 240, 90
      popCnt++;
      progresses.shift();
      speeds.shift();
    } else {
      progresses = progresses.map((item, i) => (item += speeds[i]));

      if (popCnt > 0) {
        answer.push(popCnt);
        popCnt = 0;
      }
    }
  }

  answer.push(popCnt);
  return answer;
}
