// 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
// 문제 설명
// 문자열 myString과 pat가 주어집니다. myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 5 ≤ myString ≤ 20
// 1 ≤ pat ≤ 5
// pat은 반드시 myString의 부분 문자열로 주어집니다.
// myString과 pat에 등장하는 알파벳은 대문자와 소문자를 구분합니다.
// 입출력 예
// myString	pat	result
// "AbCdEFG"	"dE"	"AbCdE"
// "AAAAaaaa"	"a"	"AAAAaaaa"

function solution(myString, pat) {
  const myArr = myString.split("");

  for (let i = myString.length - 1; i >= 0; i--) {
    if (myArr[myArr.length - 1] !== pat[pat.length - 1]) {
      myArr.pop();
    }
  }

  return myArr.join("");
}
