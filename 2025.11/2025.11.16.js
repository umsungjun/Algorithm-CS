// 삼각형의 완성조건 (2)
function solution(sides) {
  const answer = new Set();

  const hap = sides[0] + sides[1]; // 현재 존재하는 두변의 합
  const longW = Math.max(...sides); // 가장 긴 변
  const shortW = Math.min(...sides); // 가장 짧은 변

  for (let i = longW + 1; i < hap; i++) {
    answer.add(i); // 갖고있는 두 변의 합보다 작은 가장 긴 변 추가
  }

  for (let i = 1; i <= longW; i++) {
    // 1~11
    if (i + shortW > longW) {
      answer.add(i);
    }
  }

  return answer.size;
}

// 프로그래머스 - 행령의 덧셈
function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const arr = [];

    for (let j = 0; j < arr1[i].length; j++) {
      let hap = arr1[i][j] + arr2[i][j];

      arr.push(hap);
    }
    answer.push(arr);
  }

  return answer;
}
