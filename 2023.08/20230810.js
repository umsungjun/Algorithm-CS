// 특별한 이차원 배열 1
// 문제 설명
// 정수 n이 매개변수로 주어질 때, 다음과 같은 n × n 크기의 이차원 배열 arr를 return 하는 solution 함수를 작성해 주세요.

// arr[i][j] (0 ≤ i, j < n)의 값은 i = j라면 1, 아니라면 0입니다.
// 제한사항
// 1 ≤ n ≤ 100
// 입출력 예
// n	result
// 3	[[1, 0, 0], [0, 1, 0], [0, 0, 1]]
// 6	[[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]]
// 1	[[1]]

function solution(n) {
  const answer = [];
  let arr = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }
    answer.push(arr); // arr = [1, 0, 0], arr =[0, 1, 0],  arr =[0, 0, 1]
    arr = []; // 초기화
  }
  return answer;
}

// 주사위 게임 2
// 문제 설명
// 1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.

// 세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
// 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
// 세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.
// 세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// a, b, c는 1이상 6이하의 정수입니다.
// 입출력 예
// a	b	c	result
// 2	6	1	9
// 5	3	3	473
// 4	4	4	110592

function solution(a, b, c) {
  if (a !== b && a !== c && b !== c) {
    return a + b + c;
  } else if (a === b && a === c && b === c) {
    return (
      (a + b + c) *
      (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) *
      (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3))
    );
  } else {
  }
  return (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
}
