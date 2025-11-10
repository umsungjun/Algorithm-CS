// 프로그래머스 qr code
function solution(q, r, code) {
  let answer = "";

  code.split("").forEach((str, i) => {
    if (parseInt(i % q) === r) {
      answer += str;
    }
  });

  return answer;
}

// 프로그래머스 - 조건에 맞게 수열 변환하기 2
function solution(arr) {
  let answer = 0;
  let prevArr = JSON.stringify(arr);

  while (1) {
    const curArr = JSON.stringify(
      JSON.parse(prevArr).map((num) => {
        if (num >= 50 && num % 2 === 0) {
          return num / 2;
        } else if (num < 50 && num % 2 === 1) {
          return num * 2 + 1;
        }
        return num;
      })
    );

    if (prevArr === curArr) {
      break;
    }

    answer++;
    prevArr = curArr;
  }

  return answer;
}

// 프로그래머스 - 약수의 개수와 덧셈
function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    const arr = [];

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        arr.push(j);
      }
    }

    if (arr.length % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}
