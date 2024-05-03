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

/* 문자열에서 rev뒤에 나오는 숫자 출력 정규식*/
"a10b9r1ce33uab8wc918v2cv11v9".match(/([rev])(10|[0-9])/g);
