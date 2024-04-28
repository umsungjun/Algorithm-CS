/* 나의 풀이 */

function solution(data) {
  let count = 0;
  const patternArr = ["r", "e", "v"];
  data.split("").forEach((str, index) => {
    const nextNum = +data[index + 1];
    if (patternArr.includes(str) && !isNaN(nextNum)) {
      if (nextNum === 1 && data[index + 2] == 0) {
        count += 10;
      } else {
        count += nextNum;
      }
    }
  });
  const strCount = count + "";
  return `${strCount[0]}월 ${strCount[1]}일`;
}
