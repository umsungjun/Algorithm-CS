// 전국 대회 선발 고사
// 문제 설명
// 0번부터 n - 1번까지 n명의 학생 중 3명을 선발하는 전국 대회 선발 고사를 보았습니다. 등수가 높은 3명을 선발해야 하지만, 개인 사정으로 전국 대회에 참여하지 못하는 학생들이 있어 참여가 가능한 학생 중 등수가 높은 3명을 선발하기로 했습니다.

// 각 학생들의 선발 고사 등수를 담은 정수 배열 rank와 전국 대회 참여 가능 여부가 담긴 boolean 배열 attendance가 매개변수로 주어집니다. 전국 대회에 선발된 학생 번호들을 등수가 높은 순서대로 각각 a, b, c번이라고 할 때 10000 × a + 100 × b + c를 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 3 ≤ rank의 길이 = attendance의 길이 ≤ 100
// rank[i]는 i번 학생의 선발 고사 등수를 의미합니다.
// rank의 원소는 1부터 n까지의 정수로 모두 서로 다릅니다.
// attendance[i]는 i번 학생의 전국 대회 참석 가능 여부를 나타냅니다.
// attendance[i]가 true라면 참석 가능, false면 참석 불가능을 의미합니다.
// attendance의 원소 중 적어도 3개는 true입니다.
// 입출력 예
// rank	attendance	result
// [3, 7, 2, 5, 4, 6, 1]	[false, true, true, true, true, false, false]	20403
// [1, 2, 3]	[true, true, true]	102
// [6, 1, 5, 2, 3, 4]	[true, false, true, false, false, true]	50200

function solution(rank, attendance) {
  const trueRankBox = [];
  for (let i = 0; i < rank.length; i++) {
    if (attendance[i]) {
      trueRankBox.push(rank[i]);
    }
  }
  trueRankBox.sort((a, b) => a - b);

  const indexBox = trueRankBox.map((r) => rank.indexOf(r));

  return 10000 * indexBox[0] + 100 * indexBox[1] + indexBox[2];
}
