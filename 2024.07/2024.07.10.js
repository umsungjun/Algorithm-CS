const data = [2, 4, 1, 3, 5, 8, 8, 6];

function solution() {
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

  function 인접한값삭제(arr, n) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (arr[i][j] + 1 == arr[i][j + 1]) {
          arr[i] = [];
          break;
        }
      }
    }
  }

  const 인덱스 = [0, 1, 2, 3, 4, 5, 6, 7];
  let 조합4 = combinations(인덱스, 4);
  let 조합3 = combinations(인덱스, 3);

  인접한값삭제(조합4, 4);
  인접한값삭제(조합3, 3);

  조합4 = 조합4.filter((v) => v.toString() !== "");
  조합3 = 조합3.filter((v) => v.toString() !== "");

  let 총조합 = 조합3.concat(조합4);
  총조합 = 총조합.map((v) => v.reduce((a, c) => a + data[c], 0));

  return Math.max(...총조합);
}

solution();
