// 프로그래머스 - 숫자 문자열과 영단어
function solution(s) {
  const obj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  let answer = s;

  Object.entries(obj).forEach(([key, value]) => {
    answer = answer.replaceAll(value, key);
  });

  return Number(answer);
}
