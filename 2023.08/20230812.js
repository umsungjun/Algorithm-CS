// 문자열 잘라서 정렬하기
// 문제 설명
// 문자열 myString이 주어집니다. "x"를 기준으로 해당 문자열을 잘라내 배열을 만든 후 사전순으로 정렬한 배열을 return 하는 solution 함수를 완성해 주세요.

// 단, 빈 문자열은 반환할 배열에 넣지 않습니다.

// 제한사항
// 1 ≤ myString ≤ 100,000
// myString은 알파벳 소문자로 이루어진 문자열입니다.
// 입출력 예
// myString	result
// "axbxcxdx"	["a","b","c","d"]
// "dxccxbbbxaaaa"	["aaaa","bbb","cc","d"]

function solution(myString) {
  return myString
    .split("x")
    .sort()
    .filter((str) => str !== "");
}

// ad 제거하기
// 문제 설명
// 문자열 배열 strArr가 주어집니다. 배열 내의 문자열 중 "ad"라는 부분 문자열을 포함하고 있는 모든 문자열을 제거하고 남은 문자열을 순서를 유지하여 배열로 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ strArr의 길이 ≤ 1,000
// 1 ≤ strArr의 원소의 길이 ≤ 20
// strArr의 원소는 알파벳 소문자로 이루어진 문자열입니다.
// 입출력 예
// strArr	result
// ["and","notad","abcd"]	["and","abcd"]
// ["there","are","no","a","ds"]	["there","are","no","a","ds"]

function solution(strArr) {
  return strArr.filter((str) => !str.includes("ad"));
}
