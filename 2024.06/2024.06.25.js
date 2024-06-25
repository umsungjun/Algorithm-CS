// 예시 데이터
const data = [
  ["A", 25, 25, 25, 25],
  ["B", 10, 12, 13, 11],
  ["C", 24, 22, 23, 21],
  ["D", 13, 22, 16, 14],
  ["E", 25, 25, 25, 25],
];

function solution(data) {
  const dataLength = data.length; // data 길이
  let startingNumber = parseInt(dataLength * 0.3); // 선발 인원

  // 선발 인원이 0명이라면 early return
  if (startingNumber === 0) {
    return [];
  }

  let selectedNumber = 0; // 선발 된 인원
  let totalObj = {}; // 점수 모음
  const answer = []; // 선발 인원

  data.sort(
    (a, b) =>
      b.slice(1).reduce((x, y) => x + y, 0) -
      a.slice(1).reduce((x, y) => x + y, 0)
    // data의 1번째 요소부터 더한 값들을 기준으로 내림차순 정렬
  );

  for (let i of data) {
    const total = i.slice(1).reduce((x, y) => x + y, 0);
    if (total in totalObj) {
      // 점수를 더한 값이 이미 totalObj에 있는 경우
      totalObj[total] = [...totalObj[total], i[0]];
    } else {
      // 점수를 더한 값이 totalObj에 없는 경우
      totalObj[total] = [i[0]];
    }
  }
  totalObj = Object.entries(totalObj); // [[ '46', [ 'B' ] ], [ '65', [ 'D' ] ], [ '90', [ 'C' ] ], [ '100', [ 'A', 'E' ] ]]
  totalObj.sort((a, b) => b[0] - a[0]); // totalOj 요소 0번째 기준으로 내림차순 정렬

  for (let i of totalObj) {
    // 선발 된 인원이 선발 인원보다 적어햐하고, totalObj 요소의 1번째 값의 길이가 선발 인원 보다 작아야됨
    if (selectedNumber < startingNumber && i[1].length <= startingNumber) {
      answer.push(...i[1]);
      selectedNumber += i[1].length;
    } else if (startingNumber < i[1].length) {
      return answer;
    }

    startingNumber - selectedNumber; // 선발 인원 - 선발 된 인원
  }
  answer.sort().reverse(); // 역순 정렬
  return answer;
}

solution();
