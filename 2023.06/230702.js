// 문제 설명
// 어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
// 문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 100
// 1 ≤ is_prefix의 길이 ≤ 100
// my_string과 is_prefix는 영소문자로만 이루어져 있습니다.
// 입출력 예
// my_string	is_prefix	result
// "banana"	"ban"	1
// "banana"	"nan"	0
// "banana"	"abcd"	0
// "banana"	"bananan"	0

function solution(my_string, is_prefix) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    answer += my_string[i]; // answer변수에 my_string문자를 하나씩 추가로 붙여줌
    if (answer === is_prefix) {
      // 만약 붙어진 문자열 answer과 is_prefix가 같다면
      return 1; // 1을 return
    }
  }
  return 0;
}
