// 수 조작하기 2
// 문제 설명
// 정수 배열 numLog가 주어집니다. 처음에 numLog[0]에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.

// "w" : 수에 1을 더한다.
// "s" : 수에 1을 뺀다.
// "d" : 수에 10을 더한다.
// "a" : 수에 10을 뺀다.
// 그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog입니다. 즉, numLog[i]는 numLog[0]로부터 총 i번의 조작을 가한 결과가 저장되어 있습니다.

// 주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 2 ≤ log의 길이 ≤ 100,000
// -100,000 ≤ log[0] ≤ 100,000
// 1 ≤ i ≤ log의 길이인 모든 i에 대해 |log[i] - log[i - 1]|의 값은 1 또는 10입니다.
// 입출력 예
// log	result
// [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]	"wsdawsdassw"

function solution(numLog) {
  let answer = "";
  for (let i = 0; i < numLog.length - 1; i++) {
    if (numLog[i + 1] - numLog[i] === 1) {
      answer += "w";
    } else if (numLog[i + 1] - numLog[i] === -1) {
      answer += "s";
    } else if (numLog[i + 1] - numLog[i] === 10) {
      answer += "d";
    } else {
      answer += "a";
    }
  }
  return answer;
}

// 수열과 구간 쿼리 1
// 문제 설명
// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e] 꼴입니다.

// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 arr[i]에 1을 더합니다.

// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ arr의 길이 ≤ 1,000
// 0 ≤ arr의 원소 ≤ 1,000,000
// 1 ≤ queries의 길이 ≤ 1,000
// 0 ≤ s ≤ e < arr의 길이
// 입출력 예
// arr	queries	result
// [0, 1, 2, 3, 4]	[[0, 1],[1, 2],[2, 3]]	[1, 3, 4, 4, 4]

function solution(arr, queries) {
  const newQueries = [];

  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      newQueries.push(j);
    }
  }

  newQueries.forEach((num) => (arr[num] += 1));

  return arr;
}
