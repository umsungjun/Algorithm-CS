// 리스트 자르기
// 문제 설명
// 정수 n과 정수 3개가 담긴 리스트 slicer 그리고 정수 여러 개가 담긴 리스트 num_list가 주어집니다. slicer에 담긴 정수를 차례대로 a, b, c라고 할 때, n에 따라 다음과 같이 num_list를 슬라이싱 하려고 합니다.

// n = 1 : num_list의 0번 인덱스부터 b번 인덱스까지
// n = 2 : num_list의 a번 인덱스부터 마지막 인덱스까지
// n = 3 : num_list의 a번 인덱스부터 b번 인덱스까지
// n = 4 : num_list의 a번 인덱스부터 b번 인덱스까지 c 간격으로
// 올바르게 슬라이싱한 리스트를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// n 은 1, 2, 3, 4 중 하나입니다.
// slicer의 길이 = 3
// slicer에 담긴 정수를 차례대로 a, b, c라고 할 때

// 0 ≤ a ≤ b ≤ num_list의 길이 - 1
// 1 ≤ c ≤ 3
// 5 ≤ num_list의 길이 ≤ 30

// 0 ≤ num_list의 원소 ≤ 100

// 입출력 예
// n	slicer	num_list	result
// 3	[1, 5, 2]	[1, 2, 3, 4, 5, 6, 7, 8, 9]	[2, 3, 4, 5, 6]
// 4	[1, 5, 2]	[1, 2, 3, 4, 5, 6, 7, 8, 9]	[2, 4, 6]

function solution(n, slicer, num_list) {
  switch (n) {
    case 1:
      console.log(num_list.slice(0, slicer[1] + 1));
      return num_list.slice(0, slicer[1] + 1);
      break;
    case 2:
      console.log(num_list.slice(slicer[0], num_list.length));
      return num_list.slice(slicer[0], num_list.length);
      break;
    case 3:
      console.log(num_list.slice(slicer[0], slicer[1] + 1));
      return num_list.slice(slicer[0], slicer[1] + 1);
      break;
    case 4:
      console.log(
        num_list
          .slice(slicer[0], slicer[1] + 1)
          .filter((num, i) => i % slicer[2] === 0)
      );
      return num_list
        .slice(slicer[0], slicer[1] + 1)
        .filter((num, i) => i % slicer[2] === 0);
      break;
  }
}
