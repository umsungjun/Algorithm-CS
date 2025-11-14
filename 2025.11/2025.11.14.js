// 프로그래머스 - 영어가 싫어요
function solution(numbers) {
  const numStr = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  Object.keys(numStr).forEach((key) => {
    numbers = numbers.replaceAll(key, numStr[key] + "");
  });

  return Number(numbers);
}
