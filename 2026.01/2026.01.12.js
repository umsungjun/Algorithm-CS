// 프로그래머스 - 카드 뭉치
// 첫 번째 문제 풀이
function solution(cards1, cards2, goal) {
  if (cards1.length + cards2.length !== goal.length) return "No";

  let index1 = -1;
  let index2 = -1;

  for (let i = 0; i < goal.length; i++) {
    const word = goal[i];

    let nIndex1 = cards1.indexOf(word);
    let nIndex2 = cards2.indexOf(word);

    if (nIndex1 !== -1) {
      if (nIndex1 < index1) {
        return "No";
      }
      index1 = nIndex1;
      cards1.splice(index1, 1);
    }

    if (nIndex2 !== -1) {
      if (nIndex2 < index2) {
        return "No";
      }
      index2 = nIndex2;
      cards2.splice(index2, 1);
    }
  }

  if (cards1.length === 0 && cards2.length === 0) {
    return "Yes";
  } else {
    return "No";
  }
}

// 두 번째 문제 풀이
function solution(cards1, cards2, goal) {
  let i = 0;
  let j = 0;

  // 문제의 핵심 가장 앞의 카드 부터 사용할 수 있다
  // 큐 자료구조 활용
  for (let word of goal) {
    if (word === cards1[i]) {
      i++;
    } else if (word === cards2[j]) {
      j++;
    } else {
      return "No";
    }
  }

  // goal의 모든 단어를 사용할 수 있었는지 확인
  if (i + j !== goal.length) {
    return "No";
  }

  return "Yes";
}
