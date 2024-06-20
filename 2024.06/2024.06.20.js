const data = [" + - - + - + - ", " + + + - + - + ", " + + - + + + - "];
function solution() {
  const answerArr = data.map((str) => {
    /* replaceAll 원본 문자에 영향을 안줌 */
    const replaceStr = str
      .replaceAll("+", "1")
      .replaceAll("-", "0")
      .replaceAll(" ", "");
    return String.fromCharCode(parseInt(replaceStr, 2)); // String.fromCharCode 10진수를 ASCII코드로 변환
  });

  return answerArr.join("");
}
solution();
