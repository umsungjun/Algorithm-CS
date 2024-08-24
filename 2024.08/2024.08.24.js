const data = [
  ' + + + - - + + ',
  ' + + + - + - - ',
  '++----+',
  '+++ --+ -',
  '+++-+ - -',
];

function solution() {
  const answer = data.map((str) => {
    /* replaceAll()를 통해 ' ' -> '', '+' -> '1', '-' -> 0으로 치환 */
    const replacedStrToNumber = str
      .replaceAll(' ', '')
      .replaceAll('+', '1')
      .replaceAll('-', '0');

    /* 치환 된 10진수로 된 문자를 2진수로 치환 */
    return parseInt(replacedStrToNumber, 2);
  });

  /* 변환 된 2진수로 이루어진 배열을 ...을 통해 구조분해 할당한 뒤 String.fromCharCode를 통해 아스키 코드값으로 치환 */
  return String.fromCharCode(...answer);
}

solution();
