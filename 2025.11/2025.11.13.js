// 프로그래머스 - 문자열 계산기
function solution(my_string) {
  const myStringArr = my_string.split(" ");
  let giho = "+";
  let sum = 0;

  myStringArr.forEach((item) => {
    if (item === "+") {
      giho = "+";
    } else if (item === "-") {
      giho = "-";
    } else {
      if (giho === "+") {
        sum += Number(item);
      } else {
        sum -= Number(item);
      }
    }
  });

  return sum;
}
