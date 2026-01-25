// 프로그래머스 - 할인 행사
function solution(want, number, discount) {
  let answer = 0;

  let wantArr = [];
  want.forEach((w, i) => {
    wantArr.push(...Array.from({ length: number[i] }, () => w)); // want에 있는 요소 * number의 개수만큼 wantArr에 추가
  });

  const wantArrStr = wantArr.sort().join(""); // wantArr을 정렬한 뒤 join('')을 통해 문자 형태로 변환

  for (let i = 0; i <= discount.length - 10; i++) {
    // discount배열의 비교 개수가 10개일 때 까지만 반복 진행
    const sliceStr = discount
      .slice(i, i + 10)
      .sort()
      .join("");

    if (wantArrStr === sliceStr) {
      answer++;
    }
  }

  return answer;
}
