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

// console.log(combinations([1, 2, 3, 4, 5], 1)); // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]

console.log(combinations([1, 2, 3, 4, 5], 2));
