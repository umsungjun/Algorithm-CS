// 프로그래머스 - OX퀴즈
function solution(quiz) {
  const answer = [];

  quiz.forEach((q) => {
    const splitQ = q.split("=");
    if (eval(splitQ[0]) === Number(splitQ[1])) {
      answer.push("O");
    } else {
      answer.push("X");
    }
  });

  return answer;
}

// 실 운영 코드에서는 eval()을 보안 위협때문에 사용하지 않아야 함
// eval()의 계산 값의 type은 number를 반환 하기 때문에 splitQ[1]을 Number로 형변환 함
