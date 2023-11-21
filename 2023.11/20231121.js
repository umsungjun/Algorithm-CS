/* 코드 처리하기
문제 설명
문자열 code가 주어집니다.
code를 앞에서부터 읽으면서 만약 문자가 "1"이면 mode를 바꿉니다. mode에 따라 code를 읽어가면서 문자열 ret을 만들어냅니다.

mode는 0과 1이 있으며, idx를 0 부터 code의 길이 - 1 까지 1씩 키워나가면서 code[idx]의 값에 따라 다음과 같이 행동합니다.

mode가 0일 때
code[idx]가 "1"이 아니면 idx가 짝수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
code[idx]가 "1"이면 mode를 0에서 1로 바꿉니다.
mode가 1일 때
code[idx]가 "1"이 아니면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
code[idx]가 "1"이면 mode를 1에서 0으로 바꿉니다.
문자열 code를 통해 만들어진 문자열 ret를 return 하는 solution 함수를 완성해 주세요.

단, 시작할 때 mode는 0이며, return 하려는 ret가 만약 빈 문자열이라면 대신 "EMPTY"를 return 합니다.

제한사항
1 ≤ code의 길이 ≤ 100,000
code는 알파벳 소문자 또는 "1"로 이루어진 문자열입니다.
입출력 예
code	result
"abc1abc1abc"	"acbac" */

function solution(code) {
  var answer = "";
  let mode = 0;
  for (let i = 0; i < code.length; i++) {
    if (mode === 0) {
      if (code[i] == "1") {
        mode = 1;
      } else {
        if (i % 2 === 0) {
          answer += code[i];
        }
      }
    } else {
      if (code[i] == "1") {
        mode = 0;
      } else {
        if (i % 2 !== 0) {
          answer += code[i];
        }
      }
    }
  }

  return answer.length === 0 ? "EMPTY" : answer;
}
