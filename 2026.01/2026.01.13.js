// 프로그래머스 - 점프와 순간 이동

// 초기에 틀린 문제 풀이
function solution(n) {
  let answer = 1;
  let num = 1;
  while (num < n) {
    console.log(answer, num);
    if (n % (answer + 1) === 0) {
      answer++;
      num++;
    } else {
      num *= 2;
    }
  }
  return answer;
}

// 올바른 문제 풀이
function solution(n) {
  let answer = 0;

  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n -= 1;
      answer++;
    }
  }

  return answer;
}
/* 
    이 문제를 처음에 접할 때 1에서 부터 시작해서 1 + 다음 수로 나눠지면 순간 이동, 아니면 answer에 1을 더하는 방식으로 접근했었다.
    하지만 이 문제는 역으로 생각해서 n에서 0으로 가는데 짝수면 순간 이동, 홀수면 1을 빼고 answer에 1을 더하는 방식으로 접근했다.
*/
