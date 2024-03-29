// 문제 설명
// 길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다. parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다. 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ my_strings의 길이 = parts의 길이 ≤ 100
// 1 ≤ my_strings의 원소의 길이 ≤ 100
// parts[i]를 [s, e]라 할 때, 다음을 만족합니다.
// 0 ≤ s ≤ e < my_strings[i]의 길이
// 입출력 예
// my_strings	parts	result
// ["progressive", "hamburger", "hammer", "ahocorasick"]	[[0, 4], [1, 2], [3, 5], [7, 7]]	"programmers"

function solution(my_strings, parts) {
  let answer = "";

  my_strings.forEach((str, i) => {
    for (let j = parts[i][0]; j <= parts[i][1]; j++) {
      answer += my_strings[i][j];
    }
  });

  return answer;
}

// 문제 설명
// n × n 크기의 이차원 배열 arr이 매개변수로 주어질 때, arr이 다음을 만족하면 1을 아니라면 0을 return 하는 solution 함수를 작성해 주세요.

// 0 ≤ i, j < n인 정수 i, j에 대하여 arr[i][j] = arr[j][i]
// 제한사항
// 1 ≤ arr의 길이 = arr의 원소의 길이 ≤ 100
// 1 ≤ arr의 원소의 원소 ≤ 1,000
// 모든 arr의 원소의 길이는 같습니다.
// 입출력 예
// arr	result
// [[5, 192, 33], [192, 72, 95], [33, 95, 999]]	1
// [[19, 498, 258, 587], [63, 93, 7, 754], [258, 7, 1000, 723], [587, 754, 723, 81]]	0

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] !== arr[j][i]) {
        return 0;
      }
    }
  }
  return 1;
}

// x 사이의 개수
// 문제 설명
// 문자열 myString이 주어집니다. myString을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ myString의 길이 ≤ 100,000
// myString은 알파벳 소문자로 이루어진 문자열입니다.
// 입출력 예
// myString	result
// "oxooxoxxox"	[1, 2, 1, 0, 1, 0]
// "xabcxdefxghi"	[0, 3, 3, 3]

function solution(myString) {
  return myString.split("x").map((str) => str.length);
}
// 문제 설명
// 정수 배열 arr가 주어집니다. 이때 arr의 원소는 1 또는 0입니다. 정수 idx가 주어졌을 때, idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요.

// 단, 만약 그러한 인덱스가 없다면 -1을 반환합니다.

// 제한사항
// 3 ≤ arr의 길이 ≤ 100'000
// arr의 원소는 전부 1 또는 0입니다.
// 입출력 예
// arr	idx	result
// [0, 0, 0, 1]	1	3
// [1, 0, 0, 1, 0, 0]	4	-1
// [1, 1, 1, 1, 0]	3	3

function solution(arr, idx) {
  for (let i = idx - 1; i < arr.length; i++) {
    if (arr[i] === 1 && i >= idx) {
      return i;
    }
  }

  return -1;
}
