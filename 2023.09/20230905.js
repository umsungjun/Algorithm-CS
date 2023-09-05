// 2의 영역
// 문제 설명
// 정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.

// 단, arr에 2가 없는 경우 [-1]을 return 합니다.

// 제한사항
// 1 ≤ arr의 길이 ≤ 100,000
// 1 ≤ arr의 원소 ≤ 10
// 입출력 예
// arr	result
// [1, 2, 1, 4, 5, 2, 9]	[2, 1, 4, 5, 2]
// [1, 2, 1]	[2]
// [1, 1, 1]	[-1]
// [1, 2, 1, 2, 1, 10, 2, 1]	[2, 1, 2, 1, 10, 2]

function solution(arr) {
  if (!arr.includes(2)) return [-1];

  const first = arr.indexOf(2);
  const last = arr.lastIndexOf(2);

  return arr.filter((num, i) => {
    if (first <= i && i <= last) {
      return num;
    }
  });
}
