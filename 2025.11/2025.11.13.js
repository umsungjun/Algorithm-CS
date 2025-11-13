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

// 프로그래머스 - 공 던지기
// 단순 규칙을 파악해서 해결함
function solution(numbers, k) {
  let index = 2 * (k - 1);

  return numbers[index % numbers.length];
}
