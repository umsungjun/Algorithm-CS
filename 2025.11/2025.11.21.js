// 프로그래머스 - 크기가 작은 부분 문자열
function solution(t, p) {
  let answer = 0;
  const numP = Number(p);

  for (let i = 0; i <= t.length - p.length; i++) {
    const sliceNum = Number(t.slice(i, i + p.length));

    if (sliceNum <= numP) {
      answer++;
    }
  }

  return answer;
}
