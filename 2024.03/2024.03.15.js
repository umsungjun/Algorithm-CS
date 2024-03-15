function solution(progresses, speeds) {
  const answer = [];

  while (progresses.length > 0) {
    // progresses가 빈 배열이 아닌 이상 무한 반복합니다.
    let cnt = 0; // 완료 된 작업 수 while문이 돌 때마다 0으로 초기화 합니다.
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i]; // 먼저 for문을 돌면서 progresses에 하루치 sppeds값을 index에 맞게 각각 더해줍니다.
    }

    if (progresses[0] >= 100) {
      // 만약 progresses에 첫 번째 요소, 즉 첫 번째 작업이 100% 이상이라면
      for (let i = 0; i < progresses.length; i++) {
        if (progresses[i] >= 100) {
          cnt++; // progresses를 순회하면서 제일 앞 부터 100 이상이면 cnt를 1씩 증가시킵니다.
        } else {
          break; // 만약 progresses의 첫 번째 작업이 100 보다 작다면 그 즉시 종료
        }
      }
      progresses.splice(0, cnt); // 종료 된 시점의 progresses 0번째 Index 작업부터 완료 된 작업까지 배열에서 제거
      speeds.splice(0, cnt); // 종료 된 시점의 speeds 0번째 Index 작업부터 완료 된 작업의 speeds도 제거
      answer.push(cnt);
    } else {
      continue; // 만약 progresses에 첫 번째 요소, 즉 첫 번째 작업이 100%보다 작다면 while문 다시 실행
    }
  }

  return answer;
}
