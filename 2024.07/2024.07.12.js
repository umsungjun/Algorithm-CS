function solution(nums) {
  function combinations(arr, num) {
    const result = [];

    if (num === 1) {
      return arr.map((v) => [v]);
    }

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinationsArr = combinations(rest, num - 1);
      const attached = combinationsArr.map((v) => [fixed, ...v]);
      result.push(...attached);
    });

    return result;
  }

  let answer = 0;
  const allCombinationArr = combinations(nums, 3).map((nums) =>
    nums.reduce((a, c) => a + c, 0)
  );

  allCombinationArr.forEach((num) => {
    let isPrime = true;
    if (num < 2) {
      isPrime = false;
    } else {
      for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
    }

    if (isPrime) {
      answer++;
    }
  });

  return answer;
}
