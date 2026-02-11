// 프로그래머스 - 다음에 올 숫자
function solution(common) {
  const front = common[1] - common[0]; // 앞의 차
  const back = common[common.length - 1] - common[common.length - 2]; // 뒤의 차

  if (front === back) {
    // 등차 수열
    return common[common.length - 1] + front;
  } else {
    // 등비 수열
    const ratio = common[1] / common[0];
    return common[common.length - 1] * ratio;
  }
}
