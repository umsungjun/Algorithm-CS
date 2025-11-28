// 프로그래머스 - 최소직사각형
// 보여지는 테스트 케이스는 다 통과했으나 일부 케이스에서 실패함
function solution(sizes) {
  sizes.sort((a, b) => {
    if (Math.max(...b) === Math.max(...a)) {
      return Math.min(...a) - Math.min(...b);
    } else {
      return Math.max(...b) - Math.max(...a);
    }
  });

  let isBigW = true;
  let value1 = 0;
  let value2 = 0;

  if (sizes[0][0] > sizes[0][1]) {
    value1 = sizes[0][0];
    value2 = sizes[0][1];
  } else {
    isBigW = false;
    value1 = sizes[0][1];
    value2 = sizes[0][0];
  }

  if (isBigW) {
    sizes.sort((a, b) => a[1] - b[1]);
  } else {
    sizes.sort((a, b) => a[0] - b[0]);
  }

  for (let i = 1; i < sizes.length; i++) {
    const [w, h] = sizes[i];
    if (isBigW) {
      if (h > value2) {
        value2 = h;
        break;
      }
    } else {
      if (w > value2) {
        value2 = w;
        break;
      }
    }
  }

  return value1 * value2;
}
