/* 자격 증명 */

function solution(data) {
  let answer = "";

  data.forEach((str) => {
    const replaceStr = str
      .replaceAll("+", "1")
      .replaceAll("-", "0")
      .replaceAll(" ", "");
    const askiNum = parseInt(replaceStr, 2);

    answer += String.fromCharCode(askiNum);
  });
  return answer;
}
