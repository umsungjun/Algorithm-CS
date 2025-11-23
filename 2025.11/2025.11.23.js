// 프로그래머스 - 3진법 뒤집기
function solution(n) {
  const num3 = n.toString(3).split("").reverse().join(""); // 3진법 수
  return parseInt(num3, 3);
}

// 10진법 숫자를 3진법으로 변환 number.toString(3);
// 3진법 숫자를 10진법으로 변환 parseInt(number, 3);
