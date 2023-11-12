// 배열 만들기 2
// 문제 설명
// 정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.

// 제한사항
// 1 ≤ l ≤ r ≤ 1,000,000
// 입출력 예
// l	r	result
// 5	555	[5, 50, 55, 500, 505, 550, 555]
// 10	20	[-1]

function solution(l, r) {
  var answer = [];

  for (let i = l; i <= r; i++) {
    let arr = String(i);

    if (![...arr].every((num) => num === "0" || num === "5")) continue;
    answer.push(i);
  }

  return answer.length > 0 ? answer : [-1];
}
