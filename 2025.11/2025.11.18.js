// 프로그래머스 - 최솟값 만들기
function solution(A, B) {
  let answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}

// 프로그래머스 - JadenCase 문자열 만들기
function solution(s) {
  const splitS = s.split(" ");

  return splitS
    .map((str) => {
      let newStr = "";
      const firstChar = str.charAt(0); // 첫 글자
      const lestChar = str.slice(1); // 남은 글자

      if (isNaN(firstChar)) {
        // 첫 글자가 문자인 경우
        newStr += firstChar.toUpperCase();
      } else {
        newStr += firstChar;
      }
      newStr += lestChar.toLowerCase();

      return newStr;
    })
    .join(" ");
}

// 프로그래머스 - 같은 숫자는 싫어
function solution(arr) {
  const answer = [];

  for (let i of arr) {
    if (answer[answer.length - 1] !== i) {
      answer.push(i);
    }
  }

  return answer;
}
