function solution(common) {
  // 제한사항을 보면 common의 길이는 무조건 3이상이다.
  // common의 1번째 요소 0번째 요소의 차가 2번째 요소 1번째 요소의 차와
  // 같으면 등차, 다르면 등비

  if (common[1] - common[0] === common[2] - common[1]) {
    return common.pop() + common[1] - common[0];
  } else {
    return common.pop() * (common[1] / common[0]);
  }
}
