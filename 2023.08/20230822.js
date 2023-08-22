// 수열과 구간 쿼리 3
// 문제 설명
// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [i, j] 꼴입니다.

// 각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.

// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ arr의 길이 ≤ 1,000
// 0 ≤ arr의 원소 ≤ 1,000,000
// 1 ≤ queries의 길이 ≤ 1,000
// 0 ≤ i < j < arr의 길이
// 입출력 예
// arr	queries	result
// [0, 1, 2, 3, 4]	[[0, 3],[1, 2],[1, 4]]	[3, 4, 1, 0, 2]

function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    let num1 = arr.find((num, index) => index === queries[i][0]);
    let num2 = arr.find((num, index) => index === queries[i][1]);

    arr.splice(queries[i][0], 1, num2); // 요소를 제거함과 동시에 채워주니까 다음 요소에 지장이 안감
    arr.splice(queries[i][1], 1, num1);
  }

  return arr;
}

// 문자열 뒤집기
// 문제 설명
// 문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// my_string은 숫자와 알파벳으로만 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 1,000
// 0 ≤ s ≤ e < my_string의 길이
// 입출력 예
// my_string	s	e	result
// "Progra21Sremm3"	6	12	"ProgrammerS123"
// "Stanley1yelnatS"	4	10	"Stanley1yelnatS"

function solution(my_string, s, e) {
  let str = ""; // 거꾸로 바꿀 문자열을 담을 변수
  for (let i = 0; i < my_string.length; i++) {
    if (s <= i && i <= e) {
      // my_string s와 e사이의 문자열을 str에 담음
      str += my_string[i];
    }
  }
  const my_stringArr = my_string.split(""); // my_string 문자를 split('')해서 배열로 만들어줌
  const reverseArr = str.split("").reverse().join(""); // str을 split('')을 통해서 배열로 만든 뒤 reverse로 뒤집고 join('')으로 문자로 만듬

  my_stringArr.splice(s, e - s + 1, reverseArr); // Array.splice()를 활용해서 s부터 시작해서 문자열을 e-s+1만큼 제거한 뒤 reverseArr 문자를 삽입해줌

  return my_stringArr.join("");
}
