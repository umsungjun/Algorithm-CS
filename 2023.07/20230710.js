// 문제 설명
// 문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.

// 제한사항
// 1 ≤ myString의 길이 ≤ 20
// myString은 알파벳으로 이루어진 문자열입니다.
// 입출력 예
// myString	result
// "abstract algebra"	"AbstrAct AlgebrA"
// "PrOgRaMmErS"	"progrAmmers"

function solution(myString) {
  let answer = "";
  const replaceStr = myString.replaceAll("a", "A"); // replaceAll()을 통해서 문자열 중 소문자 'a'를 대문자 'A'로 치환
  for (let i = 0; i < replaceStr.length; i++) {
    if (replaceStr[i] !== "A") {
      // 반복문을 통해서 문자가 'A'와 같지 않다면
      answer += replaceStr[i].toLowerCase(); // 소문자로 변환해서 answer 변수에 붙여줌
    } else {
      answer += replaceStr[i];
    }
  }
  return answer;
}
