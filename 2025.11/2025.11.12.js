// 프로그래머스 - 부족한 금액 계산하기
function solution(price, money, count) {
  let answer = money;

  for (let i = 1; i <= count; i++) {
    answer -= price * i;
  }

  return answer < 0 ? Math.abs(answer) : 0;
}

// 프로그래머스 - 조건 문자열
function solution(ineq, eq, n, m) {
  let answer;

  if (ineq === ">" && eq === "=") {
    answer = n >= m;
  } else if (ineq === "<" && eq === "=") {
    answer = n <= m;
  } else if (ineq === ">" && eq === "!") {
    answer = n > m;
  } else if (ineq === "<" && eq === "!") {
    answer = n < m;
  }

  return answer ? 1 : 0;
}

// 프로그래머스 - 배열 만들기4
function solution(arr) {
  const stk = [];
  let i = 0;

  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else {
      const lastOne = stk[stk.length - 1];

      if (lastOne < arr[i]) {
        stk.push(arr[i]);
        i++;
      } else {
        stk.pop();
      }
    }
  }

  return stk;
}
