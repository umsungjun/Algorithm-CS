// 프로그래머스 - 추억 점수
function solution(name, yearning, photo) {
  const obj = {};

  name.forEach((n, i) => {
    obj[n] = yearning[i];
  });
  return photo.map((arr) => {
    let hap = 0;

    arr.forEach((a) => {
      if (obj[a] !== undefined) {
        hap += obj[a];
      }
    });

    return hap;
  });
}
