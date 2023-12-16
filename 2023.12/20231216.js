function solution(a, b, n) {
  let answer = 0;
  let remain = 0;

  while (n / a >= 1) {
    answer += Math.floor(n / a);
    n = Math.floor(n / a);
    if (n >= a) {
      remain += Math.floor(n % a);
    }
  }
  // console.log(remain)
  return answer + remain;
}
// 20 / 10 / 5 / 2 1 + 1
