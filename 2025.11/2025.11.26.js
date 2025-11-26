// 프로그래머스 - 저주의 숫자 3
function solution(n) {
  const arr = [];
  let num = 1;

  while (arr.length < n) {
    if (num % 3 !== 0 && !String(num).includes("3")) {
      arr.push(num);
    }
    num++;
  }

  return arr[arr.length - 1];
}

// 프로그래머스 - 다음 큰 숫자
const getHas1Cnt = (n2) => n2.split("").filter((num) => num == 1).length;

function solution(n) {
  const n2 = n.toString(2); // 2진수로 변환한 n
  const n2oneCnt = getHas1Cnt(n2);

  for (let i = n + 1; i <= 1_000_000; i++) {
    const i2 = i.toString(2);
    const i2oneCnt = getHas1Cnt(i2);
    if (n2oneCnt === i2oneCnt) {
      return i;
    }
  }
}
