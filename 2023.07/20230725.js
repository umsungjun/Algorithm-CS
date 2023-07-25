// 문제 설명
// 정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 6 ≤ num_list의 길이 ≤ 30
// 1 ≤ num_list의 원소 ≤ 100
// 입출력 예
// num_list	result
// [12, 4, 15, 46, 38, 1, 14]	[1, 4, 12, 14, 15]

function solution(num_list) {
  const answer = num_list.sort((a, b) => a - b).filter((num, i) => i < 5);
  // sort함수를 통해서 오름차순 정렬 이후 filter함수를 통해서 index값이 5보다 작은 값을 배열로 return 해줬습니다.
  return answer;
}
