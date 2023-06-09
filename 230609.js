// 문제 설명
// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 문자열 s의 길이 : 100,000 이하의 자연수
// 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

// 입출력 예
// s	answer
// "()()"	true
// "(())()"	true
// ")()("	false
// "(()("	false

function solution(s) {
  const arr = []; // 저장소를 만듬

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      if (arr.length === 0) {
        return false;
      }
      if (arr[arr.length - 1] === "(") {
        arr.pop();
      } else {
        return false;
      }
    } else {
      arr.push(s[i]);
    }
  }

  return arr.length === 0;
}

function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    answer += s[i] === "(" ? 1 : -1;
    if (answer < 0) return false;
  }

  return answer === 0 ? true : false; // 예외처리를 해주지 않으면 테스트 케이스 4번에서 출력 2가 되서 오류가남
}
