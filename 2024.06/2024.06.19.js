/* 기사단원의 무기 시간 초과 */
function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    // 1부터 number까지 순회
    let minNum = 0; // minNum 0으로 초기화
    for (let j = 1; j <= i; j++) {
      // 1부터 i까지 순회
      if (i % j === 0) {
        // i % j 값이 0이면 실행
        minNum++;
      }
    }
    if (minNum > limit) {
      // minNum이 limit보다 크다면 실행
      answer += power;
    } else {
      // minNum이 limit보다 작거나 같다면 실행
      answer += minNum;
    }
  }

  return answer;
}

/* 모의 고사 */
function solution(answers) {
  const answer = [];
  const answerObj = { 1: 0, 2: 0, 3: 0 };

  const answer1Pattern = [1, 2, 3, 4, 5];
  const answer2Pattern = [2, 1, 2, 3, 2, 4, 2, 5];
  const answer3Pattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((number, index) => {
    if (number === answer1Pattern[index % answer1Pattern.length]) {
      answerObj[1]++;
    }
    if (number === answer2Pattern[index % answer2Pattern.length]) {
      answerObj[2]++;
    }
    if (number === answer3Pattern[index % answer3Pattern.length]) {
      answerObj[3]++;
    }
  });

  let highValue = Math.max(answerObj[1], answerObj[2], answerObj[3]); // 가장 큰 점수

  for (let i = 1; i <= 3; i++) {
    if (answerObj[i] === highValue) {
      // answerObj[i]값이 가장 큰 점수와 같을 때 answer에 push
      answer.push(i);
    }
  }

  return answer;
}

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5
