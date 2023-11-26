function solution(brown, yellow) {
  const answer = [];
  let sum = brown + yellow; //전체 타일 수

  // 카펫의 최소 높이는 3이상이어야 함
  for (let height = 3; height <= brown; height++) {
    // 전체타일을 임의의 높이로 나눴을 때 0이면
    if (sum % height === 0) {
      let width = sum / height;

      if ((width - 2) * (height - 2) === yellow) {
        return [width, height];
      }
    }
  }
}
