function solution(a, b, c, d) {
  var answer = 0;

  const setNum = new Set([a, b, c, d]);
  console.log(setNum);
  console.log(setNum.size);

  if (setNum.size === 1) {
    return 1111 * a;
  } else if (setNum.size === 2) {
    const setNumArr = [...setNum].sort((a, b) => a - b);
    console.log(setNumArr);
  }
  return answer;
}
