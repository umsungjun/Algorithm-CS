// 문자열이 몇 번 등장하는지 세기
// 문제 설명
// 문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ myString ≤ 1000
// 1 ≤ pat ≤ 10
// 입출력 예
// myString	pat	result
// "banana"	"ana"	2
// "aaaa"	"aa"	3

function solution(myString, pat) {
  let answer = 0;

  for (let i = 0; i < myString.length; i++) {
    let str = myString[i];
    for (let j = i; j < i + pat.length - 1; j++) {
      str += myString[j + 1];
    }

    if (str === pat) {
      answer += 1;
    }
  }
  return answer;
}
