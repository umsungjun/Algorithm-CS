// 프로그래머스 qr code
function solution(q, r, code) {
  let answer = "";

  code.split("").forEach((str, i) => {
    if (parseInt(i % q) === r) {
      answer += str;
    }
  });

  return answer;
}
