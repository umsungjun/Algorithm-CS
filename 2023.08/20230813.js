// 배열 만들기 3
// 문제 설명
// 정수 배열 arr와 2개의 구간이 담긴 배열 intervals가 주어집니다.

// intervals는 항상 [[a1, b1], [a2, b2]]의 꼴로 주어지며 각 구간은 닫힌 구간입니다. 닫힌 구간은 양 끝값과 그 사이의 값을 모두 포함하는 구간을 의미합니다.

// 이때 배열 arr의 첫 번째 구간에 해당하는 배열과 두 번째 구간에 해당하는 배열을 앞뒤로 붙여 새로운 배열을 만들어 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ arr의 길이 ≤ 100,000
// 1 ≤ arr의 원소 < 100
// 1 ≤ a1 ≤ b1 < arr의 길이
// 1 ≤ a2 ≤ b2 < arr의 길이
// 입출력 예
// arr	intervals	result
// [1, 2, 3, 4, 5]	[[1, 3], [0, 4]]	[2, 3, 4, 1, 2, 3, 4, 5]

// function solution(arr, intervals) {
//   let newArr = [];
//   const result = [];
//   for (let i = 0; i < intervals.length; i++) {
//     for (let j = intervals[i][0]; j <= intervals[i][1]; j++) {
//       newArr.push(arr[j]);
//     }
//     result.push(...newArr);
//     newArr = [];
//   }
//   return result;
// }

// for (var i = 0; i < 3; i++) {
//   console.log(i, j);
//   for (var j = 0; j < 3; j++) {}
// }

// 9로 나눈 나머지
// 문제 설명
// 음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다.
// 이 사실을 이용하여 음이 아닌 정수가 문자열 number로 주어질 때, 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.

// 제한사항
// 1 ≤ number의 길이 ≤ 100,000
// number의 원소는 숫자로만 이루어져 있습니다.
// number는 정수 0이 아니라면 숫자 '0'으로 시작하지 않습니다.
// 입출력 예
// number	result
// "123"	6
// "78720646226947352489"	2

function solution(number) {
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }

  return sum % 9;
}

// 문제 설명
// 두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때, 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ a ≤ 100
// 1 ≤ d ≤ 100
// 1 ≤ included의 길이 ≤ 100
// included에는 true가 적어도 하나 존재합니다.
// 입출력 예
// a	d	included	result
// 3	4	[true, false, false, true, true]	37
// 7	1	[false, false, false, true, false, false, false]	10

function solution(a, d, included) {
  const arr = [];
  let sum = a;
  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      arr.push(sum);
    }
    sum += d;
  }

  return arr.reduce((acc, cur) => {
    acc += cur;
    return acc;
  });
}
