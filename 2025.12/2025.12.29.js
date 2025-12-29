// 프로그래머스 - 두 개 뽑아서 더하기
function solution(numbers) {
  const nums = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) {
        continue;
      } else {
        nums.add(numbers[i] + numbers[j]);
      }
    }
  }

  return [...nums].sort((a, b) => a - b);
}
