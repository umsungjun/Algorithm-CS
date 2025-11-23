// 프로그래머스 - 3진법 뒤집기
function solution(n) {
  const num3 = n.toString(3).split("").reverse().join(""); // 3진법 수
  return parseInt(num3, 3);
}

// 10진법 숫자를 3진법으로 변환 number.toString(3);
// 3진법 숫자를 10진법으로 변환 parseInt(number, 3);

// 프로그래머스 - 3총사
function solution(number) {
  let answer = 0;

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }

  return answer;
}
