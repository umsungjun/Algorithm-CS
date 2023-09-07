// 문자열 묶기
// 문제 설명
// 문자열 배열 strArr이 주어집니다. strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ strArr의 길이 ≤ 100,000
// 1 ≤ strArr의 원소의 길이 ≤ 30
// strArr의 원소들은 알파벳 소문자로 이루어진 문자열입니다.
// 입출력 예
// strArr	result
// ["a","bc","d","efg","hi"]	2

function solution(strArr) {
  const answer = {};

  strArr.forEach((str) => {
    if (!answer[str.length]) {
      answer[str.length] = 0;
    }
    answer[str.length]++;
  });

  return Math.max(...Object.values(answer));
}
