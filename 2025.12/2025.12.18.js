// 프로그래머스 - 배열 조각하기
function solution(arr, query) {
  let answer = arr;

  query.forEach((q, i) => {
    if (i % 2 === 0) {
      // 짝수 index
      answer.splice(q + 1, answer.length); // i부터 배열 끝까지 제거
    } else {
      answer.splice(0, q);
    }
  });

  return answer;
}
