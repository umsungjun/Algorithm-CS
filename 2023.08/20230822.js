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
