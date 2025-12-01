// 프로그래머스 - 짝지어 제거하기
// 효율성 테스트를 통과 못함
// 이유: 문자열의 길이가 1,000,000이 될 수 있기 때문에 모든 경우를 다 검사하면 시간 초과가 발생하는 것 같음
function solution(s) {
  if (s.length % 2 !== 0) return 0; // 짝수가 아니라면 0 return;

  let splitS = s.split("");

  for (let i = 0; i < splitS.length - 1; ) {
    if (splitS[i] === splitS[i + 1]) {
      splitS.splice(i, 2);
      i = 0;
    } else {
      i++;
    }
  }

  return splitS.length === 0 ? 1 : 0;
}

// stack 자료구조를 활용해서 효율성 테스트 통과
function solution(s) {
  const answer = [];

  for (let i of s) {
    if (answer.length < 1) {
      answer.push(i);
    } else {
      if (answer[answer.length - 1] === i) {
        answer.pop();
      } else {
        answer.push(i);
      }
    }
  }

  return answer.length === 0 ? 1 : 0;
}
