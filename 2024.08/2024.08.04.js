function combinations(arr, num) {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinationArr = combinations(rest, num - 1);
    const attached = combinationArr.map((v) => [fixed, ...v]);

    result.push(...attached);
  });
  return result;
}

function solution(data) {
  if (data[0].reduce((a, c) => a + c, 0) < data[1]) {
    return -1;
  }

  let count = 0;
  let copyData = data[0].slice();

  for (let i of copyData) {
    if (i >= data[1]) {
      count += 1;
      data[0].splice(data[0].indexOf(i), 1);
    }
  }

  while (data[0].length !== 0) {
    if (data[0].length === 0) {
      return count;
    }

    let 조합 = [];
    for (let i = 2; data[0].length + 1; i++) {
      for (let comb of combinations(data[0], i)) {
        console.log(comb);
        let sum = comb.reduce((a, c) => a + c, 0);
        if (sum >= data[1]) {
          조합.push([sum, comb]);
        }
      }
    }
    let 정렬값 = 조합.sort((a, b) => a[0] - b[0]);
    console.log(정렬값);
    if (정렬값[0][0] >= data[1]) {
      count += 1;
      for (let i of 정렬값[0][1]) {
        data[0].splice(data[0].indexOf(i), 1);
      }
    }
  }
}

solution([[46, 26, 37, 32, 10], 30]);
