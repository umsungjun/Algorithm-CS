// 프로그래머스 - 팩토리얼
function solution(n) {
  let gob = 1;
  let x = 1;

  while (1) {
    if (gob > n) {
      break;
    }
    x++;
    gob *= x;
  }

  return x - 1;
}

// 프로그래머스 - 수박수박수박수박수박수?
function solution(n) {
  let answer = "";

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      answer += "박";
    } else {
      answer += "수";
    }
  }

  return answer;
}

// 프로그래머스 - 수열과 구간 쿼리 4
function solution(arr, queries) {
  queries.forEach((q) => {
    const [s, e, k] = q;

    for (let i = s; i <= e; i++) {
      if (i % k === 0) {
        arr[i] += 1;
      }
    }
  });

  return arr;
}
