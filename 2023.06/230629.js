// 문제 설명
// 문자열 str과 정수 n이 주어집니다.
// str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.

// 제한사항
// 1 ≤ str의 길이 ≤ 10
// 1 ≤ n ≤ 5

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let answer = "";
rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  str = input[0];
  n = Number(input[1]);

  for (let i = 0; i < n; i++) {
    answer += str;
  }
  console.log(answer);
});

// 문제 설명
// 영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

// 제한사항
// 1 ≤ str의 길이 ≤ 20
// str은 알파벳으로 이루어진 문자열입니다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];

  const newStr = str.split("").map((string) => {
    if (string === string.toUpperCase()) {
      return string.toLowerCase();
    } else {
      return string.toUpperCase();
    }
  });
  // console.log(str)
  console.log(newStr.join(""));
});
