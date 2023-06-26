// 문제 설명
// 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 양의 정수 배열 arr가 매개변수로 주어질 때, arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 X의 맨 뒤에 a를 a번 추가하는 일을 반복한 뒤의 배열 X를 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ arr의 길이 ≤ 100
// 1 ≤ arr의 원소 ≤ 100
// 입출력 예
// arr	result
// [5, 1, 4]	[5, 5, 5, 5, 5, 1, 4, 4, 4, 4]
// [6, 6]	[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
// [1]	[1]

function solution(arr) {
  const answer = [];
  arr.forEach((num) => {
    for (let i = 0; i < num; i++) {
      answer.push(num);
    }
  });
  return answer;
}

// 홀짝 구분하기
// 문제 설명
// 자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.

// 제한사항
// 1 ≤ n ≤ 1,000

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  n = Number(input[0]);
  // console.log(Number(input[0]))
  if (Number(input[0]) % 2 === 0) {
    console.log(`${Number(input[0])} is even`);
  } else {
    console.log(`${Number(input[0])} is odd`);
  }
});
