// 프로그래머스 - 폰켓몬
function solution(nums) {
  const noDupNums = new Set(nums); // 중복 제거 nums

  return Math.floor(nums.length / 2) > noDupNums.size
    ? noDupNums.size
    : Math.floor(nums.length / 2);
}
