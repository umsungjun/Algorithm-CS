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
