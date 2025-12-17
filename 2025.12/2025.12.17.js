// 프로그래머스 - 코드 처리하기
function solution(code) {
  let ret = "";
  let mode = 0; // 모드

  for (let i = 0; i < code.length; i++) {
    const val = code[i];

    if (mode === 0) {
      if (val !== "1") {
        if (i % 2 === 0) {
          ret += val;
        }
      }
      if (val === "1") {
        mode = 1;
      }
    } else {
      if (val !== "1") {
        if (i % 2 !== 0) {
          ret += val;
        }
      }

      if (val === "1") {
        mode = 0;
      }
    }
  }

  return ret.length === 0 ? "EMPTY" : ret;
}
