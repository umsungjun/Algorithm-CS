/* 그리디 알고리즘 */

function solution(data) {
  if (data[0].reduce((a, c) => a + c, 0) < data[1]) {
    return -1;
  }
  let count = 0;
  let temp = 0;

  data[0].sort((a, b) => b - a); // 내림차순 정렬

  for (let i of data[0]) {
    if (i > data[1]) {
      count += 1;
    } else if (i < data[1]) {
      temp += i;
    }

    if (temp >= data[1]) {
      count += 1;
      temp = 0;
    }
  }
  return count;
}

solution([[46, 26, 37, 32, 10], 30]);
