// 프로그래머스 - 문자열 내 마음대로 정렬하기
function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    } else if (a[n] === b[n]) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          if (a[i] > b[i]) {
            return 1;
          } else {
            return -1;
          }
        }
      }
    } else {
      return -1;
    }
  });

  return strings;
}
