function solution(chicken) {
  let answer = 0;

  while (chicken >= 10) {
    answer += parseInt(chicken / 10);

    chicken = (chicken % 10) + parseInt(chicken / 10); // 동시에 진행해야지 정상적으로 값이 출력
  }
  return answer;
}
