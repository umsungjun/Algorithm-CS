// 이어 붙인 수
// 문제 설명
// 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.
// 입출력 예
// num_list	result
// [3, 4, 5, 2, 1]	393
// [5, 7, 8, 3]	581

function solution(num_list) {
  let even = ""; // 짝수
  let odd = ""; // 홀수
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      even += num_list[i];
    } else {
      odd += num_list[i];
    }
  }
  return Number(even) + Number(odd);
}
