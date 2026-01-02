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

// 더 간단하고 효율적인 문제 풀이
// localeCompare 메서드는 두 문자열을 비교하여 정렬 순서를 결정하는 데 사용 a보다 b가 뒤에 오면 양수, 같으면 0, 앞에 오면 음수를 반환
function solution(strings, n) {
  strings.sort((a, b) => {
    return a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]); // 같으면 전체 문자열 비교, 다르면 n번째 문자 비교
  });

  return strings;
}
